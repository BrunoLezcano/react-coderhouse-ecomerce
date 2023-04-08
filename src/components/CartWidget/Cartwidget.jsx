import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Cartwidget = () => {
    return (
        <>
            <Badge badgeContent={1} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
            </Badge>
        </>
    );
};
export default Cartwidget;
