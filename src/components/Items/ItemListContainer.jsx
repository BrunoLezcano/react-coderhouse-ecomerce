import ItemList from "./ItemList";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

export function ItemListContainer() {
    const [items, setItems] = useState([]);

    const { nombre } = useParams();

    useEffect(() => {
        let consultaPorCategoria;

        const productodDataBase = collection(db, "productos");

        if (nombre) {
            const productosFiltradosCategoria = query(productodDataBase, where("categoria", "==", nombre));
            consultaPorCategoria = productosFiltradosCategoria;
        } else {
            consultaPorCategoria = productodDataBase;
        }

        getDocs(consultaPorCategoria)
            .then((res) => {
                const productoObtenido = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id,
                    };
                });
                setItems(productoObtenido);
            })
            .catch();
    }, [nombre]);

    return (
        <div>
            <ItemList items={items} />
        </div>
    );
}
