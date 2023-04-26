import { useEffect, useState } from "react";
import { productos } from "../../productosMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const encontrado = productos.find((prod) => prod.id === Number(id));
        setItem(encontrado);
    }, [id]);

    return (
        <div>
            <ItemDetail item={item} key={item.id} />
        </div>
    );
};

export default ItemDetailContainer;
