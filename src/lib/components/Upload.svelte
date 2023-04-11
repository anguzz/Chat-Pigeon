<script>
  // If you are using JavaScript/ECMAScript modules:
  import Dropzone from "dropzone";
  import { onMount } from "svelte";
  import { getStorage, ref, uploadBytes } from "firebase/storage";

  const storage = getStorage();

  export let folder;
  export let functionProp = () => {};

  onMount(() => {
    const userId = localStorage.getItem("uid");
    const path = `${userId}/${folder}`;

    let myDropzone = new Dropzone(`#my-form-${folder}`);

    myDropzone.options.disablePreviews = true;

    myDropzone.on("addedfile", (upload) => {
      let storageRef = ref(storage, `${path}/${upload.name}`);
      uploadBytes(storageRef, upload).then(() => {
        console.log("Uploaded a file!");
        functionProp();
      });
    });
  });
</script>

<form action="/target" class="dropzone" id="my-form-{folder}" />

<style>
  .dropzone {
    border: 1px dashed rgba(160, 160, 160, 0.164);
    text-align: center;
    background-color:#8b61ee;
    font-weight:500;
    font-size:larger;
    border-radius: 10px;
  }
  .dropzone:hover{
    background-color: #408cbe;
  }
</style>
