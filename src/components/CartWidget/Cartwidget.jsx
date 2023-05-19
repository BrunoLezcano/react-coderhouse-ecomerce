import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Cartwidget = () => {
    const { contarTotalUnidades } = useContext(CartContext);
    const totales = contarTotalUnidades();

    return (
        <>
            <Badge badgeContent={totales} color="secondary">
                <ShoppingCartOutlinedIcon color="action" />
            </Badge>
        </>
    );
};
export default Cartwidget;
