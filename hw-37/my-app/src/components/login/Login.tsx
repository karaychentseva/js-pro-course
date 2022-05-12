import React, { useState } from "react";
import useTranslate from "../../hooks/useTranslate";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import FormValuesType from "../../types/FormValuesType";
import SubmitButton from "../ui/submit-button/SubmitButton";
import TextField from "../ui/text-field/TextField";
import "./Login.scss";

type PropsType = {
}
const Login: React.FC<PropsType> = () => {
    
    const [values, setValues] = useState<FormValuesType>({});

    const { t } = useTranslate()
    const { createTokens } = useActions();
    const loading = useSelector(state => state.auth.loading);
    const error = useSelector(state => state.auth.error);

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        createTokens(values);
    }


    return (
        <div className="login-container" >
            {loading &&
                <div className="form-loading">
                    Loading...
                </div>
            }
            {error &&
                <div className="form-error">
                    No active account found with the given credentials
                </div>
            }

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

export default Login;
