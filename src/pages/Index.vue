<template>
  <Layout>
    <StyledHero img="defaultBcg.jpeg" :home="true">
      <Banner title="continue exploring" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quas?">
        <g-link to="/tours" class="btn-white">explore tours</g-link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
</template>

<script>
import About from '~/components/Home/About'
import Services from '~/components/Home/Services'
import FeaturedTours from '~/components/Home/FeaturedTours'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    About,
    Services,
    FeaturedTours
  }
}
</script>
