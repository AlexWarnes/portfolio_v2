import Home from "./components/Home.svelte";
import RouteNotFound from "./components/RouteNotFound.svelte"

export default {
  '/': Home,
  '/projects': RouteNotFound,
  '/about': RouteNotFound,
  '*': RouteNotFound,
}