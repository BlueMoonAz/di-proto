<template>
  <div align="center">
    <table>
      <th>name</th><th>message</th>
      <tr v-for="(item,index) in message" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.message}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { MessageItem } from '@/types/messageitem'

export default defineComponent({
  setup () {
    const message = inject('message') as MessageItem[]
    
    return {
      message
    }
  }
})

</script>