# 软考英语 · 71-75 完形（滚动积累）

> 上午最后 5 题 · 5 分 · **教程无专章**（原文摘自英文技术文献，找「第几章」无解）
> 策略：技术知识补语法——5 空中通常 2~3 个纯套路（搭配/复现），1~2 个技术常识
> 来源：2026-09-02 云计算真题讨论开篇 · 每遇一篇沉淀一篇，考前长成私人词库

---

## 三步做题法

```text
① 通读 30 秒抓主题（讲什么技术）→ ② 先用技术常识锁空 → ③ 剩余空找固定搭配/原词回指
蒙题半正确：题型就是设计给「技术强英语弱」的——但每次蒙错都要沉淀成套路
```

| 考法 | 特征 | 例 |
|------|------|-----|
| 固定搭配 | 动介/名介搭配 | synonym **for** / ability **to** / serve **as** |
| 原词复现 | 前文出现过的名词回指 | 云计算篇 (5) application layer |
| 技术常识 | 懂概念直接选 | infrastructure → foundation（下层是上层基础） |

## 高频主题 → 板块映射

| 主题 | 归属 |
|------|------|
| 云计算 / 大数据 / IoT / AI / 区块链 / 微服务 / 容器 | 新技术 |
| 敏捷 / 测试 / 过程模型 / 项目管理 / UML | 软件工程 |
| 加密 / 认证 / 防火墙 / 安全协议 | 网络安全 |
| 《人月神话》Brooks 等经典 | 软件过程文献 |

## 高频搭配表（滚动）

| 搭配 | 意 | 出处 |
|------|----|------|
| a synonym for | …的同义词 | 云计算 (2) |
| the ability to do | 做…的能力 | 云计算 (3) |
| serve as | 充当、作为 | 云计算 (4) |
| in turn | 反过来、相应地 | 云计算 |
| be built with / be formed with | 由…建成/构成 | 云计算 |
| orders of magnitude more | 多若干数量级、远多于 | Brooks 复杂性 (2) |
| in some ... fashion | 以某种……方式 | Brooks 复杂性 (3) |
| abstract away | 抽象掉、略去细节 | Brooks 复杂性 |
| architectural style | 架构风格 | SOA (71) |
| implementation technology | 实现技术 | SOA (72) |
| well-defined interfaces | 定义清晰的接口 | SOA (73) |
| be well-suited as | 非常适合作为 | SOA (74) |

## 已沉淀真题

### ① 云计算三层架构（约 2013 真题 71-75）

> 原文：第一段 ≈ Wikipedia「Cloud computing」词条定义段；第二段 = IaaS/PaaS/SaaS 标准表述
> 归属：新技术 · 云计算 · 骨架：IaaS（虚拟化计算/存储/网络）→ PaaS（通用可复用软件资源）→ SaaS（应用软件模块），下层是上层的基础

**答案：connected / synonym / ability / foundation / application**

1. **connected** —— computers __(1)__ through a network：过去分词后置定语（被连接）【技术常识】
2. **synonym** —— be a synonym **for**；形近干扰 symbol/symptom/system【搭配】
3. **ability** —— the ability **to** run【搭配】
4. **foundation** —— serve **as** the foundation **for** building；infrastructure 本义=基础【搭配+常识】
5. **application** —— 第二段开头列过三层，原词回指【复现】

### ② Brooks 抛弃型试点（2026-08-18 App 刷题，7/20）

> 归属：软件过程 · 《人月神话》经典（Plan to throw one away）
> 第 4 空：**throwaway**（是事先做试点还是把试点交给客户）· 其余空待补

### ③ Brooks 软件本质复杂性（2026-09-09 App 刷题，解析 14/20）

> 归属：软件工程经典 · 《No Silver Bullet》中的 essential complexity
> 第 1 空错选 **program**，正解 **subroutine**；五空已按上下文完整复盘

**答案：subroutine / states / nonlinear / essential / ignored**

1. **subroutine** —— 两个相似部分会被抽取成一个可复用子程序；`open or closed subroutine` 是历史术语，`program` 范围过大【技术语境】
2. **states** —— 上一句 `have very large numbers of states`，下一句直接比较软件系统具有更多状态【原词复现】
3. **nonlinear** —— `in some nonlinear fashion`；后文 `more than linearly` 直接回指【搭配+复现】
4. **essential** —— `an essential property, not an accidental one` 构成明确反义对照【逻辑】
5. **ignored** —— `complexities (which were) ignored in the models`，过去分词作后置定语；简化模型成立是因为被忽略的复杂性并非现象本质【语法+语义】

**本篇考场链**：相似代码→子程序；计算机状态→软件状态更多；元素非线性互动→复杂度超线性增长；复杂性是本质属性；自然科学模型只忽略非本质复杂性。

### ④ SOA 与 Web Services（2022 下真题 71～75）

> 本卷英文区 `3/5`，错 Q71、Q73。Q71 属于“看到可通搭配就作答，未继续找后文强证据”；Q73 同时暴露 App 答案错误，不能盲背题库键值。

**答案：style / technology / interfaces / well-suited / statelessness**

1. **style** —— `architectural style`；末句再次出现同一搭配，属于原词复现；与 `implementation technology` 构成“架构思想 vs 实现手段”的层次对照。
2. **technology** —— Web Services 是一种实现技术，不与 SOA 架构风格互相依赖。
3. **interfaces** —— 原始材料为 `processes with well-defined interfaces`；接口是通信边界，function 是功能，logic 是内部实现。App 误标 `functions`，不可照背。
4. **well-suited** —— `be well-suited as` 表示“非常适合作为”。
5. **statelessness** —— 后文 `should be stateless` 同词根直接复现。

**本篇验收**：Q71 最小变式独立答出 `architectural style / implementation technology`；Q73 已订正，待 `48h` 后陌生篇章复测。

## 生词本（滚动）

| 词 | 意 | 篇 |
|----|----|----|
| virtualized | 虚拟化的 | 云计算 |
| infrastructure | 基础设施 | 云计算 |
| platform | 平台 | 云计算 |
| application | 应用 | 云计算 |
| subroutine | 子程序 | Brooks 复杂性 |
| nonlinear | 非线性的 | Brooks 复杂性 |
| essential / accidental | 本质的 / 偶然的、附带的 | Brooks 复杂性 |
| phenomenon (pl. phenomena) | 现象 | Brooks 复杂性 |
| interface / function / logic | 接口边界 / 所提供功能 / 内部实现逻辑 | SOA |
| statelessness | 无状态性 | SOA |

## 下一步

- 每周 `3 x 15min`，每次一篇 5 空：前 `6～7min` 闭卷作答，后 `8～9min` 复盘。
- 每个答案标注最强证据：复现 / 对照 / 搭配 / 技术常识；先做强证据空，不必按 71→75 顺序。
- 每篇只沉淀 `3～5` 个词组，不抄整篇生词。目标为连续两篇 `>=4/5`，或四篇累计 `>=14/20`。
- Q73 在 `48h` 后用陌生篇章复测；遇到答案别扭或两个选项都似乎可通时，回查原始语境，不盲信 App。
