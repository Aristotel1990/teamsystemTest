import dayjs from "dayjs";
import {
  Chip,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

export default function ListNotes({ notes = [] }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {notes.length !== 0
        ? notes.map((row, index) => {
            return (
              <>
                <ListItem key={row.id} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    key={row.id}
                    primary={row?.title}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        ></Typography>
                        {row?.note}
                        <br />
                        Date : {dayjs(row?.date).format("YYYY-MM-DD -  HH:mm")}
                      </>
                    }
                  />
                  <Chip
                    color="primary"
                    variant="outlined"
                    label={row?.important}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })
        : ""}
    </List>
  );
}
