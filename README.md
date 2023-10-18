# Medusa plugin


## How to setup Plugin

Link the plugin so it can be available for the medusa backend

```Bash
    - npm run build
    - yarn link
    -  rm -rf node_modules/@medusajs/medusa # to avoid dependency duplicate issue
```

Run this after making any changes to the plugin

```Bash
    - yar rm -rf node_modules/@medusajs/medusan add @medusajs/medusa
    - yarn build
    - rm -rf node_modules/@medusajs/medusa
```

# Medusa backend

- yarn link medusa-custom-plugin

Run this in the Medusa Backend that uses the plugin

```bash
    - add plugin
    # Only If migration included in the plugin
    - npx medusa migrations run

    - npm run dev -- -- --preserve-symlinks
```


## Test Your Plugin

```
step1: npm run build (plugin)

step2: yarn link (plugin)

step3: yarn link medusa-plugin-custom (medusa-backend)

step4: rm -rf node_modules/@medusajs (plugin)

step5: Add Plugin to Configurations (medusa-backend)

step6: npx medusa migrations run (medusa-backend)

step7: npm run dev -- -- --preserve-symlinks (medusa-backend)
```
