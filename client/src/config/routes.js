//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
//import LayoutBasic from "../layouts/LayoutBasic";

//AdminPages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/Users";
import AdminMenuWeb from "../pages/Admin/MenuWeb";

//Pages
// import Home from "../pages/Home";
// import Contact from "../pages/Contact";
// import Courses from "../pages/Courses";

//Other Pages
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSignIn,
        exact: true,
      },
      {
        path: "/admin/users",
        component: AdminUsers,
        exact: true,
      },
      {
        path: "/admin/menu",
        component: AdminMenuWeb,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
