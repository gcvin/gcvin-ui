<template>
  <div class="i-icon">
      <svg class="icon" :style="iconColor" aria-hidden="true">
          <use :xlink:href="iconName"></use>
      </svg>
      <div v-if="dot" class="i-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>
<script lang="ts">
import './style/index.less'
import { defineComponent, computed, onMounted } from 'vue'
import { iconProps } from './types'
export default defineComponent({
  name: 'i-icon',
  props: iconProps,
  setup(props) {
      onMounted(() => {
          import('./font/iconfont.js' as any)
      })
      const iconName = computed(() => {
          return `#i-${props.name}`
      })
      const styleDot = computed(() => {
          return {
              [`i-dot`]: props.dot && !props.badge
          }
      })
      const badge = computed(() => {
          return props.badge
      })

      const iconColor = computed(() => {
          return {
              color: props.color
          }
      })
      return {
          iconName,
          styleDot,
          badge,
          iconColor
      };
  },
});
</script>