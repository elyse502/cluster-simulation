import { Message, TaskMessage, ResultMessage } from "../types/message";

function performTask(input: number): number {
  let total = 0;

  for (let i = 0; i < input * 1_000_000; i++) {
    total += i % 10;
  }

  return total;
}

process.on("message", (message: Message) => {
  if (message.type !== "task") {
    return;
  }

  const task: TaskMessage = message;

  const result = performTask(task.payload);

  const response: ResultMessage = {
    type: "result",
    taskId: task.taskId,
    workerId: process.pid,
    result,
  };

  process.send?.(response);

  if (Math.random() < 0.1) {
    process.exit(1);
  }
});
