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
            <NavBar
                aperturaHamburguesa={aperturaHamburguesa}
                anchorElNav={anchorElNav}
                anchorElUser={anchorElUser}
                clickOpcionMenu={clickOpcionMenu}
                clickCarrito={clickCarrito}
                UnidadCarrito={UnidadCarrito}
            />
        </div>
    );
};

export default NavBarConteiner;
