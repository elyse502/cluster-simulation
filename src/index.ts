import os from "node:os";
import { WorkerManager } from "./master/workerManager";
import { TaskScheduler } from "./master/taskScheduler";
import { Logger } from "./utils/logger";

const cpuCount = os.cpus().length;

Logger.info(`Detected ${cpuCount} CPU cores`);

const workerManager = new WorkerManager(cpuCount);

workerManager.startWorkers();

const scheduler = new TaskScheduler(workerManager);

scheduler.start();
