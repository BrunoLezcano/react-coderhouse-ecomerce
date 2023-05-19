import { Box, Typography } from "@mui/material";
import "./Item.css";

function WelcomeMessage() {
    return (
        <Box className={"conteinerHi"} sx={{ borderBottom: ".05rem solid #d5c7b5" }}>
            <Typography variant="h6" gutterBottom padding={".2rem"}>
                ¡Bienvenido a nuestra tienda en línea !!!...
            </Typography>
            <Typography gutterBottom padding={".2rem"}>
                Explora nuestra colección y descubre productos de calidad.
            </Typography>
        </Box>
    );
}

export default WelcomeMessage;
