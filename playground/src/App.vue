<template>
  <div>
    <component
      :is="Icon"
      v-for="(Icon, key) in Icons"
      :key="key"
      class="icon"
    />
  </div>
</template>

<script lang="ts" setup>
import * as Icons from '@element-plus/icons-vue'
</script>

<style>
.icon {
  height: 48px;
  color: #409eff;
}
</style>
