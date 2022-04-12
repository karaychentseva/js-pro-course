import { useEffect, useRef } from "react";
import "./TextField.scss";

type PropsType = {
    name: string
    type: string
    label: string
    value: string
    autofocus?: boolean
    setValue: (v: string) => void
}
const TextField: React.FC<PropsType> = ({name, type, label, value, autofocus, setValue}) => {

    const nameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            nameRef.current?.focus();
        }
    }, []);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className="text-field">
          <label htmlFor={name}>{label}</label>
          <input
            ref={nameRef}
            name={name}
            type={type}
            onChange={handleChange}
            value={value} />
        </div>
    )
}

export default TextField;
