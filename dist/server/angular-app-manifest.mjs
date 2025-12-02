
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/glosario/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/glosario"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5964, hash: 'adf890b760c49222bcc5a3a9d9a895aa5983c3d432613b6de995e22808b261a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 967, hash: 'c49977951ddcd863d792bd446e2c5a72e423cb88ab33809d4111b12cfc4c6ce9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14105, hash: 'f95ad692a93eafdff659a560099f50f65b70d6135b7a24514c76ebd5d8fca4b3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2RQMHR2Y.css': {size: 17238, hash: 'mYfJ9QpVr3I', text: () => import('./assets-chunks/styles-2RQMHR2Y_css.mjs').then(m => m.default)}
  },
};
