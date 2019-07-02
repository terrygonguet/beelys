<script>
  export let segment;

  let isSmall = true;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    justify-content: space-evenly;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0.5em;
    display: block;
  }

  img {
    width: 1.5em;
  }

  @media (min-width: 768px) {
    nav {
      display: block;
    }
  }
</style>

<nav>
  <ul>
    <li>
      <a class:selected={segment === undefined} href=".">
        <img src="home-alt2.svg" alt="Home" />
         {isSmall ? '' : 'Home'}
      </a>
    </li>
    <li>
      <a class:selected={segment === 'restaurant'} href="restaurant">
        <img src="restaurant.svg" alt="Le Restaurant" />
         {isSmall ? '' : 'Le Restaurant'}
      </a>
    </li>
    <li>
      <a class:selected={segment === 'medecine'} href="medecine">
        <img src="activity.svg" alt="L'étudiant de médecine" />
         {isSmall ? '' : "L'étudiant de médecine"}
      </a>
    </li>
    <li>
      <a class:selected={segment === 'bim'} href="bim">
        <img src="laptop.svg" alt="Le BIM" />
         {isSmall ? '' : 'Le BIM'}
      </a>
    </li>
    <li>
      <a class:selected={segment === 'beelys'} href="beelys">
        <img src="support-alt.svg" alt="Vous" />
         {isSmall ? '' : 'Vous'}
      </a>
    </li>
    <li>
      <a class:selected={segment === 'equipe'} href="equipe">
        <img src="happy-face.svg" alt="Nous" />
         {isSmall ? '' : 'Nous'}
      </a>
    </li>
  </ul>
</nav>
