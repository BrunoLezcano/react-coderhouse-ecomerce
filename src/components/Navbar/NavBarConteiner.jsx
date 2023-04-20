import NavBar from "./Navbar";
import { useState, useEffect } from "react";

const NavBarConteiner = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const UnidadCarrito = 10;

    const aperturaHamburguesa = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const clickOpcionMenu = () => {
        setAnchorElNav(null);
    };
    const clickCarrito = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    return (
        <div>
            <NavBar />
        </div>
    );
};

export default NavBarConteiner;
