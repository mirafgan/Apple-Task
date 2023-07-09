import { ChangeEvent, FormEvent, useState } from "react";
import "./Form.css";
import Button from "../../atoms/Button/Button";
import { FormProps } from "../../../interface/interfaces";
import Input from "../../atoms/Input/Input";




const Form = ({ onSubmit, children }: FormProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(username, password);
        setUsername('');
        setPassword('');
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <Input
                    type="text"
                    placeholder="Your username"
                    value={username}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    className="form__input"
                />
                <Input
                    type="password"
                    placeholder="Your password"
                    value={password}
                    className="form__input"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                {children}
                {/* @ts-ignore */}
                <Button onClick={handleSubmit} className="button">
                    Submit
                </Button>
            </form>
        </>
    )
}

export default Form