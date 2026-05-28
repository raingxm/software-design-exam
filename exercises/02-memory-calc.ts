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

// 模拟题：地址从 AC000H 到 C7FFFH，单片容量 16K*8bit，求片数
const start = "AC000";
const end = "C7FFF";
const chipSize = 16;

const chipsNeeded = calculateMemoryChips(start, end, chipSize);
console.log(`需要芯片数量: ${chipsNeeded} 片`);

if (chipsNeeded === 7) {
    console.log("✅ 计算正确！");
} else {
    console.log("❌ 计算错误！");
}
