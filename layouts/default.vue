<template>
  <div>
    <AppHeader />
    <div class="flex items-center justify-center my-8">
      <div class="w-full max-w-7xl">
        <slot />
      </div>
    </div>
    <AppFooter />
  </div>
</template>