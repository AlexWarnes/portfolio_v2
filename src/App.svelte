<script>
  import Navbar from "./components/Navbar.svelte";
  import Landing from "./components/Landing.svelte";
  const navItems = [{ text: "HOME" }, { text: "PORTFOLIO" }, { text: "ABOUT" }];
</script>

<style>
  main {
    min-height: 100%;
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
  <Landing />
</main>
