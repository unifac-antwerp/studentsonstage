import fetchData from "./src/prismic/fetch";
import { getSingleType } from "./src/prismic/mapper";

export default {
  getSiteData: () => ({
    title: "Students on Stage",
    fonts:
      "https://fonts.googleapis.com/css?family=Montserrat:300,500,700|Roboto:300,400,500"
  }),
  getRoutes: async () => {
    const data = await fetchData();
    const homepage = getSingleType(data, "homepage");
    const navbar = getSingleType(data, "navbar");

    return [
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({
          homepage,
          navbar
        })
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
