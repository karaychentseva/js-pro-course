import React, { useContext, useState } from "react";
import LangContext from "../../contexts/LangContext";
import FormValuesType from "../../types/FormValuesType";
import SubmitButton from "../ui/submit-button/SubmitButton";
import TextField from "../ui/text-field/TextField";
import "./Registration.scss";

type PropsType = {
}
const Registration: React.FC<PropsType> = () => {
    
    const [values, setValues] = useState<FormValuesType>({});

    const handleSubmit = () => {
        console.log(values);
    }

    const { lang } = useContext(LangContext);

    return (
        <div className="registration-container">
            <TextField
                autofocus={true}
                type="text"
                name="email"
                label={ lang === "en" ? "Enter Email:" : "Введите Email:" }
                values={values}
                setValues={setValues} />
            <TextField
                type="password"
                name="password"
                label={ lang === "en" ? "Enter Password:" : "Введите пароль:" }
                values={values}
                setValues={setValues} />
            <SubmitButton onClick={handleSubmit}>
            { lang === "en" ? "Meo!" : "Мяу!" }
            </SubmitButton>
        </div>
    )
}

export default Registration;
