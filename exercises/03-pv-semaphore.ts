/**
 * 模拟操作系统中的 PV 操作（信号量机制）
 * 
 * P 操作 (wait): 申请资源，S = S - 1; 如果 S < 0，则进程进入等待队列。
 * V 操作 (signal): 释放资源，S = S + 1; 如果 S <= 0，则从等待队列唤醒一个进程。
 */

class Semaphore {
    private count: number;
    private queue: Array<() => void> = [];

    constructor(initialCount: number) {
        this.count = initialCount;
    }

    // P 操作
    async P(): Promise<void> {
        this.count--;
        if (this.count < 0) {
            // 将当前执行上下文存入队列，挂起
            return new Promise((resolve) => {
                this.queue.push(resolve);
            });
        }
    }

    // V 操作
    V(): void {
        this.count++;
        if (this.count <= 0) {
            // 唤醒队列中的第一个进程
            const next = this.queue.shift();
            if (next) next();
        }
    }
}

/**
 * 经典问题：生产者-消费者问题 (Producer-Consumer Problem)
 */
async function producerConsumerSimulation() {
    const empty = new Semaphore(5); // 空位信号量 (初值为缓冲区大小)
    const full = new Semaphore(0);  // 满位信号量 (初值为0)
    const mutex = new Semaphore(1); // 互斥信号量

    let buffer: number[] = [];

    async function producer(id: number) {
        for (let i = 0; i < 3; i++) {
            await empty.P();   // 检查是否有空位
            await mutex.P();   // 进入临界区

            const item = Math.floor(Math.random() * 100);
            buffer.push(item);
            console.log(`Producer ${id} produced: ${item}. Buffer: [${buffer}]`);

            mutex.V();         // 离开临界区
            full.V();          // 增加一个满位
            
            await new Promise(r => setTimeout(r, 100)); // 模拟耗时
        }
    }

    async function consumer(id: number) {
        for (let i = 0; i < 3; i++) {
            await full.P();    // 检查是否有产品
            await mutex.P();   // 进入临界区

            const item = buffer.shift();
            console.log(`Consumer ${id} consumed: ${item}. Buffer: [${buffer}]`);

            mutex.V();         // 离开临界区
            empty.V();         // 增加一个空位

            await new Promise(r => setTimeout(r, 150)); // 模拟耗时
        }
    }

    console.log("Starting Producer-Consumer Simulation...");
    await Promise.all([
        producer(1),
        producer(2),
        consumer(1),
        consumer(2)
    ]);
    console.log("Simulation Finished.");
}

// 运行模拟
producerConsumerSimulation();
