/** @type {import('next').NextConfig} */
const nextConfig = {
  srcDir: 'src/',
  modulesDir: ['node_modules', 'src/modules'],
  typescript: {
    strict: true,
    typeCheck: true
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['@/assets/css/main.css'],
}

module.exports = nextConfig
