<script>
  import slide from "../slide";
</script>

<svelte:head>
  <title>Le restaurant</title>
</svelte:head>

<main out:slide in:slide={{ fromRight: false }}>
  <h1>Le Restaurant</h1>

  <div>
    <h2>Besoins</h2>
    <p>Besoin de visibilité sur internet</p>
    <ul>
      <li>Afficher le menu</li>
      <li>Chargement rapide sur le Smartphone</li>
      <li>Contact facile</li>
      <li>Référencement des moteurs de recherche</li>
    </ul>
  </div>

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
