import  { Component } from 'react'
import Logo from "../assets/logo/logo-svg.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export default class Navbar extends Component {

  constructor(props){
    super(props);
    this.state={
      navToggle:true
    }
  }
  

  render() {
    
    let linkClick=()=>{
      this.setState({navToggle:!this.state.navToggle})
    }

    return (
      <div className='bg-primary p-2 flex justify-between items-center relative'>
        {this.manideep}
        <Link to="/" ><img src={Logo} className='w-24' alt="Logo" /></Link>
        <FontAwesomeIcon onClick={linkClick} className='md:hidden text-xl cursor-pointer' icon={faBars} />
        <ul className={"md:flex md:h-auto overflow-hidden shadow-lg md:shadow-none absolute md:relative bg-gray-300 md:bg-transparent top-full right-0 z-20 "+ (this.state.navToggle?"h-0":"h-auto")}>

          <li className='mx-2 my-1 font-semibold text-primaryOps hover:bg-gray-800 md:hover:bg-transparent p-1 rounded-sm hover:text-white duration-150' onClick={linkClick} ><Link to='/general'>General</Link></li>
          <li className='mx-2 my-1 font-semibold text-primaryOps hover:bg-gray-800 md:hover:bg-transparent p-1 rounded-sm hover:text-white duration-150' onClick={linkClick} ><Link to='/sports'>Sports</Link></li>
          <li className='mx-2 my-1 font-semibold text-primaryOps hover:bg-gray-800 md:hover:bg-transparent p-1 rounded-sm hover:text-white duration-150' onClick={linkClick} ><Link to='/world'>World</Link></li>
          <li className='mx-2 my-1 font-semibold text-primaryOps hover:bg-gray-800 md:hover:bg-transparent p-1 rounded-sm hover:text-white duration-150' onClick={linkClick} ><Link to='/business'>Business</Link></li>
          <li className='mx-2 my-1 font-semibold text-primaryOps hover:bg-gray-800 md:hover:bg-transparent p-1 rounded-sm hover:text-white duration-150' onClick={linkClick} ><Link to='/technology'>Technology</Link></li>
          <li className='mx-2 my-1 font-semibold text-primaryOps hover:bg-gray-800 md:hover:bg-transparent p-1 rounded-sm hover:text-white duration-150' onClick={linkClick} ><Link to='/entertainment'>Entertailment</Link></li>
          <li className='mx-2 my-1 font-semibold text-primaryOps hover:bg-gray-800 md:hover:bg-transparent p-1 rounded-sm hover:text-white duration-150' onClick={linkClick} ><Link to='/science'>Science</Link></li>
          <li className='mx-2 my-1 font-semibold text-primaryOps hover:bg-gray-800 md:hover:bg-transparent p-1 rounded-sm hover:text-white duration-150' onClick={linkClick} ><Link to='/health'>Health</Link></li>
        </ul>
      </div>
    )
  }
}
