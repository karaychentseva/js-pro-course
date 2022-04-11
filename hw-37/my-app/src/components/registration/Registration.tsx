import React, { useState } from "react";
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

    return (
        <div className="registration-container">
            <TextField
                type="text"
                name="email"
                label="Enter Email:"
                value={email}
                setValue={setEmail} />
            <TextField
                type="password"
                name="password"
                label="Enter Password:"
                value={password}
                setValue={setPassword} />
            <SubmitButton onClick={handleSubmit}>
                Meo!
            </SubmitButton>
        </div>
    )
}

export default Registration;
