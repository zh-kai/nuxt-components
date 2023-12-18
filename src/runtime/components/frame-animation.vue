<template>
  <div
    class="frame-animation"
    :style="`
      width: ${width}px;
      height: ${realHeight}px;
      background-image: url(${imageUrl});
      background-size: ${width * steps}px ${realHeight}px;
      animation-fill-mode: revert;
      animation-timing-function: steps(${steps - 1}, start);
      animation-duration: ${interval}ms;
    `"
  />
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
const props = defineProps<{
  width: number;
  height?: number;
  steps: number;
  imageUrl: string;
  frames?: number;
}>();
const defaultFrames = computed(() =>
  props.steps > props.frames ? props.steps : props.frames ?? 24,
);
const realHeight = computed(() => props.height ?? props.width);
const interval = computed(() => (1000 / defaultFrames.value) * props.steps);
</script>

<style scoped lang="less">
.frame-animation {
  animation-name: frameAnimation;
  animation-iteration-count: infinite;
}

@keyframes frameAnimation {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 100% 0%;
  }
}
</style>
