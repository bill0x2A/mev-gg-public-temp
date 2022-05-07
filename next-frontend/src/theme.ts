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
        xs: '420px',
        sm: '600px',
    }
}
  
const theme = extendTheme({ config });

export default theme;
