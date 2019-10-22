<template>
  <section class="tours">
    <Title title="featured" subtitle="tours" />
    <div class="center">
      <Tour
        v-for="tour in $static.featuredTours.edges"
        :key="tour.node.id"
        :tour="tour.node"
      />
    </div>
  </section>
</template>

<static-query>
{
  featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
    edges {
      node {
        name
        price
        slug
        country
        id
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
import Tour from '../Tours/Tour'

export default {
  components: {
    Tour
  }
}
</script>

<style scoped>
.tours {
  padding: 4rem 0;
  text-align: center;
}
.center {
  width: 80vw;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
}
@media screen and (min-width: 576px) {
  .center {
    grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
  }
}
@media screen and (min-width: 1200px) {
  .center {
    width: 100%;
    max-width: 1170px;
  }
}
</style>
