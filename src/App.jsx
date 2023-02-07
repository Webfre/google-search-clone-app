import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppContext } from './utils/ContextApi';
import Home from './components/Home';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/:query/:startIndex' exact element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;