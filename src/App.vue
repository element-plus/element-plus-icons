<template>
  <div>
    <el-icon-add-location :class="{'test': true}" revolve style="width: 36px; height: 36px;"/>
  </div>
</template>

<script lang="ts">
import { AddLocation } from '../packages/components'

//  TODO, build a gallery here
export default {
  components: {
    [AddLocation.displayName]: AddLocation,
  }
}

</script>