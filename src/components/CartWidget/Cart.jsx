import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const Cart = ({ cart, vaciarCarrito, quitarDelCarrito, total, navigate }) => {
    return (
        <>
            <Typography> Bienvenido a tu carrito</Typography>
            <Grid container width={"95%"}>
                <Grid item xs={12} sm={8} md={8}>
                    {cart?.map((e) => (
                        <Grid container key={e.id} alignItems={"center"} padding={".5rem "}>
                            <Grid item xs={2}>
                                <Avatar
                                    alt={e.title}
                                    src={e.img}
                                    sx={{
                                        width: {
                                            xs: "3rem",
                                            sm: "4rem",
                                            md: "5rem",
                                        },
                                        height: {
                                            xs: "3rem",
                                            sm: "4rem",
                                            md: "5rem",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} paddingLeft={".5rem"}>
                                <Typography
                                    paddingLeft={".5rem "}
                                    sx={{
                                        fontSize: {
                                            xs: ".7rem",
                                            sm: "1.2rem",
                                            md: "1.2rem",
                                        },
                                    }}
                                >
                                    {e.title}
                                </Typography>
                                <Typography
                                    paddingLeft={".5rem "}
                                    sx={{
                                        fontSize: {
                                            xs: ".7rem",
                                            sm: "1rem",
                                            md: "1.2rem",
                                        },
                                    }}
                                >
                                    precio unitario: ${e.price}
                                </Typography>
                                <Typography
                                    paddingLeft={".5rem "}
                                    sx={{
                                        fontSize: {
                                            xs: ".7rem",
                                            sm: "1rem",
                                            md: "1.2rem",
                                        },
                                    }}
                                >
                                    cantidad: {e.Quantity}
                                </Typography>
                                <Divider variant="middle" flexItem md={0} xs={"none"} sx={{ marginTop: ".6rem" }} />
                            </Grid>
                            <Grid item xs={1} paddingLeft="1rem">
                                <Button
                                    size="small"
                                    variant="contained"
                                    sx={{
                                        height: {
                                            xs: "1.3rem",
                                            sm: "1.5rem",
                                            md: "2rem",
                                        },
                                        width: {
                                            xs: "4rem",
                                            sm: "5rem",
                                            md: "7rem",
                                        },
                                    }}
                                    onClick={() => {
                                        quitarDelCarrito(e.id);
                                    }}
                                >
                                    quitar
                                </Button>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Divider variant="middle" orientation="vertical" flexItem sm={0.5} sx={{ display: { xs: "none" } }} />
                <Grid container item xs={12} sm={3.5} md={3.5} alignItems={"center"} paddingLeft={"2rem"}>
                    <Typography> El total de tu compra es de ${total}. </Typography>
                    <Grid container>
                        <Button
                            variant="contained"
                            sx={{
                                height: {
                                    xs: "1.3rem",
                                    sm: "1.5rem",
                                    md: "2rem",
                                },
                                width: {
                                    xs: "6rem",
                                    sm: "6rem",
                                    md: "7rem",
                                },
                                margin: "1rem ",
                            }}
                            onClick={vaciarCarrito}
                        >
                            abortar
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                height: {
                                    xs: "1.3rem",
                                    sm: "1.5rem",
                                    md: "2rem",
                                },
                                width: {
                                    xs: "6rem",
                                    sm: "6rem",
                                    md: "7rem",
                                },
                                margin: "1rem ",
                            }}
                            onClick={() => {
                                navigate(`/form`);
                            }}
                        >
                            confirmar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Cart;
