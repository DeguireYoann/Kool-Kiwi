<template>
    <div>
      <h1>{{ error.statusCode }} - Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez est introuvable.</p>
      <!-- Ajoutez ici du contenu personnalisé pour la page 404 -->
    </div>
  </template>
  
  <script setup>
      defineProps(['error'])
  </script>
  