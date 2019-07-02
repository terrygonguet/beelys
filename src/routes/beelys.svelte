<script>
  import slide from "../slide";
  import BesRep from "../components/BesoinReponses.svelte";

  //Page
  let pageTitle = "Beelys";

  //Components
  let title1 = "Un cadre pédagogique et sécurisé pour créer notre société";
  let items1 = [
    "Création des statuts",
    "Création d’un/ des modèles de facturation",
    "Administration d’une entreprise, notamment la SCOP et SARL"
  ];
  let title2 = "Booster le réseau";
  let items2 = [
    "Agrandir le carnet d’adresse",
    "Promouvoir notre activité sur Lyon",
    "Obtenir des aides financières"
  ];
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<main out:slide in:slide={{ fromRight: false }}>
  <h1>{pageTitle}</h1>
  <BesRep title={title1} items={items1} />
  <BesRep title={title2} items={items2} />
</main>
