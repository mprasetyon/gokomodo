import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { withRouter } from "react-router-dom";
import { routes } from "./routes";

export const MenuSettings = withRouter((props) => {
  return (
    <List>
      {routes.map((item, index) => (
        <ListItem key={item.text} onClick={() => props.history.push(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText>
              <Typography>{item.text}</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
});
