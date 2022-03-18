import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import { FormListPage, CreateFormPage, WriteFormPage, UserDataPage } from './pages/index';
import FormListProvider from 'context/FormListContext';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router>
        <FormListProvider>
          <Routes>
            <Route path="/" element={<FormListPage />} />
            <Route path="/create" element={<CreateFormPage />} />
            <Route path="/write" element={<WriteFormPage />} />
            <Route path="/userdata" element={<UserDataPage />} />
          </Routes>
        </FormListProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
