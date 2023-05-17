import Cartwidget from "../CartWidget/Cartwidget";
import { CartContext } from "../../context/cartContext";

import { TitleDesktop } from "../LogoTitle/TitleDesktop";
import { TitleCell } from "../LogoTitle/TitleCel";
import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

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

const pages = ["Bolsos", "Cartucheras", "Necessaire"];

export function NavBar() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = useState(null);

    //EVENTOS PARA LOS BOTONES DEL NAVBAR, AGUARDANDO RE-DIRECCION

    const aperturaHamburguesa = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const clickOpcionMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: "lightblue" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
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
                                onClick={aperturaHamburguesa}
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
                                onClose={clickOpcionMenu}
                                sx={{
                                    display: { xs: "inLine", md: "none" },
                                    textDecoration: "none",
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        sx={{
                                            my: 1,
                                        }}
                                    >
                                        <Typography textAlign="center" onClick={() => navigate(`/categoria/${page}`)}>
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <TitleCell />

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                                paddingLeft: "2rem",
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{
                                        my: 1,
                                        color: "white",
                                        display: "block",
                                        textTransform: "none",
                                    }}
                                    onClick={() => navigate(`/categoria/${page}`)}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        {cart.length > 0 && (
                            <Box sx={{ flexGrow: 0, marginRight: "1rem" }}>
                                <Tooltip title="Tu Carrito">
                                    <IconButton
                                        sx={{ p: 0 }}
                                        onClick={() => {
                                            navigate(`/cart`);
                                        }}
                                    >
                                        <Cartwidget />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <Outlet />
        </Box>
    );
}
export default NavBar;
