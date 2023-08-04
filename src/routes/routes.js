import routesAdmin from "./routes.admin";
import { Error404 } from "../pages";
import routesClient from "./routes.client";
import { BasicLayout } from "../Layouts";

const routes = [
  ...routesAdmin,
  ...routesClient,
  {
    path: "*",
    layout: BasicLayout,
    component: Error404,
  },
];

export default routes;
