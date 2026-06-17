/**
 * 软件设计师考试 - 存储器计算练习
 * 
 * 考点：
 * 1. 内存地址范围计算：终止地址 - 起始地址 + 1
 * 2. 16 进制转 10 进制或转 K (1024)
 * 3. 片数计算：总容量 / 单片容量
 */

function calculateMemoryChips(startAddr: string, endAddr: string, chipSizeK: number): number {
    const start = parseInt(startAddr, 16);
    const end = parseInt(endAddr, 16);
    
    // 计算存储单元个数 (字节数为单位，假设按字节编址)
    const totalUnits = end - start + 1;
    
    // 转换为 K (1K = 1024)
    const totalK = totalUnits / 1024;
    
    console.log(`地址范围: ${startAddr} - ${endAddr}`);
    console.log(`总容量 (十进制字节): ${totalUnits}`);
    console.log(`总容量 (K): ${totalK}K`);
    
    return totalK / chipSizeK;
}

// ... 原有芯片计算代码保持 ...

/**
 * 考点 4：页式存储地址转换
 * @param logicalAddr 逻辑地址 (16进制字符串)
 * @param pageSize 页面大小 (单位: 字节, 通常是 4096 = 4K)
 * @param pageTable 页表: Map<页号, 物理块号>
 */
function translateAddress(logicalAddr: string, pageSize: number, pageTable: Map<number, number>): string {
    const addr = parseInt(logicalAddr, 16);
    const pageNum = Math.floor(addr / pageSize);
    const offset = addr % pageSize;

    const blockNum = pageTable.get(pageNum);
    if (blockNum === undefined) {
        throw new Error(`页号 ${pageNum} 缺页中断！`);
    }

    const physicalAddr = blockNum * pageSize + offset;
    return "0x" + physicalAddr.toString(16).toUpperCase();
}

/**
 * 考点 5：LRU 页面置换算法模拟
 * @param accessSequence 访问序列
 * @param frameCount 分配给进程的页框数
 * @returns 缺页次数
 */
function simulateLRU(accessSequence: number[], frameCount: number): number {
    let frames: number[] = [];
    let pageFaults = 0;

    for (const page of accessSequence) {
        const index = frames.indexOf(page);
        if (index === -1) {
            // 缺页
            pageFaults++;
            if (frames.length >= frameCount) {
                // 淘汰最久未使用的 (队列头)
                frames.shift();
            }
            frames.push(page);
        } else {
            // 命中，更新访问顺序：移到队尾
            frames.splice(index, 1);
            frames.push(page);
        }
        // console.log(`访问 ${page}, 当前页框: [${frames}]`);
    }

    return pageFaults;
}

// 测试 LRU
const sequence = [4, 3, 2, 1, 4, 3, 5, 4, 3, 2, 1, 5];
const faults = simulateLRU(sequence, 3);
console.log(`\nLRU 访问序列: ${sequence}`);
console.log(`分配页框数: 3, 缺页次数: ${faults}`);

// 测试地址转换
const pageTable = new Map([[0, 2], [1, 5], [2, 1], [5, 4]]);
const lAddr = "5A29"; // 页号 5, 偏移 A29
const pAddr = translateAddress(lAddr, 4096, pageTable);
console.log(`\n逻辑地址: ${lAddr}H (页大小 4KB)`);
console.log(`页号 5 映射物理块 4, 转换结果: ${pAddr}`);
