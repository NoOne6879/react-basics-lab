import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import Alert from "@mui/material/Alert";

const Task = (props) => {
  return (
    <Grid key={props.id} size={{ xs: 12, md: 6, lg: 4 }}>
      <Card
        sx={{
          backgroundColor: props.done
            ? "lightgrey"
            : props.priority === "Low"
              ? "success.light"
              : props.priority === "Medium"
                ? "warning.light"
                : "error.light",
          padding: "20px",
        }}
      >
        <CardHeader
          title={props.title}
          sx={{
            backgroundColor: "white",
            fontStyle: "italic",
            borderRadius: "3px",
            padding: "20px",
            textAlign: "center",
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
              padding: "10px",
            }}
          >
            <Alert
              severity={
                props.priority === "Low"
                  ? "info"
                  : props.priority === "Medium"
                    ? "warning"
                    : "error"
              }
            >
              Due: {props.deadline}
            </Alert>
          </Box>

          <Typography
            component="p"
            variant="subtitle1"
            align="center"
            sx={{ fontStyle: "italic" }}
          >
            {props.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={props.markDone}
          >
            <DoneIcon />
            Done
          </Button>

          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={props.deleteTask}
          >
            <DeleteIcon />
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Task;
