<script>
  export let navItems = [];
  $: console.log(navItems);
</script>

<style>
  nav {
    border: 1px solid salmon;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: space-evenly;
  }
  .menu {
    width: 40px;
    height: 40px;
    min-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-spacer {
    flex-grow: 1;
  }

  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    margin: 0 10px;
    background-color: #00000010;
  }
</style>

<nav role="navigation">
  <span class="flex-spacer" />
  {#each navItems as item}
    <div class="nav-item">{item.text}</div>
  {/each}
  <span class="flex-spacer" />

  <div class="menu"><span>M</span></div>
</nav>
