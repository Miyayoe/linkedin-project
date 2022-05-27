<script setup></script>

<template>
  <div class="home-container">
    <div class="mb home-header">
      <slot name="header"></slot>
    </div>
    <div class="mb home-content">
      <slot name="content"></slot>
    </div>
    <div class="home-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mb {
  margin-bottom: 1.5rem;
}
.home-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 2rem;
  background-color: white;
  padding: 2rem;
}
</style>
