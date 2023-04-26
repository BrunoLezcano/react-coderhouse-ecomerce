import { Typography } from "@mui/material";
import { stilos } from "./styleTitle";
import { useNavigate } from "react-router-dom";

export function TitleDesktop() {
    const { styleOfTitleDesktop } = stilos;
    const navigate = useNavigate();
    return (
        <Typography
            variant="h1"
            flexWrap="nowrap"
            component="a"
            sx={styleOfTitleDesktop}
            onClick={() => navigate("/")}
        >
            ISHIO
        </Typography>
    );
}
