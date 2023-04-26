import CardDetail from "./CardDetail";
import { Box } from "@mui/material";

const ItemDetail = ({ item }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2rem",
            }}
        >
            <CardDetail element={item} />
        </Box>
    );
};

export default ItemDetail;
