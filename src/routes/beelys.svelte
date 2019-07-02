<script>
  import slide from "../slide";
  import { goto } from "@sapper/app";

  function swipe(e) {
    if (e.detail == "right") {
      fromRight = true;
      goto("bim");
    } else goto("vision");
  }
  let fromRight = false;

  let pageTitle = "Beelys";
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<svelte:window on:swipe={swipe} />

<main out:slide={{ fromRight: !fromRight }} in:slide={{ fromRight }}>
  <h1>{pageTitle}</h1>

  <p>Un cadre pédagogique et sécurisé pour créer notre société</p>
  <ul>
    <li>Création des statuts</li>
    <li>Création des modèles de facturation</li>
    <li>Administration d’une entreprise, notamment la SCOP et SARL</li>
  </ul>

  <p>Booster le réseau</p>
  <ul>
    <li>Agrandir le carnet d’adresse</li>
    <li>Promouvoir notre activité sur Lyon</li>
    <li>Obtenir des aides financières</li>
  </ul>
</main>
