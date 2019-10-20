const metadata = [
  {
    key: 'description',
    name: 'description',
    content: 'Explore awesome worldwide tours & discover what makes each of them unique. Forget daily routine & say yes to adventure'
  },
  {
    key: 'image',
    name: 'image',
    content: `/defaultBcg.jpeg`
  },
  /* Twitter card */
  {
    key: 'twitter:card',
    name: 'twitter:card',
    content: `summary_large_image`
  },
  {
    key: 'twitter:creator',
    name: 'twitter:creator',
    content: `@TamTran72111`
  },
  {
    key: 'twitter:title',
    name: 'twitter:title',
    content: `Backroads`
  },
  {
    key: 'twitter:description',
    name: 'twitter:description',
    content: 'Explore awesome worldwide tours & discover what makes each of them unique. Forget daily routine & say yes to adventure'
  },
  {
    key: 'twitter:image',
    name: 'twitter:image',
    content: `https://gridsome-backroads-project.netlify.com/defaultBcg.jpeg`
  },

  /* Facebook card */
  {
    key: 'og:url',
    name: 'og:url',
    content: `https://gridsome-backroads-project.netlify.com`
  },
  {
    key: 'og:type',
    name: 'og:type',
    content: `website`
  },
  {
    key: 'og:title',
    name: 'og:title',
    content: `Backroads`
  },
  {
    key: 'og:description',
    name: 'og:description',
    content: 'Explore awesome worldwide tours & discover what makes each of them unique. Forget daily routine & say yes to adventure'
  },
  {
    key: 'og:image',
    name: 'og:image',
    content: `https://gridsome-backroads-project.netlify.com/defaultBcg.jpeg`
  },
  {
    key: 'og:image:width',
    name: 'og:image:width',
    content: `400`
  },
  {
    key: 'og:image:height',
    name: 'og:image:height',
    content: `300`
  },

]

export const addMetadata = head => {
  metadata.forEach(meta => head.meta.push({...meta}))
}