class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

function saveUser(input) {
  if (!input) {
    throw new ReferenceError("It's necessary to send the 'input'.");
  }

  if (!input.name) {
    throw new ValidationError("It's necessary to fill in your full name.");
  }

  if (!input.username) {
    throw new ValidationError("It's necessary to fill in your username");
  }

  if (!input.age) {
    throw new ValidationError("It's necessary to fill in your age");
  }
}

try {
  saveUser({});
} catch (error) {
  if (error instanceof ReferenceError) {
    throw error;
  }

  if (error instanceof ValidationError) {
    console.log(error);
  }

  console.log("Unknown error");
  console.log(error.stack);
}
