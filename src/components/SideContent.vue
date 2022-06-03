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
  padding: 16px * 2;
  margin-bottom: 16px * 2;
  .side-header {
    p {
      font-weight: bold;
      a {
        float: right;
        color: #0275b1;
        font-weight: bold;
        text-decoration: none;
      }
    }
    padding-bottom: 16px;
  }
  .side-footer {
    margin-top: 16px * 2;
    a {
      color: #0275b1;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
