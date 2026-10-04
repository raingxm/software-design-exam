// 日志级别：一条日志只能是 INFO、WARN、ERROR 中的一种。
enum LogLevel {
    INFO,
    WARN,
    ERROR
}

/*
 * 抽象处理者（Handler）
 *
 * 它完成两件事：
 * 1. 保存责任链中的“下一个处理者”；
 * 2. 规定统一处理流程：自己处理不了，就传给下一个处理者。
 */
abstract class Logger {
    private Logger nextLogger;

    // 把另一个 Logger 接到当前 Logger 的后面。
    public void setNext(Logger nextLogger) {
        this.nextLogger = nextLogger;
    }

    /*
     * 客户端统一调用的方法。
     *
     * 客户端不需要判断应该调用 ConsoleLogger、FileLogger
     * 还是 ErrorLogger。这个判断由责任链内部完成。
     */
    public void log(LogLevel level, String message) {
        if (canHandle(level)) {
            // 当前处理者能处理：记录日志，并结束本次传递。
            write(message);
            return;
        }

        // 当前处理者不能处理：把同一个请求交给下一个处理者。
        System.out.println(getName() + " 不能处理 " + level + "，传给下一个处理者");

        if (nextLogger != null) {
            nextLogger.log(level, message);
        } else {
            // 已经到达链尾，仍然没有合适的处理者。
            System.out.println("责任链结束，没有对象能够处理：" + message);
        }
    }

    // 每个具体 Logger 自己决定能够处理哪种级别。
    protected abstract boolean canHandle(LogLevel level);

    // 每个具体 Logger 自己决定如何记录日志。
    protected abstract void write(String message);

    protected String getName() {
        return getClass().getSimpleName();
    }
}

// 具体处理者 1：只处理 INFO。
class ConsoleLogger extends Logger {
    @Override
    protected boolean canHandle(LogLevel level) {
        return level == LogLevel.INFO;
    }

    @Override
    protected void write(String message) {
        System.out.println("ConsoleLogger 在控制台记录：" + message);
    }
}

// 具体处理者 2：只处理 WARN。
class FileLogger extends Logger {
    @Override
    protected boolean canHandle(LogLevel level) {
        return level == LogLevel.WARN;
    }

    @Override
    protected void write(String message) {
        System.out.println("FileLogger 向文件记录：" + message);
    }
}

// 具体处理者 3：只处理 ERROR。
class ErrorLogger extends Logger {
    @Override
    protected boolean canHandle(LogLevel level) {
        return level == LogLevel.ERROR;
    }

    @Override
    protected void write(String message) {
        System.out.println("ErrorLogger 向错误中心记录：" + message);
    }
}

// 客户端（Client）和程序入口。
public class ChainOfResponsibilityDemo {
    public static void main(String[] args) {
        // 第一步：创建三个处理者对象。
        Logger consoleLogger = new ConsoleLogger();
        Logger fileLogger = new FileLogger();
        Logger errorLogger = new ErrorLogger();

        // 第二步：把它们连接成一条责任链。
        // ConsoleLogger -> FileLogger -> ErrorLogger
        consoleLogger.setNext(fileLogger);
        fileLogger.setNext(errorLogger);

        // 第三步：客户端始终只把请求交给链首 consoleLogger。
        System.out.println("===== 发送 INFO 日志 =====");
        consoleLogger.log(LogLevel.INFO, "服务启动完成");

        System.out.println();
        System.out.println("===== 发送 WARN 日志 =====");
        consoleLogger.log(LogLevel.WARN, "磁盘空间不足");

        System.out.println();
        System.out.println("===== 发送 ERROR 日志 =====");
        consoleLogger.log(LogLevel.ERROR, "数据库连接失败");
    }
}
