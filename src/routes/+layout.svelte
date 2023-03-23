<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/pages/Footer.svelte";

</script>


<main class="pt-5">
<Navbar/>
  <slot />
  <Footer  />
</main>
