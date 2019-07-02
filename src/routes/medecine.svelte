<script>
  import slide from "../slide";
</script>

<svelte:head>
  <title>Le travailleur</title>
</svelte:head>

<main out:slide in:slide={{ fromRight: false }}>
  <h1>Le travailleur</h1>

  <div>
    <h2>Besoins</h2>
    <p>Booster sa productivité</p>
    <ul>
      <li>Pas plus, pas moins, juste ce qu'il faut</li>
      <li>Avoir un avis qui compte</li>
      <li>Ne pas attendre</li>
      <li>Acheter petit à petit</li>
    </ul>
  </div>

  <div>
    <h2>Réponses</h2>
    <p>Application Web et méthode agile</p>
    <ul>
      <li>Application sur-mesure</li>
      <li>L'implication dans le projet : Scrum</li>
      <li>Fonctionnalité noyau en priorité et mise à disposition</li>
      <li>De l'UX et Google aime ça</li>
      <li>Fonctionnalités vendues à la fin d'un Sprint</li>
    </ul>
    <p>
      <bold>Moins de surprise pour plus de qualité!</bold>
    </p>
  </div>
</main>
