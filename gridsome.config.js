// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000,
        contentTypes: ['project','journal']
      }
    }
  ],
  templates: {
    StrapiProject: [
      {
        path: '/project/:id',
        component: './src/templates/project.vue'
      }
    ],
    StrapiJournal: [
      {
        path: '/journal/:id',
        component: './src/templates/journal.vue'
      }
    ]
  }
}
