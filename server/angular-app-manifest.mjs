
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
    'index.csr.html': {size: 7345, hash: '002392aa4719c9bd6cf5f2237bd2b8179dc3146492014906f60927a4f25c5b54', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 967, hash: 'f792651e7d7f72471988f736557e48eab3bdd4f23b68e470ccb4ba7335cf20c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15560, hash: 'b37531304c03b008b7ace2c3a6cd7d40d0e659c58299cbe3b8497b2bea7e0589', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VEGQUVTP.css': {size: 20136, hash: '/r8N2BIhi5Q', text: () => import('./assets-chunks/styles-VEGQUVTP_css.mjs').then(m => m.default)}
  },
};
