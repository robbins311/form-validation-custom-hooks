import { useState, useReducer } from "react";

// useSTate, useReducer 두개 사용

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    console.log(state);
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    console.log(state);
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return {
    value: "",
    isTouched: false,
  };
};
const useBasic = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // const [value, setValue] = useState("");
  // const [isTouched, setIsTouced] = useState(false);

  // const valueIsValid = validateValue(value);
  // const hasError = !valueIsValid && isTouched;

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
    // setValue(e.target.value);
  };
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
    // setIsTouced(true);
  };
  const reset = () => {
    dispatch({ type: "RESET" });
    // setValue("");
    // setIsTouced(false);
  };
  return {
    value: inputState.value,
    // value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useBasic;
