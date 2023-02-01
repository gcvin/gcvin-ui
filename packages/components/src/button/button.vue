<template>
  <button class="button" :class="styleClass">
    <i-icon class="icon" v-if="iconFont.iconName && iconFont.iconPosition != 'right'" :name="iconFont.iconName" />
        <slot />
    <i-icon class="icon" v-if="iconFont.iconPosition == 'right' && iconFont.iconName" :name="iconFont.iconName" />
  </button>
</template>

<script lang="ts">
import './style/index.less'
import { defineComponent, computed } from 'vue'
import { buttonProps } from './types'
import Icon from '../Icon/icon.vue'
export default defineComponent({
  name: 'i-button',
  props: buttonProps,
  components: { 'i-icon': Icon },
  setup(props) {
      const styleClass = computed(() => { 
          return {
              [`button--${props.type}`]: props.type,
              [`button--${props.size}`]: props.size,
              'is-plain': props.plain,
              'is-round': props.round,
              'is-disabled': props.disabled
          }
      })

      const iconFont = computed(() => {
            const iconName = props.icon
            const iconPosition = props.iconPosition
            return {
                iconName,
                iconPosition
            }
        })

        return {
            styleClass,
            Icon,
            iconFont
        };
  },
});
</script>
