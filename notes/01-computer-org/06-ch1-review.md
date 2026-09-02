# 计算机系统 — 第 1 章回顾巩固

> 教材第 1 章 · 上午约 **6 分**（概念 + 手算）  
> 摸底：[计组 30 题](../../practice/drills/01-computer-org-30q.md) **10/30**（2026-06）  
> 巩固：[35](../deep-dives/35-complement-pipeline-tutorial.md) · [37](../deep-dives/37-reliability-tutorial.md) · [40 Cache/寻址](../deep-dives/40-cache-addressing-tutorial.md) · [43 冯诺依曼](../deep-dives/43-von-neumann-architecture-tutorial.md) · 海明 [02](../deep-dives/02-hamming-code-tutorial.md)  
> 来源：2026-08-18～20 按错题回炉（不按教材目录）

---

## 知识地图

```mermaid
mindmap
  root((第1章 计算机系统))
    数据表示
      补码范围/书写
      浮点阶码vs尾数
      海明/CRC
    CPU
      PC/IR/ALU
      CISC vs RISC
      同步流水线
    存储
      Cache 映射/容量
      主存片数
    总线与可靠度
      地址线→寻址
      串并联
      MIPS/CPI
    数学
      逻辑化简
      线性规划
```

---

## 本轮进度（摸底薄弱优先）

| 刀 | 主题 | 状态 | 笔记 |
|----|------|------|------|
| 1 | 补码范围与书写 | ✅ 2026-08-18 | [35](../deep-dives/35-complement-pipeline-tutorial.md) |
| 2 | 流水线 Δt / 总时间 | ✅ 2026-08-18 | 同上 |
| 3 | 并联可靠度 | ✅ 2026-08-19 | [37](../deep-dives/37-reliability-tutorial.md) |
| 4 | Cache 容量/映射、32 位寻址 | ✅ 2026-08-20 | [40](../deep-dives/40-cache-addressing-tutorial.md) |
| 5 | 旋转延迟取半圈 | ✅ 2026-08-25 | 5400RPM → 5.55ms；平均=半圈（均匀分布期望） |
| 6 | 海明码 / CRC | ✅ 2026-08-25 | 2^k≥n+k+1；CRC=模2除法，只检错不纠错 |
| 7 | 浮点数 / 汉字编码 | ✅ 2026-08-25 | 阶管范围尾管精度；机内码=区位码+A0A0H |

重做目标：计组 30 题 **≥24/30** 再勾 LEARNING_PLAN 6 月第一项。

**2026-08-25：7 刀全部过关。**

---

## 已过关口令（刀 1～4）

```text
8 位补码 -128～127；16 位 -32768～32767
+13 = 0DH；-13 = F3H（取反 +1，再 4 位一组）

Δt = 最长一段，不是各段之和
T = (k + n - 1) × Δt
快的段空等 = 等统一时钟交班

并联：先乘「坏」，再 1 减；得数必须高于单个
混合：备份组先并联成一个数，再拿去串联
R = MTBF / (MTBF + MTTR)

Cache 容量 = 组数 × 路数 × 块大小
地址线送门牌号；32 根按字节编址 = 4GB（不要除以 8）
```

---

## 续学

开场白：

```text
继续第 1 章巩固，旋转延迟
```

刀 5 待答：5400 转/分，平均旋转延迟约多少 ms？先算一圈再除以 2。平均取半圈，不是整圈。
