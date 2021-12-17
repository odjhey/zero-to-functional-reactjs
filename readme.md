best resource - https://reactjs.org/docs/getting-started.html

## disclaimer

im no pro and i may have misunderstood some of the things presented. please call me out for needed corrections

## intro

- html, js, css
- the vdom

## notes

- components are immutable, so have to ask for a "rerender"
- props are read only
- one way binding (top-down-data)
- why `setState` and not `state = newState`
- render props/children/slot
- https://reactjs.org/docs/thinking-in-react.html
- lifecycles vs hooks
  - useState
- context
  - useContext

## some other topics

- HOC (higher-order-components)
- refs
- css-in-js (and other css options)

## some build tools

Start with the docs https://reactjs.org/docs/create-a-new-react-app.html#more-flexible-toolchains.

We have boatload of build tools, see above, and some below

- vite
- snowpack

### common build inclusions

- HMR
- live-reload
- watchers
- code-splitting
- optimizations
- transpilers (typescript, flow, rescript)
- routers
- form-libs
- ssg, ssr
- state managers (redux, mobx, recoil)

## frameworks

frameworks, meta or not, are tools that are opinionated (some very much so) on how to build and structure things, what libs to use, etc etc. (people argue about the term "react framework", or "web framework", or whatnot. Not interested in those and im just putting this under the umbrella of "frameworks" cause i cant think of how-else to call em, PR if you must, don't bite me)

- nextjs
- redwoodjs
- nestjs
- remixrun
- strapi (more of a CMS)

## other stuff

- storybook
- playwright
- cypress
- jest
- tailwind (twind)
- css stuff (tachyons, bulma, stitches, mantine)
- tanstack (react-table, react-query) https://tanstack.com/
- component libs (chakra, material, bootstrap, etc - a ton of these is around)
- fetchers (react-query, swr)
