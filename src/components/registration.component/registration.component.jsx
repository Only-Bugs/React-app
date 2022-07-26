import "./registration.styles.scss";
import Input from "../input-component/input-component";
const Registration = () => {
  return (
    <div className="register">
      <p className="title">Registration</p>
      <Input type="email" value="" name="Email" />
      <Input type="text" value="" name="Username" />
      <Input type="password" value="" name="Password" />
      <Input type="password" value="" name="Confirm Password" />
      <input type="submit" value="Register" className="button" />
    </div>
  );
};

export default Registration;
