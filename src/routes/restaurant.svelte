<script>
  import slide from "../slide";
  import BesRep from "../components/BesoinReponses.svelte";
  import { goto } from "@sapper/app";
  import { fromRight } from "../stores";

  function swipe(e) {
    if (e.detail == "right") {
      $fromRight = true;
      goto(".");
    } else {
      $fromRight = false;
      goto("medecine");
    }
  }

  //Page
  let pageTitle = "Le Restaurant";
  let pageBesoin = true;

  //Components
  let title1 = "Besoin de visibilité sur Internet";
  let items1 = [
    "Afficher le menu",
    "Chargement rapide sur les smartphones",
    "Facilité de contact",
    "Référencement des moteurs de recherche"
  ];

  let title2 = "Catalogue de sites web";
  let items2 = [
    "Site internet léger",
    "Optimisé pour la batterie",
    "Responsive",
    "De l'UX et Google aime ça"
  ];
  let punchline2 = "Moins cher et plus efficace !";
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<svelte:window on:swipe={swipe} />

<main
  out:slide={{ fromRight: !$fromRight }}
  in:slide={{ fromRight: $fromRight }}>
  <h1>{pageTitle}</h1>
  <BesRep
    title={title1}
    items={items1}
    titleOnly={!pageBesoin}
    on:click={e => (pageBesoin = !pageBesoin)} />
  <BesRep
    besoin={false}
    title={title2}
    items={items2}
    punchline={punchline2}
    titleOnly={pageBesoin}
    on:click={e => (pageBesoin = !pageBesoin)} />
</main>
