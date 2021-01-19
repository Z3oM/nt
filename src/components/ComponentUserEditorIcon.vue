<template>
  <div class="one-icons-element">
    <div class="icon-block">
      <img :src="pic" :alt="title" />
    </div>
    <div class="text-information">
      <div class="text-information-title">{{ title }}</div>
      <div class="text-information-content">
        {{ status ? "Подтвержденный" : "Не заполнено" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "pic", "status"],
};
</script>