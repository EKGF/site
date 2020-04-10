# General Requirements

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

---

- [Home](../README.md)
