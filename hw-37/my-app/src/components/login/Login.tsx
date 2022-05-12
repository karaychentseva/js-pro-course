import React, { useState } from "react";
import { getEmailError, getPasswordError } from "../../helpers/validation";
import { CircularProgress } from '@mui/material';
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
    
    const [values, _setValues] = useState<FormValuesType>({});

    const [validationsError, setValidationsError] = useState("");
    const { t } = useTranslate()
    const { createTokens, setAuthError } = useActions();
    const loading = useSelector(state => state.auth.loading);
    const serverError = useSelector(state => state.auth.error);
    const error: string = validationsError || (serverError ? "No active account found with the given credentials" : "");

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const validationError = getEmailError(values.email) || getPasswordError(values.password);
        if (validationError) {
            setValidationsError(validationError);
        } else {
            createTokens(values);
        }
    }
    const setValues = (callback: (prevValue: FormValuesType) => FormValuesType) => {
        _setValues(callback)
        setValidationsError("");
        setAuthError(false);
    }
    return (
        <div className="login-container" >
            {loading &&
                <div className="form-loading">
                    <CircularProgress/>
                </div>
            }
            {error &&
                <div className="form-error">
                    {error}
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
