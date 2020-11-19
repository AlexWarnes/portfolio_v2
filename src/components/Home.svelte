<script>
  import LinkButton from "./LinkButton.svelte";
</script>

<style>
  header {
    padding: 1em;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 500;
    margin: 0;
  }
</style>

<header>
  <div class="name-box">
    <h1>ALEX</h1>
    <h1>WARNES</h1>
    <p>Intelligence Analyst turned Web Developer</p>
  </div>

  <LinkButton urlPath="#/about" color="red"><span>Learn More</span></LinkButton>
</header>
