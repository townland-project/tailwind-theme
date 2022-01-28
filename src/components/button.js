const defualts = {
    'border-radius': 'var(--tl-defaults-radius, 6px)',
    'position': 'relative',
    'overflow': 'hidden',
    'display': 'inline-flex',
    'transition': 'all 0.3s',
}

const flat = {
    'content': '""',
    'position': 'absolute',
    'top': '0',
    'left': '0',
    'right': '0',
    'bottom': '6px',
    'background-color': 'rgba(255, 255, 255, 0.25)',
    'border-radius': '6px',
    'transition': 'all 0.3s',
}

const disabled = {
    'pointer-event': 'none',
    'background-color': 'var(--tl-theme-disabled)'
}

module.exports = {
    '.tl-outlined-button': {
        ...defualts,
        'padding': '8px 14px 14px 14px',
        'border': '2px solid',
        'border-color': 'var(--tl-defaults-border-color, #303952)',

        '&::before': flat,
        '&:disabled': disabled
    },
    '.tl-flat-button': {
        ...defualts,
        'padding': '8px 14px 14px 14px',

        '&::before': flat,
        '&:disabled': disabled
    }
}