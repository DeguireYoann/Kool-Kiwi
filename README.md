# Kool Kiwi E-Commerce Simulation with Nuxt.js

Welcome to our Kool Kiwi an E-Commerce Simulation project built with Nuxt.js! This project aims to provide a comprehensive demonstration of an e-commerce platform using various technologies and services. Here's a guide to help you understand and set up the project.

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Setup](#setup)
4. [Project Structure](#project-structure)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

This project is a simulation of an e-commerce website where users can browse through products, search for specific items, and eventually add them to their cart, and checkout. It utilizes the power of Nuxt.js as the frontend framework to create a dynamic and responsive user interface.

## Technologies Used

- **Nuxt.js**: Frontend framework for building Vue.js applications with server-side rendering, routing, and more.
- **Contentful**: Headless CMS used for storing product information such as name, description, images, etc.
- **Algolia**: Search engine used for enabling fast and relevant product search functionality.
- **Auth0**: Authentication service used for user authentication and authorization.

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:

```
git clone <repository_url>
```

2. Navigate to the project directory:

```
cd <project_directory>
```

3. Install dependencies:

```
npm install
```

4. Configure environment variables:
   - Rename `.env.example` to `.env` and fill in the necessary credentials and configuration details for Contentful, Algolia, and Auth0.

5. Start the development server:

```
npm run dev
```

6. Visit `http://localhost:3000` in your browser to view the application.

## Project Structure

The project structure is organized as follows:

- **`assets/`**: Contains static assets such as images, stylesheets, etc.
- **`components/`**: Contains reusable Vue components used across the application.
- **`layouts/`**: Contains layout components used for page layouts.
- **`pages/`**: Contains the pages of the application. Each `.vue` file represents a page.
- **`plugins/`**: Contains Nuxt.js plugins used for integrating external libraries.
- **`store/`**: Contains Vuex store modules for managing application state.

## Usage

Once the project is set up, you can start exploring the application. Here are some key features:

- Browse through the list of products displayed on the homepage.
- Use the search bar to search for specific products using Algolia's search functionality.
- Click on a product to view its details and add it to the cart.
- Proceed to the cart page to view and manage the items in your cart. (not developped yet)
- Complete the checkout process by providing the necessary information. (not developped yet)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/<feature_name>`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/<feature_name>`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for choosing our Kool Kiwi project! If you have any questions or feedback, feel free to reach out to us. Happy coding!

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
