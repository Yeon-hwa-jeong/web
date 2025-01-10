import './Box.css'
import React from 'react'

const Box = () => {
    return(
        <div>
            <img src={`/point-line.svg`} alt="Map"  className='point-line'/>
            <img src={`/shouthing-list.svg`} alt='신고 및 공공재 충원요청 버튼' className='shouthing-list'/>
            <img src={`/yeon.svg`} alt='광고표시' className='yeon'/>
        </div>
    );
};

export default Box;