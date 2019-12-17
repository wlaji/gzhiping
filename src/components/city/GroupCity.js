import React from 'react';
import GroupCityList from './GroupCityList'
import './group.less'
const GroupCity=()=>{
  const groupCityData=[
    {
      cityTitle:'A',
      cityList:[
        {
          cityName:'上海'
        },
        {
          cityName:'上海'
        },
        {
          cityName:'上海'
        },
        {
          cityName:'上海'
        }
      ]
    },
    {
      cityTitle:'B',
      cityList:[
        {
          cityName:'上海'
        },
        {
          cityName:'上海'
        },
        {
          cityName:'上海'
        },
        {
          cityName:'上海'
        }
      ]
    },
    {
      cityTitle:'C',
      cityList:[
        {
          cityName:'上海上海上海上海上海'
        },
        {
          cityName:'上海'
        },
        {
          cityName:'上海'
        },
        {
          cityName:'上海'
        }
      ]
    },
    {
      cityTitle:'D',
      cityList:[
        {
          cityName:'上海'
        },
        {
          cityName:'上海'
        },
        {
          cityName:'上海'
        },
        {
          cityName:'上海'
        }
      ]
    }
  ]
  return(
    <div className="groupCityContainer">
      <ul className="letterClassify">
        {
          groupCityData.map((item,index)=>{
            return <GroupCityList key={index} groupCityItem={item}/>
          })
        }
      </ul>
    </div>
  )
}

export default GroupCity