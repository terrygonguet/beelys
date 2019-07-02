<script>
  import slide from "../slide";
  import TM from "../components/TeamMember.svelte";

  //Page
  let pageTitle = "L'équipe";

  //Components
  let name1 = "James";
  let job11 = "Front-End";
  let job21 = "Scrum Master";

  let name2 = "Clément";
  let job12 = "Webmarketing";
  let job22 = "Product Owner";

  let name3 = "<a href='https://terry.gonguet.com' target='blank'>Terry</a>";
  let job13 = "Back-end";
  let job23 = "Dev team";
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<main out:slide in:slide={{ fromRight: false }}>

  <h1>{pageTitle}</h1>
  <TM name={name1} job1={job11} job2={job21} />
  <TM name={name2} job1={job12} job2={job22} />
  <TM name={name3} job1={job13} job2={job23} />

</main>
