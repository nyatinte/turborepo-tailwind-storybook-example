# Turborepo TailwindCSS Storybook Example

```sh
turborepo (pnpm workspace)
├── apps
│   ├── catalog
│   │   └── .storybook
│   │       ├── main.ts
│   │       └── preview.js
│   ├── docs
│   │   └── src
│   │       ├── app
│   │       └── features
│   │           └── home
│   │               ├── page.stories.tsx
│   │               └── page.tsx
│   └── web
│       └── src
│           ├── app
│           └── features
│               └── home
│                   ├── page.stories.tsx
│                   └── page.tsx
└── packages
    ├── eslint-config
    ├── typescript-config
    └── ui
        ├── globals.css
        ├── package.json
        ├── postcss.config.js
        ├── src
        │   └── ui
        │       └── button
        │           ├── index.stories.tsx
        │           └── index.tsx
        └── tailwind.config.ts

```

## Start
```sh
pnpm dev
```


When this command is executed, Open two Next.js applications (web, docs) that are styled with Tailwind CSS, along with the Storybook component catalog.

![image](https://github.com/nyatinte/turborepo-tailwind-storybook-example/assets/104000239/cc5e6ca5-532d-4ae1-b254-9f74eaaa6ee1)
