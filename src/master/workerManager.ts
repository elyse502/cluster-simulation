import { ChildProcess, fork } from "node:child_process";
import path from "node:path";
import { Logger } from "../utils/logger";
import { Message } from "../types/message";

export class WorkerManager {
  private workers: ChildProcess[] = [];

  constructor(private readonly workerCount: number) {}

  public startWorkers(): void {
    for (let i = 0; i < this.workerCount; i++) {
      this.createWorker();
    }
  }

  private createWorker(): void {
    const workerPath = path.join(__dirname, "../worker/worker.ts");

    const worker = fork(workerPath, [], {
      execArgv: ["-r", "ts-node/register"],
    });

    this.workers.push(worker);

    Logger.info(`Started worker ${worker.pid}`);

    worker.on("exit", () => {
      Logger.warn(`Worker ${worker.pid} exited. Restarting...`);

      this.workers = this.workers.filter(
        (currentWorker) => currentWorker.pid !== worker.pid,
      );

      this.createWorker();
    });
  }

  public getWorkers(): ChildProcess[] {
    return this.workers;
  }

  public sendTask(worker: ChildProcess, message: Message): void {
    worker.send(message);
  }
}
