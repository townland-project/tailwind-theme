const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, addBase }) {
    // Add your custom components here
    const components = [
        require('./components/button'),
        require('./components/tabs'),
        require('./components/input'),
        require('./components/checkbox'),
        require('./components/radio')
    ]

    components.forEach(component =>
        addComponents(component)
    )

    // Add your custom styles here
    const colors = require('./styles/colors')
    const root = require('./styles/root')
    const theme = require('./styles/theme')

    addComponents(colors)

    addBase({
        ':root': Object.assign({}, root, theme)
    })
})