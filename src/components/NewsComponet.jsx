import { Component } from 'react'
import NewsItem from './NewsItem'
//import Input from "./sample input"
import Loading from "../assets/loading.gif"
import PropTypes from "prop-types"


export default class NewsComponet extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loding:false
    }
  }

  //component did mount for fetching
  async componentDidMount(){
    
    let url=`https://gnews.io/api/v4/top-headlines?${this.props.category}&${this.props.apiKey}&${this.props.country}&${this.props.lang}`;
    this.setState({
      loding:true
    })
    try{
    let data= await fetch(url);
    let art= await data.json();
    
    let ret=JSON.stringify(art);
    ret=JSON.parse(ret);    
    this.setState({
      articles:ret.articles,
      loding:false
    })
    //console.log(art);
  }
  catch(err){console.log(err);}
  }

  // static defaultProps={
  //   category:"category=general",
  //   apiKey:"apikey=16a1fc4c12e5c821e8266278d927a572",
  //   country:"country=in",
  //   lang:"lang=en"
  // }

  static propTypes={
    category:PropTypes.string,
    apiKey:PropTypes.string,
    country:PropTypes.string,
    lang:PropTypes.string,
  }

  render() {
    //console.log("hi")
    return (
      
      <div className='relative'>
      {this.state.loding?(<div className=' flex justify-center items-center'>
          <img src={Loading} className='w-20' alt="loading gif" />
        </div>):
        (<div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {
            this.state.articles.map((inp)=>{
              
              return <NewsItem key={inp.title} articles={inp}/>})
          }
        </div>)
        }
        
        
      </div>
      
    )
  }
}
