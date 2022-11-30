import useInputCustom from '../hooks/hook-input';

const fieldIsNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = ( props ) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueFieldChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInputCustom(fieldIsNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueFieldChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInputCustom(fieldIsNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueFieldChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInputCustom(isEmail);

  let entireFormIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    entireFormIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!entireFormIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">You must enter a first name.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">You must enter a last name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">You must enter a valid email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!entireFormIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
