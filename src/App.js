import './App.css';
import MainPage from './pages/mainPage';
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
    typography: {
        fontFamily: [
            "Rubik",
            '-apple-system',
            'BlinkMacSystemFont',
        ].join(','),
        fontSize: 16,
    },
})

function App() {
    return (
        <ThemeProvider>
            <div>
                <MainPage />
            </div>
        </ThemeProvider>
    );
}

export default App;
