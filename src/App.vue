<template>
  <div>
    <el-icon-add-location :class="{'test': true}" revolve style="width: 36px; height: 36px;"/>
    <el-external-icon name="icon-daohang" style="width: 36px; height: 36px;"/>
  </div>
</template>

<script lang="ts">
import { AddLocation, getExternalIcons } from '../packages'

const [ExternalIcon] = getExternalIcons({
  url: '//localhost:3001/iconfont.js',
});

export default {
  components: {
    [AddLocation.displayName]: AddLocation,
    [ExternalIcon.name]: ExternalIcon,
  }
}

</script>