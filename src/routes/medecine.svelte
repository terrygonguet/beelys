<script>
  import slide from "../slide";
  import BesRep from "../components/BesoinReponses.svelte";
  import { goto } from "@sapper/app";
  import { fromRight } from "../stores";

  function swipe(e) {
    if (e.detail == "right") {
      $fromRight = true;
      goto("restaurant");
    } else {
      $fromRight = false;
      goto("bim");
    }
  }

  //Page
  let pageTitle = "L'étudiante en médecine";
  let pageBesoin = true;

  //Components
  let title1 = "Booster sa productivité";
  let items1 = [
    "Pas plus, pas moins, juste ce qu'il faut",
    "Participer activement au développement",
    "Pas d'attente",
    "Achat au fur et à mesure de l'avancée"
  ];

  let title2 = "Application Web et méthode agile";
  let items2 = [
    "Application sur-mesure",
    "L'implication dans le projet : Scrum",
    "Fonctionnalité noyau en priorité et mise à disposition",
    "Fonctionnalités vendues à la fin d'un Sprint"
  ];
  let punchline2 = "Une meilleure qualité et plus de surprises !";
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
