<script>
  import NavBottom from "./NavBottom.svelte";
  import NavTop from "./NavTop.svelte";
  export let navItems = [];
  let vw;
</script>

<style>
</style>

<svelte:window bind:innerWidth={vw} />
{#if vw > 875}
  <NavTop {navItems} />
{:else}
  <NavBottom {navItems} />
{/if}
