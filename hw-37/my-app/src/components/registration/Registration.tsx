import React, { useState } from "react";
import useTranslate from "../../hooks/useTranslate";
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

    const { t } = useTranslate()

    return (
        <div className="registration-container">
            <TextField
                autofocus
                type="text"
                name="email"
                label={t("registration.email")}
                values={values}
                setValues={setValues}
            />
            <TextField
                type="password"
                name="password"
                label={t("registration.password")}
                values={values}
                setValues={setValues}
            />
            <SubmitButton onClick={handleSubmit}>
                {t("registration.submit")}
            </SubmitButton>
        </div>
    )
}

export default Registration;
