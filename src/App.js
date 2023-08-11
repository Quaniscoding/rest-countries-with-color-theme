import './App.css';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import Layout from './template/layout/Layout';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <div className="App">
      <HistoryRouter history={history}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='HomePage' element={<HomePage />} />
            <Route path='DetailPage/:name' element={<DetailPage />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
