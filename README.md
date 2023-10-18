# Medusa igr-blog plugin

Medusa-igr-blog plugin for the igr project

## Section A

### Medusa backend

You only need to follow this section, to be able to use the plugin. Don't go beyond this section to avoid confusion.

Step1: Link the plugin

`yarn link medusa-igr-blog`

Step2: add plugin to your medusa-config.js

```javascript
{
    resolve: `medusa-igr-blog`,
    options: {
        enableUI: true,
    },
},
```

Step3: Run migration

`npx medusa migrations run`

Step4: Start the server

` npm run dev -- -- --preserve-symlinks`

## Section B

This section contains general setup fro both the plugin and the backend

### Medusa plugin

Run the below commands in the plugin

```Bash
    - npm run build
    - yarn link
    # to avoid dependency duplicate issue
    -  rm -rf node_modules/@medusajs/medusa

# Follow these steps bellow after making any changes to the plugin

    - yarn add @medusajs/medusa
    - yarn build
    - rm -rf node_modules/@medusajs/medusa
```

#### Medusa backend

Run this in the Medusa Backend that uses the plugin

```bash
    - yarn link medusa-custom-plugin

    - add plugin

    # Only If migration included in the plugin
    - npx medusa migrations run

    - npm run dev -- -- --preserve-symlinks
```

## Test Your Plugin

Ignore this, once you've gotten your answer from the above to avoid distraction. They are just the general steps to follow to setup the plugin and link it to the medusa backend

```
step1: npm run build (plugin)

step2: yarn link (plugin)

step3: yarn link medusa-plugin-custom (medusa-backend)

step4: rm -rf node_modules/@medusajs (plugin)

step5: Add Plugin to Configurations (medusa-backend)

step6: npx medusa migrations run (medusa-backend)

step7: npm run dev -- -- --preserve-symlinks (medusa-backend)
```
