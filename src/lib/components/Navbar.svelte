<script lang="ts">
let src = '/pigeon.png'

import { login,logout } from "../utils/fbFunctions";

</script>

<div class="pb-4 px-4 text-right"> 
    <div class= "float-left pl-4 pb-0 font-bold text-xl"> <a href="/" class="button">Chat Pigeon</a>  </div>
    <img class= "float-left pl-2" {src} width=40 alt="bird img" />
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={login}>login</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={logout}>logout</button>
    
    </div>