<template>
  <article class="tour">
    <div class="img-container">
      <g-image class="img" alt="single tour" :src="mainImage" />
      <g-link :to="`/tours/${tour.slug}`" class="link">
        details
      </g-link>
    </div>
    <div class="footer">
      <h3>{{ tour.name }}</h3>
      <div class="info">
        <h4 class="country">
          <font-awesome icon="map" />
          {{ tour.country || "Unknown" }}
        </h4>
        <div class="details">
          <h6>{{ tour.days }}  days</h6>
          <h6>from ${{ tour.price }}</h6>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    tour: {
      type: Object,
      varlidator: tour => {
        return {
          name: { type: String, required: true },
          slug: { type: String, required: true },
          country: { type: String, required: true },
          price: { type: Number, required: true },
          days: { type: Number, required: true },
          images: { type: Array, required: true },
        }
      }
    }
  },
  computed: {
    mainImage () {
      return this.tour.images[0].file.url
    }
  }
}
</script>

<style scoped>
.tour {
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
}
.tour:hover {
  box-shadow: var(--darkShadow);
}

.img-container {
  position: relative;
  background: var(--primaryColor);
  transition: var(--mainTransition);
}
.img {
  transition: var(--mainTransition);
  width: 100%;
}
.img-container:hover .img {
  opacity: 0.3;
}

.link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  color: var(--mainWhite);
  border: 2px solid var(--mainWhite);
  padding: 0.5rem 0.7rem;
  display: inline-block;
  transition: var(--mainTransition);
  cursor: pointer;
}
.link:hover {
  background: var(--mainWhite);
  color: var(--primaryColor);
}
.img-container:hover .link {
  opacity: 1;
}

.footer {
  padding: 1rem;
  text-align: left;
}
.footer h3 {
  text-transform: capitalize;
  margin-bottom: 0;
}
.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  margin-top: 0.5rem;
}
.info h6,
.info h4 {
  margin-bottom: 0;
}
.country {
  text-transform: capitalize;
  color: var(--primaryColor);
  display: flex;
  align-items: center;
}
.icon {
  margin-right: 0.4rem;
}
.details {
  color: var(--darkGrey);
  text-transform: uppercase;
  text-align: right;
}
</style>