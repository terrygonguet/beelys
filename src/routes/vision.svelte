<script>
  import slide from "../slide";
  import BesRep from "../components/BesoinReponses.svelte";

  //Page
  let pageTitle = "Notre vision";
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<main out:slide in:slide={{ fromRight: false }}>
  <h1>{pageTitle}</h1>
  <p>Nos compétences pour vos projets</p>

  <dl>
    <dt>Humain</dt>
    <dd>Implication du client.</dd>
    <dd>Développeurs = collaborateurs</dd>
    <dd>relation professionnelle et transparente</dd>

    <dt>Environnemental</dt>
    <dd>Réduire l’empreinte énergétique</dd>
    <dd>Faible consommation des batteries</dd>
    <dd>Plus rapide à charger</dd>
    <dd>Moins de place sur l'hébergement</dd>

    <dt>Produit</dt>
    <dd>Grande qualité</dd>
    <dd>Optimisé</dd>
  </dl>
  <p>
    Devenir un
    <strong>acteur innovant</strong>
    du tissus entrepreneurial
    <strong>local</strong>
    avec une approche
    <strong>environnemental</strong>
    et
    <strong>vidéoludique</strong>
  </p>
</main>
