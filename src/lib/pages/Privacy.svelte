<script lang="ts">
    import Page from "$lib/components/Page.svelte";
    import Text from "$lib/components/Text.svelte";
    import { primaryBackground } from "$lib/utils/constants";
  
    export let backgroundClass = primaryBackground;
  </script>
  
  <Page id="content" title=" " {backgroundClass}>
    <Text>
        <div class="info">
        This privacy policy sets out how ChatPigeon handles and uses any personal information collected from users of the Website.
        <br><br>

        Scope of this Policy:    
        This Policy applies solely to the Website and not to any third-party websites or services that may be linked to the Website.
        <br><br>

        Data Collection and Use:   
        The Website collects only emails of authorized users and does not store passwords, credentials or any other private information on authoirzed users. This website does not use cookies, gather IP addresses, or collect any other personal information.
        <br><br>

        Changes to this Policy:
        The Website may update this Policy from time to time and will post any changes on this page. 
        <br><br>
        Contact Us:
        If you have any questions or concerns regarding this Policy, please contact us at santoyox714@gmail.com
        <br><br>
        Conclusion:
        The Website is committed to protecting the privacy of its users and ensuring that their personal information is secure. 
    </div>
    </Text>
  </Page>
  
  
  <style>
      .info
    {
      padding:20px;
      font-size: 1.2rem;
      font-weight: 350;
      background-color: #161717;
      border-radius: 10px;
    }

    
  </style>
  
  