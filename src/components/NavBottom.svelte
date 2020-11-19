<script>
  import LinkButton from "./LinkButton.svelte";
  import Logo from "./Logo.svelte";
  export let navItems = [];
</script>

<style>
  nav {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 15px;
    font-size: 0.8em;
  }

  .logo {
    margin: 0 5px 0 0;
  }
</style>

<nav role="navigation">
  <LinkButton urlPath="#/">
    <img width="28px" class="logo" src="/fission.png" alt="Nuclear Fission" />
    <span>AW</span>
  </LinkButton>
  {#each navItems as item}
    <LinkButton urlPath={item.urlPath}><span>{item.text}</span></LinkButton>
  {/each}
</nav>
