import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import ShowsPage from 'pages/ShowsPage/ShowsPage';
import ShowPage from 'pages/HomePage/ShowPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShowsPage />} />
        <Route path=":id" element={<ShowPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
