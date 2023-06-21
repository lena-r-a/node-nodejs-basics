import { Worker } from 'worker_threads'
import os from 'os'

const performCalculations = async () => {
    const workerPromises = [];
    const numberOfsystemCpuCores = os.cpus().length;
    const createWorker = (x) => {
        return new Promise( (res,rej) => {
            const worker = new Worker('./worker.js', {
                workerData: 10 + x
            });
            worker.on('message', msg => {
                res({'status': 'resolved', 'data' : msg})
            })
            worker.on('error', err => {
                res({'status': 'error', 'data' : null})
            })
        }

        )
    }
    for (let i=0; i<numberOfsystemCpuCores; i++) {
        workerPromises.push(createWorker(i))
    }
    console.log(await Promise.all(workerPromises))
};

await performCalculations();