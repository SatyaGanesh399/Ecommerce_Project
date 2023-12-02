import React from 'react'
import Logo from '../../extras/logo'
import { FiSearch } from "react-icons/fi";
import { Button, Divider } from 'antd';
import { BsCart } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import './index.scss'



const index = () => {
  return (
    <>
    <div className='navbar-container d-flex align-items-center justify-content-between'>
      <div className='d-flex align-items-center justify-content-start'>
        <Logo />
        <div className='navbar-links'>
          <span className="nav-item">Home</span>
          <span className="nav-item">Shop</span>
          <span className="nav-item">About Us</span>
          <span className="nav-item">Blog</span>
          <span className="nav-item">Contact Us</span>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-center gap-10'>
      <Button className='d-flex align-items-center' type="default" shape="round" icon={<RiAccountCircleLine size="20" />} size={'large'}>
            Login
          </Button>
      <FiSearch className='nav-item' size="20" />
      <BsCart className='nav-item' size="20" />
      </div>
      
    </div>
    <Divider className="divider-margin"/>
    </>
  )
}

export default index