/**
 * 软件设计师考试 - 流水线计算练习
 * 
 * 考点：
 * 1. 流水线周期：各阶段中最长的时间。
 * 2. 理论公式：(k + n - 1) * Δt
 * 3. 实践公式：(t1 + t2 + ... + tk) + (n - 1) * Δt (考题若未特殊说明，优先用理论公式)
 */

interface PipelineParams {
  stages: number[]; // 各阶段耗时 (ms/us)
  n: number;        // 指令总数
}

function calculatePipelineTime(params: PipelineParams): number {
  const { stages, n } = params;
  const k = stages.length;
  const deltaT = Math.max(...stages);
  
  // 理论公式
  return (k + n - 1) * deltaT;
}

// 模拟题：某指令流水线分为 取指(2ns)、分析(3ns)、执行(1ns) 三个阶段。
// 问：执行 100 条指令的总时间是多少？
const mockExam = {
  stages: [2, 3, 1],
  n: 100
};

const totalTime = calculatePipelineTime(mockExam);
console.log(`流水线周期 Δt: ${Math.max(...mockExam.stages)}ns`);
console.log(`执行 ${mockExam.n} 条指令的总时间: ${totalTime}ns`);

// 验证：
// k=3, n=100, Δt=3
// (3 + 100 - 1) * 3 = 102 * 3 = 306ns
if (totalTime === 306) {
  console.log("✅ 计算正确！");
} else {
  console.log("❌ 计算错误！");
}
