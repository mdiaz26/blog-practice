import { styled, css } from './stitches.config'

const scaleUp = css.keyframes({
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(1.5)' },
});

export const Button = styled('button', {
    backgroundColor: '$blue',
    fontSize: '24px',
    color: '$pink',
    padding: '10px',
    marginTop: '15px',
    marginLeft: '5px',
    borderRadius: '9999px',
    m: '50px',

    ':hover': {
        animation: `${scaleUp} 200ms`,
    },

    variants: {
        color: {
            $blue: {
                backgroundColor: '$blue'
            },
            purple: {
                backgroundColor: 'purple'
            }
        }
    }
})