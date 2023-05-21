import React from 'react'
import './topcharts.css'
import TopChartCard from '../topChartCard/TopChartCard'

function TopCharts({ data }) {
    return (
        <div class="topcharts">
        <h2 class="topchats__heading">Top Charts</h2>
        <div class="topcharts__cards">
          {data.map((data) => <TopChartCard data={data} />)}
        </div>
      </div>
    )
}

export default TopCharts