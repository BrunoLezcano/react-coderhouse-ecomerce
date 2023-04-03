import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";

const Cartwidget = () => {
    return (
        <Button>
            <Badge badgeContent={1} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
            </Badge>
        </Button>
    );
};
export default Cartwidget;
