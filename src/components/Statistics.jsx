import React, { useContext } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ItemsContext } from './Main';

const Statistics = () => {
    const data = useContext(ItemsContext)
    return (
        <div style={{ width: '80%', height: 400 }} className='my-16 mx-auto'>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#123465" fill="#5F5" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;