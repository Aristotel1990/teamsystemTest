import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function Demo({ data }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>

        <ListItemText
          primary="Customer details"
          secondary={
            <Stack
              direction={{ xs: "column", sm: "column" }}
              spacing={{ xs: 3, sm: 1 }}
            >
              <Typography component="span" variant="body2" color="text.primary">
                Name : {data.name}
              </Typography>
              <Typography component="span" variant="body2" color="text.primary">
                Number : {data.number}
              </Typography>
              <Typography component="span" variant="body2" color="text.primary">
                Country : {data.country}
              </Typography>
            </Stack>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />
    </List>
  );
}
