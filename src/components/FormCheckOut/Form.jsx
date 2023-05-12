import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

const Form = ({ handleSubmit, handleChange, errors }) => {
    return (
        <form action="" onSubmit={handleSubmit}>
            <Grid container display={"flex"} justifyContent={"center"} marginTop={"2rem"} spacing={2}>
                <Grid item xs={8} sm={7} md={8}>
                    <TextField
                        xs={12}
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        name="nombre"
                        onChange={handleChange}
                        error={errors.nombre ? true : false}
                        helperText={errors.nombre}
                    />
                </Grid>
                <Grid item xs={8} sm={7} md={8}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                    />
                </Grid>
                <Grid item xs={8} sm={7} md={8}>
                    <TextField
                        label="Telefono"
                        variant="outlined"
                        fullWidth
                        name="telefono"
                        autoComplete="telefono"
                        onChange={handleChange}
                        error={errors.telefono ? true : false}
                        helperText={errors.telefono}
                    />
                </Grid>
                <Grid item xs={8} sm={7} md={8}>
                    <Button type="submit" variant="outlined" md={8} size="medium" sx={{ marginTop: "1rem" }}>
                        Confirmar
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Form;
