import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Homepage from "../pages/Homepage";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import FriendDetails from "../pages/FriendDetailes";
import ErrorPage from "../pages/Errorpage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        loader: () => fetch("/public/friends.json"),
        Component: Homepage,
      },
      { path: "timeline", Component: Timeline },
      { path: "stats", Component: Stats },
      {
        path: "friend/:id",
        loader: () => fetch("/public/friends.json"),
        Component: FriendDetails,
      },
    ],
    errorElement: <ErrorPage/>
  },
]);
