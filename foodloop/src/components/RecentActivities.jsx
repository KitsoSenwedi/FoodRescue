import React from "react";
import { List, ListItem, ListItemText, ListItemIcon, Divider } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HomeIcon from "@mui/icons-material/Home";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const RecentActivities = () => {
  const activities = [
    { id: 1, text: "30 kg of vegetables donated to Community Table SA", icon: <HomeIcon /> },
    { id: 2, text: "Restaurant donation scheduled for pickup", icon: <FastfoodIcon /> },
    { id: 3, text: "Food rescued: 25 meals provided", icon: <LocalDiningIcon /> },
  ];
  

  return (
    <List>
      {activities.map((activity) => (
        <React.Fragment key={activity.id}>
          <ListItem>
            <ListItemIcon>{activity.icon}</ListItemIcon>
            <ListItemText primary={activity.text} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default RecentActivities;
