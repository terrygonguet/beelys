<script>
  import slide from "../slide";
  import BesRep from "../components/BesoinReponses.svelte";

  let title1 = "Besoin de visibilité sur internet";
  let items1 = [
    "Afficher le menu",
    "Chargement rapide sur le Smartphone",
    "Contact facile",
    "Référencement des moteurs de recherche"
  ];
</script>

<svelte:head>
  <title>Le restaurant</title>
</svelte:head>

<main out:slide in:slide={{ fromRight: false }}>
  <h1>Le Restaurant</h1>
  <BesRep title={title1} items={items1} />
  <BesRep title={title2} items={items2} />

  <div>
    <h2>Réponses</h2>
    <p>Catalogue de Site web</p>
    <ul>
      <li>Site interne léger</li>
      <li>Optimisé pour la batterie</li>
      <li>Conçu pour smartphone et ordinateur</li>
      <li>De l'UX et Google aime ça</li>
    </ul>
    <p>
      <bold>Moins cher pour plus d'efficacité!</bold>
    </p>
  </div>
</main>
