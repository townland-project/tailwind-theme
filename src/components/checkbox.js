module.exports = {
    'label.tl-checkbox': {
        'display': 'flex',
        'flex-wrap': 'nowrap',
        'align-items': 'center',
        'font-size': '14px',
        'cursor': 'pointer',

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
        }
    }
}