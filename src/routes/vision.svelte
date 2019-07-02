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
    <dd>Implication du client</dd>
    <dd>Développeurs = collaborateurs</dd>
    <dd>Relation professionnelle et transparente</dd>

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
  <br/>
  <p>
      <strong>Faire des sites web autrement</strong> 
      que les acteurs habituels en empruntant une démarche 
      <strong>agile</strong> et <strong>orientée client</strong>.
  </p>
</main>
