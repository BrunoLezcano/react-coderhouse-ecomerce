const Cart = ({ cart, vaciarCarrito, quitarDelCarrito }) => {
    return (
        <>
            {cart?.map((e) => (
                <div key={e.id}>
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
                    <button onClick={vaciarCarrito}>vaciar carrito</button>
                </div>
            ))}
        </>
    );
};

export default Cart;
