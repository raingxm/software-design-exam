# 2024 年上半年 · 下午试题六 · 原型模式（Prototype）

> 共 15 分，每空 3 分。
> 来源：刷题 App（飞书截图 + 本地 OCR 转写，2026-09-02）。
> 状态：**待作答**（计划明早完成，答后在本文件「答题区」填写，并回 `practice/README.md` 记录）。

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

## 答题区

| 空号 | 答案 |
| ---- | ---- |
| (1)  |      |
| (2)  |      |
| (3)  |      |
| (4)  |      |
| (5)  |      |

---

## 复盘（作答后填写）

- 得分：
- 逐空对账：
- 错因 / 口令：
