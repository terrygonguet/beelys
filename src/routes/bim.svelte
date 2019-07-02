<script>
  import slide from "../slide";
  import BesRep from "../components/BesoinReponses.svelte";

  //Page
  let pageTitle = "L'expert BIM";
  let pageBesoin = true;

  //Components
  let title1 = "Expliquer son métier à ses clients";
  let items1 = [
    "Transmettre de l'information complexe",
    "Vendre une prestation sans décevoir",
    "Obtenir les informations nécessaires auprès de ses clients"
  ];

  let title2 = "Serious Game";
  let items2 = [
    "Ludique, élimination des longues pages explicatives",
    "Pédagogique, simulation de la prestation par le client",
    "Transmssion de l'information, compréhension des tenants et aboutissant"
  ];
  let punchline2 = "Moins de lecture et plus d'activité!";
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<main out:slide in:slide={{ fromRight: false }}>
  <h1>{pageTitle}</h1>
  {#if pageBesoin}
    <BesRep title={title1} items={items1} />
    <button on:click={e => (pageBesoin = false)}>Solutions</button>
  {:else}
    <BesRep
      besoin={false}
      title={title2}
      items={items2}
      punchline={punchline2} />
    <button on:click={e => (pageBesoin = true)}>Besoins</button>
  {/if}
</main>
