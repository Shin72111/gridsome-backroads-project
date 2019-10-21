<template>
  <Layout>
    <header class="error">
      <Banner title="oops it's a dead end">
        <g-link to="/" class="btn-white">
          back to home page
        </g-link>
      </Banner>
    </header>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404'
  }
}
</script>

<style scoped>
.error {
  background: var(--primaryColor);
  min-height: calc(100vh - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
