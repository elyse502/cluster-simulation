export type TaskMessage = {
  type: "task";
  taskId: number;
  payload: number;
};

export type ResultMessage = {
  type: "result";
  taskId: number;
  workerId: number;
  result: number;
};

export type CrashMessage = {
  type: "crash";
};

export type Message = TaskMessage | ResultMessage | CrashMessage;
