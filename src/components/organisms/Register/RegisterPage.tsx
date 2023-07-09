import { Link, useNavigate } from "react-router-dom";
import { USERADD } from "../../../redux/userSlice";
import Form from "../../molecules/Form/Form"
import "./RegisterPage.css";
import { useDispatch } from "react-redux";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (username: string, password: string) => {
    dispatch(USERADD({ username, password }));
    navigate('/login');
  }

  return (
    <div className="register-page">
      <h1 className="register-page__title">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Link to="/login">Already have an account?</Link>
      </Form>
    </div>
  )
}

export default RegisterPage