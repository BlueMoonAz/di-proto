<template>
  <div>
    <view-message></view-message>
    <message-add :name="pageName" ></message-add>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue'
import ViewMessage from './ViewMessage.vue'
import MessageAdd from './MessageAdd.vue'
import { MessageItem } from '@/types/messageitem'

export default defineComponent({
  components: {
    ViewMessage,
    MessageAdd
  },
  setup () {
    const message: MessageItem[] = reactive([])
    provide('message', message)

    const pageName = 'PageOne'

    return {
      pageName
    }
  }
})

</script>