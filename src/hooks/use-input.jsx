import React, { useReducer } from "react";

const initialState = {isTouched:false, enteredValue: ""}

const inputReducer = (state, action) => {
    if (action.type === "INPUT-HANDLER") {
        return { isTouched:state.isTouched, enteredValue:action.value }
    }
    if (action.type === "BLUR") {
        return { isTouched:true, enteredValue:state.enteredValue }
    }
    if (action.type === "RESET") {
        return { isTouched:false, enteredValue:"" }
    }

    return initialState
}

const useInputs = (validateValue) => {
    const [inputState, dispatchInputs] =useReducer(inputReducer, initialState)

  const enteredValueIsValid = validateValue(inputState.enteredValue);
  const hasError = !enteredValueIsValid && inputState.isTouched;

  const InputChangeHandler = (event) => {
    dispatchInputs ({type: "INPUT-HANDLER", value: event.target.value })
  };

  const blurHandler = (event) => {
    dispatchInputs ({type: "BLUR"})
  };

  const reset = () => {
    dispatchInputs({type: "RESET"})

  }

  return {
    value: inputState.enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    InputChangeHandler,
    blurHandler,
    reset,
  };
};



export default useInputs;