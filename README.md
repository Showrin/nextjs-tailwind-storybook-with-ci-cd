# nextjs-tailwind-storybook-with-ci-cd

This repository is built to provide a ready-to-go template for the projects that are using the following tech stacks:

1. NextJS
2. Tailwind
3. Storybook
4. Jest
5. React Testing Library
6. Eslint
7. Prettier

This template will provide the full setup under the hood and will save a big portion of your time. You have to just create your new repo using this template.

## Table of Contents

- [nextjs-tailwind-storybook-with-ci-cd](#nextjs-tailwind-storybook-with-ci-cd)
  - [Table of Contents](#table-of-contents)
  - [How to Create Repository Using This Template?](#how-to-create-repository-using-this-template)
  - [Package Versions](#package-versions)
  - [Available Commands](#available-commands)
  - [Folder Structure](#folder-structure)
  - [Change NextJS Config](#change-nextjs-config)
  - [Change Tailwind Config](#change-tailwind-config)
  - [Change Unit Test Config](#change-unit-test-config)
  - [Change Eslint Config](#change-eslint-config)
  - [Change Eslint Config](#change-eslint-config-1)
  - [Change Storybook Config](#change-storybook-config)
  - [CI/CD in This App](#cicd-in-this-app)
  - [Storybook doesn't Support Some NextJS Features](#storybook-doesnt-support-some-nextjs-features)
  - [License](#license)
  - [Deployment Guideline](#deployment-guideline)
    - [How to Deploy NextJS App on Vercel](#how-to-deploy-nextjs-app-on-vercel)

## How to Create Repository Using This Template?

1. Click on [**this link to generate a new repo using this template**](https://github.com/Showrin/nextjs-tailwind-storybook-with-ci-cd/generate).
2. Give a name to your repo.
3. Provide a meaningfull description.
4. You can keep the **Include all branches** options unchecked.
5. Click on **Create repository from template** button and boom :boom:. Your repository is ready.
6. Now if you clone the repo in your PC and run `yarn`, all the dependency will be installed.
7. Then running `yarn dev` will start the app at **http://localhost:3000**.
8. running `yarn storybook` will start the storybook of your app at **http://localhost:6006**.

## Package Versions

Following versions were installed when this template was built.

| Package Name              |       Version |
| :------------------------ | ------------: |
| NodeJS                    | **`16.10.0`** |
| NextJS                    |  **`13.3.0`** |
| react                     |  **`18.2.0`** |
| react-dom                 |  **`18.2.0`** |
| tailwindcss               |   **`3.3.1`** |
| postcss                   |  **`8.4.21`** |
| jest                      |  **`29.5.0`** |
| jest-environment-jsdom    |  **`29.5.0`** |
| @testing-library/jest-dom |  **`5.16.5`** |
| @testing-library/react    |  **`14.0.0`** |
| eslint                    |  **`8.38.0`** |
| eslint-config-next        |  **`13.3.0`** |
| eslint-config-prettier    |   **`8.8.0`** |
| prettier                  |   **`2.8.7`** |
| storybook                 |   **`7.0.5`** |

## Available Commands

There are some commands preadded to this template. These commands will help to execute basic tasks.

1. Following command will start the dev server at port `3000` and we can visit the site at **http://localhost:3000**.

   ```
   yarn dev
   ```

2. Following command will create a production build of the site.

   ```
   yarn build
   ```

3. Following command will start a server at port `3000` with the production build (created using `yarn build`) and we can visit the site at **http://localhost:3000**.

   ```
   yarn start
   ```

4. Following command will check any linting issue according to the eslint rules set in the `.eslintrc.json` file.

   ```
   yarn lint
   ```

5. Following command will execute all the unit tests (file with `*.test.jsx`, `*.test.tsx`, `*.test.js` or `*.test.ts` extention) and check whether all the tests pass or not.

   ```
   yarn test
   ```

6. Following command will execute unit tests (file with `*.test.jsx`, `*.test.tsx`, `*.test.js` or `*.test.ts` extention) and check whether all the tests pass or not in the real-time.

   ```
   yarn test:watch
   ```

7. Following command will start the storybook server at port 6006 and we can visit the story at **http://localhost:6006**.

   ```
   yarn storybook
   ```

8. Following command will create a static web application capable of being served by any web server. For more info please visit [**Publish Storybook**](https://storybook.js.org/docs/react/sharing/publish-storybook).

   ```
   yarn build-storybook
   ```

## Folder Structure

Before working on a project, we should know about its folder structure. This helps a lot to understand where to find which components or portion of codes. In this template, the folder structure was tried to be kept as simple as possible.

1. <ins>**.github/workflows**</ins>: This folder is used to **keep all the files related to github actions**. We've already setup a basic CI/CD in the template and named the file `tests.yml`. We can create more yml files for different actions.
2. <ins>**.storybook**</ins>: All the storybook related config files like theme, seo, preview, manager etc live inside this folder.
3. <ins>**components**</ins>: In our web app, we'll have to build many reusable components like button, input, modal etc. This is the place where we can keep all our reusable components. While creating a component we have tto ensure the following rules have been followed in order to maintain the consistency.

   1. Each **component must have a folder and index.js** file inside the folder. For example: if we are creating a button component, the structure should be:

      ```
      components
      | - Buttton
          | - Button.jsx
          | - index.js
      ```

      Then we can access the component from outside using `./componets/Button`.

   2. If a component has some sub-components, then we can keep them in a folder named `subComponents` inside that component.

      ```
      components
      | - Buttton
          | - subComponents
              | - ButtonOverlay
                  | - ButtonOverlay.jsx
                  | - index.js
          | - Button.jsx
          | - index.js
      ```

   3. Each component must have a story file (for storybook). Story file names should be in `<Component Name>.stories.jsx` this format.

      ```
      components
      | - Buttton
          | - subComponents
              | - ButtonOverlay
                  | - ButtonOverlay.jsx
                  | - index.js
          | - Button.jsx
          | - Button.stories.jsx
          | - index.js
      ```

   4. Each component and sub-components must have a test file (for unit testing). Test file names should be in `<Component Name>.test.jsx` this format.

      ```
      components
      | - Buttton
          | - subComponents
              | - ButtonOverlay
                  | - ButtonOverlay.jsx
                  | - ButtonOverlay.test.jsx
                  | - index.js
          | - Button.jsx
          | - Button.stories.jsx
          | - Button.test.jsx
          | - index.js
      ```

   That's a general set of rules for the `components` folder. But of course, you can set your own rules and structure. In that case, you might have to change storybook, jest, and other configs.

4. <ins>**pages**</ins>: This folder keeps all the page and api related files of our app. It's a basic feature provided by **NextJS**. To learn more about them, you can read the following docs from NextJS.

   1. [NextJS Pages](https://nextjs.org/docs/basic-features/pages)
   2. [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction)

5. <ins>**public**</ins>: This folder is also provided by **NextJS**. It keeps all the static assets like images, icons, audios, pdfs etc. To learn more about this folder, visit [**Static File Serving in NextJs**](https://nextjs.org/docs/basic-features/static-file-serving).
6. <ins>**styles**</ins>: All the global css or scss files will be kept in this folder. You can keep the local files too with an appropiate folder structure in it.

## Change NextJS Config

If you need to change settings of nextjs, then `next.config.js` and `jsconfig.json` is the place where you'll have to work. Currently, we've done a bare minimum setup in both files.

But in the jsconfig.json file, we've setup a path alias for the root directory. **You can access the root directory using `@/` this alias**. To learn more about it, read [**Absolute Imports and Module path aliases in NextJS**](https://nextjs.org/docs/advanced-features/module-path-aliases). Also, you can learn more about `next.config.js` file from [**next.config.js Doc**](https://nextjs.org/docs/api-reference/next.config.js/introduction).

## Change Tailwind Config

If you need to change settings of tailwind, then `postcss.config.js` and `tailwind.config.js` is the place where you'll have to work. You can modify or extend the tailwind theme in `tailwind.config.js` file. For more info, you can read [**Tailwind Configuration**](https://tailwindcss.com/docs/configuration) doc.

## Change Unit Test Config

Basically, we can modify jest unit testing setup using `jest.config.js` and `jest.setup.js` file. To learn more about it, you can go through [**Jest and React Testing Library in NextJS**](https://nextjs.org/docs/testing#jest-and-react-testing-library).

## Change Eslint Config

We can use `.eslintrc.json` file in order to add or remove any eslint rule. For more details, you can read [**ESLint Configuration Files Doc**](https://eslint.org/docs/latest/use/configure/configuration-files).

## Change Eslint Config

`.prettierrc.json` file is there to change prettier config of the app. We've added some configs in this file. To remove or add any config, you can go through [**Prettier Configuration File Doc**](https://prettier.io/docs/en/configuration.html).

## Change Storybook Config

All the config files of storybook are kept in the `.storybook` folder.

All the project related configs for storybook are in `main.js` file. If you need to change anything in the storybook preview section, then `preview.js` file is the appropiate one. Learn more from [**Configure Storybook Doc**](https://storybook.js.org/docs/react/configure/overview).

To modify the theme, we may have to work in `appTheme.js` and `manager.js` files. To learn more about theming, visit [**Storybook Theming Doc**](https://storybook.js.org/docs/react/configure/theming).

If we want to do any SEO related changes, then we may have to modify `manager-head.html` or `main.js` files. To read more about it, visit [**Search engine optimization (SEO) Doc**](https://storybook.js.org/docs/react/sharing/publish-storybook#search-engine-optimization-seo).

If we want to access any assets in the `public` folder, then we don't have to mention `public` in the src url. You can emit that. For example, we have an image `xyz.png` in public folder. Then we can access this image from any story using `./xyz.png`. Learn more about it from [**Serving static files via Storybook Configuration Doc**](https://storybook.js.org/docs/ember/configure/images-and-assets#serving-static-files-via-storybook-configuration).

If we want to write detailed descriptions about our components, props and stories we can use JSDoc comments. To learn more please, visit the following docs from Storybook.

1. [**Writing descriptions in Storybook**](https://storybook.js.org/docs/react/api/doc-block-description)
2. [**Writing descriptions of Props in Storybook**](https://storybook.js.org/docs/react/api/argtypes#grouping)

## CI/CD in This App

A github action has been setup in `tests.yml` file inside `.github` folder. This action runs js linting and unit test every time a new commit has been pushed to origin. You can write more github actions here as per your need.

## Storybook doesn't Support Some NextJS Features

Currently, storybook doesn't support some features (TurboPack, Server Component, SWC etc) of `NextJS v13`. But if you are not using these features, then there shouldn't be any problem with storybook. [**[Source]**](https://storybook.js.org/docs/ember/configure/frameworks#nextjs-13-doesnt-work-with-storybook)

## License

Being an open source repository, this repo has a MIT License in it. But when you are using this template, you should have to use your own license here :rotating_light::rotating_light::rotating_light:. You can easily generate this. You can read [**Licensing a repository Doc**](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).

## Deployment Guideline

### How to Deploy NextJS App on Vercel

1. Visit [**Vercel's Dashboard**](https://vercel.com/new).
2. Under **`Import Git Repository`** section, click **`Continue with Github`** button.
3. Install **`Vercel`** in your GitHub account when prompted.
4. Select your **`NextJs app`** repository and click **`Import`**.
5. Add environment variables (if present) from your **`NextJs app`**'s **`.env`** file under **`Environment Variables`** tab in **`Configure Project`** section.
6. Click **`Deploy`**.
7. On successful deployment, you will be directed to a new url with a preview image of your deployed **`NextJs app`**.
8. Click on the preview image.
9. You will be directed to a url that looks like **`[DOMAIN-NAME].vercel.app`**.
