<template>
  <Layout>
    <StyledHero :img="mainImage" />
    <section class="template">
      <div class="center">
        <div class="images">
          <g-image 
            v-for="(image, index) in tourImages"
            :key="index"
            :src="image"
            alt="single tour"
            class="image"
          />
        </div>
        <h2>{{ tour.name }}</h2>
        <div class="info">
          <p>
            <font-awesome icon="money-bill-wave" class="icon"/>
            starting from ${{ tour.price }}
          </p>
          <p>
            <font-awesome icon="map" class="icon" />
            {{ tour.country }}
          </p>
        </div>
        <h4>start on: {{ tour.start }}</h4>
        <h4>duration: {{ tour.day }} days</h4>
        <p class="desc">{{ tour.description }}</p>
        <h2>daily schedule</h2>
        <div class="journey">
          <Day 
            v-for="(item, index) in tour.journey"
            :key="index"
            :day="item.day"
            :info="item.info"
          />
        </div>
        <g-link to="/tours" class="btn-primary">
          back to tours
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  tour: contentfulTour(id: $id) {
    name
    price
    country
    days
    start(format: "dddd MMMM Do, YYYY")
    description 
    journey {
      day
      info
    }
    images {
      file {
        url
      }
    }
  }
}
</page-query>

<script>
import Day from '~/components/SingleTour/Day'

export default {
  components: {
    Day
  },
  computed: {
    mainImage () {
      return this.$page.tour.images[0].file.url
    },
    tourImages () {
      return this.$page.tour.images.map(image => image.file.url).slice(1)
    },
    tour () {
      return this.$page.tour
    }
  }
}
</script>

<style scoped>
.template {
  padding: 4rem 0;
}
.center {
  width: 80vw;
  margin: 0 auto;
}
.images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-bottom: 2rem;
}
.image {
  box-shadow: var(--lightShadow);
  width: 100%;
}
.template h2 {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 1rem;
}
.info {
  display: flex;
  flex-wrap: wrap;
}
.info p {
  display: flex;
  align-items: center;
  margin-right: 2rem;
  text-transform: capitalize;
}
.icon {
  color: var(--primaryColor);
  font-size: 1.4rem;
  margin-right: 0.5rem;
}
.desc {
  line-height: 2;
}
.template h4 {
  text-transform: capitalize;
}
.template h2 {
  margin: 2rem 0;
}
.journey {
  margin: 3rem 0;
}
@media screen and (min-width: 992px) {
  .journey,
  .desc {
    width: 70vw;
  }
}
@media screen and (min-width: 1200px) {
  .center {
    width: 95vw;
    max-width: 1170vw;
  }
  .images {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-column-gap: 50px;
  }
}
</style>
