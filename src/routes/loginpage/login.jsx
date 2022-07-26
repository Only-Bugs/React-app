import Login from "../../components/login/login-componetn";
import Registration from "../../components/registration.component/registration.component";
import { ReactComponent as OR } from "../../assets/or.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Apple } from "../../assets/apple.svg";
import { ReactComponent as Google } from "../../assets/google.svg";
import "./login.styles.scss";

const LoginPage = () => {
  return (
    <div className="login-parent">
      <div className="signin">
        {/* login */}
        <Login />
        {/* or */}
        <OR className="or" />
        {/* registration */}
        <Registration />
      </div>
      <br />
      <p>Login using</p>
      <div className="other-sign-options">
        <Facebook className="icon" />
        <Apple className="icon" />
        <Google className="icon" />
      </div>
    </div>
  );
};

export default LoginPage;
