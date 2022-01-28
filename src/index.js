const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
    // Add your custom components here
    const components = [
        require('./components/button'),
        require('./components/tabs'),
        require('./components/input')
    ]

    components.forEach(component =>
        addComponents(component)
    )

    // Add your custom styles here
    const colors = require('./styles/colors')

    addComponents(colors)
})