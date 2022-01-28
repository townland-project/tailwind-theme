module.exports = {
    '.tl-input-container': {
        'display': 'inline-flex',
        'flex-wrap': 'nowrap',
        'align-items': 'center',
        'border': '2px solid',
        'border-color': 'var(--tl-defaults-border-color, #303952)',
        'border-radius': 'var(--tl-defaults-radius, 6px)',
        'padding': '8px 14px',

        'label': {
            'display': 'flex',
            'flex-direction': 'column',
            'font-size': '12px',
            'color': 'var(--tl-defaults-border-color, #303952)',
        },

        'input': {
            'background-color': 'transparent',
            'font-size': '14px',

            '&::placeholder': {
                'color': 'var(--tl-defaults-placeholder-color, #57606F)',
            }
        }
    }
}