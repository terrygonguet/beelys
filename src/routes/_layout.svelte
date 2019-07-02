<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  div {
    position: relative;
    background: #ece4dc;
  }
</style>

<Nav {segment} />

<div>
  <slot />
</div>
