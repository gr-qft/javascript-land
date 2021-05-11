export default {
  repository: 'https://github.com/gr-qft/javascript-land',
  titleSuffix: ' – JavascriptLand',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        Fullstack Next.js
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Next.js, GraphQL, Prisma, PostgreSQL
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Fullstack Next.js" />
      <meta name="og:description" content="Fullstack Next.js" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>MIT {new Date().getFullYear()} © javascriptland.</>,
}
