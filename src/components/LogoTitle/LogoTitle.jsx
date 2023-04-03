import { Box, Typography } from "@mui/material";
import { stilos } from "./styleTitle";

export function LogoTitle() {
    const { tamañoFuente } = stilos;

    return (
        <Box>
            <Typography variant="h1" sx={tamañoFuente}>
                ISHIO
            </Typography>
        </Box>
    );
}
