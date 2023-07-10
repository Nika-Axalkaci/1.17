import Layouts from "./layout/Layouts";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import ParamPage from "./pages/ParamPage";

const router = [
  {
    element: <Layouts />,
    path: "/",
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <AboutPage />,
        path: "about",
      },
    ],
  },
  {
    element: <ParamPage />,
    path: "/facts/:id",
  },
];

export default router;
