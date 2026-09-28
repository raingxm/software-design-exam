# 数学基础与逻辑运算

## 1. 逻辑代数 (Logical Algebra)
这是上午前 5 题的常客，主要考查表达式的化简。

### 常用运算
- **与 (AND, $\cdot$ / 并写)**：有 0 则 0；两真才真。
- **或 / 逻辑加 (OR, $+$)**：有 1 则 1。**不是算术加**（逻辑加 \(1+1=1\)）。
- **非 (NOT, $\overline{A}$)**：取反。
- **异或 (XOR, $\oplus$)**：不同为 1，相同为 0。展开：$A\oplus B = A\overline{B}+\overline{A}B$。
- **同或 (XNOR, $\odot$)**：相同为 1，不同为 0。展开：$A\odot B = AB+\overline{A}\,\overline{B}$。同或 = 异或取反。

### 异或 / 同或口令（2026-09-28 错题回炉 · 变式 5/5）
- 一边取反 → 变成同或：$\overline{A}\oplus B = A\oplus\overline{B} = A\odot B$
- 两边取反 → 仍是异或：$\overline{A}\oplus\overline{B} = A\oplus B$
- 异或 1 = 取反：$X\oplus 1 = \overline{X}$；故 $A\oplus B\oplus 1 = A\odot B$
- 易混：看到 `+` 先想**或**，看到 `⊕` 先想**不同为 1**；勿把异或选成带 `+` 的或式。

### 常用公式
- **分配律**：$A + (B \cdot C) = (A + B) \cdot (A + C)$ (注意这个与普通代数不同)
- **德·摩根定律**：$\overline{A \cdot B} = \overline{A} + \overline{B}$；$\overline{A + B} = \overline{A} \cdot \overline{B}$
- **吸收律**：$A + A \cdot B = A$；$A \cdot (A + B) = A$

---

## 2. 命题逻辑 (Propositional Logic)
- **蕴含 ($\rightarrow$)**：$P \rightarrow Q$ 等价于 $\neg P \vee Q$。
    - 只有当 $P$ 为真且 $Q$ 为假时，结果才为假。
- **真值表**：通过列出所有可能的 $P, Q$ 取值来验证逻辑表达式。

### 谓词逻辑 (Predicate Logic)
- **量词**：
    - **全称量词 ($\forall$)**：对所有元素都成立。
    - **存在量词 ($\exists$)**：存在至少一个元素成立。
- **否定关系**：$\neg (\forall x, P(x)) \equiv \exists x, \neg P(x)$；$\neg (\exists x, P(x)) \equiv \forall x, \neg P(x)$。

---

## 3. 排列组合与概率
- **排列 ($P_n^m$)**：考虑顺序。
- **组合 ($C_n^m$)**：不考虑顺序。
- **古典概率**：$P(A) = \text{事件 A 包含的样本点数} / \text{样本空间总数}$。

---

## 4. 运筹学基础 (关键考点)
### 线性规划
- **特征**：在约束条件下求目标函数的最大/最小值。
- **解法**：通常在选择题中给出几个点，代入目标函数验证即可（代入法）。

### 决策树 / 盈亏平衡分析
- **期望值法**：$\sum (\text{利润} \times \text{概率})$。

### 网络图 (甘特图/双代号网络图)
- **关键路径**：从起点到终点最长的路径。
- **总时差**：不影响总工期的前提下，该活动可以延迟的时间。

---

## 5. 矩阵与数值计算
- **矩阵乘法**：前行乘后列。
- **误差分析**：绝对误差、相对误差。
