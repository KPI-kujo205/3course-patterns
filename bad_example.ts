class BadLogger {
  private static instance: BadLogger;
  private currentUser: string | null = null;

  private constructor() { }

  public static getInstance(): BadLogger {
    if (!BadLogger.instance) {
      BadLogger.instance = new BadLogger();
    }
    return BadLogger.instance;
  }

  setUser(user: string) {
    this.currentUser = user;
  }

  log(message: string) {
    console.log(`[${this.currentUser}] ${message}`);
  }
}

// Це використання Singleton остаточно приведе до помилки, оскільки
// тут зберігається state (користувач), тому тут точно будуть Race Conditions в середовищі
// з багатьма користувачаами системи,
// і користувачі будуть 'переписувати' логування одне одному

// Користувач A
const loggerA = BadLogger.getInstance();
loggerA.setUser("userA");

// Користувач B, майже одночасно
const loggerB = BadLogger.getInstance();
loggerB.setUser("userB");

loggerA.log("створив запис");

