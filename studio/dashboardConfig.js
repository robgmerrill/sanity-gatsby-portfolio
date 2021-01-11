export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffc9a62e8fc2d1239ef032e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nj93e2ry',
                  apiId: '094de402-16f2-4eb6-9fb5-20053990cdef'
                },
                {
                  buildHookId: '5ffc9a63e8fc2d1387ef0136',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yj48th9q',
                  apiId: '5ef4a251-e002-4800-aa5e-d87ce816a9a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robgmerrill/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yj48th9q.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
