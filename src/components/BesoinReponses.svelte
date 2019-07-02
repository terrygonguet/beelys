<script>
  export let besoin = true;
  export let title = "Untitled";
  export let items = [];
  export let punchline;
</script>

<div>
  <h2>{besoin ? 'Besoins' : 'Solutions'}</h2>
  <p>{title}</p>
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
  {#if punchline}
    <p>
      <bold>{punchline}</bold>
    </p>
  {/if}
</div>
