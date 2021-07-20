
import React, { useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';


const colors = [
              '#0088FE', 
              '#00C49F', 
              '#FFBB28', 
              '#f44336',
              '#e91e63',
              '#9c27b0',
              '#673ab7',
              '#3f51b5',
              '#2196f3',
              '#03a9f4',
              '#00bcd4',
              '#009688',
              '#4caf50',
              '#8bc34a',
              '#cddc39',
              '#ffeb3b',
              '#ffc107',
              '#ff9800',
              '#ff5722',];
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g className="base__no-select" >
        <text x={cx} y={cy} dy={-10}  textAnchor="middle" fill={fill}>
          {payload.name}
          
          

        </text>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        { payload.value}
        </text>
        <text x={cx} y={cy} dy={25} textAnchor="middle" fill={fill}>
        { `(${(percent * 100).toFixed(2)}%)`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Empleos ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(${payload.name} ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };
export const MyPieChartSector = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const onPieEnter = (_, index) => {
        setActiveIndex(index);
      };
    return (
      <div className="dashboard__item-chart ">
        <ResponsiveContainer   width="100%"  >
            <PieChart >
                <Pie 
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}  
                    cx="50%"
                    innerRadius="50%"
                    cy="50%"
                    fill="#8884d8"
                    onMouseEnter={onPieEnter}
                    dataKey="value" 
                    >
                {
                    data.map((_, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
                }
                </Pie>
                
            </PieChart>
        </ResponsiveContainer>
        </div>
    
    )
}
