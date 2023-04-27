import { useState } from "react";

const useCounter = (estadoInicial, valorMaximo) => {
    const [counter, setCounter] = useState(estadoInicial);

    const incrementar = () => {
        counter < valorMaximo && setCounter(counter + 1);
    };
    const decrementar = () => {
        counter > 1 && setCounter(counter - 1);
    };
    const reiniciar = () => {
        setCounter(estadoInicial);
    };

    return { counter, incrementar, decrementar, reiniciar };
};

export default useCounter;
