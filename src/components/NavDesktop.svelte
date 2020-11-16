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

  .flex-spacer {
    flex-grow: 1;
  }

  .nav-item {
    margin: 0 10px;
  }
</style>

<nav role="navigation">
  <span class="flex-spacer" />
  {#each navItems as item}
    <a href={item.urlPath}>
      <div class="nav-item btn">{item.text}</div>
    </a>
  {/each}
</nav>
