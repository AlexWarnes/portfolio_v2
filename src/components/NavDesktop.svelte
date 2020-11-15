<script>
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
    margin: 0 10px;
  }
</style>

<nav role="navigation">
  <div class="menu"><span>M</span></div>
  <span class="flex-spacer" />
  {#each navItems as item}
    <a href={item.urlPath}>
      <div class="nav-item btn">{item.text}</div>
    </a>
  {/each}
</nav>

<!-- #5773c7 blue -->
<!-- 57c789 green -->
<!-- #d50000 red -->
