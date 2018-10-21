import Vue from 'vue'
import Router from 'vue-router'

// The meta data for your routes
const meta = require('./meta.json');

// Function to create routes
// Is default lazy but can be changed
function route (path, view, name) {
  return {
    path: path,
    meta: meta[path],
    component: resolve => import(`pages/${view}View.vue`).then(resolve),
    name: name ? name : view
  }
}

Vue.use(Router);

export function createRouter () {
    const router = new Router({
      base: __dirname,
      mode: 'history',
      scrollBehavior: () => ({ y: 0 }),
      routes: [
        route('/', 'Welcome', 'Disaster guide'),
        route('/disasters', 'Create', 'Disasters'),
        route('/disaster-fire', 'Fires'),
        route('/disaster-flood', 'Flood'),
        route('/map', 'Map'),
        route('/checklist/', 'ChecklistEdit', 'Create checklist'),
        route('/checklists', 'Checklists'),
        route('/checklist/:checklistId', 'Checklist'),
        route('/checklist/:checklistId/edit', 'ChecklistEdit', 'Edit checklist'),
        // Global redirect for 404
        { path: '*', redirect: '/' }
      ],
    });

    // Send a pageview to Google Analytics
    router.beforeEach((to, from, next) => {
        if (typeof ga !== 'undefined') {
            ga('set', 'page', to.path);
            ga('send', 'pageview')
        }
        next()
    });

    return router
}
