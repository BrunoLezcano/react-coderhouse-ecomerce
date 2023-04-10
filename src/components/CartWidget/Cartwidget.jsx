import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Cartwidget = ({ unidades }) => {
    return (
        <>
            <Badge badgeContent={unidades} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
            </Badge>
        </>
    );
};
export default Cartwidget;
