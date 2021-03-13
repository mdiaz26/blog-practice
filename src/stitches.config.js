import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
    prefix: 'stitches',
    tokens: {
        colors: {
            $blue: 'hsl(202, 52%, 70%)',
            $pink: 'hsl(296, 82%, 52%)'
        }
    },
    breakpoints: {
        bp1: (rule) => `@media (min-width: 640px) { ${rule} }`
    },
    utils: {
        m: () => (value) => ({
            marginTop: value,
            marginBottom: value,
            marginLeft: value,
            marginRight: value,
        })
    },
})