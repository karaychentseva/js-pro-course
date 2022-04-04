import { useEffect, useState } from "react";

type PropsType = {}

const ClickButton = ({}: PropsType) => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        console.log('component render, counter: ' + count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p style={{ background: count % 2 ? "red" : "green" }}>Вы кликнули {count} раз(а)</p>
            <button onClick={increment}>
            Нажми на меня - увеличить
            </button>
            <button onClick={decrement}>
            Нажми на меня - уменьшить
            </button>
        </div>
    )
}

export default ClickButton;