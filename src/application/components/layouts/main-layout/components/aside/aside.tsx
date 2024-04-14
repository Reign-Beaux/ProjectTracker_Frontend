import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Icon } from "application/components/elements";

export const Aside = () => {
  return (
    <aside className="main-layout__aside">
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon type={index % 2 === 0 ? "inbox" : "main"} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </aside>
  );
};
