import { GlobalStyle } from './GlobalStyle';
import { Router } from './Router';
import { StyleSheetManager } from './StyleSheetManager';

export const App = () => {
    return (
        <StyleSheetManager>
            <GlobalStyle />
            <Router />
        </StyleSheetManager>
    );
};
