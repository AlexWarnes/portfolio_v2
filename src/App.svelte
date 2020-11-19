<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Navbar from "./components/Navbar.svelte";
  const navItems = [
    // { text: "home", urlPath: "#/" },
    { text: "projects", urlPath: "#/projects" },
    { text: "about", urlPath: "#/about" },
  ];
</script>

<style>
  main {
    min-height: 100%;
    height: 100%;
    /* padding for mobile nav */
    padding: 0 0 60px 0;
  }

  @media screen and (min-width: 875px) {
    main {
      /* padding for desktop nav */
      padding: 60px 0 0 0;
    }
  }
</style>

<main>
  <Navbar {navItems} />
  <Router {routes} />
</main>
