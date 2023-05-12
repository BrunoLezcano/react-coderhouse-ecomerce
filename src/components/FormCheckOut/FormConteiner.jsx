import { Message } from "@mui/icons-material";
import Form from "./Form";

import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const FormConteiner = () => {
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            telefono: "",
        },
        onSubmit: (data) => {
            console.log(data);
        },
        validationSchema: Yup.object().shape({
            nombre: Yup.string().required("es necesario completar este campo"),
            email: Yup.string().email("debes ingresar un mail").required("es necesario completar este campo"),
            telefono: Yup.string()
                .required("el campo es requerido")
                .matches(/^(?=.*\d)/, { message: "los datos deben ser numéricos" }),
        }),
        validateOnChange: false,
    });

    return (
        <div>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
        </div>
    );
};

export default FormConteiner;
