# 数据结构进展（超短回顾，3 分钟版）— 2026-07-08

> 用途：换电脑后快速恢复学习上下文

---

## 1) 今天做了什么（已落库）

- 新增 4 篇手算 deep-dive：
  - 循环队列：`notes/deep-dives/05-circular-queue-tutorial.md`
  - 树还原：`notes/deep-dives/06-tree-reconstruction-tutorial.md`
  - 快排分区：`notes/deep-dives/07-quicksort-partition-tutorial.md`
  - 哈夫曼树：`notes/deep-dives/08-huffman-tree-tutorial.md`
- 主笔记回链 + 勘误：`notes/03-data-structures/01-data-structures-review.md`
  - 自测题 6：WPL 修正为 **56**
- 学习记录更新：`notes/deep-dives/01-learning-logs.md`
- 今日进度长版：`notes/deep-dives/09-data-structures-progress-2026-07-08.md`

---

## 2) 四个高频点（只背这几句）

- **循环队列**：`rear` 指下一个空位；空 `front==rear`；满 `(rear+1)%m==front`；个数 `(rear-front+m)%m`；最多 `m-1`
- **树还原**：能唯一的是「中序+前序/后序」；**前序+后序不唯一**（缺左右分界）
- **快排第一趟**：挖坑填数 — 右找小填坑、左找大填坑、pivot 归位；勿用手动分类（2026-07-08 已理解）
- **哈夫曼**：每轮取最小两个合并，共 `n-1` 轮；WPL 可用“合并和累加”互验

---

## 3) 今晚最小任务（30 分钟）

- [x] 理解「前序+后序为何不唯一」→ 见 `06-tree-reconstruction-tutorial.md` §8
- [ ] 闭卷做主笔记自测题 1/2/4/6
- [ ] 只写错因：哪里判空/满错？哪里切左右子树错？pivot 归位错？WPL 合并顺序错？

---

## 4) 提交状态

- 之前已提交：`88d3b28`（四个 deep-dive + 回链 + WPL 勘误）
- 这份文件 + 长版进度文件：准备提交

