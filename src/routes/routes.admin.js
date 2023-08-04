import { AdminLayout } from "../Layouts";
import { CreditAdmin, ClientsAdmin, UsersAdmin } from "../pages/Admin";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: CreditAdmin,
  },
  {
    path: "/admin/clients",
    layout: AdminLayout,
    component: ClientsAdmin,
  },
  {
    path: "/admin/users",
    layout: AdminLayout,
    component: UsersAdmin,
  },
];

export default routesAdmin;
