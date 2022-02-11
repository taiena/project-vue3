<template>
  <div
    v-if="show"
    class="Dialog"
    @click.stop="hideDialog"
  >
    <div
      class="DialogContent"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: 'my-dialog',
    mixins: [toggleMixin]
}
</script>

<style scoped>
.Dialog {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.DialogContent {
  margin: auto;
  padding: 2rem;
  background: white;
  min-height: 50px;
  min-width: 30px;
  border-radius: 1rem;
}
</style>