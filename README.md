# cartolinks

This repo houses cartolinks related tasks, project or assignment.

# Medusa plugin
Link the plugin so it can be available for the medusa backend
- yarn link

Run this after making any changes to the plugin

```Bash

    - yarn add @medusajs/medusa
    - yarn build
    - rm -rf node_modules/@medusajs/medusa
```

# Medusa backend

- yarn link medusa-custom-plugin

Run this in the Medusa Backend that uses the plugin

```
    Only If migration included in the plugin
    - npx medusa migrations run

    - npm run dev -- -- --preserve-symlinks
```
