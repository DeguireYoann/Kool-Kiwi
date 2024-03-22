export default defineNuxtPlugin((app)=> {
    async function initInterface() {
        await customElements.whenDefined('atomic-search-interface');
        const searchInterface = document.querySelector(
          'atomic-search-interface'
        ) as any;
       
        await searchInterface.initialize({ 
          accessToken: '<YOUR-TOKEN>',
          organizationId: '<YOUR-ORGANIZATION-ID>',
          organizationEndpoints: await searchInterface.getOrganizationEndpoints('<YOUR-ORGANIZATION-ID>'),
        });
       
        searchInterface.executeFirstSearch(); 
      }

    onMounted(initInterface);
})