import user from "models/user.js";
import password from "models/password.js";
import { NotFoundError, UnauthorizedError } from "infra/errors.js";

async function getAuthenticatedUser(providedEmail, providedPassword) {
  try {
    const storedUser = await findOneByEmail(providedEmail);
    await validatePassword(providedPassword, storedUser.password);

    return storedUser;
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      throw new UnauthorizedError({
        message: "The authentication data is not correct.",
        action: "Check if the data is right.",
      });
    }

    throw error;
  }

  async function findOneByEmail(providedEmail) {
    let storedUser;

    try {
      storedUser = await user.findOneByEmail(providedEmail);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new UnauthorizedError({
          message: "The email is wrong.",
          action: "Check if the data is right.",
        });
      }
      throw error;
    }

    return storedUser;
  }

  async function validatePassword(providedPassword, storedPpassword) {
    const correctPasswordMatch = await password.compare(
      providedPassword,
      storedPpassword,
    );

    if (!correctPasswordMatch) {
      throw new UnauthorizedError({
        message: "The password is wrong.",
        action: "Check if the data is right.",
      });
    }
  }
}

const authentication = { getAuthenticatedUser };

export default authentication;
