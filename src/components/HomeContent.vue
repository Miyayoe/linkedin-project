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

<style lang="scss">
.home-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 16px * 2;
  background-color: white;
  padding: 16px * 2;
  .mb {
    margin-bottom: 16px * 1.5;
  }
  .home-footer {
    a {
      font-size: 1rem;
      color: #0275b1;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
