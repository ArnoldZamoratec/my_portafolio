<script setup lang="ts">
import { useTheme } from "../composables/useTheme";
import ButtonRound from "./ButtonRound.vue";
import Sun from "./icons/Sun.vue";
import Moon from "./icons/Moon.vue";
import { computed } from "vue";

const props = defineProps<{
  isDarkTheme: boolean;
}>();

const { theme, toggleTheme } = useTheme();

const computedAriaLabel = computed(() => {
  return theme.value === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
});
</script>

<template>
  <ButtonRound
    type="button"
    variant="theme"
    :class="{ 'theme-toggle': true, 'theme-toggle-dark': props.isDarkTheme || theme === 'dark', 'children-unclickable': true }"
    @click="toggleTheme"
    :aria-label="computedAriaLabel"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    <Sun v-if="theme === 'dark'" />
    <Moon v-else />
  </ButtonRound>
</template>

<style scoped lang="scss">
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;

  &-dark {
    background-color: var(--color-surface);
    color: var(--color-text);
    --icon-color: var(--color-text);
  }
}
</style>
