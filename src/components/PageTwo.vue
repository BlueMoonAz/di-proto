<template>
  <div>
    <view-message></view-message>
    <message-add :name="pageName" ></message-add>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewMessage from './ViewMessage.vue'
import MessageAdd from './MessageAdd.vue'

export default defineComponent({
  components: {
    ViewMessage,
    MessageAdd
  },
  setup () {
    const pageName = 'PageTwo'

    return {
      pageName
    }
  }
})

</script>