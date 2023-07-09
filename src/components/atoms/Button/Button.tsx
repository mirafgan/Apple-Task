import "./Button.css";
import { ButtonProps } from "../../../interface/interfaces";

const Button = (props: ButtonProps) => {
    const { children } = props
    return (
        <button {...props}>{children}</button>
    )
}

export default Button;