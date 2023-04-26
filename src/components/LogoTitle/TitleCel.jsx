import { Typography } from "@mui/material";
import { stilos } from "./styleTitle";
import { useNavigate } from "react-router-dom";

const { styleOfTitlefCell } = stilos;
export function TitleCell() {
    const navigate = useNavigate();

    return (
        <Typography
            variant="h1"
            flexWrap="nowrap"
            component="a"
            sx={styleOfTitlefCell}
            onClick={() => navigate("/")}
        >
            ISHIO
        </Typography>
    );
}
