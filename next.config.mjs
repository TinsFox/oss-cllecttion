import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
})

/**
 * @type {import('next').NextConfig}
 */
export default withNextra({
  i18n: {
    locales: ['en-US', 'es-ES', 'ru'],
    defaultLocale: 'en-US'
  }, // basePath: "/some-base-path",
  distDir: './.next', // Nextra supports custom `nextConfig.distDir`
  redirects: () => [
  ],
  reactStrictMode: true
})