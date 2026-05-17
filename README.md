<div align="center">

# ⚡ Node.js Cluster Simulation (TypeScript) 🔁

## A Production-Grade Process Cluster Demonstration

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Cluster](https://img.shields.io/badge/Cluster-Module-FF6B6B?style=for-the-badge&logo=node.js&logoColor=white)
![IPC](https://img.shields.io/badge/IPC-Messaging-4CAF50?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

### **Demonstrating Enterprise-Grade Patterns:**

![Multi-Process](https://img.shields.io/badge/Multi-Process-8A2BE2?style=flat-square&logo=node.js&logoColor=white)
![Load Balancing](https://img.shields.io/badge/Load-Balancing-FF8C00?style=flat-square&logo=nginx&logoColor=white)
![Fault Tolerance](https://img.shields.io/badge/Fault-Tolerance-DC143C?style=flat-square&logo=resilience&logoColor=white)
![IPC](https://img.shields.io/badge/IPC-Communication-1E90FF?style=flat-square&logo=message&logoColor=white)

</div>

---

## 📋 Table of Contents

- [⚡ Node.js Cluster Simulation (TypeScript) 🔁](#-nodejs-cluster-simulation-typescript-)
  - [A Production-Grade Process Cluster Demonstration](#a-production-grade-process-cluster-demonstration)
    - [**Demonstrating Enterprise-Grade Patterns:**](#demonstrating-enterprise-grade-patterns)
  - [📋 Table of Contents](#-table-of-contents)
  - [🎯 Project Overview](#-project-overview)
    - [What This Project Demonstrates:](#what-this-project-demonstrates)
  - [✨ Key Features](#-key-features)
  - [🏗️ System Architecture](#️-system-architecture)
    - [Component Responsibilities](#component-responsibilities)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📁 Project Structure](#-project-structure)
  - [⚙️ How It Works](#️-how-it-works)
    - [🔧 Master Process](#-master-process)
    - [👷 Worker Processes](#-worker-processes)
    - [📊 Task Scheduling](#-task-scheduling)
    - [🛡️ Fault Tolerance](#️-fault-tolerance)
  - [📊 Example Output](#-example-output)
  - [⚙️ Installation \& Setup](#️-installation--setup)
    - [Prerequisites](#prerequisites)
    - [Quick Start](#quick-start)
  - [🚀 Running the Simulation](#-running-the-simulation)
    - [Development Mode (with auto-reload)](#development-mode-with-auto-reload)
    - [Production Build](#production-build)
    - [Production Start](#production-start)
    - [NPM Scripts](#npm-scripts)
  - [🎓 Core Concepts Implemented](#-core-concepts-implemented)
    - [Code Snippets](#code-snippets)
  - [🏛️ Design Principles](#️-design-principles)
    - [Separation of Concerns](#separation-of-concerns)
    - [Scalability Model](#scalability-model)
    - [Fault Tolerance Properties](#fault-tolerance-properties)
  - [📈 Performance Characteristics](#-performance-characteristics)
  - [🔮 Future Enhancements](#-future-enhancements)
  - [📚 Learning Outcomes](#-learning-outcomes)
    - [Low-Level Node.js Architecture](#low-level-nodejs-architecture)
    - [Distributed System Thinking](#distributed-system-thinking)
    - [Backend System Design](#backend-system-design)
    - [Process Lifecycle Control](#process-lifecycle-control)
    - [Event-Driven Programming](#event-driven-programming)
    - [Type-Safe Architecture](#type-safe-architecture)
  - [💡 Key Takeaways](#-key-takeaways)
  - [🤔 Common Questions](#-common-questions)
  - [👨‍💻 Author](#-author)
    - [**Elysée NIYIBIZI**](#elysée-niyibizi)
  - [📄 License](#-license)
  - [🙏 Acknowledgments](#-acknowledgments)
    - [⭐ Star this repository if it helped you understand Node.js clustering!](#-star-this-repository-if-it-helped-you-understand-nodejs-clustering)

---

## 🎯 Project Overview

This project provides a **deep dive into Node.js process clustering** by simulating how production systems handle multi-process execution, load distribution, and fault tolerance. Built from scratch without frameworks, it demonstrates the fundamental patterns behind scaling Node.js applications across multiple CPU cores.

### What This Project Demonstrates:

| Concept                         | Implementation                                 |
| ------------------------------- | ---------------------------------------------- |
| **Multi-process execution**     | Each worker runs in a separate process         |
| **Load balancing**              | Round-robin scheduler distributes tasks evenly |
| **Worker lifecycle management** | Spawn, monitor, and restart workers            |
| **Fault tolerance**             | Automatic recovery from worker crashes         |
| **IPC communication**           | Master-worker message passing                  |
| **CPU-aware scaling**           | Workers match CPU core count                   |

---

## ✨ Key Features

| Category                 | Feature                                      | Status |
| ------------------------ | -------------------------------------------- | ------ |
| **Process Management**   | Multi-process execution with child processes | ✅     |
| **Load Balancing**       | Round-robin task distribution algorithm      | ✅     |
| **Fault Tolerance**      | Automatic worker restart on crash            | ✅     |
| **IPC Communication**    | Bidirectional message passing                | ✅     |
| **CPU Detection**        | Automatic core count detection               | ✅     |
| **Task Execution**       | CPU-intensive computation simulation         | ✅     |
| **Random Failures**      | Simulated worker crashes for testing         | ✅     |
| **Logging System**       | Comprehensive execution logging              | ✅     |
| **Type Safety**          | Full TypeScript implementation               | ✅     |
| **Modular Architecture** | Separation of concerns                       | ✅     |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           MASTER PROCESS                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                        WORKER MANAGER                                │   │
│  │  • Spawns workers based on CPU cores                                │   │
│  │  • Monitors worker health                                           │   │
│  │  • Restarts crashed workers automatically                           │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                       TASK SCHEDULER                                 │   │
│  │  • Generates CPU-intensive tasks                                    │   │
│  │  • Distributes tasks using round-robin                              │   │
│  │  • Tracks execution flow and results                                │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                          IPC LAYER                                   │   │
│  │  • Sends tasks to workers                                           │   │
│  │  • Receives computation results                                     │   │
│  │  • Handles worker exit events                                       │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────┬───────────────────────────────────────────┘
                                  │
                    IPC Messages (send/receive)
                                  │
        ┌─────────────┬───────────┼───────────┬─────────────┐
        │             │           │           │             │
        ▼             ▼           ▼           ▼             ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ WORKER 1     │ │ WORKER 2     │ │ WORKER 3     │ │ WORKER N     │
│ ┌──────────┐ │ │ ┌──────────┐ │ │ ┌──────────┐ │ │ ┌──────────┐ │
│ │ Execute  │ │ │ │ Execute  │ │ │ │ Execute  │ │ │ │ Execute  │ │
│ │ Tasks    │ │ │ │ Tasks    │ │ │ │ Tasks    │ │ │ │ Tasks    │ │
│ └──────────┘ │ │ └──────────┘ │ │ └──────────┘ │ │ └──────────┘ │
│ ┌──────────┐ │ │ ┌──────────┐ │ │ ┌──────────┐ │ │ ┌──────────┐ │
│ │ Return   │ │ │ │ Return   │ │ │ │ Return   │ │ │ │ Return   │ │
│ │ Results  │ │ │ │ Results  │ │ │ │ Results  │ │ │ │ Results  │ │
│ └──────────┘ │ │ └──────────┘ │ │ └──────────┘ │ │ └──────────┘ │
│ ┌──────────┐ │ │ ┌──────────┐ │ │ ┌──────────┐ │ │ ┌──────────┐ │
│ │Simulate  │ │ │ │Simulate  │ │ │ │Simulate  │ │ │ │Simulate  │ │
│ │Crashes   │ │ │ │Crashes   │ │ │ │Crashes   │ │ │ │Crashes   │ │
│ └──────────┘ │ │ └──────────┘ │ │ └──────────┘ │ │ └──────────┘ │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

### Component Responsibilities

| Component          | Responsibility                             | Files              |
| ------------------ | ------------------------------------------ | ------------------ |
| **Master Process** | Orchestrates workers and task distribution | `index.ts`         |
| **Worker Manager** | Spawns, monitors, and restarts workers     | `workerManager.ts` |
| **Task Scheduler** | Generates and distributes tasks            | `taskScheduler.ts` |
| **Worker**         | Executes CPU-intensive tasks               | `worker.ts`        |
| **IPC Layer**      | Handles inter-process communication        | Built into Node.js |
| **Logger**         | Provides structured logging                | `logger.ts`        |
| **Types**          | TypeScript interfaces                      | `message.ts`       |

---

## 🛠️ Tech Stack

<div align="center">

| Technology        | Purpose               | Badge                                                                                                   |
| ----------------- | --------------------- | ------------------------------------------------------------------------------------------------------- |
| **Node.js**       | JavaScript Runtime    | ![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)              |
| **TypeScript**    | Static Typing         | ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)       |
| **child_process** | Process Creation      | ![child_process](https://img.shields.io/badge/child_process-Native-FF6B6B?logo=node.js&logoColor=white) |
| **IPC**           | Process Communication | ![IPC](https://img.shields.io/badge/IPC-Native-4CAF50?logo=node.js&logoColor=white)                     |
| **OS Module**     | CPU Detection         | ![OS](https://img.shields.io/badge/OS-Native-1E90FF?logo=node.js&logoColor=white)                       |

</div>

---

## 📁 Project Structure

```console
node-cluster-simulation/
│
├── 📁 src/
│   │
│   ├── 📁 types/
│   │   └── 📄 message.ts              # IPC message interfaces
│   │
│   ├── 📁 utils/
│   │   └── 📄 logger.ts               # Structured logging utility
│   │
│   ├── 📁 worker/
│   │   └── 📄 worker.ts               # Worker process implementation
│   │
│   ├── 📁 master/
│   │   ├── 📄 workerManager.ts        # Worker lifecycle management
│   │   └── 📄 taskScheduler.ts        # Round-robin task distribution
│   │
│   └── 📄 index.ts                    # Master process entry point
│
├── 📄 package.json                     # Dependencies & scripts
├── 📄 tsconfig.json                    # TypeScript configuration
├── 📄 .gitignore                       # Git ignore rules
└── 📄 README.md                        # Documentation
```

---

## ⚙️ How It Works

### 🔧 Master Process

The master process is the orchestrator that manages everything:

```typescript
// Simplified master process flow
1. Detect available CPU cores
2. Spawn worker processes (one per core)
3. Initialize task scheduler
4. Monitor worker health
5. Handle graceful shutdown
```

**Responsibilities:**

- Detects CPU core count using `os.cpus()`
- Spawns workers using `child_process.fork()`
- Manages worker lifecycle
- Coordinates IPC communication
- Handles system signals (SIGINT, SIGTERM)

### 👷 Worker Processes

Each worker runs independently and handles tasks:

```typescript
// Simplified worker flow
1. Initialize and register with master
2. Wait for task messages
3. Execute CPU-intensive computation
4. Send result back to master
5. Simulate random crash (for testing)
```

**Responsibilities:**

- Execute CPU-heavy computations
- Simulate random failures
- Return results via IPC
- Handle task cancellation

### 📊 Task Scheduling

Round-robin algorithm ensures fair distribution:

```typescript
// Round-robin scheduler logic
Tasks:    T1  T2  T3  T4  T5  T6
Worker1:  T1      T3      T5
Worker2:      T2      T4      T6
```

**Characteristics:**

- Even distribution across all workers
- No worker starvation
- Simple and predictable
- Low overhead

### 🛡️ Fault Tolerance

Automatic recovery from worker failures:

```typescript
// Fault tolerance flow
1. Worker crashes (simulated or real)
2. Master detects 'exit' event
3. Logs the failure
4. Automatically spawns replacement worker
5. Continues task distribution
```

**Key properties:**

- No single point of failure
- Automatic recovery
- Minimal downtime
- Continuous operation

---

## 📊 Example Output

```console
[INFO] ========================================
[INFO] Node.js Cluster Simulation Starting
[INFO] ========================================
[INFO] Detected 8 CPU cores
[INFO] Spawning 8 worker processes...
[INFO] Started worker 1024 (PID: 1024)
[INFO] Started worker 1025 (PID: 1025)
[INFO] Started worker 1026 (PID: 1026)
[INFO] Started worker 1027 (PID: 1027)
[INFO] Started worker 1028 (PID: 1028)
[INFO] Started worker 1029 (PID: 1029)
[INFO] Started worker 1030 (PID: 1030)
[INFO] Started worker 1031 (PID: 1031)
[INFO] All 8 workers ready
[INFO] Starting task distribution...

[INFO] Sending task 1 to worker 1024
[INFO] Task 1 completed by worker 1024. Result: 4839201
[INFO] Sending task 2 to worker 1025
[INFO] Task 2 completed by worker 1025. Result: 7234156
[INFO] Sending task 3 to worker 1026
[WARN] Worker 1026 crashed unexpectedly!
[INFO] Restarting worker 1026...
[INFO] Started replacement worker 1040
[INFO] Task 3 reassigned to worker 1040
[INFO] Task 3 completed by worker 1040. Result: 5678902
[INFO] Sending task 4 to worker 1027
[INFO] Task 4 completed by worker 1027. Result: 3456789

[INFO] ========================================
[INFO] Simulation Complete
[INFO] Total tasks: 100
[INFO] Completed tasks: 98
[INFO] Failed tasks: 2
[INFO] Restarts performed: 2
[INFO] ========================================
```

---

## ⚙️ Installation & Setup

### Prerequisites

- ✅ **Node.js** (v18 or higher)
- ✅ **npm** or **yarn** package manager
- ✅ **Git** (for cloning)

### Quick Start

```console
# 1. Clone the repository
git clone https://github.com/elyse502/cluster-simulation.git

# 2. Navigate to project directory
cd cluster-simulation

# 3. Install dependencies
npm install

# 4. Run the simulation
npm run dev
```

---

## 🚀 Running the Simulation

### Development Mode (with auto-reload)

```console
npm run dev
```

> **Features:**
>
> - Auto-restarts on file changes
> - Source maps for debugging
> - Real-time log output

### Production Build

```console
npm run build
```

> Compiles TypeScript to JavaScript in the `dist/` folder

### Production Start

```console
npm start
```

> Runs the compiled JavaScript from `dist/` folder

### NPM Scripts

```json
{
  "scripts": {
    "dev": "nodemon --watch src --exec ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

---

## 🎓 Core Concepts Implemented

| Concept                         | Implementation Details                                           |
| ------------------------------- | ---------------------------------------------------------------- |
| **Process Management**          | Using `child_process.fork()` to create independent processes     |
| **Inter-Process Communication** | Message passing via `process.send()` and `process.on('message')` |
| **Scheduling Algorithm**        | Round-robin with index-based worker selection                    |
| **Resilience Pattern**          | Auto-restart strategy with event listeners                       |
| **CPU Scaling**                 | Worker count matches `os.cpus().length`                          |
| **Event-Driven Architecture**   | Node.js EventEmitter for process events                          |
| **Graceful Shutdown**           | SIGINT/SIGTERM handlers for cleanup                              |

### Code Snippets

**Worker Creation:**

```typescript
const worker = fork(path.join(__dirname, "worker.js"));
worker.on("message", handleResult);
worker.on("exit", handleCrash);
```

**Task Distribution:**

```typescript
const workerIndex = taskCount % workers.length;
workers[workerIndex].send({ type: "task", data });
```

**Worker Logic:**

```typescript
process.on("message", async (msg) => {
  const result = await computeIntensiveTask(msg.data);
  process.send({ type: "result", data: result });
});
```

---

## 🏛️ Design Principles

### Separation of Concerns

| Layer                  | Location           | Responsibility         |
| ---------------------- | ------------------ | ---------------------- |
| **Worker Logic**       | `worker.ts`        | Task execution only    |
| **Scheduling Logic**   | `taskScheduler.ts` | Task distribution only |
| **Process Management** | `workerManager.ts` | Worker lifecycle only  |
| **Utilities**          | `logger.ts`        | Logging only           |

### Scalability Model

```
Single Core    → 1 worker
Dual Core      → 2 workers
Quad Core      → 4 workers
Octa Core      → 8 workers
```

### Fault Tolerance Properties

- **No single point of failure** - Workers are independent
- **Automatic recovery** - Failed workers restart automatically
- **Graceful degradation** - System continues with fewer workers
- **Self-healing** - Returns to full capacity after crashes

---

## 📈 Performance Characteristics

| Metric                  | Expected Value  | Notes                  |
| ----------------------- | --------------- | ---------------------- |
| **Worker startup time** | ~50ms           | Per worker process     |
| **IPC message latency** | <1ms            | Local communication    |
| **Task throughput**     | Scales linearly | With CPU cores         |
| **Recovery time**       | ~50ms           | After worker crash     |
| **Memory overhead**     | ~10MB/worker    | Additional per process |

---

## 🔮 Future Enhancements

| Feature                    | Priority | Description                          |
| -------------------------- | -------- | ------------------------------------ |
| 📦 **Task Queue Buffer**   | High     | Queue tasks when all workers busy    |
| 💚 **Health Monitoring**   | High     | Periodic health checks with timeouts |
| 📊 **Metrics Integration** | Medium   | Prometheus metrics export            |
| 🌐 **REST API Control**    | Medium   | HTTP endpoints for management        |
| 📡 **Real-time Dashboard** | Low      | Socket.IO visualization              |
| 🐳 **Docker Support**      | Low      | Containerized deployment             |
| ⚡ **Worker Pool**         | Low      | Pre-warmed worker pool               |
| 🔄 **Task Priorities**     | Low      | Priority-based scheduling            |

---

## 📚 Learning Outcomes

This project helps you understand:

### Low-Level Node.js Architecture

- How `child_process` works internally
- Event loop across multiple processes
- Memory isolation between processes

### Distributed System Thinking

- Trade-offs between single vs multi-process
- Consistency vs availability
- Failure detection patterns

### Backend System Design

- Horizontal scaling strategies
- Load balancing algorithms
- Resilient system patterns

### Process Lifecycle Control

- Process spawning and termination
- Signal handling (SIGINT, SIGTERM)
- Graceful shutdown procedures

### Event-Driven Programming

- EventEmitter patterns
- Asynchronous message passing
- Non-blocking operations

### Type-Safe Architecture

- TypeScript for process communication
- Interface-based design
- Compile-time safety

---

## 💡 Key Takeaways

| Concept               | Takeaway                                                            |
| --------------------- | ------------------------------------------------------------------- |
| **Multi-processing**  | Node.js can utilize multiple CPU cores via child processes          |
| **IPC**               | Message passing is the primary way to communicate between processes |
| **Load Balancing**    | Round-robin is simple but effective for homogeneous tasks           |
| **Fault Tolerance**   | Automatic restart is the first line of defense against failures     |
| **Process Isolation** | Each worker has its own memory space - no shared state              |
| **CPU Scaling**       | Worker count should match CPU cores for optimal performance         |

---

## 🤔 Common Questions

**Q: Why not use the built-in `cluster` module?**
A: This project intentionally avoids frameworks to demonstrate low-level concepts.

**Q: How does this handle shared state?**
A: Each worker has isolated memory. State must be managed by the master.

**Q: Can this run on Windows?**
A: Yes, Node.js child processes work on all platforms.

**Q: What's the maximum number of workers?**
A: Limited by system memory and CPU cores. Typically 8-16 workers.

---

## 👨‍💻 Author

### **Elysée NIYIBIZI**

_Junior Fullstack Software Engineer_

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-elyseedev.netlify.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://elyseedev.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-elyse502-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/elyse502)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Niyibizi_Elysée-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/niyibizi-elysée)
[![Email](https://img.shields.io/badge/Email-elyseniyibizi502@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:elyseniyibizi502@gmail.com)

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](https://github.com/elyse502/cluster-simulation/blob/main/LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Node.js Team** - For the amazing child_process API
- **TypeScript Team** - For type-safe JavaScript
- **Open Source Community** - For inspiration and patterns

---

<div align="center">

### ⭐ Star this repository if it helped you understand Node.js clustering!

**Built with 💻, TypeScript, and Deep System Understanding**

---

_This project intentionally avoids frameworks to focus on native Node.js behavior, process-level communication, and system-level architecture._

[⬆ Back to Top](#-table-of-contents)

</div>
