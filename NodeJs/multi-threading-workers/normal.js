import { Jimp } from 'jimp'
import path from 'path'
import { fileURLToPath } from 'node:url'
import { mkdir, readdir } from 'fs/promises'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_IMAGES_DIR = path.join(__dirname, 'input-images');
const OUTPUT_IMAGES_DIR = path.join(__dirname, 'normal-output-images');


async function processImage(out_path, filename) {
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

    tasks.map(async (file) => {
        await file.operation()
    })
}

async function main() {
    const images = await readdir(INPUT_IMAGES_DIR);
    const files = images.filter((file) => /\.(jpe?g|png|gif|bmp|webp|svg|tiff)$/i.test(file));

    const start_time = Date.now();

    for (let i = 0; i < files.length; i++) {
        const { name } = path.parse(files[i]);
        await processImage(path.join(OUTPUT_IMAGES_DIR, name), files[i])
    }

    const final_time = Date.now() - start_time;

    console.log(`Total Time ${final_time} ms :::: ${final_time / 1000} s`)
    console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::');
    console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::');
    console.log(`Average Time ${final_time / files.length} ms :::: ${(final_time / 1000) / files.length} s`)
}

main()