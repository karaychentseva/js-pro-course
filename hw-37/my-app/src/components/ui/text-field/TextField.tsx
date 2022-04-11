import "./TextField.scss";

type PropsType = {
    name: string
    type: string
    label: string,
    value: string,
    setValue: (v: string) => void
}
const TextField: React.FC<PropsType> = ({name, type, label, value, setValue}) => {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className="text-field">
          <label htmlFor={name}>{label}</label>
          <input name={name} type={type} onChange={handleChange} value={value} />
        </div>
    )
}

export default TextField;
