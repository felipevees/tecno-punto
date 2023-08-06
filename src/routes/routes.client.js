import { ClientLayout, BasicLayout } from "../Layouts";
import { Home, Documentos, ConsultCredit, Credit } from "../pages/Client";

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
  {
    path: "/consultCredit",
    layout: BasicLayout,
    component: ConsultCredit,
  },
  {
    path: "/consultCredit/:clientCc",
    layout: BasicLayout,
    component: Credit,
  },
];

export default routesClient;
