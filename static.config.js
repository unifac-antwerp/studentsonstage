import fetchData from "./src/prismic/fetch";

export default {
  getSiteData: () => ({
    title: "Students on Stage"
  }),
  getRoutes: async () => {
    const posts = await fetchData();
    return [
      {
        path: "/",
        component: "src/containers/Home"
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
