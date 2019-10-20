<template>
  <div class="banner">
    <h1>{{ title }}</h1>
    <p>{{ info }}</p>
    <slot />
  </div>
</template>

<script>
export default {
  props: ['title', 'info']
}
</script>

<style scoped>
.banner {
  text-align: center;
  letter-spacing: var(--mainSpacing);
  color: var(--mainWhite);
}
.banner h1 {
  font-size: 3.3rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  padding: 0 1rem;
  letter-spacing: 6px;
}
.banner p {
  width: 85%;
  margin: 0 auto;
  margin-bottom: 2rem;
}
@media screen and (min-width: 768px) {
  .banner h1 {
    font-size: 4.5rem;
  }
  .banner p {
    width: 70%;
  }
}
</style>
