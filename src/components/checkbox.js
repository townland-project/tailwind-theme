module.exports = {
    'label.tl-checkbox': {
        'display': 'inline-flex',
        'flex-wrap': 'nowrap',
        'align-items': 'center',
        'font-size': '14px',
        'cursor': 'pointer',
        'user-select': 'none',

        '&.disabled': {
            'pointer-event': 'none',
            'cursor': 'default'
        },

        'input[type="checkbox"]': {
            'cursor': 'pointer',
            'width': '18px',
            'height': '18px',
            'appearance': 'none',
            'border-radius': 'var(--tl-defaults-radius, 6px)',
            'border': '2px solid',
            'border-color': 'var(--tl-defaults-border-color, #303952)',
            'position': 'relative',
            'overflow': 'hidden',

            '&:disabled': {
                'pointer-event': 'none'
            },

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

        '&.tl-primary input[type="checkbox"]:checked::before': {
            'background-color': 'var(--tl-theme-primary)'
        },

        '&.tl-secondary input[type="checkbox"]:checked::before': {
            'background-color': 'var(--tl-theme-secondary)'
        },

        'input[type="checkbox"]:disabled:checked::before': {
            'background-color': 'var(--tl-theme-disabled)'
        },
    }
}