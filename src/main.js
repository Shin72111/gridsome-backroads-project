// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Title from '~/components/Title.vue'
import Banner from '~/components/Banner.vue'
import StyledHero from '~/components/StyledHero.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import icons from './utils/icons.js'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { addMetadata } from './utils/addMetadata.js'

config.autoAddCss = false;
library.add(...icons)

export default function (Vue, { router, head, isClient }) {
  addMetadata(head)
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Banner', Banner)
  Vue.component('Title', Title)
  Vue.component('StyledHero', StyledHero)
  Vue.component('font-awesome', FontAwesomeIcon) 
}
