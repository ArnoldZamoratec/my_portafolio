<script setup lang="ts">
import Button from "./Button.vue";
import Logo from "./Logo.vue";
import { computed, ref } from "vue";
import { t } from "../i18n/utils/translate";
import { useHeaderTheme } from "../composables/useHeaderTheme";
import { lenis } from "../composables/useScroll";
import { projectId } from "../composables/useRouteObserver";
import { social } from "../content/social";
import ButtonRound from "./ButtonRound.vue";
import ArrowRight from "./icons/ArrowRight.vue";
import SoundsToggle from "./SoundsToggle.vue";
import ThemeToggle from "./ThemeToggle.vue";
import { isFeatureEnabled } from "../utils/features";
import { useRouter } from "../composables/useRouter";
import { useFirstRoute } from "../composables/useFirstRoute";

const router = useRouter();
const { isFirstRoute } = useFirstRoute();

const scrolledPastHeroVisible = ref(false);
const { isDarkTheme } = useHeaderTheme({
  onUpdate: (element, boundingClientRect, hasScrolledIntoView) => {
    if (!element || !boundingClientRect) {
      scrolledPastHeroVisible.value = false;
      return;
    }
    scrolledPastHeroVisible.value = hasScrolledIntoView;
  },
});

const handleBackClick = () => {
  if (isFirstRoute.value) {
    router.push("/");
  } else {
    router.back();
  }
};

const handleLogoClick = () => {
  if (!lenis.value) return;
  lenis.value.scrollTo(0);
};

const classNames = computed(() => {
  return {
    header: true,
    "header-dark": isDarkTheme.value,
    "header-scrolled": scrolledPastHeroVisible.value,
    [`project-${projectId.value}`]: projectId.value !== null,
  };
});

const getInTouchClassNames = computed(() => {
  return {
    "header-get-in-touch": true,
    "header-get-in-touch-isProjectPage": projectId.value !== null,
  };
});
</script>

<template>
  <header :class="classNames">
    <nav class="header-nav" aria-label="Navegación principal">
      <div class="header-left">
        <!-- type="button" explícito para cumplir directivas de a11y -->
        <ButtonRound
          v-if="projectId !== null"
          type="button"
          variant="accent"
          @click="handleBackClick"
          :aria-label="t('back-to-home')"
          :class="{ 'header-back': true, 'header-back-isProjectPage': projectId !== null }"
          data-cursor="circle-white"
          data-sound="click"
          data-hoversound="hover"
        >
          <ArrowRight class="header-back-icon" />
        </ButtonRound>
      </div>

      <div
        :class="{
          'header-logo': true,
          'header-logo-isProjectPage': projectId !== null,
          'header-logo-clickable': !scrolledPastHeroVisible,
          'children-unclickable': true,
        }"
        @click="handleLogoClick"
        data-sound="click"
        data-hoversound="hover"
        data-cursor="circle-white"
        aria-label="Ir al inicio"
        role="button"
        tabindex="0"
        @keydown.enter="handleLogoClick"
      >
        <Logo class="header-logo-image" />
      </div>

      <div class="header-right">
        <Button
          renderAs="a"
          variant="accent"
          :aria-label="t('get-in-touch')"
          :href="social.find((item) => item.name === 'mail')?.url ?? ''"
          external
          :class="getInTouchClassNames"
          data-cursor="circle-white"
          data-hoversound="hover"
        >
          {{ t("get-in-touch") }}
        </Button>
        
        <ThemeToggle
          class="header-theme-toggle"
          :isDarkTheme="isDarkTheme"
        />

        <SoundsToggle 
          class="header-sounds-toggle" 
          :isDarkTheme="isDarkTheme" 
          v-if="isFeatureEnabled('sounds')" 
        />
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: var(--breakpoint-xxxl);
  padding: 0 var(--space-outer);
  max-width: 100%;
  z-index: var(--z-index-header);
  height: var(--height-header);
  pointer-events: none;
  --scrolled: 0;

  &-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    position: relative;
  }

  &-scrolled {
    --scrolled: 1;
  }

  &-back {
    pointer-events: auto;
    opacity: 0;
    transition: opacity var(--transition);
    transition-delay: 0.1s;

    &-icon {
      width: 100%;
      transform: rotate(180deg);
    }

    &-isProjectPage {
      opacity: 1;
    }
  }

  &-left {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &-get-in-touch {
    width: fit-content;
    &-isProjectPage {
      opacity: 1 !important;
    }
  }

  &-right {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: var(--space-4);
  }

  &-dark {
    color: var(--color-white);
    --icon-color: var(--color-white);
  }

  &-get-in-touch {
    display: none;
    @include mixins.mq("md") {
      display: flex;
    }
  }

  &-logo {
    cursor: pointer;
    display: flex;
    gap: var(--space-2);
    transition: color var(--transition), opacity var(--transition);
    opacity: calc(1 - var(--scrolled));
    pointer-events: none;

    &-clickable {
      pointer-events: all;
    }

    @include mixins.mq("md") {
      gap: var(--space-3);
    }

    &-isProjectPage {
      pointer-events: none;
      opacity: 0;
    }

    &-image {
      width: 36px;
      @include mixins.mq("md") {
        width: 40px;
      }
    }
  }
}
</style>
