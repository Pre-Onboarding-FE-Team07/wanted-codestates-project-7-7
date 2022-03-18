import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import FormListPage from './pages/FormListPage';
import CreateFormPage from './pages/CreateFormPage';
import WriteFormPage from './pages/WriteFormPage';
import UserDataPage from './pages/UserDataPage';
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
