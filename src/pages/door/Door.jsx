import './Door.css';
import React from 'react';

const Door = () => {
    return (
        <div>
            <img src={`/point-line.svg`} alt="line"  className='point-line' />
            <img src={`/open-the-door.svg`} alt="연암공대 지도를 로드할 예정입니다." className='imsi-map'/>
            <img src={`/under.svg`} alt="연암공대 부근 사람들이 찾을만한 장소를 로드합니다." className='imsi-map'/>
        </div>
    );
};

export default  Door;