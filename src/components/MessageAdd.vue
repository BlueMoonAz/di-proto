<template>
  <div>
    <input type="text" v-model="inputMsg" />
    <button v-on:click="onClick">send</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import { MessageItem } from '@/types/messageitem'

export default defineComponent({
  props: {
    name: String
  },
  setup (props) {
    const message = inject('message') as MessageItem[]
    const inputMsg = ref('')

    const onClick = () => {
      console.log('enter onClick ' + props.name + inputMsg.value )
      const item: MessageItem = { name: props.name ,message: inputMsg.value }
      message.push(item)
      inputMsg.value = ''
    }

    return {
      message,
      inputMsg,
      onClick
    }
  }
})

</script>