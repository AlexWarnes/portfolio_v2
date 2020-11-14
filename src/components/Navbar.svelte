<script>
  import NavMobile from "./NavMobile.svelte";
  import NavDesktop from "./NavDesktop.svelte";
  export let navItems = [];
  let vw;
</script>

<style>
  nav {
    border: 1px solid salmon;
    width: 100%;
    position: fixed;
    left: 0;
    /* mobile */
    bottom: 0;
  }
  /* desktop */
  @media screen and (min-width: 875px) {
    nav {
      bottom: unset;
      top: 0;
    }
  }
</style>

<svelte:window bind:innerWidth={vw} />
{#if vw > 875}
  <NavDesktop {navItems} />
{:else}
  <NavMobile {navItems} />
{/if}
