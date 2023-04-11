<script>
  import {
    getStorage,
    ref,
    getDownloadURL,
    deleteObject,
  } from "firebase/storage";

  function bytesToSize(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
  }

  const storage = getStorage();

  function downloadFile(folder, name) {
    const uid = localStorage.getItem("uid");
    let path = `${uid}/${folder}/${name}`;
    getDownloadURL(ref(storage, path))
      .then((url) => {
        const link = document.createElement("a");
        link.href = url;
        link.click();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function deleteFile(folder, name) {
    const uid = localStorage.getItem("uid");
    let path = `${uid}/${folder}/${name}`;
    const fileRef = ref(storage, path);

    // Delete the file
    window.confirm("Permanently delete this file?");
    deleteObject(fileRef)
      .then(() => {
        functionProp();
      })
      .catch((error) => {
      });
  }

  export let data;
  export let folder;
  export let functionProp = () => {};
</script>

<div class = table > 
    {#each data as { name, timeCreated, size }}
    <hr class="w-50 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
    <div>
        <div class="title">{name}</div>
        
        <div class = info > 
        <div class = bytes >date: {timeCreated.substring(0, 10)}</div> 
        <div class = bytes >size: {bytesToSize(size)}</div>
      </div>

        <div>
          <button
            class="bg-blue-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            on:click={() => downloadFile(folder, name)}>Download</button
          >
          <button
            class="bg-blue-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            on:click={() => deleteFile(folder, name)}>Delete</button
          >
        </div>
      </div>
    {/each}
  </div>
<br>
<style>
    .table{
    background-color: #23395B;

    color:rgb(255, 253, 253);
    border-radius: 10px;
    padding: 1rem;
    font-weight: 500;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .title{
    color:white;
    font-size:1.5rem;
  }

 .info
 {
  color:rgb(255, 253, 253);
  background-color: transparent;
  border-radius: 10px;
  padding: .5rem;
  display: flex;
  font-weight: 500;
  font-size:1rem;
  justify-content: space-evenly;
  align-items: center;
 }
  

</style>
