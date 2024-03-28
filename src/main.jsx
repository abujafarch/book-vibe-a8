import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Body from './components/Body/Body';
import BookReview from './components/BookReview/BookReview';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ReadBooks from './components/ListedBooks/ReadBooks';
import WishlistBooks from './components/ListedBooks/WishlistBooks';
import PageToRead from './components/PageToRead/PageToRead';
import { Toaster } from 'react-hot-toast';
import NotFound from './NotFound/NotFound';
import About from './components/About/About';
import Vision from './components/About/Vision';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Body></Body>
      },
      {
        path: '/book-review/:bookId',
        loader: ()=>fetch('/booksData.json'),
        // loader: async ({ params }) => {
        //   const booksData = async (url = '/booksData.json') => {
        //     const res = await fetch(url);
        //     const data = await res.json()
        //     return data
        //   }
        //   const bookId = parseInt(params.bookId)
        //   const loadedData = await booksData()
        //   return [loadedData, bookId]
        // },
        element: <BookReview></BookReview>
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: '',
            element: <ReadBooks></ReadBooks>
          },
          {
            path: 'wishlist-books',
            element: <WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path: '/pages-to-read',
        element: <PageToRead></PageToRead>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/vision',
        element:<Vision></Vision>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </React.StrictMode>,
)
