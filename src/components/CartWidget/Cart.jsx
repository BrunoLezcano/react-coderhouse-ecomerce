import Grid from "@mui/material/Grid";

import Avatar from "@mui/material/Avatar";

const Cart = ({ cart, vaciarCarrito, quitarDelCarrito, total, productosPorId }) => {
    return (
        <>
            <h2> bienvenido a tu carrito</h2>
            <Grid container>
                <Grid item xs={12} sm={8} md={8}>
                    {cart?.map((e) => (
                        <div key={e.id} sx={{ display: "flex", flexDirection: "row" }}>
                            <Avatar alt={e.title} src={e.img} sx={{ width: "3rem", height: "3rem" }} />
                            <h6> {e.title}</h6>
                            <h6>{e.price}</h6>
                            <h6>{e.Quantity}</h6>

                            <button
                                onClick={() => {
                                    quitarDelCarrito(e.id);
                                }}
                            >
                                quitar del carrito
                            </button>
                        </div>
                    ))}
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <h6>{total} el total </h6>
                    <h6>{productosPorId} por art </h6>
                    <button onClick={vaciarCarrito}>vaciar carrito</button>
                    <button onClick={vaciarCarrito}>este va a ser pa redireccionar form</button>
                </Grid>
            </Grid>
        </>
    );
};

export default Cart;
