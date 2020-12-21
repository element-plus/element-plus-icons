<template>
  <div>
    <test-icon />
  </div>
</template>

<script lang="ts">
import TestIcon from '../packages/test-icon'
export default {
  components: {
    [TestIcon.displayName]: TestIcon,
  }
}

</script>