import { useState, useEffect } from "react";
import axios from "axios";

const useFetching = (estadoInicial, endPoint) => {
    const [data, setData] = useState(estadoInicial);

    useEffect(() => {
        const obtenerListado = axios.get(endPoint);

        obtenerListado
            .then((res) => setData(res.data))
            .catch(console.log("no llega la Data"));
    }, [endPoint]);

    return { data };
};

export default useFetching;
