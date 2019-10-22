<template>
  <Layout>
    <StyledHero img="/defaultBcg.jpeg" />
    <TourList :tours="tours" />
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
import TourList from '~/components/Tours/TourList'

export default {
  components: {
    TourList
  },
  computed: {
    tours () {
      console.log(this.$static.allTours.edges)
      return this.$static.allTours.edges
    }
  }
}
</script>
