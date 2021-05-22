<!--
 * @Author: your name
 * @Date: 2021-05-11 22:04:19
 * @LastEditTime: 2021-05-23 03:29:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-gridsome-site/src/layouts/Default.vue
-->
<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" style="color: inherit; text-decoration: none;">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/journal" style="color: inherit">Journal</g-link>
        <g-link class="nav__link" to="/contact" style="color: inherit">Say Hi</g-link>
      </nav>
    </header>
    <slot/>
    <div class="foot">
      Copyright©2021
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  text-decoration: none;
}

.nav__link {
  margin-left: 20px;
  text-decoration: none;
}

.foot {
  font-size: .8rem;
  padding: 6rem 0;
}

</style>
