import { ref, onMounted } from "vue";

export const preloaderVisible = ref(false);

export const usePreloader = () => {
  onMounted(() => {
    document.body.classList.remove("is-loading");
  });
};

