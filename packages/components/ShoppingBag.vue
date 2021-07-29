<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      d="M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
      stroke="currentColor"
      fill="none"
    />
    <path d="M192 704h640v64H192z" stroke="currentColor" fill="none" />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ShoppingBag',
})
</script>
