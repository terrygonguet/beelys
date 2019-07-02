<script>
  import slide from "../slide";
  import BesRep from "../components/BesoinReponses.svelte";

  //Page
  let pageTitle = "Le restaurant";
  let pageBesoin = true;

  //Components
  let title1 = "Besoin de visibilité sur internet";
  let items1 = [
    "Afficher le menu",
    "Chargement rapide sur le Smartphone",
    "Contact facile",
    "Référencement des moteurs de recherche"
  ];

  let title2 = "Catalogue de sites web";
  let items2 = [
    "Site interne léger",
    "Optimisé pour la batterie",
    "Conçu pour smartphone et ordinateur",
    "De l'UX et Google aime ça"
  ];
  let punchline2 = "Moins cher pour plus d'efficacité!";
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
