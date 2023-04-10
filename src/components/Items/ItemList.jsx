import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemList = ({ listadoDeItems }) => {
    return (
        <div style={{ display: "flex", paddingTop: "2rem", flexWrap: "wrap" }}>
            {listadoDeItems.map((elemento) => {
                return (
                    <Card sx={{ width: "16rem" }} key={elemento.id}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={elemento.img}
                            title={elemento.title}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                {elemento.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {elemento.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                );
            })}
        </div>
    );
};

export default ItemList;
