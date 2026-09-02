# 2024 年上半年 · 下午试题六 · 原型模式（Prototype）

> 共 15 分，每空 3 分。
> 来源：刷题 App（飞书截图 + 本地 OCR 转写，2026-09-02）。
> 状态：**2026-09-02 凌晨已作答**，初判 **2.5~3.5/5（4.5~7.5/15）**；(3)(4) 官方答案待 App 解析核对。

## 题目

阅读下列说明和 Java 代码，回答问题。

### 【说明】

现要求实现一个能够自动生成求职简历的程序，简历的基本内容包括求职者的姓名、性别、年龄及工作经历。希望每份简历中的工作经历有所不同，并尽量减少程序中的重复代码。

现采用**原型模式（Prototype）**来实现上述要求，得到如图所示的类图。

### 【类图】（OCR 转述）

- `Cloneable`（接口）
  - `WorkExperience`（工作经历）实现 `Cloneable`，含属性 `workDate`、`company`
  - `Resume`（简历）实现 `Cloneable`，聚合 `WorkExperience`（多重性 `*` 或 1，原图不清晰）

### 【Java 代码】

```java
class WorkExperience __(1)__ Cloneable {  // 工作经历
    private String workDate;
    private String company;
    public Object Clone() {
        __(2)__;
        obj.workDate = this.workDate;
        obj.company  = this.company;
        return obj;
    }
}

class Resume implements Cloneable {  // 简历
    private String name;
    private String sex;
    private String age;
    private WorkExperience work;

    public Resume(String name) {
        this.name = name;
        work = new WorkExperience();
    }

    private Resume(WorkExperience work) {
        this.work = __(3)__;
    }

    public void SetPersonalInfo(String sex, String age) { /* 代码略 */ }
    public void SetWorkExperience(String workDate, String company) { /* 代码略 */ }

    public Object Clone() {
        Resume obj = __(4)__;
        // 其余代码省略（复制 name、sex、age 等基本字段）
        return obj;
    }
}

class WorkResume {
    public static void main(String[] args) {
        Resume a = new Resume("张三");
        a.SetPersonalInfo("男", "29");
        a.SetWorkExperience("1998~2000", "XXX公司");

        Resume b = __(5)__;
        b.SetWorkExperience("2001~2006", "YYY公司");
    }
}
```

## 答题区（2026-09-02 凌晨作答）

| 空号 | 我的答案 | 初判 | 正解（(3)(4) 待官方核对） |
| ---- | -------- | ---- | ------------------------ |
| (1)  | `implements` | ✅ | `implements` |
| (2)  | `WorkExperience obj = super();` | ❌ | `WorkExperience obj = new WorkExperience();` |
| (3)  | `work` | ✅?（待核） | `work`（私有构造器存「已克隆」的副本；若官方为 `(WorkExperience)work.Clone()` 则判错） |
| (4)  | `super();` | ❌ | `new Resume((WorkExperience)work.Clone());`（调私有构造器 + 传入 work 的深拷贝） |
| (5)  | `a.Clone();` | △ | `(Resume)a.Clone();`（Clone() 返回 Object，必须强转） |

---

## 复盘（初判，待官方解析复判）

- **得分**：初判 **2.5~3.5/5（4.5~7.5/15）**——(3) 若官方为 `work` 则 +1，(5) 按差强转记半对
- **逐空对账**：
  - (1) ✅ `implements`
  - (2) ❌ `super()` 是**构造器调用语法**，只能出现在构造器首行且不可赋值；本题 `Clone()` 是自定义方法（大写 C），复制靠手工 `new` + 逐字段拷贝。疑似把真实 Java 的 `super.clone()` 惯用法带入了考试伪代码
  - (3) ✅? 答 `work` 对的前提是「克隆发生在 (4) 调用处」这套设计（《大话设计模式》原版）；另一套自洽设计是构造器内克隆（(3) = `(WorkExperience)work.Clone()`、(4) = `new Resume(work)`）。**待官方答案定夺**
  - (4) ❌ 正解 `new Resume((WorkExperience)work.Clone())`——私有构造器为什么存在：绕过公共构造器（公共的会 new 空 WorkExperience），专为「装着已克隆 work 的副本」服务
  - (5) △ 方向对、**漏强转**——与组合模式题 `iterator.next()` 漏 `(MenuComponent)` 同型，第二次复发
- **错因**：
  - 深拷贝主线未建立：{(3) `work`, (4) `super()`} 组合下克隆从未发生，a、b **共享同一个 WorkExperience 对象**，`b.SetWorkExperience("2001~2006","YYY公司")` 会把张三 1998~2000 的经历一并改掉——正踩说明「希望每份简历中的工作经历有所不同」的红线
  - 工程 Java 惯用法（`super.clone()`）硬套考试伪代码（手工 new）
- **口令**：① 考题自定义 `Clone()` → 复制一律 `new`；`super()` 只属于构造器首行 ② 凡接住 `Object` 返回值（`clone()/next()/Clone()`）先写强转 ③ 引用类型字段必须 `Clone`（深拷贝），基本类型直接抄
- **待办**：贴 App「解析」截图/文字复判，定 (3)(4) 官方答案
