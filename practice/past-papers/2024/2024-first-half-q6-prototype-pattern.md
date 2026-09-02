# 2024 年上半年 · 下午试题六 · 原型模式（Prototype）

> 共 15 分，每空 3 分。
> 来源：刷题 App（飞书截图 + 本地 OCR 转写，2026-09-02）。
> 状态：**已作答**（2026-09-02 凌晨），官方解析复判：**1.5/5（4.5/15）**。

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

## 答题区（2026-09-02 凌晨作答 · 官方解析已复判）

| 空号 | 我的答案 | 判 | 官方正解 |
| ---- | -------- | -- | -------- |
| (1)  | `implements` | ✅ | `implements` |
| (2)  | `WorkExperience obj = super();` | ❌ | `WorkExperience obj = new WorkExperience();` |
| (3)  | `work` | ❌ | `(WorkExperience)work.Clone();` |
| (4)  | `super();` | ❌ | `new Resume(this.work);` |
| (5)  | `a.Clone();` | △ 漏强转 | `(Resume)a.Clone();` |

---

## 复盘（官方解析复判，2026-09-02）

- **得分**：**1.5/5（4.5/15）**——(1) 3 分 + (5) 1.5 分
- **官方设计主线**：**私有构造器 = 克隆站**——`Resume.Clone()` 把 `this.work` **原件**传入，构造器内 `(WorkExperience)work.Clone()` 存**副本**；(4) 处类型匹配无需强转，强转只出现在「接住 `Clone()` 返回值」的 (3) 和 (5)
- **逐空对账**：
  - (1) ✅ `implements`
  - (2) ❌ `super()` 是**构造器调用语法**，只能出现在构造器首行且不可赋值；本题 `Clone()` 是自定义方法（大写 C），复制靠手工 `new` + 逐字段拷贝。真实 Java 惯用法是 `super.clone()`（返回 Object 仍需强转），但考题伪代码不用它
  - (3) ❌ 答 `work` 是存引用（浅拷贝）；正解 `(WorkExperience)work.Clone()`——克隆发生在私有构造器内
  - (4) ❌ 正解 `new Resume(this.work)`——把当前 work 引用交给私有构造器，绕过公共构造器（那个会 new 空 WorkExperience）
  - (5) △ 方向对、**漏 `(Resume)` 强转**——`Clone()` 返回 Object，与组合模式 `iterator.next()` 漏强转同型，**第二次复发**
- **错因**：
  - 深拷贝主线未建立：{(3) `work`, (4) `super()`} 组合下克隆从未发生，a、b **共享同一个 WorkExperience 对象**，`b.SetWorkExperience("2001~2006","YYY公司")` 会把张三 1998~2000 的经历一并改掉——正踩说明「每份简历中的工作经历有所不同」的红线
  - 工程 Java 惯用法（`super.clone()`）硬套考试伪代码（手工 new）
  - TS/JS 无强转习惯 → Object 返回值强转连续两题漏写
- **口令**：
  1. 考题自定义 `Clone()` → 复制一律 `new`；`super()` 只属于构造器首行
  2. 凡接住 `Object` 返回值（`Clone()/next()`）先强转——强转只出现在「接住返回值」处
  3. 引用类型字段必须 `Clone`（深拷贝），基本类型直接抄
  4. **私有构造器 = 克隆站：进的是原件，存的是副本**
- **判卷元教训**：助手重建 (3)(4) 时标「待核」并列两套自洽设计，官方取「构造器内克隆」；无官方解析时不可断言，判卷一律以官方答案为准
