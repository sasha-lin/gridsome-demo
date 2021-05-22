<template>
  <Layout>
    <div class="project">
      <div class="container project-container">
        <div class="project-header">
          <h1 class="project-title">{{ $page.project.title }}</h1>
          <div class="project-meta">
            <div class="project-author">
              <span class="label">Categories</span>
              <span class="author-name">{{
                $page.project.categories.map(({title})=>title).join(', ')
              }}</span>
            </div>
            <div class="project-date">
              <span class="label">year</span>
              <div>{{ $page.project.year }}</div>
            </div>
          </div>
        </div>
        <div class="project-content">
          {{ $page.project.content }}
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  project: strapiProject (id: $id) {
    id
    title
    categories {
      title
    }
    year
    content
  }
}
</page-query>

<script>
export default {
  name: "ProjectTemplate",
};
</script>

<style>
* {
  box-sizing: border-box;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.project-container {
  max-width: 840px;
}
.project-header {
  padding: 2rem 0 4rem;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}
.project-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-author {
  margin-right: 4rem;
}
.project-date {
  margin-right: 4rem;
}
.project-time {
  margin: 0;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>