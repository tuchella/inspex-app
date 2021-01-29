<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Explorer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Explorer from '@/components/Explorer.vue'

export default {
  name: 'Home',
  components: {
    Explorer
  }
}
</script>
