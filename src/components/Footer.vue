<script setup lang="ts">
import Social from "./Social.vue";
import NotchSection from "./NotchSection.vue";
import ButtonRound from "./ButtonRound.vue";
import { lenis } from "../composables/useScroll";
import ArrowRightLong from "./icons/ArrowRightLong.vue";
import { t } from "../i18n/utils/translate";

interface Props {
  withSocial?: boolean;
}

const handleBackToTop = () => {
  if (!lenis.value) return;
  lenis.value.scrollTo(0);
};

const { withSocial = true } = defineProps<Props>();
</script>

<template>
  <footer class="footer">
    <NotchSection class="footer-notch" />
    <div class="footer-content">
      <ButtonRound
        type="button"
        variant="border"
        class="footer-back-to-top"
        @click="handleBackToTop"
        :aria-label="t('back-to-home')"
        data-cursor="circle-white"
        data-sound="click"
        data-hoversound="hover"
      >
        <ArrowRightLong class="footer-back-to-top-icon" />
      </ButtonRound>
      <div class="footer-top" v-if="withSocial">
        <Social />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: var(--color-background-300, var(--color-beige-400));
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: calc(var(--breakpoint-xxxl));
    padding: var(--space-md) var(--space-outer);
    position: relative;
    gap: var(--space-md);
  }

  &-back-to-top {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &-icon {
      transform: rotate(-90deg);
    }
  }

  &-top {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  &-notch {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    color: var(--color-background-300, var(--color-beige-400));
    --icon-color: var(--color-background-300, var(--color-beige-400));
  }
}
</style>
