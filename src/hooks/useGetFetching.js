import { useState, useEffect } from "react";
import axios from "axios";

const useFetching = (estadoInicial, url) => {
    const [data, setData] = useState(estadoInicial);

    useEffect(() => {
        const obtenerListado = axios.get(url);

        obtenerListado
            .then((res) => setData(res.data))
            .catch(console.log("no llega la Data"));
    }, []);

    return { data };
};

export default useFetching;
