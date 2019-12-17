import React from 'react';
class GroupCityList extends React.Component{
  constructor(props) {
    super(props);
    this.state={}
  }
  render(){
    const cityNameItem=this.props.groupCityItem.cityList.map((cityItem,cityIndex)=>{
      return <li className="cityItem ellipse" key={cityIndex}>{cityItem.cityName}</li>
    })
    return(
      <li className="groupCityItem ellipse">
        <h4 className="groupCityTitle">{this.props.groupCityItem.cityTitle}</h4>
        <ul className="groupcityNameContainer">
          {cityNameItem}
        </ul>
      </li>
    )
  }
}

export default GroupCityList