module.exports = {
    'label.tl-switch': {
        'display': 'inline-flex',
        'flex-wrap': 'nowrap',
        'align-items': 'center',
        'font-size': '14px',
        'cursor': 'pointer',
        'user-select': 'none',

        'input[type="checkbox"]': {
            'cursor': 'pointer',
            'width': '40px',
            'height': '20px',
            'appearance': 'none',
            'border-radius': '2em',
            'border': '2px solid',
            'border-color': 'var(--tl-defaults-border-color, #303952)',
            'position': 'relative',
            'overflow': 'hidden',

            '&::before': {
                'content': '""',
                'position': 'absolute',
                'top': '1px',
                'left': '2px',
                'font-size': '8px',
                'line-height': '15px',
                'text-align': 'center',
                'background-color': 'var(--tl-defaults-border-color, #303952)',
                'width': '14px',
                'height': '14px',
                'border-radius': '50%'
            },

            '&:checked::before': {
                'left': '20px'
            }
        },

        '&.tl-primary input[type="checkbox"]:checked': {
            'background-color': 'var(--tl-theme-primary)'
        },

        '&.tl-secondary input[type="checkbox"]:checked': {
            'background-color': 'var(--tl-theme-secondary)'
        },
    }
}