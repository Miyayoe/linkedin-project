<script setup></script>

<template>
  <div class="side">
    <div class="side-header">
      <slot name="header"></slot>
    </div>
    <hr />
    <div class="side-content">
      <slot name="content"></slot>
    </div>
    <div class="side-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.side {
  background-color: white;
  padding: 2rem;
  margin-bottom: 2rem;
  .side-header {
    p {
      font-weight: bold;
      a {
        float: right;
        color: #0275b1;
        font-weight: bold;
        text-decoration: none;
        border-bottom: 1px solid #0275b1;
      }
    }
    padding-bottom: 1rem;
  }
  .side-footer {
    margin-top: 2rem;
    a {
      color: #0275b1;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
