if (!self.define) {
  let e,
    s = {}
  const n = (n, t) => (
    (n = new URL(n + '.js', t).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = n), (e.onload = s), document.head.appendChild(e)
        } else (e = n), importScripts(n), s()
      }).then(() => {
        let e = s[n]
        if (!e) throw new Error(`Module ${n} didn’t register its module`)
        return e
      })
  )
  self.define = (t, i) => {
    const a =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[a]) return
    let c = {}
    const o = (e) => n(e, a),
      r = { module: { uri: a }, exports: c, require: o }
    s[a] = Promise.all(t.map((e) => r[e] || o(e))).then((e) => (i(...e), c))
  }
}
define(['./workbox-1846d813'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/Q1JpZzCWBHZXP08tovULd/_buildManifest.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/Q1JpZzCWBHZXP08tovULd/_middlewareManifest.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/Q1JpZzCWBHZXP08tovULd/_ssgManifest.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/497-954cdc9b4ee30b9f.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/51-46350a0dfe90cc22.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/651.243d23442247d286.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/818-9ff1a3fcd53a176c.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/821-100d4d78ad191815.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/framework-91d7f78b5b4003c8.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/main-a6735ee9e45730aa.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/pages/_app-68205142cbfd352a.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/pages/_error-2f883067a14f4c4a.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/pages/index-3eed75560a59e399.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/pages/pet/novo-50dd9aff96d4d9d1.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/pages/pets-352083c035ce43d9.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/chunks/webpack-0ecefb518156aeb9.js',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        {
          url: '/_next/static/css/f6c2e128ee8a3113.css',
          revision: 'Q1JpZzCWBHZXP08tovULd'
        },
        { url: '/favicon.ico', revision: '3fd802c7ba4e7abdbad10d1f9e0c1d1d' },
        {
          url: '/icon-192x192.png',
          revision: '6ba190931d4c3bc11c9f0aee5e2f368c'
        },
        {
          url: '/icon-256x256.png',
          revision: '12909c69d260d659bf2185cb40e9ecbe'
        },
        {
          url: '/icon-384x384.png',
          revision: '2fea11bd09d97e1cb5aec813c92db54d'
        },
        {
          url: '/icon-512x512.png',
          revision: 'ed7e9c1683fe8c08a143f3ba86ac92aa'
        },
        { url: '/manifest.json', revision: 'f08dbd20d45e70722db5cc1dc8f501cc' },
        {
          url: '/maskable_icon_x128.png',
          revision: '98e4748928e4a6061b86189b6e745724'
        },
        {
          url: '/maskable_icon_x192.png',
          revision: 'e3e5b04181b7c19544eca74de27204d8'
        },
        {
          url: '/maskable_icon_x384.png',
          revision: 'c4e95e9651ce11f4107567cfbac310f5'
        },
        {
          url: '/maskable_icon_x48.png',
          revision: 'b75a6b97582417d994a3d5c2961db934'
        },
        {
          url: '/maskable_icon_x512.png',
          revision: '797ffc904594a6408f0f00088ad31711'
        },
        {
          url: '/maskable_icon_x72.png',
          revision: '46f94e16d3f0f88d9533a6838d69773d'
        },
        {
          url: '/maskable_icon_x96.png',
          revision: '50b25d00563584eb4259c42c772b45c7'
        },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: t
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    )
})
