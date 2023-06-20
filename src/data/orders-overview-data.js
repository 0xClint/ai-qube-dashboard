import {
  BellIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  LockOpenIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

export const ordersOverviewData = [
  {
    icon: BellIcon,
    color: "text-green-500",
    title: "Under Application",
    description: "22 DEC 7:20 PM",
  },
  {
    icon: PlusCircleIcon,
    color: "text-red-500",
    title: "Shipped #1832412",
    description: "21 DEC 11 PM",
  },
  {
    icon: ShoppingCartIcon,
    color: "text-blue-500",
    title: "Final Test",
    description: "21 DEC 9:34 PM",
  },
  {
    icon: CreditCardIcon,
    color: "text-orange-500",
    title: "Production #4395133",
    description: "20 DEC 2:20 AM",
  },
  // {
  //   icon: LockOpenIcon,
  //   color: "text-pink-500",
  //   title: "Unlock packages for development",
  //   description: "18 DEC 4:54 AM",
  // },
  {
    icon: BanknotesIcon,
    color: "text-blue-gray-900",
    title: "New Asset #9583120",
    description: "17 DEC",
  },
];

export default ordersOverviewData;
