import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/Items/ItemListContainer";
import NavBarConteiner from "./components/Navbar/NavBarConteiner";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<NavBarConteiner />}>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/categoria/:nombre"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/detalleProducto/:id"
                        element={<ItemDetailContainer />}
                    />

                    <Route path="*" element={<h2>la ruta no existe</h2>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
