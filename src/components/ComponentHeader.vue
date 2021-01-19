<template>
  <div class="mw-content header-content">
    <div class="main-logotype">
      <a href="#">УМНАЯ ГАВАНЬ</a>
    </div>
    <nav>
      <a v-for="(item, index) in navItems" v-bind:key="index" :href="item.link">
        {{ item.text }}
      </a>
      <!-- Переделать это гавно, смотрится стрёмно.... -->
    </nav>
    <div class="login-register" @click="LoginForm">
      <img
        :src="require('@/assets/icons/i8-lk-user.png')"
        alt="Изображение
      человечка, для входа на сайт."
      />
    </div>
    <!-- В LanguageSelector можно передавать языковые параметры через пропсы например -->
    <ComponentLanguageSelector />
    <ComponentForm :show="statusShowForm" />
  </div>
</template>

<script>
import ComponentLanguageSelector from "./ComponentLanguageSelector";
import ComponentForm from "./ComponentForm";

export default {
  name: "ComponentHeader",
  components: { ComponentLanguageSelector, ComponentForm },
  data() {
    return {
      navItems: [
        { id: 1, link: "#", text: "новости" },
        { id: 2, link: "#", text: "советская гавань 360" },
        { id: 3, link: "#", text: "интерактивная карта" },
        { id: 4, link: "#", text: "инструкции" },
        { id: 5, link: "#", text: "активный гражданин" },
        { id: 6, link: "#", text: "места" },
      ],
      statusShowForm: "none",
    };
  },
  methods: {
    LoginForm() {
      this.statusShowForm = "block";
    },
  },
};
</script>