import { Box, Grid, Typography } from "@mui/material";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
import { MdOutlineWhatsapp } from "react-icons/md";

import { createTheme, useMediaQuery } from "@mui/material";

const Footer = () => {
    const theme = createTheme();

    const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));
    return (
        <Grid
            container
            sx={{
                backgroundColor: "lightblue",
                height: {
                    xs: "2.4rem",
                    md: "2.5rem",
                },
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Grid
                item
                xs={6}
                sx={{ display: "flex", flexDirection: "row", justifyContent: "initial", alignItems: "center" }}
            >
                <Box sx={{ paddingLeft: "1rem" }}>
                    <AiOutlineInstagram style={{ fontSize: "1.5rem", color: "black" }} />
                </Box>
                <Box sx={{ paddingLeft: "1rem" }}>
                    <MdOutlineWhatsapp style={{ fontSize: "1.5rem", color: "black" }} />
                </Box>
            </Grid>
            <Grid
                item
                xs={6}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    paddingRight: ".5rem",
                }}
            >
                <BiCopyright style={{ fontSize: "1.5rem" }} />
                {!isXsScreen && <Typography variant="p">Derechos reservados ISHIO</Typography>}
            </Grid>
        </Grid>
    );
};

export default Footer;
