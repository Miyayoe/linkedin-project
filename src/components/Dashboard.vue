<script setup></script>

<template>
  <side-content>
    <template #header>
      <p>YOUR DASHBOARD<a href="javascript:;">GO TO STATS</a></p>
    </template>
    <template #content>
      <div class="info">
        <p>367</p>
        <span>views today</span>
      </div>
      <div class="info">
        <p>15</p>
        <span>posts views</span>
      </div>
      <div class="info">
        <p>9</p>
        <span>search appearances</span>
      </div>
    </template>
  </side-content>
</template>

<style lang="scss" scoped>
.side {
  a {
    border-bottom: 1px solid #0275b1;
  }
  .info {
    margin: 1rem 0;
    p {
      font-family: var(--font);
      font-weight: bold;
      font-size: 4.5rem;
      color: #0275b1;
    }
    span {
      font-family: var(--font);
      font-size: 1.5rem;
    }
  }
}
</style>
