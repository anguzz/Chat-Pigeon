<script lang="ts" context="module">

</script>

<script lang="ts">
  import SEO from "svelte-seo";
  import Content from "$lib/pages/Content.svelte";
  import Footer from "$lib/pages/Footer.svelte";
  import { primaryBackground } from "$lib/utils/constants.js";

/* basic colors at  https://tailwindcss.com/docs/customizing-colors   more at  https://hypercolor.dev/   */ 
</script>


<SEO
  title="Chat Pigeon"
  description="Chat with others"
  canonical=""
/>


<!--About me/bio-->
<Content backgroundClass={primaryBackground}/>




<Footer  />
