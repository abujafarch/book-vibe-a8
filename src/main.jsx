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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element: <Body></Body>
      },
      {
        path: '/book-review',
        element: <BookReview></BookReview>
      },
      {
        path:'/listed-books',
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            path:'',
            element:<ReadBooks></ReadBooks>
          },
          {
            path: 'wishlist-books',
            element: <WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path:'/pages-to-read',
        element: <PageToRead></PageToRead>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
