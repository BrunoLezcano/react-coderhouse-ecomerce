import ItemList from "./ItemList";

import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
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

        /*
        const productosFiltradosCategoria = productos.filter((prod) => prod.categoria === nombre);

        const tarea = new Promise((resolve, reject) => {
            resolve(nombre ? productosFiltradosCategoria : productos);
        });
        tarea
            .then((res) => {
                setItems(res);
            })
            .catch((error) => console.log(error));

        */
    }, [nombre]);

    const CardItem = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <ItemList items={items} CardItem={CardItem} />
        </div>
    );
}
