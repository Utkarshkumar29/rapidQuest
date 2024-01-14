import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";

const data = [
    { name: '20', uv: 20, pv: 20, amt: 20 },
    { name: '', uv: 22, pv: 23, amt: 30 },
    { name: '25', uv: 25, pv: 30, amt: 45 },
    { name: '', uv: 27, pv: 33, amt: 50 },
    { name: '30', uv: 28, pv: 34, amt: 55 },
    { name: '', uv: 30, pv: 37, amt: 60 },
    { name: '35', uv: 45, pv: 55, amt: 60 },
    { name: '', uv: 50, pv: 60, amt: 70 },
    { name: '40', uv: 60, pv: 70, amt: 80 },
    { name: '', uv: 65, pv: 75, amt: 85 },
    { name: '60', uv: 85, pv: 85, amt: 90 },
    { name: '', uv: 90, pv: 90, amt: 100 },
    { name: '65', uv: 95, pv: 100, amt: 110 }
]

const SimpleAreaChart = () => {
    return (
        <ResponsiveContainer>
            <BarChart data={data}>
                <XAxis dataKey="name" stroke="#8884d8"/>
                <YAxis type="number" domain={[0, 300]} ticks={[0, 100, 200, 300]}   tickFormatter={(value) => `$${value}`}/>
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false}/>
                <Bar dataKey="uv" fill="blue" barSize={30} stackId="stack"/>
                <Bar dataKey="pv" fill="#4837fd" barSize={30} stackId="stack"/>
                <Bar dataKey="amt" fill="#89aeff" barSize={30} stackId="stack"/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default SimpleAreaChart