import "./Signin.scss";
import { Link } from "react-router-dom";

function Signin() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="home">
      <div className="left">
        <h1 className="board">Board.</h1>
      </div>
      <div className="right">
        <h1 className="signin">Sign In</h1>
        <div>
          <b>Sign in to your account</b>
        </div>
        <button className="signinbtn" onClick={refreshPage}>
          Sign in with Google
        </button>
        <button className="signinbtn" onClick={refreshPage}>
          Sign in with Apple
        </button>
        <div className="box">
          <div className="title">
            <b>Email address</b>
          </div>
          <input type="text" className="inp" placeholder="johndoe@gmail.com" />
          <div className="title">
            <b>Password</b>
          </div>
          <input type="password" className="inp" placeholder="12345678" />
          <a href="/">Forgot Password?</a>
          <button onClick={refreshPage} className="button">
            Sign In
          </button>
        </div>
        <div className="dhc">
          <b>
            {"Don't have an account?"} <a href="/"> Register here</a>
          </b>
        </div>
      </div>
    </div>
  );
}

export default Signin;
