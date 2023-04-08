import { Typography } from "@mui/material";
import { stilos } from "./styleTitle";

export function TitleDesktop() {
    const { styleOfTitleDesktop } = stilos;

    return (
        <Typography
            variant="h1"
            flexWrap="nowrap"
            component="a"
            sx={styleOfTitleDesktop}
        >
            ISHIO
        </Typography>
    );
}

//sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}
