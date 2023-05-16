import Form from "./Form";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";

const FormConteiner = () => {
    const { cart, contarTotalCarrito, vaciarCarrito } = useContext(CartContext);

    const [estadoFormulario, setEstadoFormulario] = useState(null);

    const totalPrecioCarrito = contarTotalCarrito();
    const momentoDeCompra = serverTimestamp();

    const infoCompraNueva = (data) => {
        const nuevaCompra = {
            buyer: data,
            items: cart,
            total: totalPrecioCarrito,
            date: momentoDeCompra,
        };

        const colecionOrdenes = collection(db, "ordenes");
        addDoc(colecionOrdenes, nuevaCompra).then((res) => setEstadoFormulario(res.id));

        cart.map((producto) => {
            updateDoc(doc(db, "productos", producto.id), {
                stock: producto.stock - producto.Quantity,
            });
        });
        vaciarCarrito();
    };

    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            telefono: "",
        },
        onSubmit: infoCompraNueva,
        validationSchema: Yup.object().shape({
            nombre: Yup.string().required("es necesario completar este campo"),
            email: Yup.string().email("debes ingresar un mail").required("es necesario completar este campo"),
            telefono: Yup.string()
                .required("el campo es requerido")
                .matches(/^(?=.*\d)/, { message: "los datos deben ser numéricos" })
                .min(8, "el numero no podria tener menos que 8 caracteres"),
        }),
        validateOnChange: false,
    });

    return (
        <div>
            {estadoFormulario ? (
                <h3> El numero ded transaccion de tu compra es {estadoFormulario}</h3>
            ) : (
                <Form handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
            )}
        </div>
    );
};

export default FormConteiner;
