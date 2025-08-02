<template>
  <header class="page-header">
    <div class="page-header-content">
      11
    </div>
  </header>
</template>
<script setup lang="ts">
defineOptions({
  name: 'PageHeader',
})
</script>
<style scoped lang="scss">
.page-header {
  @apply w-screen fixed top-0 left-0 z-50 flex justify-center;

  .page-header-content {
    @apply w-[768px] h-16 flex items-center justify-between;
    @apply backdrop-blur bg-[rgba(255,255,255,0.1)] rounded-full;
    @apply border border-[rgba(255,255,255,0.2)];
  }
}
</style>
