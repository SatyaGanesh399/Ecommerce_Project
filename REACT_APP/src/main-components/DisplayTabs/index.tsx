import './index.scss'
import Smalltab from './smalltab'
import Bigtab from './bigtabs'

function index() {
  return (
    <div className='display-tabs'>
        <div className='top-tabs'>
            <Smalltab />
            <Smalltab />
            <Bigtab
                text1="Trend"
                text2="Devices"
                text3="Laptop"
                imageurl="laptop-1.png"
                buttonColor="red"
            />
        </div>
        <div className='bottom-tabs'>
        <Bigtab
                text1="Trend"
                text2="Devices"
                text3="Laptop"
                imageurl="laptop-1.png"
                buttonColor="white"
            />
            <Smalltab />
            <Smalltab />
        </div>
    </div>
  )
}

export default index