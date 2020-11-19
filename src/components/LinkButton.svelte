<script>
  export let urlPath;
  export let text;
  export let color = "default";
</script>

<style>
  a {
    text-decoration: none;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: 2px;
    color: var(--white);
    background-color: transparent;
    border: 2px solid transparent;
    transition: all 0.2s ease;
  }

  .btn:hover {
    border: 2px solid var(--blue-2);
    box-shadow: 0 0 3px var(--blue-2);
    cursor: pointer;
  }

  .btn.blue-1 {
    background-color: var(--blue-1);
  }
  .btn.blue-2 {
    background-color: var(--blue-2);
  }
  .btn.blue-3 {
    background-color: var(--blue-3);
  }
  .btn.white {
    background-color: var(--white);
  }
  .btn.red {
    background-color: var(--red);
  }

  /* background-color: var(--red);
    font-weight: 400; */
</style>

<a href={urlPath}>
  <!-- <div class="btn {color}">{text}</div> -->
  <div class="btn {color}">
    <slot />
  </div>
</a>
