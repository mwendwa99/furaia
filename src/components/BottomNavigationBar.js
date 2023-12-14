import * as React from "react";
import { BottomNavigation } from "react-native-paper";


const Dashboard = () => require("../screens/DashboardScreen");
const Scan = () => require("../screens");
const Settings = () => require("../screens");
const Explore = () => require("../screens/");


const BottomNavigationBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "dashboard",
      title: "Dashboard",
      focusedIcon: "view-dashboard",
      unfocusedIcon: "view-dashboard-outline",
    },
    {
      key: "scan",
      title: "Scan",
      focusedIcon: "qrcode-scan",
      unfocusedIcon: "qrcode",
    },
    {
      key: "explore",
      title: "Explore",
      focusedIcon: "compass",
      unfocusedIcon: "compass-outline",
    },
    {
      key: "settings",
      title: "Settings",
      focusedIcon: "cog",
      unfocusedIcon: "cog-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: Dashboard,
    scan: Scan,
    explore: Explore,
    settings: Settings,
  });

  return (
    <BottomNavigation
      activeColor="#002A0C"
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigationBar;
