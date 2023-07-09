import { Link, useNavigate } from "react-router-dom";
import { USERLOG, selectUsers } from "../../../redux/userSlice";
import Form from "../../molecules/Form/Form"
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../../interface/interfaces";
import { LOGIN } from "../../../redux/authSlice";
const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selector = useSelector(selectUsers);
    const handleLogin = (username: string, password: string) => {
        const isLogged = selector.some((item: User) => item.username === username && item.password === password);
        const user = selector.find((item: any) => item.username === username)
        if (isLogged) {
            dispatch(LOGIN());
            dispatch(USERLOG(user))
        }
        navigate('/')
    };

    return (
        <div className="login-page">
            <h1 className="login-page__title">Login</h1>
            <Form onSubmit={handleLogin}>
                <Link to="/register">Still don't have an account?</Link>
            </Form>
        </div>
    )
}

export default LoginPage