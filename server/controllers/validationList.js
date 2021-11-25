const trimmedBody = (obj) => {
  return Object.keys(obj).reduce((acc, value) => {
    acc[value] = obj[value].trim();
    return acc;
  }, {});
};

const isAllEmpty = (body) => {
  if (
    body.firstname === "" &&
    body.lastname === "" &&
    body.username === "" &&
    body.email === "" &&
    body.password === "" &&
    body.birthdate === "" &&
    body.gender === "" &&
    body.contact === ""
  )
    return true;
};

const isAlphabetOnly = (value) => {
  const regx = /^[A-Za-z]+$/;
  if (value.match(regx)) {
    return true;
  }
};

const isNumericOnly = (value) => {
  const regx = /^(0|[1-9]\d*)$/;
  if (value.match(regx)) {
    return true;
  }
};

const isAnySymbol = (value) => {
  const regx = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (value.match(regx)) {
    return true;
  }
};

const isUsernameLengthValid = (value) => {
  const len = value.length;
  if (len >= 5 && len <= 15) {
    return true;
  }
};

const isValidMail = (value) => {
  const regx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (value.match(regx)) {
    return true;
  }
};

const isValidPassword = (value) => {
  const regx =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (value.match(regx)) {
    return true;
  }
};

const isContactLengthValid = (value) => {
  const len = value.length;
  if (len === 10) {
    return true;
  }
};

export {
  trimmedBody,
  isAllEmpty,
  isAlphabetOnly,
  isNumericOnly,
  isAnySymbol,
  isUsernameLengthValid,
  isValidMail,
  isValidPassword,
  isContactLengthValid,
};
