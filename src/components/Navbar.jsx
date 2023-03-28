import React , {useEffect, useState }from 'react'
import {Link} from "react-router-dom";
import { styles } from '../styles.js'
import { logo, menu, close } from '../assets';
import {navLinks} from "../constanst/constants.js";


const Navbar = () => {

  // tracks to where we are in the page
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex 
      items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0,0)
            }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
            <p className="text-white text-[18-px] font-bold
          cursor-pointer flex">Purbayan &nbsp;
                <span className='sm:block hidden'>| Purbayan
                    Majumder</span></p>
        </Link>
          <ul className='list-one hidden sm:flex flex-row gap-10'>
              {/*Getting all the links and each of the link will render*/}
              {/*a li tag which will contain a anchor tag*/}
              {navLinks.map((Link) => (
                  <li
                      key={Link.id}
                      className={`${
                      //     render different colors only if the links are 
                      //     clicked or seen active
                          active === Link.title
                           ? "text-white"
                              : "text-secondary"
                      } hover:text-white text=[-18px]
                       font-medium cursor-pointer`}
                      // change the sections based on the clicked links
                      onClick={() => setActive(Link.title)}
                  >
                      <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
              ))}
          </ul>
      {/*      Creating a dropdown menu such that it becomes responsive on */}
      {/*    smaller devices */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
              src={toggle ? close :  menu}
               alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}/>
          </div>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute 
          top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
              <ul className='list-one flex justify-end items-start gap-4 flex-col'>
                  {/*Getting all the links and each of the link will render*/}
                  {/*a li tag which will contain a anchor tag*/}
                  {navLinks.map((Link) => (
                      <li
                          key={Link.id}
                          className={`${
                              //     render different colors only if the links are 
                              //     clicked or seen active
                              active === Link.title
                                  ? "text-white"
                                  : "text-secondary"
                          } font-poppins font-medium 
                          cursor-pointer text-[16px]`}
                          // change the sections based on the clicked links
                          onClick={() => {
                              setToggle(!toggle);
                              setActive(Link.title);
                          }}
                      >
                          <a href={`#${Link.id}`}>{Link.title}</a>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar