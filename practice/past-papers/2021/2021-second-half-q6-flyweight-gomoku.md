# 2021 年下半年 · 下午试题六 · 享元模式（Flyweight · 五子棋）

> 共 15 分，每空 3 分。
> 来源：用户自带真题（2026-09-14 闭卷作答）。
> 状态：**已作答**（2026-09-14），官方解析复判：**4/5（12/15）**。
> 失分空：(1) 缺 `abstract` 关键字。

## 题目

阅读下列说明和 Java 代码，将应填入 `___(n)___` 处的语句写在答题纸的对应栏内。

### 【说明】

享元（FlyWeight）模式主要用于减少创建对象的数量，以降低内存占用，提高性能。先要开发一个网络围棋程序，允许多个玩家联机下棋。由于只有一台服务器，为节省内存空间，采用享元模式实现该程序，得到如图 6-1 所示的类图。

### 【类图】

- `PieceBorad` ◇—> `Piece`（聚合，棋盘持有多颗棋子）
- `Piece` —> `PiecePos`（每颗棋子持有位置）
- `BlackPiece` △—> `Piece`、`WhitePiece` △—> `Piece`（泛化 / 继承）

### 【Java 代码】

```java
import java.util.*;

enum PieceColor { BLACK, WHITE } // 棋子颜色

class PiecePos { // 棋子位置
    private int x;
    private int y;
    public PiecePos(int a, int b) { x = a; y = b; }
    public int getX() { return x; }
    public int getY() { return y; }
}

abstract class Piece { // 棋子定义
    protected PieceColor m_color; // 颜色
    protected PiecePos m_pos;     // 位置
    public Piece(PieceColor color, PiecePos pos) {
        m_color = color;
        m_pos = pos;
    }
    ___(1)___;
}

class BlackPiece extends Piece {
    public BlackPiece(PieceColor color, PiecePos pos) {
        super(color, pos);
    }
    public void draw() { System.out.println("draw a blackpiece"); }
}

class WhitePiece extends Piece {
    public WhitePiece(PieceColor color, PiecePos pos) {
        super(color, pos);
    }
    public void draw() { System.out.println("white a blackpiece"); }
}

class PieceBoard { // 棋盘上已有的棋子
    private static final ArrayList<___(2)__> m_arrayPiece = new ArrayList();
    private String m_blackName; // 黑方名称
    private String m_whiteName; // 白方名称
    public PieceBoard(String black, String white) {
        m_blackName = black;
        m_whiteName = white;
    }

    // 一步棋，在棋盘上放一颗棋子
    public void SetPiece(PieceColor color, PiecePos pos) {
        ___(3)__ piece = null;
        if (color == PieceColor.BLACK) { // 放黑子
            piece = new BlackPiece(color, pos); // 获取一颗黑子
            System.out.println(m_blackName + "在位置(" + pos.getX() + ","
                                               + pos.getY() + ")");
            ___(4)__;
        } else { // 放白子
            piece = new WhitePiece(color, pos); // 获取一颗白子
            System.out.println(m_whiteName + "在位置(" + pos.getX() + ","
                                               + pos.getY() + ")");
            ___(5)__;
        }
        m_arrayPiece.add(piece);
    }
}
```

## 作答与判分

| 空 | 用户作答 | 官方答案 | 判 |
|---|---|---|---|
| (1) | `public void draw();` | `public abstract void draw();` | **✗ 缺 `abstract`** |
| (2) | `Piece` | `Piece` | ✓ |
| (3) | `Piece` | `Piece` | ✓ |
| (4) | `piece.draw()` | `piece.draw()` | ✓ |
| (5) | `piece.draw()` | `piece.draw()` | ✓ |

**得分：4/5 = 12/15**（每空 3 分）。

## 错因（(1) 缺 `abstract` 关键字）

`Piece` 是 `abstract class`，类内**无方法体的方法必须显式标 `abstract`**：

```java
abstract class Piece {
    public abstract void draw();   // 正确
    public void draw();            // 语法错：既无 abstract 又无方法体
}
```

误以为只要放在 `abstract class` 里就自动是抽象方法——不是。`abstract` 关键字要写出来。

> **新口令（9/14 加入）**：`abstract class` 里**无方法体的方法 = 抽象方法 = 必须写 `abstract` 关键字**。

## 五坑覆盖盘点

| 风险点 | 本题是否打中 |
|---|---|
| 私有构造器"克隆站" | ❌ |
| 深浅克隆 | ❌ |
| 原生集合 API（`ArrayList` + `add()`） | ✅ |
| `Object` 返回值强转 | ❌ |
| 抽象方法声明 / 构造器带参 | ✅（但因缺 `abstract` 反成扣分点） |

→ 本题覆盖了**集合 API** 与**抽象类语法**；**克隆站 / 深浅克隆 / 强转**三坑仍待打。下一个 Java 题应挑有 `Object` 强转或私有构造器克隆站的题。
