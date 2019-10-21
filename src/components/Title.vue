<template>
  <div>
    <h4>
      <span class="title">{{ title }}</span>
      <span>{{ subtitle }}</span>
    </h4>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>

<style scoped>
div {
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
}

h4 {
  text-align: center;
  letter-spacing: 7px;
  color: var(--primaryColor);
}

.title {
  color: var(--mainBlack);
}

span {
  display: block;
}
@media (min-width: 576px) {
  span {
    display: inline-block;
    margin: 0 0.35rem;
  }
}
</style>
