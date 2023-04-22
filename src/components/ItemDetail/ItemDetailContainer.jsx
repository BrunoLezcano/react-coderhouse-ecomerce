import { useEffect, useState } from "react";
import { productos } from "../../productosMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const idBuscado = 1;

    useEffect(() => {
        const encontrado = productos.find((prod) => prod.id === idBuscado);
        setItem(encontrado);
    }, [idBuscado]);

    console.log(item);
    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
