<script>
  export let besoin = true;
  export let title = "Untitled";
  export let items = [];
</script>

<div>
  <h2>{besoin ? 'Besoins' : 'Réponses'}</h2>
  <p>{title}</p>
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
</div>
