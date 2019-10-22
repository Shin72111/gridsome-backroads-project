<template>
  <Layout>
    <StyledHero img="/defaultBcg.jpeg" />
    <Tours :tours="tours" />
  </Layout>
</template>

<static-query>
query {
  allTours: allContentfulTour {
    edges {
      node {
        name
        price
        slug
        country
        days
        images {
          file {
            url
          }
        }
      }
    }
  }
}
</static-query>

<script>
import Tours from '~/components/Tours/Tours'

export default {
  components: {
    Tours
  },
  computed: {
    tours () {
      console.log(this.$static.allTours.edges)
      return this.$static.allTours.edges
    }
  }
}
</script>
