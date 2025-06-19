
class BadLoggerFixedWithDI {
  private static instance: BadLoggerFixedWithDI;

  private constructor() { }

  public static getInstance(): BadLoggerFixedWithDI {
    if (!BadLoggerFixedWithDI.instance) {
      BadLoggerFixedWithDI.instance = new BadLoggerFixedWithDI();
    }
    return BadLoggerFixedWithDI.instance;
  }

  log(message: string, user: string) {
    console.log(`[${user}] ${message}`);
  }
}

// Можна кількома способами вирішити проблему логера з прикладу з поганим використанням,
// Один з способів - використовувати DI і передaвати у логер параметром ім'я користувача

// Користувач DI
const loggerDI = BadLoggerFixedWithDI.getInstance();
loggerDI.log("Hello world", "user DI");


// Інший спосіб - створити клас логер, де ми будемо зберігати стан користувача 
// і таким чином логувати з коректними даними, але тоді це вже буде не singleton

class BadLoggerFixedFactory {
  private user: string;

  constructor(name: string) {
    this.user = name;
  }

  log(message: string) {
    console.log(`[${this.user}] ${message}`);
  }
}

const loggerFactory = new BadLoggerFixedFactory("user Factory");
loggerFactory.log("Hello world");

