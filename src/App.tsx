import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import { UserListProvider } from 'context/UserListContext';
import { FormListPage, CreateFormPage, WriteFormPage, UserDataPage } from './pages/index';
import FormListProvider from 'context/FormListContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FormListProvider>
        <UserListProvider>
          <GlobalStyle />
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<FormListPage />} />
              <Route path="/create" element={<CreateFormPage />} />
              <Route path="/write/:id" element={<WriteFormPage />} />
              <Route path="/userdata/:id" element={<UserDataPage />} />
            </Routes>
          </Router>
        </UserListProvider>
      </FormListProvider>
    </ThemeProvider>
  );
}

export default App;
