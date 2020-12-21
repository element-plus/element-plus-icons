<template>
  <div>
    <add-location style="width: 36px; height: 36px;"/>
  </div>
</template>

<script lang="ts">
import { AddLocation } from '../packages/element-plus-icons'
export default {
  components: {
    [AddLocation.displayName]: AddLocation,
  }
}

</script>