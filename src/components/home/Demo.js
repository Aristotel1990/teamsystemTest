import * as React from "react";

import {
  Stack,
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  ListItem,
  List,
} from "@mui/material";

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
