<script>
  import slide from "../slide";
  import BesRep from "../components/BesoinReponses.svelte";
  import { goto } from "@sapper/app";

  function swipe(e) {
    if (e.detail == "right") goto("beelys");
  }

  //Page
  let pageTitle = "Notre vision";
</script>

<style>
  dt {
    font-weight: bold;
    margin: 5px 0px 5px 0px;
    border-bottom: orange solid 2px;
  }
  dd {
    margin-inline-start: 10px;
  }
</style>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<svelte:window on:swipe={swipe} />

<main out:slide={{ fromRight: false }} in:slide={{ fromRight: false }}>
  <h1>{pageTitle}</h1>
  <p>Nos compétences pour vos projets</p>

  <dl>
    <dt>Humain</dt>
    <dd>Implication du client</dd>
    <dd>Développeurs = collaborateurs</dd>
    <dd>Relations professionnelles et transparentes</dd>

    <dt>Environnemental</dt>
    <dd>Réduire l’empreinte écologique</dd>
    <dd>Faible consommation d'énergie</dd>
    <dd>Chargement plus rapide</dd>
    <dd>Moins d'espace occupé sur l'hébergement</dd>

    <dt>Produit</dt>
    <dd>Grande qualité</dd>
    <dd>Optimisé</dd>
  </dl>

  <p>
    Devenir un
    <strong>acteur innovant</strong>
    du tissu entrepreneurial
    <strong>local</strong>
    avec une approche
    <strong>écologique</strong>
    et
    <strong>(vidéo)ludique</strong>
  </p>
  <br />
</main>
