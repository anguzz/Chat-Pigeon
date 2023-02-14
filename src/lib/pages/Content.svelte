<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Page from "$lib/components/Page.svelte";
  import Text from "$lib/components/Text.svelte";
  import { primaryBackground } from "$lib/utils/constants";

  import { login, logout, col, addDoc, auth, onSnapshot } from "../utils/fbFunctions";
    
    let data = [];
    let input;
    let user;


  onSnapshot(col, (snapshot) => {
      let arr = [];
      snapshot.docs.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      data = arr.sort((a, b) => (a.time > b.time ? 1 : -1));
    });
  
    const add = () => {
      addDoc(col, {
        message: input ? input : "",
        user: auth.currentUser ? auth.currentUser.displayName : "Anon",
        time: Date.now(),
        //avatar: user.photoURL, //add avatar here later and on data
      });
      input = "";
      console.log(auth);
    };
</script>


<div class="pb-4 px-4"> 
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={login}>login</button>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={logout}>logout</button>
</div>

<Page id="content">
  <Text>
    {#each data as { message, user, time }}
    <div class="bg-slate-700 text-white py-2 px-4 rounded ">
      <div class="bg-slate-800 text-xs font-medium w-3/12 pr-12 pl-2 rounded text-right">{user}</div>

      <div class="msg"> {message} 
        <div class="time">{new Date(time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        
      </div>
      
    </div>
    <span class=brsmall></span>
  {/each}
  

    <input  type="text"class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="message" required bind:value={input} />
    <span class=brsmall></span>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right" on:click={add}>send</button>

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



