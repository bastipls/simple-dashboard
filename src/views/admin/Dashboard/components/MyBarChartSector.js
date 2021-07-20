
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export const MyBarChartSector = () => {
    const data = [
        {name: 'En', publico: 100, privado: 100, interno: 100,},
        {name: 'Feb', publico: 55, privado: 155, interno: 200 },
        {name: 'Mar', publico: 70, privado: 225, interno: 150 },
        {name: 'Abr', publico: 64, privado: 289, interno: 250 },
        {name: 'May', publico: 86, privado: 375, interno: 361 },
        {name: 'Jun', publico: 65, privado: 440, interno: 450 },
        {name: 'Jul', publico: 125, privado: 565, interno: 310 },
        {name: 'Agos', publico: 54, privado: 619, interno: 460 },
        {name: 'Sept', publico: 33, privado: 652, interno: 540 },
        {name: 'Oct', publico: 88, privado: 740, interno: 307 },
        {name: 'Nov', publico: 189, privado: 929, interno: 579 },
        {name: 'Dic', publico: 67, privado: 996, interno: 100 },
      ];
    return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}
        margin={{ top: 0, right: -10, left: -10, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#03275b" />
        <YAxis yAxisId="right" orientation="right" stroke="#E91E63" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="right" dataKey="publico" fill="#E91E63" name="Sector Privado" />
        <Bar yAxisId="left" dataKey="privado" fill="#3367d6" name="Sector Publico"/>
        <Bar yAxisId="left" dataKey="interno" fill="#ffce00" name="Sector Interno"/>
      </BarChart>
    </ResponsiveContainer>
    )
}
