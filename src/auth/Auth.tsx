import { useSelector } from "react-redux";
import { FC } from "react";
import { AuthProps } from "../interface/interfaces";
import { Navigate } from "react-router-dom";
import { selectAuth } from "../redux/authSlice";

const Auth: FC<AuthProps> = ({ children }) => {
    const selectLogged = useSelector(selectAuth);
    return (
        <>
            {
                selectLogged ? children : <Navigate to="/login" />
            }
        </>
    )
}

export default Auth