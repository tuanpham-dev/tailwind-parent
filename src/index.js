const plugin = require('tailwindcss/plugin')

const tailwindParent = plugin(({ addVariant, theme }) => {
  const { prefix, classNames } = theme('parent')
  const parentClassNames = !Array.isArray(classNames) ? classNames : classNames.reduce((obj, className) => {
    obj[className] = className
    return obj
  }, {})

  Object.entries(parentClassNames).map(([name, parentClassName]) => {
    addVariant(`${prefix}${name}`, `.${parentClassName} &`)
  })
}, {
  theme: {
    parent: {
      prefix: '',
      classNames: {}
    }
  }
})

module.exports = tailwindParent
