import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Cartwidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
            </Badge>
        </>
    );
};
export default Cartwidget;
