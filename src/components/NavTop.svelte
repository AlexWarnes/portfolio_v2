<script>
  import LinkButton from "./LinkButton.svelte";
  import Logo from "./Logo.svelte";

  export let navItems = [];
  $: console.log(navItems);
</script>

<style>
  nav {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }

  .flex-spacer {
    flex-grow: 1;
  }

  nav :global(.btn) {
    margin: 6px 12px;
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
  <span class="flex-spacer" />
  {#each navItems as item}
    <LinkButton urlPath={item.urlPath}><span>{item.text}</span></LinkButton>
  {/each}
</nav>
