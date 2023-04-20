import Cartwidget from "../CartWidget/Cartwidget";
import { TitleDesktop } from "../LogoTitle/TitleDesktop";
import { TitleCell } from "../LogoTitle/TitleCel";
import { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { Outlet } from "react-router-dom";

const pages = ["Bolsos", "Cartucheras", "Necessaire"];

export function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [UnidadCarrito, setUnidadCarrito] = useState(1);
    /*
    EVENTOS PARA LOS BOTONES DEL NAVBAR, AGUARDANDO RE-DIRECCION

    const aperturaHamburguesa = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const clickOpcionMenu = () => {
        setAnchorElNav(null);
    };

    */
    const clickCarrito = (event) => {
        setUnidadCarrito(UnidadCarrito + 1);
    };

    useEffect(() => {
        console.log("hola como va");
    }, []);

    return (
        <Box>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon
                            sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}
                        />
                        <TitleDesktop />
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                                style: { textTransform: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                //onClick={aperturaHamburguesa}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                //onClose={clickOpcionMenu}
                                sx={{
                                    display: { xs: "inLine", md: "none" },
                                    textDecoration: "none",
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        //onClick={clickOpcionMenu}
                                        sx={{
                                            my: 1,
                                        }}
                                    >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon
                            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                        />
                        <TitleCell />
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    //onClick={clickOpcionMenu}
                                    sx={{
                                        my: 1,
                                        color: "white",
                                        display: "block",
                                        textTransform: "none",
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={clickCarrito}
                                    sx={{ p: 0 }}
                                >
                                    <Cartwidget unidades={UnidadCarrito} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
export default NavBar;
