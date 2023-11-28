import { useState } from "react";

const useBasic = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouced] = useState(false);

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouced(true);
  };
  const reset = () => {
    setValue("");
    setIsTouced(false);
  };
  return {
    value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useBasic;
