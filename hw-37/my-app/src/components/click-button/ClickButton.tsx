import { useDispatch, useSelector } from "react-redux";
import { setValue, shiftValue } from "../../store/clicker/actionCreators";

import "./ClickButton.scss";
type PropsType = {}

const ClickButton = ({}: PropsType) => {
    const count = useSelector((state: any) => state.clicker.value);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(shiftValue(1));
    }
    const decrement = () => {
        dispatch(shiftValue(-1));
    }
    
    const reset = () => {
        dispatch(setValue(0));
    }

    return (
        <div className="click-button-component">
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={decrement}>
                -1
            </button>
            <button onClick={increment}>
                +1
            </button>
            <button onClick={reset}>
                reset
            </button>
        </div>
    )
}

export default ClickButton;