<template>
  <nav>
    <div class="nav-center">
      <div class="nav-header">
        <img :src="logo" alt="Backroads logo" />
        <button type="button" class="logo-btn" @click="toggleNav">
          <font-awesome icon="align-right" class="logo-icon" />
        </button>
      </div>
      <ul class="nav-links" :class="{ 'show-nav': isOpen }">
        <li v-for="link in links" :key="link.text">
          <g-link :to="link.path">{{link.text}}</g-link>
        </li>
      </ul>
      <div class="nav-social-links">
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
    </div>
  </nav>
</template>

<script>
import links from '@/utils/links'
import logo from "@/images/logo.svg"

export default {
  data () {
    return {
      isOpen: false,
      links,
      logo
    }
  },
  methods: {
    toggleNav () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
}
.logo-btn {
  background: transparent;
  border: none;
  outline: none;
}
.logo-btn:hover {
  cursor: pointer;
}
.logo-icon {
  color: var(--primaryColor);
  font-size: 1.5rem;
}

.nav-links {
  list-style-type: none;
  transition: var(--mainTransition);
  height: 0;
  overflow: hidden;
}
.show-nav {
  height: 216px;
}
.nav-links a {
  display: block;
  padding: 1rem 1.25rem;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  font-weight: bold;
  letter-spacing: var(--mainSpacing);
}
.nav-links a:hover {
  color: var(--primaryColor);
}
.nav-social-links {
  display: none;
}
@media screen and (min-width: 576px) {
  .navbar {
    padding: 0 2rem;
  }
}

@media screen and (min-width: 992px) {
  .logo-btn {
    display: none;
  }
  .nav-center {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    height: auto;
    display: flex;
  }
  .nav-social-links {
    display: flex;
    line-height: 0;
  }
  .nav-social-links a {
    color: var(--primaryColor);
    margin: 0 0.5rem;
    font-size: 1.2rem;
    transition: var(--mainTransition);
  }
  .nav-social-links a:hover {
    color: var(--mainBlack);
    transform: translateY(-5px);
  }
}
</style>
