<script>
  import slide from "../slide";
  import BesRep from "../components/BesoinReponses.svelte";
  import { goto } from "@sapper/app";

  function swipe(e) {
    if (e.detail == "right") {
      fromRight = true;
      goto("medecine");
    } else goto("beelys");
  }
  let fromRight = false;

  //Page
  let pageTitle = "L'expert BIM";
  let pageBesoin = true;

  //Components
  let title1 = "Expliquer son métier à ses clients";
  let items1 = [
    "Transmettre de l'information complexe",
    "Vendre une prestation dont la qualité est garantie",
    "Obtenir les informations nécessaires auprès de ses clients"
  ];

  let title2 = "Serious Game";
  let items2 = [
    "Ludique, élimination des longues pages explicatives",
    "Pédagogique, simulation de la prestation par le client",
    "Transmssion de l'information, compréhension des tenants et aboutissants"
  ];
  let punchline2 = "Moins de lecture et plus d'interactivité !";
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<svelte:window on:swipe={swipe} />

<main out:slide={{ fromRight: !fromRight }} in:slide={{ fromRight }}>
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
