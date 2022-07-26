import "./login.styles.scss";
import Input from "../input-component/input-component";
const Login = () => {
  return (
    <div className="login">
      <p className="title">Login</p>
      <Input type="text" value="" name="Username" />
      <Input type="password" value="" name="Password" />
      <input type="submit" value="Login" className="button" />
    </div>
  );
};

export default Login;
