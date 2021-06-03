class UserError extends Error {
  constructor(message) {
    super(message);

    this.name = "UserError";
    this.userId = undefined;

    // 将 UserError 从跟踪栈中排除
    Error.captureStackTrace(this, this.constructor);
  }
}

throw new UserError("invalid action");
