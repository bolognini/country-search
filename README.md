# Country Selector 🌎

<p align="center"><img src="public/logo.png" alt="A silly logo" width="60"></p>
<p align="center">&laquo;<b>A Country Search Selector</b>&raquo;</p>

### Description

This project was part of a Frontend test. The challenge consists in creating a an easy and intuitive component to select any country in the world inside a form. The component should be able to achieve a few requirements, such as: typing within the input should call a fuzzy-search in which highlight the matched terms; it should be scrollable and navigable; the result should be a floating component with the found list; etc.

You can access the live application on the following link: https://country-search-hazel.vercel.app/

### Installing

To run the project locally, you need an [LTS Node version](https://nodejs.org/en) installed, and [Yarn](https://yarnpkg.com/) for managing the packages.

With Node and Yarn installed, run the commands below in your terminal. They will clone the project on the current folder you're in, download all the project dependencies and, in a few minutes, the project will open on your default browser, accessible on localhost:3000.

```shell
git clone https://github.com/bolognini/country-search.git
cd country-search
yarn && yarn dev
```

### Solution

As part of the test requirements, this part of the documentation I'll expand a bit more about the solution and why I chose them.

Apart from using React and Typescript, there wasn't any other tooling limitations. Instead, it was encouraged to choose any libraries that could assist on this deliverable. For that reason, the project used Emotion to handle the CSS, and some auxiliary libraries to handle the fuzzy-search and to get the country names and their identifier. All of them are listed in the end of this document.

The Emotion was chose purely because the [Boilerplate](https://github.com/bolognini/cool-boilerplate) which this project extended from had already installed this library, and this is what I use currently in a day-to-day basis. It's a simple CSS-in-JS library and if I change that, I would change to Styled-Components, a similar library. I really like to work with CSS-in-JS because of the powers JS gives to it, like conditionally adding a certain style depending on a given state.

The country-list was just a way I found to fetch all countries names. This could be a .json file or I could just fetch the data from an API. Since this is supposed to be a simple data structure to only find the names and their identifiers, I went with this library, which looked like good enough.

Regarding the fuzzy-search: This worried me, not gonna lie. Doing this from scratch wasn't easy and I wasn't very happy with the results. Then I decided to find a solution already available so I could use. My rationale was that I didn't had to reinvent the wheel. In a real world implementation we normally find tools that can assist our deliverables, and we iterate on them or create similar tools when necessary. For this simple component, this library bought me plenty of time.

The navigation with the arrow keys only works after the user first press the `Tab` key. I got stuck making this work seamlessly with the `ArrowDown` key so, in order to not spend much time here, I added a `<small>` tag component as a visual feedback to the user to first press the `Tab` key before trying to navigate with the arrow keys. This way, the component "educates" the user to avoid getting stuck by its own limitation.

I tried to extract some logic from the component to custom hooks to better isolate the process of them and for a better readability. I did the same with the country list component, separating it into a filtered list with the result from the fuzzy-search with a highlighted text, and an original list for when the user just search for the country by scrolling it and not typing. I also did this because of the different data strucutre of both libraries.

My plan was to also add unit tests, since the project already has the configuration for them, and better organize the styles, with CSS variables and reusable styles, but I spent more time on the component itself, so I decided that done is better than perfect. As future steps, I would focus on:

- Adding tests. This is a regular requirement I have to do in my daily tasks, but for this project I focused in the main requirements asked
- Adding more granularity on the types, and extending them whenever possible
- Creating better reusable styles

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
