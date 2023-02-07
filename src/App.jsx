import { HashRouter, Routes, Route } from 'react-router-dom';

import { AppContext } from './utils/ContextApi';
import Home from './components/Home';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <AppContext>
      <HashRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/:query/:startIndex' exact element={<SearchResult />} />
        </Routes>
      </HashRouter>
    </AppContext>
  );
}

export default App;
