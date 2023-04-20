import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const ItemList = ({ listadoDeItems }) => {
    return (
        <Box
            sx={{ flexGrow: 1 }}
            style={{ display: "flex", paddingTop: "1rem" }}
        >
            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {listadoDeItems.map((elemento) => (
                    <Grid item xs={4} sm={4} md={3} key={elemento.id}>
                        <Item sx={{ boxShadow: "none " }}>
                            <Card sx={{ minWidth: "5rem" }}>
                                <CardMedia
                                    sx={{ height: 120 }}
                                    image={elemento.img}
                                    title={elemento.title}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        {elemento.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {elemento.price}
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                    }}
                                >
                                    <Button variant="contained" size="small">
                                        Detalle
                                    </Button>
                                    <Button size="small">Agregar</Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ItemList;
