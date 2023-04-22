import { Box, Grid } from "@mui/material";
import TheCard from "./TheCard";

const ItemList = ({ items, CardItem }) => {
    return (
        <Box
            sx={{ flexGrow: 1 }}
            style={{ display: "flex", paddingTop: "1rem" }}
        >
            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {items.map((elemento) => (
                    <TheCard
                        elemento={elemento}
                        CardItem={CardItem}
                        key={elemento.id}
                    />
                ))}
            </Grid>
        </Box>
    );
};

export default ItemList;
