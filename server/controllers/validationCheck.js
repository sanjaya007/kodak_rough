import responder from "./messageResponder.js";
import {
  trimmedBody,
  isAllEmpty,
  isAlphabetOnly,
  isNumericOnly,
  isAnySymbol,
  isUsernameLengthValid,
  isValidMail,
  isValidPassword,
  isContactLengthValid,
} from "./validationList.js";

const validationCheck = (res, rawBody) => {
  const body = trimmedBody(rawBody);

  if (isAllEmpty(body)) {
    responder(res, 200, "error", null, "All fields are required !!");
    return false;
  }

  for (const key in body) {
    if (body[key] === "") {
      responder(res, 200, "error", key, `${key} is required !`);
      return false;
    }
  }

  if (!isAlphabetOnly(body.firstname)) {
    responder(
      res,
      200,
      "error",
      "firstname",
      `Only alphabets are allowed in firstname !`
    );
    return false;
  }

  if (!isAlphabetOnly(body.lastname)) {
    responder(
      res,
      200,
      "error",
      "lastname",
      `Only alphabets are allowed in lastname !`
    );
    return false;
  }

  if (isAnySymbol(body.username)) {
    responder(
      res,
      200,
      "error",
      "username",
      `Symbols are not allowed in username !`
    );
    return false;
  }

  if (isAnySymbol(body.username)) {
    responder(
      res,
      200,
      "error",
      "username",
      `Symbols are not allowed in username !`
    );
    return false;
  }

  if (!isUsernameLengthValid(body.username)) {
    responder(
      res,
      200,
      "error",
      "username",
      `Must use 5-15 characters in username !`
    );
    return false;
  }

  if (!isValidMail(body.email)) {
    responder(res, 200, "error", "email", `Enter valid email address !`);
    return false;
  }

  if (!isValidPassword(body.password)) {
    responder(
      res,
      200,
      "error",
      "password",
      "Password must contain at least one lowercase, uppercase, number and special characters of 8-15 length !"
    );
    return false;
  }

  if (!isNumericOnly(body.contact)) {
    responder(
      res,
      200,
      "error",
      "contact",
      "Only numeric value are allowed in contact !"
    );
    return false;
  }

  if (!isContactLengthValid(body.contact)) {
    responder(
      res,
      200,
      "error",
      "contact",
      "Contact number should be 10 characters length !"
    );
    return false;
  }

  return body;
};

export default validationCheck;
