import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>
        <div className="flex items-center">
          <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Type here" />
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          <Link to="/auth/sign-in">
            <Button
              variant="text"
              color="blue-gray"
              className="hidden items-center gap-1 px-4 xl:flex"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
              Sign In
            </Button>
            <IconButton
              variant="text"
              color="blue-gray"
              className="grid xl:hidden"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          </Link>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton>
          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellIcon className="h-5 w-5 text-blue-gray-500" />
              </IconButton>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem className="flex items-center gap-3">
                <Avatar
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIUFRgVFhUYGBgYGhgYGhoZGhgZGBUYGBgZGRgcGhgcIy4lHCErHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrISU0NDQ0NDQ0NDQ0MTQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0Pz80PzE0Mf/AABEIAOQA3QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAwQFBgECBwj/xABAEAACAQICBggEAggFBQAAAAABAgADEQQhBRIxQVFxBhQyUmGRodEHIoGxE0IjM2KSssHh8BUWgsLxJDVEU3L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAQACAgIBBQEAAAAAAAAAAQIDESExEkFRBBMiMmFx/9oADAMBAAIRAxEAPwDrq0EYAlRnMHBUu4PWK0eyOUVgNeo0+6PX3h1Gn3R6+8dQgNeoU+6PX3h1Cn3R6+8dQgNeoU+6PX3h1Cn3R6+8dQgNeoU+6PX3h1Cn3R6+8dQgNeoU+6PX3h1Cn3R6+8dTF4DbqFPuj194dQp90evvHN4XgNuoU+6PX3h1Cn3R6+8c3heA26hT7o9feHUKfdHr7x1CA16hT7o9feHUKfdHr7x1CA16hT7o9feHUKfdHr7x1CA16hT7o9feHUKfdHr7x1CA16hT7o9feHUafd9T7x1CA16lT7g9ZnqdPuj1jmEBKh2RyisSodkcorAIQhAIQhAIQhAJgmYZrTmnTX4kph6n4GH1ajjtteyKR+W42+NuUDo9auiKWZgqgXJJsABvJM59p/4q4SiSuHU1yPz31KX0c5t9JxzTenMRiixq1Xe51iCTq7b5LsAEikqDeL+pgXbSPxS0pUY6tRKS7giKT+84N/SMf86aTOfXKw/1Lby1bfSV2oEIyBH0A9bzRNYbGvyufuIFvofEPStMk9ZLj9tEI9ALSyaJ+MFdbdYw6ON7Ujqt+4xt6zlL1DsIz5WM11crwPQ2jfijoyrYM70ye+hsvMrfLx2S5YXF06ih0dXU7GVgynkRPJIJ8JKaG0/isK4ei7LY3sD8reBXYYHqq8zOf9C/iTh8YFp1itGvssxslTxRjsPgZfgYG0IQgEIQgEIQgEIQgJUOyOUViVDsjlFYBCEIBCEIBMGZlW+Iul2wuj69VG1XsqKd4Z2CXHiASfpAo3xZ6dMjHBYZwPl/TOpBIvsRTuNgbnxE5CvnMUwSeJz2558Ys1M+8BCo03w1In+/5zRxdo7pUmUXXz4+Eevaeu/RNKZ2m/rkRNyqgXvc+X2mzPvtYxGqpJvkYR00JvtmxtumyJMMphPRJjAGYZTebCmYOqzedQ+HPxGqIyYXFPrIckqsfmp2yAc/mXdc5ictvNUcqwYZEEEbMiN8Iev6bhgCCCDmCMwRzikpnw66U08dhgBZatIKlROGXysoP5Tb6WMuQgZhCEAhCEAhCEBKh2RyisSodkcorAIQhAIQhAxOQfHfSnyUMMDtJquPAfKt/qTOvmebfitjvxdJVRe4p6qDdbVUaw/e1oFVwyH+ksWhNDmuSWuQOHHwkJhV1rAZZzpfRqmqIAP+Zhz7uZ4b8GJq+VcPQxmfJvl+/MSzYPoxTC6tgcpP0Ukjh6c5Lyb19uyYzn6UDG9Dc7pcjhvHvI5uibg2sfKdYaiOFom2HQDZ9Zp89SKXGbXKV6Mte2pFf8qCdGfDreJNRXcJn+5taYy54/Rm26IPoK2VrToNSn4SNxVMSf3NflPwz+HNtK6FZPmUXH2kJUQjaLTqGJpAiU7pHhApuBadHFy9+K5eXik8wn0N062CxKVhfVuA4B7S7+e2eoMFikqotRDdXVXU8VYXE8ihJ6U+F+KFTRmFN7lVZD4FHZfsB5idLmW6EIQCEIQCEIQEqHZHKKxKh2RyisAhCEAhCEDE8r9OP+4YrO/6ap/ET97z1TPK3TikU0hilP8A76h+jMWHoRAZ6M7YnStAPcAbh95zHANYzonRh7keInN+onh1fp1ypLJGjlGC5R3Re5nLmdOnXlIE3jepMljEmYb5NqshN0ERIEcqBaIOLSq5B03yMxSAyQq1LcvtGGJz2SyERVSVfpFYqZba4ylI6RVTrFZpxzvTPkvWVcYTvHwRLf4e172/HqaviLJe31vOCO+3znpv4d4AUNG4VONMVDzqk1D5a9vpO5wLPCEIBCEIBCEICVDsjlFYlQ7I5RWAQhCAQhCBgzzv8YMEU0g73uKio/L5An+y/wBZ6HJnBvjBQL4n8ZWDIVVLjcyk5esi2RMzaoejULOqjaSBOuaE0ctJBxsLyg9DcBr1QbXAzPhynQdI4s0kOqpY7h47pyc+rrXxjs4c9Z7SDYqmp+dgDuG+0dYXStC9g4nPUwNR7u72Lcdv09ohidHKv/lKD3Tl5W2SM4n5Trd/DrgxNNthHmJoVB2ETkmGevTYfOHB2WJ4bjLdorSlQKLnmJnrMi+b39LVqWgyxg+lFC3JtK9pHpSVB1QPU+glZm1a3pZcQq7yJEYoKNjSmVtMYyr2SeQFvvEurYw5sG85rOL/AFleT/FjxGVxe8o3SdSHB4iSWHxVZHAe5ByN87cjEOlifIjjvW+hEtifHUV3r5ZqF6N6KOMxVHD3sHcBjwUZt6ZT1RhaARVRRZVAUAbgMh6Tg3wYwJbHfiG1kpuRfexsBbxE9ACdjkrMIQhAhCEAhCEBKh2RyisSodkcorAIQhAJiZhAhelWIdMNUZO1q2H1nKquEq1cG34jhyyawBA+XfkROxaToa9J1te6m3MZic3qqEouO6Cv0ubelpyc9s1Hb+n6uNRXOg1BQHbkOQ2y01MKH2i/PZKv0KyWp4sv2l6w1O4mHJe91pj+sVHHaIdnDXst7FRldd4uNgjDSOgn1iaLolNmRzTZQyl0AAOYzGWzK8v9XB33ZRm+iFb8zDyk53c+k3Ob7VLHYKnqU0pKFdRZyMg5vckrawz+tpZNEaOChQ9ieNo+oaGp0wW2m2+OMJTF5G9d+05k68I3SmFUBjblxlPxOEduwu/687nZL5pcAqZX8HTu2qZGamxAab0Nq00NJNdyjK4Y9liRqugU2yHGJ0sG6UmcM6PddWnrs4sAA2sDlmfKXGpo0/la0a1dDuTdmuOFts1/dvXXhn+1O++6rmHRnHzrnyjXpJS/6dv2dU+tv5y1tgdSVvpPlScf/P8AEJXN/lOkan8a36FVTh8RhSDZXezcTrbRf6zvs4J0MwT1sRhVAPyWc+Avf7Cd7E6+L7c/N14/42hCE1YCEIQCEIQEqHZHKKxKh2RyisAhCEAhCEDUyh9IcBZqigW/EF14X22+8vsgOk9K6K28Ei/PZMOfPee/w24NfHXX5cp6L4d6TOjKRmNo4XEvOBaQ+MVgysd+Xl/zH+EqTit78uyTrwsSAERnXIXMxNMVltkZpTEM3yrtOz+kn5LTPk6GL17gbAdsc4bDsfmG6RyYf8CmCbsbXa2Z8o90Ppqm4yvysQb8jI93yW+PBHSNIsCJAINRxeWjH4umoLE/TiZVK2NSoSVPhaJE9rDRs4uDFdW0gMDXdGzORtaTYxWUdH0ZY8iUzpJSLIyrtNv4hLTpKuJX63zNyzls3rypqd+Fv+FmjgoqVTtASmPoLt/tnRRKn8PKRXDEkdqoxHjkoJ8wZbLTu4v6xw8v9qzCEJozEIQgEIQgJUOyOUViVDsjlFYBCEIBCEIGI2xmFWopVth4bQeIjmEiztMtnmOd9I8C9FkBIZW1tUgcLXB8xGNJiBLt0swX4lAkC7J84+m30vKJhqgnDzcczfHp2cW/lPPs9SqY4wtMBtc52yjVZrpFqgUhD8x2cJnltq+EuWDb4xxWGG0ZHwlaxFXG0yPmQ+NiIomksbkSoYeJuJp8bfKuc2+j7EYR22kkCNxg9WMsdpDGW7FhtyK+8h/8VxZYAC9zvPtLTN6NSxcAg1eUHqWEjtG4ioVK1FsfA5GLYlreUzsM02xNUmPejugquKLMrKoUhSWvvF8vSR77Lzo/QXBGnhVYjOodf/Sez6WP1mnFiavlnzbuZ3EzozBrRprTXYotfid5848hCdknTit7ZhCEkEIQgEIQgJUOyOUViVDsjlFYBCEIBCEIBCEIGjC85t0k0YcNV1h+rc3X9k7SDynS5WOnYU4cA7dcavjkb+kz5MzUX49WaU9MRHtFwbEyBR9XI/SPaFaxE4pnp229pHFU9bIZyNfXUauqbeElsNUVhaPlRQNgky2JmvwqlRqhHYPnEcPhLG5AB8JZ66i2VpFYghfKT8rS3v20uoy4RhiKt2MxWrWjVnJ/nI6UlP8AReF6xWSkWChjmSbXAzIHjadgooFUKBYAAADcBkJx7R9DXrYYDajPV8RqqFH8U7BhausitxA8987OLHxz3+XNza710XhCE0ZCEIQCEIQCEIQEqHZHKKxKh2RyisAhCEAhCEAmJmNq+LRO0wHhv8o67C8o3xBdrI47NN11/BWyJ+l1MsFbTg2KpPich5RhWUPrBgGD31gRkwO0Z+E0mL1e0TXV7UerRDC4iCPbJo5xWEfCOEYlqTGyOc7cEc8bbDvtNqiBhcD3nnbzrN6rvlmp3GtKuVO2PX0jcf1kYaZ3RCorDcfpIklR5iTp4074yxdcsY3Vz4zYkb7yZIW2kGUsbxtXrW2Z52HFjuAEVxWIAB3Af39ZLaC0MQRVqizfkTu+J8ftNeLiu7/im9TOf9P+jWjmpg1Kn6xwLjuKOyo885fNCYgFSp2g3HIytIYoxJU2Nja45jMT0tcc+MzHHdd3tdwYTn+jelGIQ2ezr45MOTe8tmj9NUa2Qazd1sj/AFmGuPWfaZZUrCYBmZRIhCEAhCEBKh2RyisSodkcorAxCEQxGIVBdjb7nlHXYXjTFY+nT2m54DMyHxWlXa4X5R4bTGSqTNc8V91Xs6xmlqjZL8o8NvnI9jzJP97Y7SmJipTyym0knpBDDKb5jZHgidHfFAIqGKtBHUo6hlYWIIuDKhpPRz4Y6y3al5tT91l0SJY+pTRC9RgqKLlmyA85jvjzudVrjes3uKSGBzG/eNhmrkjxiT1qLK1XDNrIGOsliAbbWp328bDKJ9dpkXuJ5++HWb07s8mdTtl2HCNap/vefC0cMzlQyoSGYKpAJDMTYKDxJNpZNCaB1LVKvzPbIbk4gcT4yePh1qq75M5iO0NoLVtVqr821UP5PE/teO6TBEfVVjRhPVxjOc9Rwa1dXusLFEaJzDtYXlkIlqXzNYbCfvFVpeMWwiG2sdrXJ+s31BymnaDnR+ma1HLW117rkm3Jto9ZY8B0io1MidRuDbDybZKYaFtsBREy1xZ0mWx0xTCc+weNq0uw5A7pzHlJzB9Jt1RLftL/ADX+sw1w6npaWLNCIUMSji6MGHhF5l117STo9kcppiMSiC7G33MZYjSKooAza30EiXZnOsxzl84+XtFp9iNLsckFvE5nykc7MxuxJ5w/AHjNWw/AzeZzPSpRVWKRvqMJstbiJIWmLzC2M2NMSBinnNwInTQAm0WEgalwASTYDaeE5R0n6QdexIoIw6vTOYJ1VquNpJ4bLCTPxE0+4Tq9Em7frGG5e6DxMoOiqFckWpErsJ1befGWub0mLxhMYyhUCgACwVtn+h4ritHLUBZDZs7i2ewbhy2j1kJh3yBU3Xutn5Hd9pLYbFg7L5fvr7iYWJlNcBpOphXKsNdG/WU27LixGsp3Hgy8JZqGLY01OHqX1ifwmcXDFfmNCqO/qg2bacs9t4TGhKo1WtrbQw2MdptwaV/Q2kHTEPhySFcEb+2nzo4HG6+siTrwL/gekdKowpN8jsoZVbY42HUY7SDcFdskGWc10/oWriHLrayXsNhu7tUOe4jWEsWiNK1aISliSWuLCodo4a/HnOrOb0rVmIiGLB1CBtOXmQIupBFwbg74nW2qOJ+1zJQFSwA4ZTUCLsJhUjtJJl8Ii655R8yCNatMg3iUJMhmn4fjeO11TFAgj5HRrhy6HWRip8Db/mTtDpG4FmUMeIy9JFmiInqeErc517hO4lPw95gEtNmm6C4lZ6GqtNwJoRMh4CoE1ZAdomUcTcESA2bD22GGs42i8c2mDHYbCqLyK03pRl/RU83bIkZ6oP2MmWRTuiS4VQbrYHkL+ctLJexA6P6PJ2qgudto/qaLpr2VAHASTF5qxk3Vt8nSlaR6NvrM9EXbNmp7C3F08eK+UhKWfEMpsdzKeBB2cjOhaRoh0NsmUFkIOqUcA2II2cDxBIzlQ6Q12qFNbU1xYmoiBXZdgD52Osc/KYbnntM9IPHYwre9r2JNtjW2EcGExoTRrNUXE1MlQXXi7cTwEQxOjq1dwlNS7EXNsgoGesWOVpaGTW1KS7N9u6N014cy+/oqW0XSugYjNyWP1Pt9pI1sEj9pbwwyAACOrS+tXvwjpGLg6lO34Z1l3of9p3RwqksMiLXOe7KPQJu0fI6Nwl5nVmxmQkjsJsIjHDxuokjVqYMVpgzKrFFSR2NCvlI/E1STkdkf4l9USLBlswqw1Nk3pwhM/obw1RCEhZkoJqsIRQosyZmEBMwhCBqZoZmEkMcW5Aa3AznSVDUJJ2+GW4QhKb+kRY2/QaJavTyqVmZXbabfi6gtwsNkKNMK7W3b98IS/B9lTuH2RyIQl6hssy0ISBgTZdkISAi+yJjZCEmBRBFN0IQIzHsbxtCE0z6H/9k="
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>New Asset created</strong> from Rakesh
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-2">
                {/* <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                /> */}
                <PlusCircleIcon className="h-11 w-11" />
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>Shipped</strong> #1832412
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 1 day ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                  <CreditCardIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>Production</strong> #4395133
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 2 days ago
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
