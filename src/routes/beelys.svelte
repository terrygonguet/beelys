<script>
  import slide from "../slide";
  let pageTitle = "Beelys";
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<main out:slide in:slide={{ fromRight: false }}>
  <h1>{pageTitle}</h1>

  <p>Un cadre pédagogique et sécurisé pour créer notre société</p>
  <ul>
    <li>Création des statuts</li>
    <li>Création d’un/ des modèles de facturation</li>
    <li>Administration d’une entreprise, notamment la SCOP et SARL</li>
  </ul>

  <p>Booster le réseau</p>
  <ul>
    <li>Agrandir le carnet d’adresse</li>
    <li>Promouvoir notre activité sur Lyon</li>
    <li>Obtenir des aides financières</li>
  </ul>
</main>
