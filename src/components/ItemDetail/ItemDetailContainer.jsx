import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { db } from "../../firebaseConfig";

import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const produtos = collection(db, "productos");

        const referenciaProducto = doc(produtos, id);

        getDoc(referenciaProducto)
            .then((res) => setItem({ ...res.data(), id: res.id }))
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            <ItemDetail item={item} key={item.id} />
        </div>
    );
};

export default ItemDetailContainer;
