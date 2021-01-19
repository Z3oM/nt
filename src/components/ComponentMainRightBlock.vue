<template>
  <section class="no-content lk-right-side">
    <div class="lk-panel-info">
      <h3>Верификация</h3>
      <div class="info-user-icons">
        <CUserEditorIcon
          v-for="item in userIconsEditors"
          v-bind:key="item.id"
          :title="item.title"
          :pic="item.pic"
          :status="item.status"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CUserEditorIcon from "./ComponentUserEditorIcon";

export default {
  components: {
    CUserEditorIcon,
  },
  data() {
    return {
      userIconsEditors: [
        {
          id: 1,
          title: "Статус Активного гражданина",
          pic: require("@/assets/icons/i8-status-ac.png"),
          status: true,
        },
        {
          id: 2,
          title: "Личные данные",
          pic: require("@/assets/icons/i8-data-ac.png"),
          status: false,
        },
        {
          id: 3,
          title: "Статус пользователя",
          pic: require("@/assets/icons/i8-status-user-ac.png"),
          status: true,
        },
      ],
    };
  },
};
</script>