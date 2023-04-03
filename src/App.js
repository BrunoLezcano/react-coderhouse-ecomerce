import "./App.css";
import { Items } from "./components/Items/ItemListContainer";

import { NavBar } from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <div>
                <Items greeting={"pepito"} />
            </div>
        </div>
    );
}

export default App;
