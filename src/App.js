import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/Items/ItemListContainer";
import { CartContextProvider } from "./context/cartContext";
import CartConteiner from "./components/CartWidget/CartConteiner";

import NavBarConteiner from "./components/Navbar/NavBarConteiner";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import FormConteiner from "./components/FormCheckOut/FormConteiner";

function App() {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <Routes>
                    <Route element={<NavBarConteiner />}>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/categoria/:nombre" element={<ItemListContainer />} />
                        <Route path="/detalleProducto/:id" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<CartConteiner />} />
                        <Route path="/form" element={<FormConteiner />} />

                        <Route path="*" element={<h2>la ruta no existe</h2>} />
                    </Route>
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;
