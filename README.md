# EKGF website

## 🚀 Quick start

1.  **Install development tools.**

    Follow instructions [here](./INSTALL.md)

1.  **Clone this repo.**

    ```shell
    mkdir ~/Work # or whatever your top level directory is for all your projects
    git clone https://github.com/EKGF/site.git ekgf-site
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd ~/Work/ekgf-site/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `ekgf-site` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

The site is at the moment deployed on a free personal account of [ZEIT Now](https://zeit.co/docs).

You can always see the latest "production" version that has been pushed to the Github repository here: [https://ekgf-site.now.sh/](https://ekgf-site.now.sh/).

The dashboard can be seen here: [https://zeit.co/ekgf/ekgf-site](https://zeit.co/ekgf/ekgf-site)


### How to deploy on ZEIT Now

As long as we don't have a paid account for ZEIT we can't link our organization git repo to them which would make it all automatic.
Their free account only supports personal github accounts.

So, in order to be able to deploy you have to have a ZEIT account, that
account has to be added to the EKGF team and you have to have the
CLI installed (see [INSTALL.md](./INSTALL.md).

For a deploy of whatever you have running locally to a temporary URL that looks like https://ekgf-site-ncpdyq09r.now.sh/ you can just execute the `now` command:

```shell
cd ~/Work/ekgf-site/
now
```

For a "production" deploy that shows up as https://ekgf-site.now.sh/:

```shell
cd ~/Work/ekgf-site/
now --prod
```

## Requirements

The site is being developed with the following requirements in mind:

- **Material Design**

  The [**Google Material Design**](https://material.io/design/) guidelines and principles are being followed for the looks of the site.
  Gatsby supports that via the [gatsby-plugin-material-ui](https://www.gatsbyjs.org/packages/gatsby-plugin-material-ui/) plugin which is based on the [material-ui](https://material-ui.com/) framework which is a popular React framework.

- **Single Page Application (SPA)**

  A lot of our content will be based on RDF data. Either from static
  RDF files or from remote Knowledge Graphs. This data needs to be translated dynamically into webpages which can be best done client-side i.e. in the browser.
  For that and many other reasons we want this site to be a so-called [Single Page Application (SPA)](https://flaviocopes.com/single-page-application/)

- **Server Side Rendering (SSR)**

  Since a Single Page Application assembles the site in the browser itself, crawlers like the Google Search Engine uses cannot "see" what information is published on a given page, since that page does not exist on the server side as an actual HTML file. That's where [Server Side Rendering (SSR)](https://alligator.io/react/server-side-rendering/) comes in. It is a mechanism that lets the code that normally runs in the browser to also run on the server itself, generating HTML pages for crawlers like Google uses.
  Besides that, those pre-generated pages can also be loaded and shown by the browser itself in parallel to downloading all the Javascript code that then takes over once all the code has been downloaded. This allows the end user to immediately "see something" when they land on our site.
  See also **Raw Speed** below.

- **Optimized Image Loader**

  Gatsby supports the plugin [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) which allows us to publish big images and diagrams without having to worry about load speed (as much) on all the various devices that are being used.

- **Components**

  Gatsby is based on React. React supports a strong components based model (see https://reactjs.org/docs/design-principles.html) that allows us to develop reusable components in the context of the EKGF that can easily be reused in any other (free or commercial) applications.

- **Markdown**

  The content of the website needs to be editable by non-technical people. Markdown has a short learning curve and is "fool proof" in
  the sense that it is very hard to make things go wrong with Markdown.

- **Raw Speed**

  Since we have big plans for this website, including serving datasets, we need a site that can deliver excellent performance.
  React with its [Virtual DOM](https://programmingwithmosh.com/react/react-virtual-dom-explained/) can go a long way with that. Other facilities such as SSR (Server Side Rendering) can also help tremendously providing a perfect user experience.

- **GraphQL**

  Gatsby adds the query language GraphQL which can be used in the browser itself to query not only all in-memory contents but also the results of any API call to other systems. The output of each remote API call can be transformed into a structure that GraphQL can query where the component builders do not have to know the original format or where it comes from.

  NOTE: Ideally we would use SPARQL instead of GraphQL or have a combination of both. Rather than having a tree structure of JSON data and a JSON query language like GraphQL we would prefer to work with a similar architecture but then query an RDF graph with SPARQL.
  However, many components in the React/Gatsby eco-system assume GraphQL. It's available and it works. We'll have to deal with it and see how we can mix in RDF and SPARQL along the way.

- **Responsive**

- **Responsive Server Side (RESS)**

  (Optimized image loading (see above) being an example of that)
