import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
} from "@mui/material";

const TheCard = ({ elemento, CardItem }) => {
    return (
        <Grid item xs={4} sm={4} md={3}>
            <CardItem sx={{ boxShadow: "none " }}>
                <Card sx={{ minWidth: "5rem" }}>
                    <CardMedia
                        sx={{ height: 120 }}
                        image={elemento.img}
                        title={elemento.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {elemento.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {elemento.price}
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <Button variant="contained" size="small">
                            Detalle
                        </Button>
                    </CardActions>
                </Card>
            </CardItem>
        </Grid>
    );
};

export default TheCard;
