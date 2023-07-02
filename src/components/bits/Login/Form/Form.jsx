import React from "react";
import { useState } from "react";
import useInputs from "../../../../hooks/use-input";

const Form = () => {
    const [error,setError] = useState(false)
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    InputChangeHandler: emailInputChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailResetHandler,
  } = useInputs((value) => value.includes("@"));
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    InputChangeHandler: passwordInputChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: passwordResetHandler,
  } = useInputs((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();


    if (!formIsValid) {
      console.log("error");
      setError(true)
      return;
    }

    console.log(enteredEmail);
    console.log(enteredPassword);

    passwordResetHandler();
    emailResetHandler();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="w-full mb-3">
        <input
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          className="w-full p-2 rounded-md outline-none border-[1px]  border-primary-color"
          type="email"
          placeholder="Email address"
        />
      </div>
      <div className="w-full mb-3">
        <input
          onChange={passwordInputChangeHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
          className="w-full p-2 outline-none rounded-md border-[1px] border-primary-color"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="flex justify-between my-3">
        <div className="flex gap-1">
          <input type="checkbox" />
          <p> Remember me</p>
        </div>
        <p>Forgot password</p>
      </div>
      <button type="submit" className="bg-primary-color text-gray-500 w-full my-2 p-2 rounded-md">
        Login
      </button>
    </form>
  );
};

export default Form;
