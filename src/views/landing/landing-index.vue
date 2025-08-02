<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center">
    <Iridescence 
      :color="[0.5, 0.6, 0.8]"
      :speed="1.0"
      :amplitude="0.15"
      :mouseReact="false"
    />
  </div>
</template>
<script setup lang="ts">
import Iridescence from '@/components/effect/Backgrounds/Iridescence/Iridescence.vue'

defineOptions({
  name: 'LandingIndex',
})
</script>