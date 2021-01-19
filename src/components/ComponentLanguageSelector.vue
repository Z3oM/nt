<template>
  <div>
    <div class="lang-select">
      <span>{{ languageItems[selectLangId].abbr }}</span>
      <div class="decor-arrow">
        <img
          src="../assets/icons/i8-arrow-hat.png"
          alt="Стрелка для раскрытия списка доступных языков"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languageItems: [
        { id: 1, text: "Русский", abbr: "RU" },
        { id: 2, text: "Английский", abbr: "ENG" },
        { id: 3, text: "Японский", abbr: "JP" },
        { id: 4, text: "Китайский", abbr: "CN" },
        { id: 5, text: "Корейский", abbr: "KR" },
      ],
      selectLangId: 0,
    };
  },
};
</script>