<template>
  <Layout>
    <div>
      <div class="container">
        <div class="journal-hero">
          <h1 class="journal-header">a wise person once said...</h1>
        </div>
      </div>
      <g-link 
        class="journal-post" 
        v-for="edge in $page.posts.edges" 
        :key="edge.node.id"
        :to="'/journal/' + edge.node.id"
      >
        <div class="container journal">
          <h2 class="journal-title">{{ edge.node.title }}</h2>
          <p class="journal-excerpt">{{ edge.node.describe }}</p>
        </div>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allStrapiJournal {
    edges {
      node {
        id
        title
        describe
      }
    }
  }
}
</page-query>

<script>
export default {
  name: "Journal",
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.journal-hero {
  padding: 4rem 0;
  text-align: center;
  color: #f3f3f3;
}
.journal-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
.journal-title {
  font-size: 2rem;
  color: #000;
}
.journal-post {
  display: block;
  padding: 3rem 0;
  text-decoration: none;
  color: #000;
  transition: background 0.5s ease;
}
.container.journal {
  max-width: 720px;
}
.journal-exceperpt {
  color: #2b2b2b;
}
p {
  line-height: 1.5;
  font-size: 1.15rem;
}
</style>