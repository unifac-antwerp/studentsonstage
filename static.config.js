import fetchData from "./src/prismic/fetch";
import { getSingleType } from "./src/prismic/mapper";

export default {
  getSiteData: () => ({
    title: "Students on Stage"
  }),
  getRoutes: async () => {
    const data = await fetchData();
    const homepage = getSingleType(data, "homepage");

    return [
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({
          homepage
        })
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
