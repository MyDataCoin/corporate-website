<template>
  <div class="select-box" >
    <select v-model="$i18n.locale">
      <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
       {{ locale }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "languageSwitcher",
  data() {
    return { locales: ["en", "ru","kz"] };
  }
};
</script>

<style scoped>

</style>