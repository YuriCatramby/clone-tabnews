export class InternalServerError extends Error {
  constructor({ cause }) {
    super("An unexpected error ocurred.", {
      cause: cause,
    });
    this.name = "InternalServerError";
    this.action = "Contact suport";
    this.statusCode = 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
