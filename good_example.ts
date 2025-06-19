class Logger {
  private static instance: Logger;
  private constructor() { }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }
}

// В цьому прикладі логер не має стейту, 
// окрім використання змінної instance,
// тому це гарне використання Singleton

// Десь у коді
const logger = Logger.getInstance();
logger.log("Сервер запущено");

// В іншому модулі
const anotherLogger = Logger.getInstance();
anotherLogger.log("Користувач авторизувався");

console.log(logger === anotherLogger); // true ✅
