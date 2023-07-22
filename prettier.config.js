module.exports = {
  singleQuote: true,
  semi: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    '^react$',
    '^next/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/helpers/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/(.*)$',
    '^[./]',
  ],
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
}
