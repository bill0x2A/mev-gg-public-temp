import { extendTheme } from '@chakra-ui/react';

const config = {
    styles: {
        global: {
            'html, body': {
                'font-family': "'VT323', monospace",
            }
        }
    },
    components: {
        Button: {
            background: 'none',
        },
    },
    initialColorMode: 'dark',
    useSystemColorMode: false,
    breakpoints: {
        sm: '576px',
        md: null,
        lg: null,
        xl: null,
        '2xl': null,
    }
}
  
const theme = extendTheme({ config });

export default theme;
