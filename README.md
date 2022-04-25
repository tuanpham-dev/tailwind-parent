# Tailwind Parent
A Tailwind Plugin that allows you to style elements based on their parent classes.

# Installation
1. Install package:
```bash
npm install tailwind-parent --save
```

2. Add to tailwind.config.js
```javascript
plugins: [
  require('tailwind-parent')
],
theme: {
  parent: {
    prefix: '',
    classNames: [ // array or object
      'is-red',
      'is-green',
      'is-blue'
    ]
  }
}
```

# Example
```html
<div class="is-red">
  <div class="w-24 h-24 bg-black is-red:bg-red-500"></div>
</div>
```

Results in:
```css
.is-red .is-red\:bg-red-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(239 68 68 / var(--tw-bg-opacity))
}
```
