import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import FormListPage from './pages/FormListPage';
import CreateFormPage from './pages/CreateFormPage';
import WriteFormPage from './pages/WriteFormPage';
import UserDataPage from './pages/UserDataPage';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<FormListPage />} />
          <Route path="/create" element={<CreateFormPage />} />
          <Route path="/write" element={<WriteFormPage />} />
          <Route path="/userdata" element={<UserDataPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
