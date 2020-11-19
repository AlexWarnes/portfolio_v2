<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import Navbar from "./components/Navbar.svelte";
  import Star from "./components/Star.svelte";
  const navItems = [
    // { text: "home", urlPath: "#/" },
    { text: "projects", urlPath: "#/projects" },
    { text: "about", urlPath: "#/about" },
  ];

  const vh = window.innerHeight - 4;
  const vw = window.innerWidth - 4;
  const starCount = Math.floor(Math.random() * 12);
  console.log("starCount: ", { starCount, vh, vw });

  let stars = Array(starCount)
    .fill("x", 0)
    .map((s) => {
      const opacity = Math.random();
      return {
        x: Math.floor(Math.random() * vw),
        y: Math.floor(Math.random() * vh),
        opacity: opacity > 0.5 ? 0.5 : opacity,
      };
    });

  console.log("Stars: ", stars);

  const handleMouseMove = (e) => {
    console.log("MOUSE MOVE", e.clientX);
    stars = stars.map((s) => {
      return {
        ...s,
        x: s.x++,
      };
    });
  };
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

{#each stars as star (star)}
  <Star {star} />
{/each}
<main>
  <Navbar {navItems} />
  <Router {routes} />
</main>
