import { Typography } from "@mui/material";
import { stilos } from "./styleTitle";

const { styleOfTitlefCell } = stilos;
export function TitleCell() {
    return (
        <Typography
            variant="h1"
            flexWrap="nowrap"
            component="a"
            sx={styleOfTitlefCell}
        >
            ISHIO
        </Typography>
    );
}
