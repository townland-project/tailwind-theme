const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, addBase }) {
    // Add your custom components here
    const components = [
        require('./components/button'),
        require('./components/tabs'),
        require('./components/input'),
        require('./components/checkbox')
    ]

    components.forEach(component =>
        addComponents(component)
    )

    // Add your custom styles here
    const colors = require('./styles/colors')
    const root = require('./styles/root')

    addComponents(colors)

    addBase({
        ':root': root
    })
})