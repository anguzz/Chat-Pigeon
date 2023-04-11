<script>
  import File from "./File.svelte";
  import Upload from "./Upload.svelte";
  import { getStorage, ref, getMetadata, listAll } from "firebase/storage";
  import { onMount } from "svelte";
  import Text from "$lib/components/Text.svelte";
  const storage = getStorage();
  const refs = ["fbFiles"];
  $: files = {
    fbFiles: [],
  };

  function getFileData() {
    files = {
      fbFiles: [],
    };
    const user = localStorage.getItem("uid");
    refs.forEach((folder) => {
      let reference = ref(storage, `${user}/${folder}`);
      listAll(reference)
        .then((res) => {
          res.items.forEach((itemRef) => {
            getMetadata(itemRef).then((metaData) => {
              files[folder] = [...files[folder], metaData];
            });
          });
        })
        .catch((error) => {});
    });
  }

  onMount(() => {
    let user = "";
    getFileData();
  });
</script>

<Text>
        <div class = header> ChatPigeon File sharing </div>      
        <Upload folder="fbFiles" functionProp={() => getFileData()} />
        {#if files.fbFiles.length > 0}
          <File
            data={files.fbFiles}
            folder="fbFiles"
            functionProp={() => getFileData()}
          />
        {/if}
      </Text>

<style>
.header{
  color:white;
  font-weight:400;
  font-size:2.5rem;
  text-align: center;
  background-color: #23395B;
  border-radius: 10px;
  padding:.5rem;
}
  
</style>
