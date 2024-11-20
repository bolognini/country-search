# Country Selector 🌎

<p align="center"><img src="public/logo.png" alt="A silly logo" width="60"></p>
<p align="center">&laquo;<b>A Country Search Selector</b>&raquo;</p>

This project was part of a Frontend test. The challenge consists in creating a an easy and intuitive component to select any country in the world inside a form. The component should be able to achieve a few requirements, such as: typing within the input should call a fuzzy-search in which highlight the matched terms; it should be scrollable and navigable; the result should be a floating component with the found list; etc.

There wasn't tooling limitations. Instead, it was encouraged to choose any libraries that could assist on this deliverable. Therefore, it was built mainly with React, Typescript and Emotion, and some auxiliary libraries. All of them are listed in the end of this document.

You can access the live application on the following link: https://country-search-hazel.vercel.app/

### Installing

To run the project locally, you need an [LTS Node version](https://nodejs.org/en) installed, and [Yarn](https://yarnpkg.com/) for managing the packages.

With Node and Yarn installed, run the commands below in your terminal. They will clone the project on the current folder you're in, download all the project dependencies and, in a few minutes, the project will open on your default browser, accessible on localhost:3000.

```shell
git clone https://github.com/bolognini/country-search.git
cd country-search
yarn && yarn dev
```

### Built With

- [Next.js](https://nextjs.org/) - A popular React Framework
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript
- [Emotion](https://emotion.sh/docs/introduction) - CSS in JS library
- [Husky](https://github.com/typicode/husky) - Git Hooks lib
- [ESLint](https://eslint.org/) - JavaScript Linter
- [country-list](https://github.com/annexare/Countries) - A library to fetch country names and their alpha-2 identifiers
- [fuse.js](https://www.fusejs.io/) - A lib to add a fuzzy-match search
- [markdown-to-jsx](https://github.com/quantizor/markdown-to-jsx) - A React markdown component to highlight texts
- [Vercel](https://vercel.com/) - To deploy the project on a live environment
- [Flaticon](https://www.flaticon.com/) - For repo's README icon
