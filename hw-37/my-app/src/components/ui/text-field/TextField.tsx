import { useEffect, useRef } from "react";
import FormValuesType from "../../../types/FormValuesType";
import "./TextField.scss";

type PropsType = {
    name: string
    type: string
    label: string
    values: FormValuesType
    autofocus?: boolean
    setValues:  (callback: (prevValue: FormValuesType) => FormValuesType) => void
}
const TextField: React.FC<PropsType> = ({name, type, label, values, autofocus, setValues}) => {

    const nameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            nameRef.current?.focus();
        }
    }, []);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: event.target.value,
        }));
    }

    return (
        <div className="text-field">
          <label htmlFor={name}>{label}</label>
          <input
            ref={nameRef}
            name={name}
            type={type}
            onChange={handleChange}
            value={values[name] || ""} />
        </div>
    )
}

export default TextField;
