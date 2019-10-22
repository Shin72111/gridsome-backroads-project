<template>
  <article class="day">
    <h4>
      {{ day }}
      <button class="btn" @click="isShow = !isShow">
        <font-awesome icon="angle-down" class="icon" />
      </button>
    </h4>
    <p v-if="isShow">{{ info }}</p>
  </article>
</template>

<script>
export default {
  props: ['day', 'info'],
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style scoped>
.day {
  margin: 2rem 0;
}
.day h4 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}
.btn svg {
  font-size: 1.5rem;
  color: var(--primaryColor);
}
.day p {
  line-height: 2;
  transition: var(--mainTransition);
}
@media screen and (min-width: 992px) {
  .day h4 {
    width: 400px;
  }
}
</style>
