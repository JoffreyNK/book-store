import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Categories from './Categories';
import Books from './Books';
import Header from './Header';

const books = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'action',
    completed: 64,
    chapter: 'chapiter 17',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
    completed: 8,
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    completed: 0,
    chapter: 'Introduction',
  },
];

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Books books={books} />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;