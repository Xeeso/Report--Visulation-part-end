import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";
import Datainput from "views/Datainput/Datainput"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/Datainput",
    name: "Datainput",
    icon: "tim-icons icon-align-center",
    component: <Datainput />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
    layout: "/admin",
  },

];
export default routes;
