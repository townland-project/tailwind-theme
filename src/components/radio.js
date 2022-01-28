module.exports = {
    'label.tl-radio': {
        'display': 'inline-flex',
        'flex-wrap': 'nowrap',
        'align-items': 'center',
        'font-size': '14px',
        'cursor': 'pointer',
        'user-select': 'none',

        'input[type="radio"]': {
            'cursor': 'pointer',
            'width': '18px',
            'height': '18px',
            'appearance': 'none',
            'border-radius': '50%',
            'border': '2px solid',
            'border-color': 'var(--tl-defaults-border-color, #303952)',
            'position': 'relative',
            'overflow': 'hidden',

            '&::before': {
                'content': '""',
                'position': 'absolute',
                'inset': '0',
                'font-size': '8px',
                'line-height': '15px',
                'text-align': 'center'
            },

            '&:checked::before': {
                'content': '"✔"',
            }
        },

        '&.tl-primary input[type="radio"]:checked::before': {
            'background-color': 'var(--tl-theme-primary)'
        },

        '&.tl-secondary input[type="radio"]:checked::before': {
            'background-color': 'var(--tl-theme-secondary)'
        },
    }
}