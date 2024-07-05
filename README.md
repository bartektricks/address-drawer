# Address Drawer

## Configuration

To configure the project, copy the `.env.example` file to `.env` and fill in the necessary values.

### VITE_MAPBOX_API_KEY

The API key for Mapbox. You can get it [here](https://account.mapbox.com/).

## Usage

### Development

To start the development server, run:

```bash
pnpm dev
```

### Tests

To run the tests, run:

```bash
pnpm test
```

To run the tests in UI mode, run:

```bash
pnpm test:ui
```

### Production

To build the production version, run:

```bash
pnpm build
```

## Tools used

### Development

- [PNPM](https://pnpm.io/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Formik](https://formik.org/) - forms.
- [Yup](https://github.com/jquense/yup) - validation.
- [Tailwind CSS](https://tailwindcss.com/)
- [HeadlessUI](https://headlessui.dev/) - UI components.
- [React Query](https://react-query.tanstack.com/)
- [Mapbox Search API](https://docs.mapbox.com/mapbox-search-js/api/react/search/) - wrapper for the Search API.

### Code quality

- [TypeScript](https://www.typescriptlang.org/)
- [Biome](https://biome.sh/) - replacement for ESLint and Prettier.
- [Lefthook](https://github.com/evilmartians/lefthook/tree/master) - git hooks.
- [Vitest](https://vitest.dev) - test runner.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - testing hooks and components.

### TODO

- [ ] Add more tests.
- [ ] Setup CI/CD.
- [ ] Setup Storybook.

### Notes

#### Mapbox

Technically I could use the Mapbox Search API directly, but I decided to use the wrapper for the sake of simplicity. The wrapper is a bit more high-level and provides a better developer experience because of the included typings (which are not perfect although it's understandable since it's a beta release).
