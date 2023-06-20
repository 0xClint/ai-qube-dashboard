import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  Cog8ToothIcon,
  ChartBarIcon,
  CubeTransparentIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: Cog8ToothIcon,
    title: "Asset created ",
    value: "1200",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon: CubeTransparentIcon,
    title: "Asset in production",
    value: "367",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "green",
    icon: PresentationChartBarIcon,
    title: "Inventory",
    value: "1,156",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Asset shipped",
    value: "1405",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
