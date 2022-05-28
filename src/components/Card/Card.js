import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  return (
    <Card
      sx={{
        maxWidth: props.maxWidth ? props.maxWidth : "800",
        display: "flex",
      }}
    >
      <CardMedia
        component="img"
        height={props.imageHeight ? props.imageHeight : "100"}
        width={props.imageWidth ? props.imageWidth : "200"}
        image={props.imageUrl}
        alt={props.imageName}
      />
      <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          {props.actions?.map((item) => {
            return (
              <Button
                size={item.size ? item.size : "small"}
                onClick={() => {
                  item.onClick;
                }}
              >
                {item.text}
              </Button>
            );
          })}
        </CardActions>
      </div>
    </Card>
  );
}
