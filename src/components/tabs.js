module.exports = {
    '.tl-tab-container': {
        'position': 'relative',

        '&.tl-tabs-top': {
            '.tl-tabs': {
                'top': '-50px',
            },

            '.tl-tab': {
                'border': '2px solid',
                'border-bottom': '0px',
                'border-radius': '8px 8px 0 0',
                'margin': '0 2px',

                '&.tl-tab-active': {
                    'bottom': '-2px'
                },
            },
        },

        '&.tl-tabs-left': {
            '.tl-tabs': {
                'top': '60px',
                'left': '-60px',
                'transform': 'rotate(-90deg)',
            },

            '.tl-tab-content': {
                'margin-left': '50px',
            },

            '.tl-tab': {
                'border': '2px solid',
                'border-bottom': '0px',
                'border-radius': '8px 8px 0 0',
                'margin': '0 2px',

                '&.tl-tab-active': {
                    'bottom': '-2px'
                },
            },
        },

        '&.tl-tabs-right': {
            '.tl-tabs': {
                'top': '60px',
                'right': '-60px',
                'transform': 'rotate(90deg)',
            },

            '.tl-tab-content': {
                'margin-right': '50px',
            },

            '.tl-tab': {
                'border': '2px solid',
                'border-bottom': '0px',
                'border-radius': '8px 8px 0 0',
                'margin': '0 2px',

                '&.tl-tab-active': {
                    'bottom': '-2px'
                },
            },
        },

        '&.tl-tabs-bottom': {
            '.tl-tabs': {
                'bottom': '-50px',
            },

            '.tl-tab': {
                'border': '2px solid',
                'border-top': '0px',
                'border-radius': '0 0 8px 8px',
                'margin': '0 2px',

                '&.tl-tab-active': {
                    'top': '-2px'
                },
            },
        },

        '.tl-tab-content': {
            'border': '2px solid',
            'border-radius': '8px',
        },

        '.tl-tabs': {
            'display': 'flex',
            'flex-wrap': 'nowrap',
            'overflow-y': 'hidden',
            'overflow-x': 'auto',
            'position': 'absolute',
            'padding': '8px',

            '.tl-tab': {
                'position': 'relative',
                'padding': '8px 12px',
                'cursor': 'pointer',
            }
        }
    }
}