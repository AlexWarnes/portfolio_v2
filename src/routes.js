import Landing from "./components/Landing.svelte";
import RouteNotFound from "./components/RouteNotFound.svelte"

export default {
  '/': Landing,
  '/portfolio': RouteNotFound,
  '/about': RouteNotFound,
  '*': RouteNotFound,
}