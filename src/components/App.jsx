import HomePage from 'pages/HomePage/HomePage';
import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import ShowsPage from 'pages/ShowsPage/ShowsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/page" element={<ShowsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
