# SQL 读懂（辨型过关）

> 第 9 章 · 上午读结果 / 找错句；C 档不手写复杂嵌套  
> 来源：2026-08-18 · 辨型 5 题过关（第 1 题口径订正：WHERE 与 GROUP BY 可以同时有）  
> 开场：[01-database-entry](../09-database/01-database-entry.md) · 前置：[31 ER](./31-er-model-tutorial.md)

---

## 总口令

```text
WHERE 过滤行；HAVING 过滤分组
JOIN 横着拼表；GROUP BY 竖着汇总
投影 = SELECT 哪些列；选择 = WHERE 哪些行
INNER 两边都有才留；LEFT 左表全留、右表没有就空
WHERE 在分组前；HAVING 在分组后。两者可以同时有。
聚合函数（AVG/COUNT/SUM）不能进 WHERE，要进 HAVING。
```

---

## 一、续用选课三表

```text
学生(学号, 姓名, 系编号)
  S01 张三 D1
  S02 李四 D1
  S03 王五 D2     ← 没选课

课程(课程号, 课程名)
  C01 数据库
  C02 网络
  C03 操作系统     ← 没人选

选修(学号, 课程号, 成绩)
  S01 C01 90
  S01 C02 85
  S02 C01 78
```

骨架（执行顺序心里按这个想，不必背官方）：

```text
FROM / JOIN  →  WHERE  →  GROUP BY  →  HAVING  →  SELECT  →  ORDER BY
先拼表         滤行       分组         滤组        挑列       排序
```

---

## 二、三处最常考

### 1) WHERE vs HAVING

```sql
SELECT 课程号, AVG(成绩) AS 均分
FROM 选修
GROUP BY 课程号
HAVING AVG(成绩) >= 80;
```

`AVG(成绩)` 是分组之后才有的数，不能写在 WHERE 里。  
WHERE 管「这一行要不要」；HAVING 管「这一组要不要」。

**可以同时写 WHERE 和 GROUP BY**——WHERE 先扔掉不合格的行，再分组，再用 HAVING 扔不合格的组：

```sql
SELECT 课程号, AVG(成绩) AS 均分
FROM 选修
WHERE 成绩 IS NOT NULL          -- 先丢掉成绩为空的行
GROUP BY 课程号
HAVING AVG(成绩) >= 80;         -- 再丢掉均分不够的组
```

错的是「聚合函数进了 WHERE」，不是「有 GROUP BY 就不能有 WHERE」。

### 2) INNER JOIN vs LEFT JOIN

```sql
-- INNER：没选课的王五消失
SELECT 学生.姓名, 选修.课程号
FROM 学生 INNER JOIN 选修 ON 学生.学号 = 选修.学号;

-- LEFT：王五还在，课程号是空
SELECT 学生.姓名, 选修.课程号
FROM 学生 LEFT JOIN 选修 ON 学生.学号 = 选修.学号;
```

从课程出发 LEFT JOIN 选修 → 没人选的 C03 还在。INNER 会丢掉 C03。

### 3) 聚合 + NULL

`COUNT(*)` 数行；`COUNT(成绩)` 数非空成绩。  
一行成绩是 NULL，前者算它，后者不算。

增删改认读即可：`INSERT` 加行，`UPDATE … SET … WHERE` 改行，`DELETE FROM … WHERE` 删行。WHERE 丢了会改/删全表。

---

## 三、和关系代数的对照（上午偶见）

| 代数 | SQL 直觉 |
|------|----------|
| 选择 σ | WHERE |
| 投影 π | SELECT 列 |
| 连接 ⋈ | JOIN … ON |

`σ_{成绩>=90}(选修)` ≈ `SELECT * FROM 选修 WHERE 成绩 >= 90`

---

## 四、易混

| 对比 | 怎么分 |
|------|--------|
| WHERE vs HAVING | 行 vs 组；聚合函数进 HAVING。WHERE+GROUP BY 合法 |
| INNER vs LEFT | 匹配不上的行：INNER 扔，LEFT 留左表 |
| COUNT(*) vs COUNT(列) | 所有行 vs 该列非空 |

---

## 五、已过关例题

| # | 场景 | 答 |
|---|------|-----|
| 1 | WHERE AVG(成绩)>=80 GROUP BY | 错在聚合进了 WHERE。改 HAVING。**WHERE 与 GROUP BY 可以同时有** |
| 2 | 学生 LEFT / INNER JOIN 选修 | LEFT：王五还在；INNER：王五消失 |
| 3 | 课程 LEFT JOIN 选修 | 没人选的操作系统**还在** |
| 4 | 有一行成绩 NULL | **COUNT(*)** 更大 |
| 5 | σ_{成绩>=90}(选修) | **选择**；`WHERE 成绩 >= 90` |

---

## 下一步

开场白：「开始第 9 章，事务与隔离级别」——ACID + 脏读 / 不可重复读 / 幻读。这是第 9 章概念块最后一刀。
