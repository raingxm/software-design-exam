# 学习讨论存档 (Learning Logs)

## Session: 2026-05-28
### 话题：计算机组成与体系结构 - 进度回顾与补漏

#### 1. 已完成内容回顾
- **数据表示**：进制转换、补码范围（8位：-128~127）、浮点数精度与范围、校验码（海明码纠错、CRC检错）。
- **CPU 架构**：运算器与控制器组件（PC, IR, AC, ALU）、CISC vs RISC、流水线时间计算。
- **存储系统**：存储层次、Cache 局部性原理、主存容量计算、磁盘调度时间。

#### 2. 知识点补漏 (Gap Analysis)
经过对比大纲，发现以下知识点尚未覆盖：
- **总线架构 (Bus Architecture)**：
    - 内部总线、系统总线（数据、地址、控制）、外部总线。
- **系统可靠性 (Reliability)**：
    - 平均无故障时间 (MTBF)、平均维修时间 (MTTR)。
    - 串联系统（$R = R1 \times R2 \dots$）与并联系统（$R = 1 - (1-R1) \times (1-R2) \dots$）的可靠性计算。
- **计算机性能评价**：
    - MIPS (每秒百万条指令)、CPI (每条指令周期数)。

#### 3. 下步计划
- [x] 补充《总线与可靠性》笔记。(已完成)
- [x] 更新 `LEARNING_PLAN.md` 进度。(已完成)
- [ ] 进行一轮模拟真题测试。
- [ ] 开启《操作系统》章节。

---

## Session: 2026-06-30
### 话题：程序设计语言基础知识 — 第 2 章学习完成

#### 1. 已完成内容
- **主笔记**：[程序设计语言基础知识](../02-programming-lang/01-language-fundamentals.md)
- **Deep-dive**：[中缀 ↔ 后缀](../deep-dives/03-infix-postfix-tutorial.md)、[文法与自动机](../deep-dives/04-grammar-automata-tutorial.md)
- **核心考点**：编译/解释/汇编、编译六阶段、乔姆斯基文法、E/T/F 与 LL/LR、中缀后缀手算、传值传址

#### 2. 下步计划
- [ ] 开启第 3 章 · 数据结构

---

## Session: 2026-07-08
### 话题：数据结构 — 四个手算难点深化

#### 1. 已完成内容
- **Deep-dive**：[循环队列](../deep-dives/05-circular-queue-tutorial.md)、[树还原](../deep-dives/06-tree-reconstruction-tutorial.md)、[快排分区](../deep-dives/07-quicksort-partition-tutorial.md)、[哈夫曼树](../deep-dives/08-huffman-tree-tutorial.md)
- **主笔记链接**：已回链到 [数据结构回顾巩固](../03-data-structures/01-data-structures-review.md)
- **勘误**：自测题 6 WPL 修正为 56

#### 2. 下步计划
- [ ] 重做主笔记 6 道自测题（不看答案）
- [ ] 排序稳定性 + 二分查找各练 2 题
- [ ] 第 4 章 OS 并行推进
