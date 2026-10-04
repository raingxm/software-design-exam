# 设计模式闪卡（场景辨型过关）

> 第 7 章 · 上午约 2～3 题 · 场景→模式名  
> 来源：2026-08-05 · 六高频 6/6 全对  
> 开场：[01-oop-uml-review](../07-oop/01-oop-uml-review.md) · 覆盖指南模式表见 syllabus

---

## 口令

```text
唯一→单例；创建不指名→工厂；接口不合→适配器
动态加皮→装饰；一对多通知→观察者；算法可换→策略
```

---

## 六高频

| 模式 | 一句话 | 题干信号 |
|------|--------|----------|
| **单例** | 全局唯一实例 | 配置、连接池、只有一个 |
| **工厂** | 创建时不指定具体类 | 按类型创建、创建与使用分离 |
| **适配器** | 接口转换 | 旧API/第三方对不上 |
| **装饰** | 动态加职责不改原类 | 层层包装、加功能可组合 |
| **观察者** | 一对多通知 | 订阅、监听、变了通知多方 |
| **策略** | 算法可互换 | 支付/折扣/排序可切换 |

---

## 易混

| 对比 | 分法 |
|------|------|
| 工厂 vs 策略 | 造对象 vs 换算法 |
| 装饰 vs 适配器 | 加功能（接口同类）vs 对齐不同接口 |
| 观察者 vs 策略 | 多个听众 vs 选一个算法 |
| 访问者 vs 策略 | 两棵树 + `accept(访问者)` vs Context 持有并切换算法 |
| 桥接 vs 适配器 | 设计之初拆两维并组合 vs 事后拧已有接口 |
| 桥接 vs 访问者 | 抽象**持有**实现 vs 元素 **accept** 访问者 |

## 扩展认题信号（上午能选对即可，不写长笔记）

| 模式 | 信号 | 分类口令 |
|------|------|----------|
| 访问者 | `accept(Visitor)`；数据结构稳定、操作常增 | 行为 · 对象 |
| 桥接 | 抽象持有实现；两维独立扩展 | 结构 · 对象 |
| 原型 | `Clone()` / 拷贝创建；深拷贝递归克隆引用字段 | 创建 |
| 组合 | 树形部分-整体；叶子与容器统一接口 | 结构 |
| 外观 | 一个门面挡住一堆子系统 | 结构 |
| 享元 | 共享细粒度对象；内外状态分离 | 结构 |
| 代理 | 同接口替身：远程 / 懒加载 / 权限 | 结构 |
| 模板方法 | 骨架固定、子类填步骤（无 accept） | 行为 · **类** |
| 命令 | 请求封装成对象；`execute` / 可撤销 | 行为 |
| 状态 | 行为随状态变；常与策略形似，看「状态迁移」 | 行为 |
| 抽象工厂 | 一次创建**一族**配套产品（多抽象产品 × 多系列） | 创建 |
| 建造者 | 分步组装复杂对象；同一过程可得不同表示 | 创建 |
| 责任链 | 请求沿处理器链传递，直到有人处理或到链尾 | 行为 |
| 中介者 | 同事不直连，一律经中介转发（偶发） | 行为 |

> 下午 Java 真题考哪个模式不重要，失分多在五坑（`abstract` / `add` / `Object` 强转 / 克隆站）。上午 2～3 题靠信号闪卡，不必 23 种全会写代码。
>
> **待续队列更新（2026-10-04）**：命令 → 状态 → 抽象工厂 / 建造者；责任链已补下方 Java 走读示例，待运行及链尾变式自测；解释器跳过。

### 责任链 Java 观察点

可运行示例：[ChainOfResponsibilityDemo.java](../../exercises/04-chain-of-responsibility/ChainOfResponsibilityDemo.java)

```text
Client → ConsoleLogger → FileLogger → ErrorLogger
```

- 抽象处理者 `Logger` 持有 `nextLogger`，这是“链”的结构来源。
- `log()` 固定“能处理就处理，否则向后传”的公共流程。
- 具体处理者只决定 `canHandle()` 和 `write()`，彼此不知道对方。
- `Client` 只依赖链首；增减或调整处理者顺序时，发送请求的代码不用改变。
- 与策略模式的分界：策略是客户端/上下文**选一个**算法；责任链是请求自己沿链寻找处理者。

## 下午角色名速查

| 模式 | 抽象/接口 | 具体实现 | 协作者/补充 |
|------|-----------|----------|-------------|
| 状态 | `State` 抽象状态 | `ConcreteState` 具体状态 | `Context` 上下文 |
| 策略 | `Strategy` 抽象策略 | `ConcreteStrategy` 具体策略 | `Context` 上下文 |
| 观察者 | `Subject` 主题 / 被观察者；`Observer` 观察者 | `ConcreteSubject`；`ConcreteObserver` | `update()` 更新接口 |
| 装饰 | `Component` 抽象构件；`Decorator` 抽象装饰 | `ConcreteComponent`；`ConcreteDecorator` | `Decorator` 持有 `Component` 引用 |
| 适配器 | `Target` 目标接口 | `Adapter` 适配器 | `Adaptee` 被适配者；`Client` 面向 `Target` 调用 |
| 简单工厂 | `Product` 抽象产品 | `ConcreteProduct` 具体产品 | `SimpleFactory` 集中按 `type` 创建 |
| 工厂方法 | `Product` 抽象产品；`Creator` 抽象工厂 | `ConcreteProduct`；`ConcreteCreator` | 每个具体工厂创建一种具体产品 |
| 命令 | `Command` 抽象命令 | `ConcreteCommand` 具体命令 | `Invoker` 调用 `execute()`；`Receiver` 真正干活 |
| 备忘录 | `Memento` 备忘录 | - | `Originator` 生成/恢复快照；`Caretaker` 管快照 |
| 模板方法 | `AbstractClass` 抽象类 | `ConcreteClass` 具体子类 | `Template Method` 定流程；`Primitive Operation` 子类填步骤 |
| 原型 | `Prototype` 抽象原型类（本题 `Cloneable`） | `ConcretePrototype` 具体原型类 | `Client` 客户类，调 `Clone()`；引用字段递归克隆 = 深拷贝 |
| 责任链 | `Handler` 抽象处理者（本题 `Logger`） | `ConcreteHandler`（三个具体 Logger） | `Handler` 持有 `nextLogger`；Client 只向链首发送请求 |

```text
被 createXxx() 返回的是 Product
负责 createXxx() 的才是 Creator / Factory
一个工厂按 type 判断 = 简单工厂
多个工厂子类各造一种 = 工厂方法
只有持有 Strategy/State 的主业务类优先叫 Context
调用 execute() 的是 Invoker，真正干活的是 Receiver
生成/恢复快照的是 Originator，管快照的是 Caretaker
私有构造器 = 克隆站：进的是原件，存的是副本
```

### Java 填空五坑（2026-09-01 组合 2.5/5 · 2026-09-02 原型 1.5/5 · 2026-09-14 享元 4/5 = 12/15 真题教训）

> 模式概念过关后，下午 Java 题失分集中在此，多为 TS/JS 习惯带入：

0. **填空白号看空外**：题干已带 `;` 不再写，没带就补（2026-09-14 外观 15/15 教训，**先看空外再下笔**）
1. **抽象类声明**：说明/类图写「抽象类」→ 声明处必写 `abstract class`（含 abstract 方法的普通类编译不过）
2. **抽象方法必带 `abstract`**：`abstract class` 里**无方法体的方法 = 抽象方法 = 必须显式标 `abstract`**；`public void draw();` 既无 `abstract` 又无方法体 = 语法错（2026-09-14 享元 (1) 扣 3 分教训）
3. **List 添加元素**：`add()`；`append()` 是 StringBuilder 的（JS 数组是 `push()`，别混）
4. **凡接住 `Object` 返回值必强转**：`Clone()`/原生 `next()` 都返回 `Object` —— `(Resume)a.Clone()`、`(WorkExperience)work.Clone()`、`(MenuComponent)iterator.next()`；**强转只出现在「接住返回值」处，传参类型匹配不用转**（两题连犯，最高危）
5. **复制一律 `new`**：考题自定义 `Clone()` 是普通方法 → 方法体里手工 `new` + 逐字段抄；`super()` 只能放构造器首行且不可赋值（真实 Java 的 `super.clone()` 惯用法别带进考场）
6. **深拷贝主线**：引用类型字段必须 `Clone`，基本类型直接抄；私有构造器 = 克隆站（`new Resume(this.work)` 进原件 → 构造器内 `(WorkExperience)work.Clone()` 存副本）；两对象共享引用字段 = 改一个动两个

### 五坑已覆盖 / 未覆盖清单（截至 2026-09-14）

| 风险点 | 策略 9/9 | 外观 9/14 | 享元 9/14 |
|---|---|---|---|
| 抽象类 / 接口方法 + 构造器带参 | ✅ | ✅ | ✅ |
| 抽象方法必带 `abstract` | n/a | n/a | ⚠️ 扣 3 分（仍算碰到） |
| 原生集合 API（`ArrayList` + `add()`） | ❌ | ❌ | ✅ |
| 私有构造器"克隆站" | ❌ | ❌ | ❌ |
| 深浅克隆 | ❌ | ❌ | ❌ |
| `Object` 返回值强转 | ❌ | ❌ | ❌ |

→ 剩余高危坑：**克隆站 / 深浅克隆 / `Object` 强转**——下一个 Java 题应挑有这三坑的（如原型 / 工厂返回 `Object`）。

### 可选再认

| 模式 | 信号 |
|------|------|
| 模板方法 | 骨架固定，细节子类填 |
| 代理 | 替身：远程/懒加载/权限 |

---

## 已过关例题

| # | 场景 | 答 |
|---|------|-----|
| 1 | 配置全进程唯一 | 单例 |
| 2 | 按快递编码创建客户端 | 工厂 |
| 3 | 包装旧报表 API | 适配器 |
| 4 | 滚动条+边框层层加 | 装饰 |
| 5 | 股价变多方更新 | 观察者 |
| 6 | 满减/折扣/会员价切换 | 策略 |

---

## 第 7 章进度

| 块 | 状态 |
|----|------|
| OO 概念 | ✅ [24](./24-oo-concepts-tutorial.md) |
| 类图关系 | ✅ [25](./25-class-diagram-relations-tutorial.md) |
| 用例图 | ✅ [26](./26-usecase-diagram-tutorial.md) |
| 设计模式 | ✅ 本文 |
| 序列/状态认图 | ⏳ P1 |
| 下午 UML 真题 | ⏳ 提分 |

下一步：「开始序列图与状态图」或评估是否标第 7 章学完（序列/状态后补）。
