<template>
  <div id="app">
    <header>
      <!-- Естественное подключить можно и kebab-case, но так компонент не подсвечивается в VS =( 
    Можно настроить сам VS но зачем, если такой способ описан в документации -->
      <CHeader />
    </header>
    <main>
      <section>
        <CMain />
      </section>
      <section class="main-content-lk">
        <CMBlockLeft />
        <CMBlockRight />
      </section>
    </main>
  </div>
</template>

<script>
import CHeader from "./components/ComponentHeader";
import CMain from "./components/ComponentMain";
import CMBlockLeft from "./components/ComponentMainLeftBlock";
import CMBlockRight from "./components/ComponentMainRightBlock";

export default {
  name: "App",
  components: {
    CHeader,
    CMain,
    CMBlockLeft,
    CMBlockRight,
  },
};
</script>
