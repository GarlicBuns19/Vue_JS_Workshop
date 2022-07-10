<template>
  <div class="backdrop">
    <div class="modal"></div>
  </div>
</template>
<style>
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
</style>
