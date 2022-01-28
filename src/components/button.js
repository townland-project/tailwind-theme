module.exports = {
    '.tl-button': {
        'border': '2px solid',
        'border-radius': '8px',
        'padding': '8px 14px',
        'position': 'relative',
        'overflow': 'hidden',
        'transition': 'all 0.3s',

        '&::before': {
            'content': '""',
            'position': 'absolute',
            'top': '0',
            'left': '0',
            'right': '0',
            'bottom': '6px',
            'background-color': 'rgba(255, 255, 255, 0.25)',
            'border-radius': '6px',
            'transition': 'all 0.3s',
        },

        '&.tl-button-pressable': {
            '&:hover': {
                '&::before': {
                    'bottom': '0%'
                }
            }
        }
    },
    '.tl-simple-button': {
        'border': '2px solid',
        'border-radius': '8px',
        'padding': '8px 14px',
        'position': 'relative',
        'overflow': 'hidden',
        'transition': 'all 0.3s',
    }
}