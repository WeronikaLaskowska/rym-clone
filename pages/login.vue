<template>
  <div>
    <div class="login-wrapper">
      <div class="login-wrapper__form">
        <div class="login-wrapper__form__header">Log in</div>
        <div class="login-wrapper__form__text">
          If you are already registered, then please log in.
        </div>
        <div class="login-wrapper__form__inputs">
          <div class="login-wrapper__form__inputs__element">
            <label for="">Username</label>
            <input v-model="login" type="text" />
          </div>
          <div class="login-wrapper__form__inputs__element">
            <label for="">Password</label>
            <input v-model="password" type="password" />
          </div>
          <div
            style="margin-top: 20px"
            class="login-wrapper__form__inputs__element--checkbox"
          >
            <input type="checkbox" />
            <label for="">Remember me</label>
          </div>
          <div class="login-wrapper__form__inputs__element--checkbox">
            <input type="checkbox" />
            <label for="">Stay logged in on other devices</label>
          </div>
        </div>
        <button @click="handleLogin" class="login-wrapper__form__button">
          Log in >>
        </button>
        <div class="login-wrapper__form__line"></div>
        <button class="login-wrapper__form__forgot-button">
          Forgot your password?
        </button>
      </div>

      <div class="login-wrapper__info">
        <h1>Don't have an account?</h1>
        <p>With a Rate Your Music account, you can:</p>
        <strong>rate, review, catalog, and tag </strong>your music <br />
        track your upcoming (and past) <strong>shows</strong> <br />
        find new <strong>music and people</strong> through recommendations
        <br />
        create and publish <strong>lists</strong> of your favorite things <br />
        <strong>research</strong> music, cross-referenced by label, artist,
        location, and genre.
        <br />
        <strong>socialize</strong> through forums and private messaging <br />
        <strong>contribute</strong> to an always-growing public music database
        <br />
        <button class="login-wrapper__info__button">Sign up now!</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/auth";

//@ts-ignore
definePageMeta({
  layout: "auth",
});
const userStore = useUserStore();
const router = useRouter();
let login = ref();
let password = ref();

const handleLogin = async () => {
  if (!login.value || !password.value) {
    window.alert("Login or password missing! ");
    return;
  }
  const token = await performLogin();
  userStore.setToken((token as string) ?? "");
  router.push("/");
};

function performLogin() {
  // Simulated login logic;
  return new Promise((resolve) => {
    setTimeout(() => {
      const token = generateRandomToken();
      resolve(token);
    }, 1000);
  });
}
function generateRandomToken() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 32; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
</script>

<style lang="scss">
@use "../style/variables";
.login-wrapper {
  display: flex;
  margin: auto;
  width: fit-content;
  height: fit-content;
  margin-top: 100px;
  justify-content: center;
  align-items: flex-start;
  gap: 90px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 120px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 1px;
    &__header {
      font-size: 42px;
      font-weight: 200;
      margin-bottom: 15px;
    }
    &__text {
      font-size: 16px;
      margin-bottom: 15px;
    }
    &__inputs {
      background: map-get(variables.$colors, grey100);
      padding: 20px;
      border: 1px solid map-get(variables.$colors, grey300);

      &__element {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        label {
          font-weight: 700;
          font-size: 17px;
          margin-bottom: 2px;
        }
        input {
          padding: 15px 10px;
          border: 1px solid map-get(variables.$colors, grey300);
          border-radius: 5px;
        }
        &--checkbox {
          margin: 5px 0;
          label {
            margin-left: 10px;
          }
          &:last-of-type {
            margin-bottom: 20px;
          }
        }
      }
    }
    &__button {
      padding: 8px 0;
      font-weight: 800;
      font-size: 20px;
      background: map-get(variables.$colors, grey200);
      border: none;
      border-radius: 5px;
      margin-top: 10px;
      cursor: pointer;
    }
    &__line {
      width: 100%;
      height: 1px;
      background: map-get(variables.$colors, grey200);
      margin-top: 20px;
      margin-bottom: 20px;
    }
    &__forgot-button {
      padding: 8px 0;
      font-weight: 800;
      font-size: 16px;
      background: map-get(variables.$colors, grey200);
      border: none;
      border-radius: 5px;
      margin-top: 10px;
      color: map-get(variables.$colors, grey800);
      cursor: pointer;
    }
  }
  &__info {
    background: map-get(variables.$colors, grey150);
    padding: 20px 30px;
    h1 {
      font-weight: 200;
    }
    &__button {
      padding: 8px 0;
      font-weight: 300;
      font-size: 20px;
      background: map-get(variables.$colors, grey200);
      border: none;
      border-radius: 5px;
      margin-top: 30px;
      min-width: 600px;
      cursor: pointer;
      @media screen and (max-width: 650px) {
        min-width: 350px;
      }
    }
  }
}
</style>
