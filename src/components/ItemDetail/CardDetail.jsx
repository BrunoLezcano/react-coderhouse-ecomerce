import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import useCounter from "../../hooks/useCounter";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export default function CardDetail({ element }) {
    const { agregarCarrito, conseguirQuantityById } = useContext(CartContext);

    const totalEnCarrito = conseguirQuantityById(element.id);

    const { counter, incrementar, decrementar } = useCounter(totalEnCarrito, element.stock);
    const navigate = useNavigate();

    const producto = { ...element, Quantity: counter };

    return (
        <Card
            sx={{
                maxWidth: "25rem",
            }}
        >
            <CardMedia component="img" sx={{ height: 140 }} image={element.img} title={element.title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {element.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {element.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {element.price}
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    size="small"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    volver
                </Button>
                <Button size="small" onClick={decrementar}>
                    -
                </Button>
                <Typography variant="p">{counter}</Typography>
                <Button size="small" onClick={incrementar}>
                    +
                </Button>
                <Button
                    size="small"
                    onClick={() => {
                        agregarCarrito(producto);
                    }}
                >
                    agregar
                </Button>
            </CardActions>
        </Card>
    );
}
