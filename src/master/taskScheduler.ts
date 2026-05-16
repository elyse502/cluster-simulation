import { WorkerManager } from "./workerManager";
import { TaskMessage, ResultMessage } from "../types/message";
import { Logger } from "../utils/logger";

export class TaskScheduler {
  private currentIndex = 0;
  private taskId = 1;

  constructor(private readonly workerManager: WorkerManager) {}

  public start(): void {
    setInterval(() => {
      this.dispatchTask();
    }, 2000);

    this.attachResultListeners();
  }

  private dispatchTask(): void {
    const workers = this.workerManager.getWorkers();

    if (workers.length === 0) {
      Logger.warn("No available workers");
      return;
    }

    const worker = workers[this.currentIndex % workers.length];

    if (!worker) {
      Logger.warn("No available workers");
      return;
    }

    const task: TaskMessage = {
      type: "task",
      taskId: this.taskId++,
      payload: Math.floor(Math.random() * 10) + 1,
    };

    Logger.info(`Sending task ${task.taskId} to worker ${worker.pid}`);

    this.workerManager.sendTask(worker, task);

    this.currentIndex++;
  }

  private attachResultListeners(): void {
    setInterval(() => {
      const workers = this.workerManager.getWorkers();

      workers.forEach((worker) => {
        worker.removeAllListeners("message");

        worker.on("message", (message: ResultMessage) => {
          if (message.type !== "result") {
            return;
          }

          Logger.info(
            `Task ${message.taskId} completed by worker ${message.workerId}. Result: ${message.result}`,
          );
        });
      });
    }, 1000);
  }
}
