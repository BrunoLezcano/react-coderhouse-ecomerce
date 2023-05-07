import { useState } from "react";
import {
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function Menu() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen) => () => {
        setOpen(isOpen);
    };

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button onClick={toggleDrawer(false)}>
                        <ListItemText primary="Opción 1" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer(false)}>
                        <ListItemText primary="Opción 2" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer(false)}>
                        <ListItemText primary="Opción 3" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Menu;
