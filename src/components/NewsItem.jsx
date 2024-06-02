import { Component } from 'react'
import propTypes from "prop-types";

export default class NewsItem extends Component {
  render() {
    return (
      <div className='bg-gray-200 duration-100 hover:bg-gray-300 hover:shadow-md rounded-md shadow-md m-2 inline-block flex-col items-end relative'>
        
          <img className='rounded w-auto' src={this.props.articles.image} alt="newsimage" />
        <div className='p-2'>
          <div className=''>
            <h2 className='font-semibold text-wrap text-xl inline'>{this.props.articles.title.slice(0,60)}...
            {"\n"}</h2>
          </div>
          <div className='inline'>
            <p>{this.props.articles.description.slice(0,106)}... </p>
          </div>
          <hr />
          <p className='text-gray-800'>Published Date:{this.props.articles.publishedAt.slice(0,10)}</p>
        </div>
        <div className='flex align-top justify-end'> 
            <a target="_blank" href={this.props.articles.url}>         
              <button  className='btn bg-secondaryOps text-white m-1  backdrop-blur-3xl' >Read More</button>
            </a>
          </div>
      </div>
    )
  }
}
NewsItem.propTypes={
  articles:propTypes.object
}