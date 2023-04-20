import ItemList from "./ItemList";
import useCounter from "../../hooks/useCounter";
import useFetching from "../../hooks/useGetFetching";

export function Items() {
    const { counter, incrementar, decrementar, reiniciar } = useCounter(1);

    const { data } = useFetching([], "http://localhost:5000/productos");
    return (
        <div>
            <ItemList listadoDeItems={data} />
            <button onClick={incrementar}>incrementar</button>
            <h2>{counter} </h2>
            <button onClick={decrementar}>decrementar</button>
            <button onClick={reiniciar}>reiniciar</button>
        </div>
    );
}
