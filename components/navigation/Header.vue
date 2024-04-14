<template>
    <div class="user-header">
        <div style="display: flex; align-items: center; gap: 10px">
          <img @click="() => $router.push('/')" style="width: 50px" src="@/public/logo.png" alt="Logo" />
          <div style="color: #0583f2; font-weight: 700" class="">RYM</div>
          <div class="line"></div>
        </div>
        <div style="display: flex; gap: 20px">
          <div v-show="token" style="color: #0583f2; font-weight: 700">
            Hello, John
          </div>
          <div
            @click="
              () => {
                userStore.clearToken();
                $router.push('/login');
              }
            "
            style="text-decoration: underline; font-weight: 700; cursor: pointer;padding-right:20px;"
            v-if="token"
            class=""
          >
            Logout
          </div>
          <div
            style="cursor: pointer; padding-right:20px;text-decoration: underline; font-weight: 700"
            @click="$router.push('/login')"
            v-else
            class=""
          >
            Sign in
          </div>
        </div>
      </div>
</template>

<script setup>
import { useUserStore } from "../store/auth";
import { onMounted, ref } from "vue";

const userStore = useUserStore();
const token = ref(null);

onMounted(() => {
  token.value = userStore.getToken();
});
</script>


<style lang="scss" scoped>

@import '~/style/_variables.scss';
$grey000: map-get($colors, grey000);
$grey250: map-get($colors, grey250);


.user-header {
  padding: 5px 0px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  top: 0;
  width: 100vw;
  background: $grey000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    max-width: 100vw !important;

  img {
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
  }
}
.line {
  height: 40px;
  width: 1px;
  background: $grey250;
  margin-left: 40px;
}
</style>