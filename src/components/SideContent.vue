<script setup></script>

<template>
  <div class="side">
    <div class="side-header">
      <slot name="header"></slot>
    </div>
    <div class="side-content">
      <slot name="content"></slot>
    </div>
    <div class="side-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --font: '@/assets/GothamPro.ttf', 'Noto Sans TC', sans-serif;
}
.side {
  background-color: white;
  padding: 2rem;
  margin-bottom: 2rem;
  .side-header {
    p {
      font-family: var(--font);
      font-weight: bold;
      a {
        font-family: var(--font);
        float: right;
        color: #0275b1;
        font-weight: bold;
        text-decoration: none;
        border-bottom: 1px solid #0275b1;
      }
    }
    padding-bottom: 1rem;
    border-bottom: 1px solid #f4f4f4;
  }
  .side-footer {
    margin-top: 2rem;
    a {
      font-family: var(--font);
      color: #0275b1;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
