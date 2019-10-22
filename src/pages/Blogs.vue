<template>
  <Layout>
    <StyledHero img="/blogBcg.jpeg" />
    <section class="blogs">
      <Title title="latest" subtitle="posts" />
      <div class="center">
        <BlogCard
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :blog="edge.node"
        />
      </div>
      <section class="links">
        <Pager
          :info="$page.posts.pageInfo"
          linkClass="link"
          prevLabel="prev"
          nextLabel="next"
        />
      </section>
    </section>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allContentfulPost(sort: {by: "published", order: DESC}, perPage: 6, page: $page) @paginate { 
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        slug
        id
        published(format: "MMMM Do, YYYY")
        image {
          file {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import BlogCard from '~/components/Blogs/BlogCard'

export default {
  components: {
    BlogCard,
    Pager
  },
  metaInfo: {
    title: 'Blogs'
  }
}
</script>

<style scoped>
.blogs {
  padding: 4rem 0;
}
.center {
  width: 80vw;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
}
.links nav {
  width: 60vw;
  margin: 0 20vw 5rem 20vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.link {
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  background: var(--primaryColor);
  color: var(--mainWhite);
  border: 2px solid var(--primaryColor);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  display: inline-block;
  transition: var(--mainTransition);
  cursor: pointer;
}
.link:hover {
  background: transparent;
  color: var(--primaryColor);
}
.active {
  background: var(--mainWhite);
  color: var(--primaryColor);
}

@media screen and (min-width: 576px) {
  .center {
    grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
  }
  .links {
    width: 60vw;
  }
}
@media screen and (min-width: 1200px) {
  .center {
    width: 100%;
    max-width: 1170px;
  }
}
</style>
