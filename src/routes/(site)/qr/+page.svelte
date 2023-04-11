<script lang="ts">
    import Page from "$lib/components/Page.svelte";
    import { QRCodeImage } from "svelte-qrcode-image";
    let chat_url ="https://chatpigeon.vercel.app/chat"
    import Text from "$lib/components/Text.svelte";
  </script>
  
<Text>
    <div
  class="flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover page lg:bg-fixed bg-slate-900"
  id="bg"
>

<div class = "size"> 
  <QRCodeImage text = {chat_url} width=600 height = 600;/>
</div>

  <div>
</Text>

