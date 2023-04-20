import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Items } from "./components/Items/ItemListContainer";

import { NavBar } from "./components/Navbar/Navbar";

function App() {
    return (
        /*
        <BrowserRouter>
            <Routes>
                <Route element={<NavBar />}>
                    <Route path="/listaProductos" element={<Items />} />
                    <Route path="*" element={<h2>la ruta no existe</h2>} />
                </Route>
            </Routes>
        </BrowserRouter>
        */
        <div className="App">
            <NavBar />
            <div>
                <Items />
            </div>
        </div>
    );
}

export default App;
