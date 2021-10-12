import UserPage from "../components/UserPage";
import Login from "../components/Login";
import Appointment from "../components/Appointment";

export default [
  {
    path: "/",
    name: "UserPage",
    component: UserPage,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Appointment",
    name: "Appointment",
    component: Appointment,
  },
];
