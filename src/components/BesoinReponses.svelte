<script>
  import { slide } from "svelte/transition";
  export let besoin = true;
  export let title = "Untitled";
  export let items = [];
  export let punchline;
  export let titleOnly = false;
</script>

<style>
  div div {
    /* prevent margin collapse */
    padding-bottom: 1px;
  }

  .grow {
    flex-grow: 1;
    background: white;
  }

  h2 {
    cursor: pointer;
    border-bottom: solid 3px orange;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  h2 img {
    width: 0.8em;
  }

  .hidden {
    display: none;
  }
</style>

<div class:grow={!titleOnly}>
  <h2 on:click>
     {besoin ? 'Besoins' : 'Solutions'}
    <img class:hidden={!titleOnly} src="add.svg" alt="add" />
  </h2>
  {#if !titleOnly}
    <div transition:slide>
      <p>{title}</p>
      <ul>
        {#each items as item}
          <li>{item}</li>
        {/each}
      </ul>
      {#if punchline}
        <p>
          <strong>{punchline}</strong>
        </p>
      {/if}
    </div>
  {/if}
</div>
