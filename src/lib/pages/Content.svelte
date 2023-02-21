<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Page from "$lib/components/Page.svelte";
  import Text from "$lib/components/Text.svelte";
  export let backgroundClass:string;

  import { login, logout, col, addDoc, auth, onSnapshot } from "../utils/fbFunctions";
    
    let data = [];
    let input;
    let user;
    let src = '/pigeon.png'


  onSnapshot(col, (snapshot) => {
      let messages = [];
      snapshot.docs.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      data = messages.sort((a, b) => (a.time > b.time ? 1 : -1));
    });
  
    function IsNullOrWhiteSpace( str) {
      return str === null || str.trim().length>0;

}

    const add = () => {
      if ((IsNullOrWhiteSpace(input)))
      {
      addDoc(col, {
        message: input ? input : "",
        user: auth.currentUser ? auth.currentUser.displayName : "Anon",
        time: Date.now(),
        //avatar: user.photoURL, //add avatar here later and on data
      });
    }else {
      error = "Message empty";
    }
    input = "";
    };


</script>

<div class="pb-4 px-4 text-right"> 
<div class= "float-left pl-4 pb-0 font-bold text-xl"> Chat Pigeon </div>
<img class= "float-left pl-2" {src} width=40 alt="bird img" />
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={login}>login</button>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={logout}>logout</button>

</div>

<Page id="content" title=" " {backgroundClass} >
  <Text>
    {#each data as { message, user, time }}
    <div class="bg-slate-700 text-white py-2 px-4 rounded ">
      <div class="bg-slate-800 text-xs font-medium w-3/12 pr-12 pl-2 rounded text-right">{user}</div>

      <div class="msg"> {message} 
        <div class="time">{new Date(time).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</div>
        
      </div>
      
    </div>
    <span class=brsmall></span>
  {/each}
  

    <input  type="text"class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="message" required bind:value={input} />
    <span class=brsmall></span>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right" on:click={add}>send</button>
    <br> <br>
  </Text>
</Page>

<style>

.msg {
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
      }

  .time{
    float: right;
    font-weight: lighter;
    font-size: smaller;
  }

  .brsmall {
            display: block;
            margin-bottom: .7em;
        }

</style>



