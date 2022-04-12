import React, { useContext, useState } from "react";
import LangContext from "../../contexts/LangContext";
import SubmitButton from "../ui/submit-button/SubmitButton";
import TextField from "../ui/text-field/TextField";
import "./Registration.scss";

type PropsType = {
}
const Registration: React.FC<PropsType> = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
      console.log({ email, password });
    }

    const { lang } = useContext(LangContext);

    return (
        <div className="registration-container">
            <TextField
                autofocus={true}
                type="text"
                name="email"
                label={ lang === "en" ? "Enter Email:" : "Введите Email:" }
                value={email}
                setValue={setEmail} />
            <TextField
                type="password"
                name="password"
                label={ lang === "en" ? "Enter Password:" : "Введите пароль:" }
                value={password}
                setValue={setPassword} />
            <SubmitButton onClick={handleSubmit}>
            { lang === "en" ? "Meo!" : "Мяу!" }
            </SubmitButton>
        </div>
    )
}

export default Registration;
