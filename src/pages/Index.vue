<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer & Art Director focused on digital design for brands that like to hanve fun
        </h2>
      </div>

      <div class="projects">
        <g-link class="project" 
          v-for="projected in $page.project.edges" 
          :key="projected.node.id"
          :to="'/project/' + projected.node.id"
        >
          <g-image class="thumbnail" :src="`${GRIDSOME_API_URL}${projected.node.image.url}`"></g-image>
          <h3 class="project-title">{{ projected.node.title }}</h3>
          <div class="categories" v-for="category in projected.node.categories" :key="category.title">
            <span class="category">{{ category.title }}</span>
          </div>
        </g-link>
      </div>

    </div>
    <div>
        <div class="latest-journals-heading container">
          <span class="label">Latest and greatest</span>
        </div>
        <div class="latest-journals"
          v-for="edge in $page.journal.edges" 
          :key="edge.node.id" 
        >
          <div class="container">
            <g-link             
              :to="'/journal/' + edge.node.id" 
              class="journal"
            >
              <h3 class="journal-title">{{ edge.node.title }}</h3>
            </g-link>
          </div>
        </div>
      </div>
  </Layout>
</template>

<page-query>
query { 
	project:allStrapiProject {
    edges {
      node {
        id
        title
        image {
          url (width: 720, height: 200, quality: 90)
        }
        categories {
          title
        }
      }
    }
  }
  journal: allStrapiJournal {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'IndexPage'
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.hero {
  text-align: center;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem;
}
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem;
}
.hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  opacity: .6;
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  text-align: center;
}
.project {
  grid-column: auto/span 2;
  text-decoration: none;
}
.project-title {
  font-size: 1rem;
  color: #000;
  margin: 2rem 0 1rem;
}
.categories {
  font-size: .8rem;
  color: #000;
}
.category {
  margin-right: .8rem;
  color: #000;
}

.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: .6rem;
  font-weight: 400;
  text-transform: uppercase;
}
.laber {
  display: block;
  font-weight: 700;
  margin-bottom: .5rem;
}
.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid #f3f3f3;
}
.journal-title {
  font-size: 1rem;
  line-height: 1.35;
}
.journal {
  border-bottom: 1px solid #f3f3f3;
  border-right: 1px solid #f3f3f3;
  flex: 0 0 50%;
  display: block;
  padding: 2rem;
  transition: background .25 ease;
  text-decoration: none;
  color: inherit;
}
.thumbnail {
  max-width: 100%;
  height: 560px;
  object-fit: cover;
  transition: all .15s ease;
  box-shadow: 0 0 40px -20ox rgb(0 0 0 25%);
}
</style>
