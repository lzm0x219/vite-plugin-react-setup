/**
 * @type {import('prettier').Options}
 */
module.exports = {
  plugins: [
    "prettier-plugin-packagejson",
    "@trivago/prettier-plugin-sort-imports",
  ],
  importOrder: ["^@/(.*)$", "^[/]", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderGroupNamespaceSpecifiers: true,
};
