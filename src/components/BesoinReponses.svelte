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
  }
</style>

<div class:grow={!titleOnly}>
  <h2 on:click>{besoin ? 'Besoins' : 'Solutions'}</h2>
  {#if !titleOnly}
    <div transition:slide|local>
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
