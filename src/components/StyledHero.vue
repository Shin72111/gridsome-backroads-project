<template>
  <div
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    home: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      required: true
    }
  },
  computed: {
    style () {
      if (this.home) {
        return {
            minHeight: 'calc(100vh - 62px)',
            background: `linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7)), url(${this.img}) center/cover no-repeat`
        }
      } else {
        return {
           background: `url(${this.img}) center/cover no-repeat`
        }
      }
    }
  }
}
</script>

<style scoped>
div {
  min-height: 50vh;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.is-home {
  min-height: calc(100vh - 62px);
  background: linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7));
}
</style>
