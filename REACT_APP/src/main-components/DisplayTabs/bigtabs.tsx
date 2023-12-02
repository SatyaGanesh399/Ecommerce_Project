import React from 'react'
import { Button } from 'antd'

type TabProps = {
    text1: string;
    text2: string;
    text3: string;
    imageurl: string;
    buttonColor: 'red' | 'white'; // Assuming buttonColor can only be 'red' or 'white'
  };

function bigtabs({text1, text2, text3, imageurl, buttonColor} : TabProps) {
  return (
    <div>
        <div className='big-tab-left'>
            <span>{text1}</span>
            <span>{text2}</span>
            <span>{text3}</span>
            <Button size='large' shape='round' className={buttonColor == "red" ? 'tabs-red-button' : 'tabs-white-button'}>Browse</Button>
        </div>
        <div className='big-tab-right'>
            <img src={imageurl} alt="object-image"/>
        </div>
    </div>
  )
}

export default bigtabs