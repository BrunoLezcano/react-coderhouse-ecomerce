import ItemList from "./ItemList";
import useFetching from "../../hooks/useGetFetching"; // Consumo del JSON
import { productos } from "../../productosMock";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";

export function ItemListContainer() {
    //const { data } = useFetching([], "http://localhost:5000/productos"); // Consumo del JSON
    const [items, setItems] = useState([]);

    useEffect(() => {
        const tarea = new Promise((resolve, reject) => {
            resolve(productos);
        });
        tarea
            .then((res) => {
                setItems(res);
            })
            .catch((error) => console.log(error));
    }, []);

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
