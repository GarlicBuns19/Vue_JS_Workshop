<template>
  <div class="backdrop">
    <div class="modal" :class="{sale : theme === 'sale',prime : theme === 'prime'}">
      <p>modal</p>
      <h1>{{ header }}</h1>
      <h2>{{ subtitle }}</h2>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['header','subtitle','theme']
}
</script>
<style scoped>
.modal {
  width: 400px;
  border-radius: 30px;
  margin: 100px auto;
  background: white;
}
.backdrop {
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.5);
}
.modal.sale{
  background: red;
}
.modal.prime{
  background: yellow;
}
</style>
