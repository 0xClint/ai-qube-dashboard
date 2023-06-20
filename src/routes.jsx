import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/solid";
import {
  Home,
  Profile,
  Tables,
  Notifications,
  Ledger,
} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <CubeTransparentIcon {...icon} />,
        name: "assets",
        path: "/assets",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "ledger",
        path: "/ledger",
        element: <Ledger />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "users",
        path: "/users",
        element: <Tables />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
