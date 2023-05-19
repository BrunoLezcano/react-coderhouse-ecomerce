import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const TheCard = ({ elemento }) => {
    return (
        <Grid item xs={4} sm={4} md={3} sx={{ padding: { xs: "1rem 1.5rem", md: "1rem .7rem" } }}>
            <Card
                sx={{
                    minWidth: "5rem",
                    height: {
                        xs: "10rem",
                        sm: "10rem",
                        md: "10.5rem",
                        lg: "10rem",
                    },
                    textAlign: "center",
                    background: "#bcddb3",
                }}
            >
                <CardMedia
                    sx={{
                        height: {
                            xs: "4rem",
                            sm: "3.8rem",
                            md: "4rem",
                            lg: "4rem",
                        },
                    }}
                    image={elemento.img}
                    title={elemento.title}
                    component="img"
                />
                <CardContent
                    sx={{
                        height: {
                            xs: "1.1rem",
                            sm: "1.4rem",
                            md: "1.5rem",
                            lg: "1.3rem",
                        },
                    }}
                >
                    <Typography variant="p">{elemento.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        $ {elemento.price}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                >
                    <Link to={`/detalleProducto/${elemento.id}`}>
                        <Button variant="contained" size="small" sx={{ background: "#00b89f" }}>
                            Detalle
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default TheCard;
