# Kubeapp UI Components Library

Consume in your Angular project by adding `StoriesModule` to the imports array in your app.module.ts

Include global CSS by adding: 
```
"./node_modules/kubeapp-comps-library/src/styles.css"
```
to the styles array in angular.json

The best way to reference implementation is to take a look at the current Storybook server, available at
https://iposs-appengine-prod-dot-concentric-sky-development.uw.r.appspot.com/

Entries in storybook are currently being labeled as they pass through development phases.
* Stubbed: 🐣
* Active development: 🐔
* In QA: 🔍
* Buggy: 🧯
* Deprecated: 🗑️
* In review with design: 👩‍💻
* Production, ready for use: ✅

# Dependencies

We use Bootstrap for positioning and some widgets, and it should be compiled directly into the css deliverable referenced above, please do not include it separately as there might be conflicts!

# Implementation
One of our design goals has been to promote the use of semantic HTML tags and resist over-componentization. This serves the goals of making the resulting application more accessible, and allowing developers direct access to element properties and events.

Our two strategies have been to decorate tags with attributes, and to allow semantic tags to be passed into components that will then decorate them with additional markup and functionality, implementation looking like:

`<button gp-button>Button</button>`

and 

`<gp-input><input type="text"/></gp-input>`

Properties of the component are then applied directly to the component or to the attribute decorated tag (depending on approach), while attributes and properties of the semantic tag are always applied directly to the tag:

```  
<button 
    gp-buttonsocial 
    [iconId]="'gp-icon-facebook'"
    type="button">Button Social</button>
```
```
<div
          gp-input
          label="Error label text"
          [error]="true"
          helperText="the helper text"
          [submitButton]="true">
    <input placeholder="placeholder" required #input>
</div>
```

