import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Worker } from "node:worker_threads"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_IMAGES_DIR = path.join(__dirname, 'input-images');
const OUTPUT_IMAGES_DIR = path.join(__dirname, 'multithreaded-output-images');

const WORKER_FILE_PATH = path.join(__dirname, 'worker.js');

function runWorker(out_path, filename ) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(WORKER_FILE_PATH, {
            workerData: {
                filename,
                out_path
            }
        })

        worker.on('message', resolve);
        worker.once('error', reject);
        worker.once('exit', (code) => {
            if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        });
    })

}

async function main() {
    const images = await readdir(INPUT_IMAGES_DIR);
    const files = images.filter((file) => /\.(jpe?g|png|gif|bmp|webp|svg|tiff)$/i.test(file));

    const workers = files.map((filename)=>{
        const { name } = path.parse(filename);
        return runWorker(path.join(OUTPUT_IMAGES_DIR, name), filename)
    })

    const results = await Promise.all(workers);
    console.log(results);
}

main()