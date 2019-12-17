import React from 'react';
import HotCityList from './HotCityList'
import './hot.less'
const HotCity=()=>{
  return(
    <div className="hotCityContainer">
      <h4 className="hotCityTitle">热门城市</h4>
      <HotCityList/>
    </div>
  )
}

export default HotCity