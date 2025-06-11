import { createRouter } from "next-connect";
import controller from "infra/controller.js";
import user from "models/user.js";
import password from "models/password.js";
import { UnauthorizedError } from "infra/errors.js"

const router = createRouter();

router.post(postHandler);

export default router.handler(controller.errorHandlers);

async function postHandler(request, response) {
  const userInputValues = request.body;

  try{
    const storedUser = await user.findOneByEmail(userInputValues.email)
    const correctPasswordMatch = await password.compare(userInputValues.password, storedUser.password)

    if(!correctPasswordMatch){
      throw new UnauthorizedError({
      message: "The password is wrong.",
      action: "Check if the data is right."
    })
    }
  } catch(error){
    throw new UnauthorizedError({
      message: "The authentication data is not correct.",
      action: "Check if the data is right."
    })
  }

  return response.status(201).json({});
}
