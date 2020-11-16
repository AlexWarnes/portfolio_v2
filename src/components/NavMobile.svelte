<script>
  export let navItems = [];
  $: console.log(navItems);
</script>

<style>
  nav {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    padding: 10px 15px;
    font-size: 0.8em;
  }

  .nav-item {
    margin: 0 10px;
  }
</style>

<nav role="navigation">
  {#each navItems as item}
    <a href={item.urlPath}>
      <div class="nav-item btn">{item.text}</div>
    </a>
  {/each}
</nav>
