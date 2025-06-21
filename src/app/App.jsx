import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/app/Themes';
import { FontStyles, GlobalStyle } from './GlobalStyle';
import { Router } from './Router';
import { StyleSheetManager } from './StyleSheetManager';

export const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <StyleSheetManager>
                <GlobalStyle />
                <FontStyles />
                <Router />
            </StyleSheetManager>
        </ThemeProvider>
    );
};
