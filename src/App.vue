<template>
  <div id="nav">
    <router-link to="/pageone">page1</router-link> |
    <router-link to="/pagetwo">page2</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, reactive, provide } from 'vue'
import { MessageItem } from '@/types/messageitem'

export default defineComponent({
  setup(){
    const message: MessageItem[] = reactive([])
    provide('message', message)
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
