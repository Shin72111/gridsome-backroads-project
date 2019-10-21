<template>
  <section class="about">
    <Title title="about" subtitle="us" />
    <div class="about-center">
      <article class="about-img">
        <div class="img-container">
          <g-image :src="img" alt="about company" width="600"></g-image>
        </div>
      </article>
      <article class="about-info">
        <h4>explore the difference</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quam consequatur corrupti.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quam consequatur corrupti.
        </p>
        <button type="button" class="btn-primary">
          read more
        </button>
      </article>
    </div>
  </section>
</template>

<script>
import img from '~/images/defaultBcg.jpeg'

export default {
  data () {
    return {
      img
    }
  }
}
</script>

<style scoped>
.about {
  padding: 4rem 0;
}
.about-center {
  width: 80vw;
  margin: 0 auto;
}
.about-img {
  margin: 3rem 0;
}
.about-info {
  margin-top: 3rem;
}
.about-img {
  position: relative;
}

.about-img img {
  width: 100%;
  display: block;
  box-shadow: var(--lightShadow);
}
.about-img div {
  box-shadow: var(--lightShadow);
}
.about-info h4 {
  font-size: 1.9rem;
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  .about-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    align-items: center;
    margin-top: 3rem;
  }

  .about-img,
  .about-info {
    margin: 0;
  }
  .about-img img {
    max-height: 500px;
  }
  .img-container {
    max-height: 500px;
  }
  .about-info p {
    width: 80%;
  }
}
@media screen and (min-width: 992px) {
  .img-container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid var(--primaryColor);
    box-sizing: border-box;
    top: -16px;
    left: -16px;
    z-index: -1;
  }
}

@media screen and (min-width: 1200px) {
  .about-center {
    width: 95vw;
    max-width: 1170px;
  }
} 
</style>>
