import useBasic from "../hooks/use-basic";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstHasError,
    valueChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstBlurHandler,
    reset: firstReset,
  } = useBasic(isNotEmpty);
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastBlurHandler,
    reset: lastReset,
  } = useBasic(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useBasic(isEmail);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const submissionForm = (event) => {
    event.preventDefault();
    if (!enteredFirstNameIsValid) {
      return;
    }
    firstReset();
    lastReset();
    emailReset();
  };
  const firstClasses = firstHasError ? "form-control invalid" : "form-control";
  const lastClasses = lastHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={submissionForm}>
      <div className="control-group">
        <div className={firstClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            value={enteredFirstName}
            onChange={firstnameChangeHandler}
            onBlur={firstBlurHandler}
            type="text"
            id="firstName"
          />
        </div>
        {firstHasError && (
          <p className="error-text">FirstName must not be empty</p>
        )}
        <div className={lastClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            value={enteredLastName}
            onChange={lastnameChangeHandler}
            onBlur={lastBlurHandler}
            type="text"
            id="lastName"
          />
        </div>
        {lastHasError && (
          <p className="error-text">LastName must not be empty</p>
        )}
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
        />
      </div>
      {emailHasError && <p className="error-text">enter valid email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
