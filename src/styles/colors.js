const _colors = {
    'peanut-light': '#f7d794',
    'peanut-dark': '#f5cd79'
}

module.exports = Object.keys(_colors).map((key) => {
    return {
        [`.tl-bg-${key}`]: {
            'background-color': _colors[key]
        },
        [`.tl-text-${key}`]: {
            'color': _colors[key]
        },
        [`.tl-border-${key}`]: {
            'border-color': _colors[key]
        },
    }
})