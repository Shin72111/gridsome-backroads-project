<template>
  <Layout>
    <div class="defaultHero">
      <Banner title="continue exploring" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quas?">
        <g-link to="/tours" class="btn-white">explore tours</g-link>
      </Banner>
    </div>
    <About />
    <Services />
  </Layout>
</template>

<script>
import About from '~/components/Home/About'
import Services from '~/components/Home/Services'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    About,
    Services
  }
}
</script>

<style>

</style>
