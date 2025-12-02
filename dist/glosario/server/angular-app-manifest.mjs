
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5955, hash: '7ccf6480d8907cc00632efb30115ff5ed269a34be174b14916ceb3b0c18af2d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 958, hash: '3bf0528cc722a936e6373f8490d5b4eb316596961baa26022593e732268780c5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14096, hash: 'f164a537540a4a0179f43e6c1b3f0bd46985278a3eab135f0f0c90aa40504054', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2RQMHR2Y.css': {size: 17238, hash: 'mYfJ9QpVr3I', text: () => import('./assets-chunks/styles-2RQMHR2Y_css.mjs').then(m => m.default)}
  },
};
