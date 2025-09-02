import user from "models/user.js";
import password from "models/password.js";
import { UnauthorizedError } from "infra/errors.js";

async function getAuthenticatedUser(providedEmail, providedPassword) {
  const storedUser = await user.findOneByEmail(providedEmail);
  const correctPasswordMatch = await password.compare(
    providedPassword,
    storedUser.password
  );

  if (!correctPasswordMatch) {
    throw new UnauthorizedError({
      message: "The password is wrong.",
      action: "Check if the data is right.",
    });
  }

  return storedUser;
}

const authentication = { getAuthenticatedUser };

export default authentication;
