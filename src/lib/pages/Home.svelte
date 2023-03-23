<script lang="ts">
    import Anchor from "$lib/components/Anchor.svelte";
    import Socials from "$lib/components/Socials.svelte";
    let color = "text-grey-200";
  </script>
  
  <Anchor id="home" />
  <div
    class="flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover page lg:bg-fixed bg-neutral-600 bg-blend-soft-light dark:bg-blend-soft-light dark:bg-neutral-700"
    id="bg">
    <div class="text-center">
        <h1 class="text-6xl m-6 {color} font-light">Chat Pigeon</h1>
        <button class="bg-blue-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <a href="/chat" class="button">Join Chatroom</a>
          </button> 
          <br><br>
          <p class="text-xl m-2">   Anonymous chatting, made easy  </p> <br>

        </div>
  </div>
  
  <style>
     #bg {
    background: radial-gradient(circle 150px at 61% 0%, #358ada 0%, #0c2152 50%,transparent 50%, transparent 100%),
    radial-gradient(circle 144px at 33% 100%,#358ada 0%, #071840 50%,transparent 50%, transparent 100%),
    radial-gradient(circle 94px at 56% 36%, #358ada 0%, #071840 50%,transparent 50%, transparent 100%),
    radial-gradient(circle 183px at 16% 59%, #358ada 0%, #071840 50%,transparent 50%, transparent 100%),
    radial-gradient(circle 212px at 7% 86%, #358ada 0%, #071840 50%,transparent 50%, transparent 100%),
    radial-gradient(circle 107px at 0% 19%, #358ada 0%, #071840 50%,transparent 50%, transparent 100%),
    linear-gradient(90deg, #305f97,#232f58);
  }
  </style>
  