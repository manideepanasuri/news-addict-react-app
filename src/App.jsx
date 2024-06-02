import { Component } from 'react'
import Navbar from './components/Navbar'
import NewsComponet from './components/NewsComponet'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";



export default class App extends Component {
  
  render() {

    let apiKey="0f0867f8b3961cea799efe4248aacb55";

    const router=createBrowserRouter([
      {
        path:"/news-addict-react-app/",
        element:<><Navbar /><NewsComponet key="home" apiKey={"apikey="+apiKey} country={"country=in"} category={"category=general"} lang={"lang=en"}/></>
      },
      {
        path:"/news-addict-react-app/general",
        element:<><Navbar /><NewsComponet key="general" apiKey={"apikey="+apiKey} country={" "} category={"category=general"} lang={"lang=en"}/></>
      },
      {
        path:"/news-addict-react-app/sports",
        element:<><Navbar /><NewsComponet key="sports" apiKey={"apikey="+apiKey} country={"country=in"} category={"category=sports"} lang={"lang=en"}/></>
      },
      {
        path:"/news-addict-react-app/world",
        element:<><Navbar /><NewsComponet key="world" apiKey={"apikey="+apiKey} category={"category=general"} lang={"lang=en"}/></>
      },
      {
        path:"/news-addict-react-app/business",
        element:<><Navbar /><NewsComponet key="business" apiKey={"apikey="+apiKey} country={""} category={"category=business"} lang={"lang=en"}/></>
      },
      {
        path:"/news-addict-react-app/technology",
        element:<><Navbar /><NewsComponet key="technology" apiKey={"apikey="+apiKey} country={""} category={"category=technology"} lang={"lang=en"}/></>
      },
      {
        path:"/news-addict-react-app/entertainment",
        element:<><Navbar /><NewsComponet key="entertainment" apiKey={"apikey="+apiKey} country={""} category={"category=entertainment"} lang={"lang=en"}/></>
      },
      {
        path:"/news-addict-react-app/science",
        element:<><Navbar /><NewsComponet key="science" apiKey={"apikey="+apiKey} country={""} category={"category=science"} lang={"lang=en"}/></>
      },
      {
        path:"/news-addict-react-app/health",
        element:<><Navbar /><NewsComponet key="health" apiKey={"apikey="+apiKey} country={""} category={"category=health"} lang={"lang=en"}/></>
      }
    ])
    

    return (
      <div>       
        
        <RouterProvider router={router} />
        
      </div>
    )
  }
}

