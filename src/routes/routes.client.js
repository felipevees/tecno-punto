import { ClientLayout } from "../Layouts";
import { Home, Documentos } from "../pages/Client";

const routesClient = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
  },
  {
    path: "/documentos",
    layout: ClientLayout,
    component: Documentos,
  },
];

export default routesClient;
