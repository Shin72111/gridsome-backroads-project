<template>
  <section class="services">
    <Title title="our" subtitle="services" />
    <div class="center">
      <article class="service">
        <span>
          <font-awesome icon="wallet" />
        </span>
        <h4>saving money</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, cupiditate!</p>
      </article>
      <article class="service">
        <span>
          <font-awesome icon="tree" />
        </span>
        <h4>endless hiking</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, cupiditate!</p>
      </article>
      <article class="service">
        <span>
          <font-awesome icon="socks" />
        </span>
        <h4>amazing comfort</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, cupiditate!</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: var(--mainGrey);
  padding: 4rem 0;
}
.center {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 2rem;
}
.service {
  margin: 2rem 0;
  text-align: center;
}
.service span {
  background: var(--primaryColor);
  padding: 0.5rem;
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.service h4 {
  text-transform: uppercase;
}
</style>
