import React, { useState } from "react";
const Login = () => {
  const [mobie, setMobile] = useState();
  const [showMobileError, setShowMobileError] = useState(false);
  const onChangerHandler = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = () => {
    if (!mobie) {
      setShowMobileError(true);
      return;
    }
  };

  return (
    <div className="form-container">
      <h1>Welcome to Sequence</h1>
      <form>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobie"
            placeholder="+91 Enter Mobile"
            value={mobie}
            onChange={(e) => onChangerHandler(e)}
          />
        </div>
        {showMobileError && !mobie ? (
          <p className="eror">Please enter your mobile</p>
        ) : null}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" />
        </div>
        <p className="eror">Please enter your Password</p>
        <button type="button" onClick={() => handleSubmit()}>
          Login
        </button>
        <p className="forgot-password">Forgot Password</p>
      </form>
    </div>
  );
};

export default Login;
