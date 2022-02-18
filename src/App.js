import { store } from './redux/store';
import { Provider } from 'react-redux';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { primaryTheme, darkTheme, colorTheme, StyleApp, Global } from './constants/styles-components';
import CalculatorApp from './components/CalculatorApp';

function App() {

  const [theme, setTheme] = useState('light');

  const themeToggle = (colorTheme) => {
    if (colorTheme === 'light') {
      setTheme('light');
    } else if (colorTheme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('color');
    }
  }

  return (
    <ThemeProvider theme={ theme === 'light' ? primaryTheme : theme === 'dark' ? darkTheme : colorTheme }>
      <StyleApp>
        <Provider store={store}>
          <Global />
          <CalculatorApp themeToggle={themeToggle} />
        </Provider>
      </StyleApp>
    </ThemeProvider>
  );
}


export default App;
