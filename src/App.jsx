import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout";
import {
  Home,
  About,
  Specialties,
  PartnersPage,
  Docs,
  Tsue,
  Psu,
  Goverment,
  Courses,
  WhyUs,
  Faq,
  Gallery,
  News,
  ArticleDetail,
  Contact,
  Acceptance,
} from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "specialties", element: <Specialties /> },
      { path: "partners", element: <PartnersPage /> },
      { path: "docs", element: <Docs /> },
      { path: "tsue", element: <Tsue /> },
      { path: "psu", element: <Psu /> },
      { path: "goverment", element: <Goverment /> },
      { path: "courses", element: <Courses /> },
      { path: "why-us", element: <WhyUs /> },
      { path: "faq", element: <Faq /> },
      { path: "gallery", element: <Gallery /> },
      { path: "news", element: <News /> },
      { path: "news/:id", element: <ArticleDetail /> },
      { path: "contact", element: <Contact /> },
      { path: "acceptance", element: <Acceptance /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
