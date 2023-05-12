import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function cellDrawer(estadoInicial, arrayNav) {
    const [state, setState] = useState(estadoInicial);

    // ACA MANEJA EL EVNTO DE CLICK
    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState(open);
    };

    const list = () => (
        <Box role="presentation">
            <List>
                {arrayNav.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <>
                <Button onClick={toggleDrawer(true)}>{anchor}</Button>
                <Drawer anchor={anchor} open={state} onClose={toggleDrawer(false)}>
                    {list(anchor)}
                </Drawer>
            </>
        </div>
    );
}

{
    <Drawer anchor={anchor} open={state} onClose={toggleDrawer(false)}>
        <Box role="presentation">
            <List>
                {arrayNav.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    </Drawer>;
}

//LO QUE USE

{
    <Drawer open={anchorElNav}>
        <Box>
            <List>
                {pages.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => navigate(`/categoria/${text}`)}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    </Drawer>;
}
