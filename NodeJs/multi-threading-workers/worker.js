import { Jimp } from 'jimp'
import path from 'path'
import { fileURLToPath } from 'node:url'
import { mkdir, readdir } from 'fs/promises'
import { workerData, parentPort } from 'node:worker_threads'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const INPUT_IMAGES_DIR = path.join(__dirname, 'input-images');

async function processImage() {
    const { out_path, filename } = workerData;
    const image = await Jimp.read(path.join(INPUT_IMAGES_DIR, filename));
    await mkdir(out_path, { recursive: true })

    const tasks = [
        {
            name: 'thumbnil',
            operation: async () => {
                const clone = image.clone()
                clone.resize({ w: 100, h: 100 });
                await clone.write(path.join(out_path, 'thumbnil.png'));
            }
        },
        {
            name: 'blur',
            operation: async () => {
                const clone = image.clone()
                clone.blur(5);
                await clone.write(path.join(out_path, 'blur.png'));
            }
        },
    ]

    await Promise.all(
        tasks.map((task) => task.operation())
    );

    parentPort.postMessage({
        message: "Processed",
        filename
    });
}



processImage()