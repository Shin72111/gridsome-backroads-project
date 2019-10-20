<template>
  <footer class="footer">
    <div class="links">
      <g-link v-for="link in links" :key="link.text" :to="link.path">{{link.text}}</g-link>
    </div>

    <div class="icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <font-awesome :icon="['fab', 'facebook']" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <font-awesome :icon="['fab', 'twitter']" />
      </a>
      <a href="https://squarespace.com" target="_blank" rel="noopener noreferrer">
        <font-awesome :icon="['fab', 'squarespace']" />
      </a>
    </div>

    <div class="copyright">
      copyright &copy; backroads travel company {{ date }} all rights reserved
    </div>
  </footer>
</template>

<script>
import links from '@/utils/links'
export default {
  data () {
    return {
      links,
      date: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  margin-top: auto;
  background: var(--mainBlack);
  padding: 2rem;
  text-align: center;
  color: var(--mainWhite);
}
.links a {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--mainWhite);
  margin: 0.5rem 1rem;
  letter-spacing: var(--mainSpacing);
  transition: var(--mainTransition);
  font-weight: bold;
}
.links a:hover {
  color: var(--primaryColor);
}
.icons a {
  display: inline-block;
  margin: 1rem;
  font-size: 1.3rem;
  color: var(--mainWhite);
  transition: var(--mainTransition);
}
.icons a:hover {
  color: var(--primaryColor);
}
.copyright {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  line-height: 2;
}
</style>
