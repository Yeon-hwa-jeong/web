import './Clear.css'
import React from 'react'

const Clear = () => {
    return(
        <div>
            <img src={`/point-line-mini.svg`} alt="Map"  className='point-line-mini'/>
            <img src={`/imsi-button.svg`} alt='추후 버튼으로 바꿀 예정입니다.' className='clear-2' />
            <img src={`/clear-1.svg`} alt="대여 창"  className='clear-1'/>
        </div>
    );
};

export default Clear;