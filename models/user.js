import database from "infra/database.js";
import { ValidationError, NotFoundError } from "infra/errors.js";

async function findOnByUsername(username) {
  const userFound = await runSelectQuery(username);

  return userFound;

  async function runSelectQuery(username) {
    const results = await database.query({
      text: `
            SELECT
              *
            FROM
              users
            WHERE
              LOWER(username) = LOWER($1)
            LIMIT 
              1
            ;`,
      values: [username],
    });

    if (results.rowCount === 0) {
      throw new NotFoundError({
        message: "Username not found in system.",
        action: "Check if the username was typed correctly.",
      });
    }

    return results.rows[0];
  }
}

async function create(userInputValues) {
  await validateUniqueEmail(userInputValues.email);
  await validateUniqueUsername(userInputValues.username);

  const newUser = await runInsertQuery(userInputValues);
  return newUser;

  async function validateUniqueEmail(email) {
    const results = await database.query({
      text: `
            SELECT
              email
            FROM
              users
            WHERE
              LOWER(email) = LOWER($1)
            ;`,
      values: [email],
    });

    if (results.rowCount > 0) {
      throw new ValidationError({
        message: "The email provided is already in use.",
        action: "Use another email to register.",
      });
    }
  }

  async function validateUniqueUsername(username) {
    const results = await database.query({
      text: `
            SELECT
              username
            FROM
              users
            WHERE
              LOWER(username) = LOWER($1)
            ;`,
      values: [username],
    });

    if (results.rowCount > 0) {
      throw new ValidationError({
        message: "The username provided is already in use.",
        action: "Use another username to register.",
      });
    }
  }

  async function runInsertQuery(userInputValues) {
    const results = await database.query({
      text: `
            INSERT INTO
              users (username, email, password)
            VALUES
              ($1, $2, $3)
            RETURNING
              *
            ;`,
      values: [
        userInputValues.username,
        userInputValues.email,
        userInputValues.password,
      ],
    });
    return results.rows[0];
  }
}

const user = {
  create,
  findOnByUsername,
};

export default user;
