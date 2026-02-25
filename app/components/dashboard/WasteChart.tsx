'use client'
import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import Icons from '../common/Icons'

interface CustomTooltipProps {
    active?: boolean
    payload?: readonly {
        payload: {
            day: string
            value: number
        }
        value: number
    }[]
    unit: string
}

const CustomTooltip = ({ active, payload, unit }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        const dayMap: { [key: string]: string } = {
            'MON': 'Monday',
            'TUE': 'Tuesday',
            'WED': 'Wednesday',
            'THU': 'Thursday',
            'FRI': 'Friday',
            'SAT': 'Saturday',
            'SUN': 'Sunday'
        }

        const fullDayName = dayMap[payload[0].payload.day] || payload[0].payload.day

        return (
            <div
                className="bg-white rounded-[2px] shadow-lg"
                style={{
                    border: "1px solid #E9E9E980",
                    padding: "3px 7px 3px 7px",
                    fontSize: "2px",
                    textAlign: "center",
                    boxShadow: "0px 4px 4px 0px #0000000D",
                }}
            >
                <p className="font-normal leading-100 text-black" style={{ fontSize: "8px" }}>
                    {fullDayName}
                </p>
                <p className="text-[#5FBD92] font-normal" style={{ fontSize: "8px" }}>
                    {payload[0].value}<span className='text-black'> {unit}</span>
                </p>
            </div>
        )
    }
    return null
}

const WasteChart = () => {
    const [timeView, setTimeView] = useState<'daily' | 'weekly'>('daily')
    const [unit, setUnit] = useState<'lbs' | 'tons'>('lbs')

    const dailyData = [
        { day: 'MON', value: 145.3 },
        { day: 'TUE', value: 158.2 },
        { day: 'WED', value: 132.7 },
        { day: 'THU', value: 189.4 },
        { day: 'FRI', value: 142.8 },
        { day: 'SAT', value: 176.5 },
        { day: 'SUN', value: 168.9 },
    ]

    const weeklyData = [
        { day: 'Week 1', value: 520.5 },
        { day: 'Week 2', value: 680.3 },
        { day: 'Week 3', value: 590.8 },
        { day: 'Week 4', value: 750.2 },
        { day: 'Week 5', value: 590.8 },
        { day: 'Week 6', value: 750.2 },
    ]

    const currentData = timeView === 'daily' ? dailyData : weeklyData

    return (


        <>
            <style jsx>{`
                .recharts-wrapper,
                .recharts-surface,
                svg {
                    outline: none !important;
                }
            `}</style>

            {/* TABS */}
            <div className=' flex items-center gap-1 justify-between mb-4'>
                <div className="flex items-center gap-2">
                    <div className="bg-light-grey p-0.5 rounded-sm gap-1.5 flex items-center w-fit">
                        <button
                            onClick={() => setTimeView('daily')}
                            className={`cursor-pointer px-[9px] py-[2.5px] rounded-xs text-custom-xs font-normal leading-100 transition-colors ${timeView === 'daily'
                                ? 'bg-white text-black'
                                : 'text-graphite bg-transparent'
                                }`}
                        >
                            Daily
                        </button>
                        <button
                            onClick={() => setTimeView('weekly')}
                            className={`cursor-pointer px-[4px] py-[2.5px] rounded-xs text-custom-xs font-normal leading-100 transition-colors ${timeView === 'weekly'
                                ? 'bg-white text-black'
                                : 'text-graphite bg-transparent'
                                }`}
                        >
                            Weekly
                        </button>
                    </div>
                    <div className="bg-light-grey p-0.5 rounded-sm gap-1.5 flex items-center w-fit">
                        <button
                            onClick={() => setUnit('lbs')}
                            className={`cursor-pointer px-[9px] py-[2.5px] rounded-xs text-custom-xs font-normal leading-100 transition-colors ${unit === 'lbs'
                                ? 'bg-white text-black'
                                : 'text-graphite bg-transparent'
                                }`}
                        >
                            lbs
                        </button>
                        <button
                            onClick={() => setUnit('tons')}
                            className={`cursor-pointer px-[5px] py-[2.5px] rounded-xs text-custom-xs font-normal leading-100 transition-colors ${unit === 'tons'
                                ? 'bg-white text-black'
                                : 'text-graphite bg-transparent'
                                }`}
                        >
                            tons
                        </button>
                    </div>
                </div>
                <div className='cursor-pointer rounded-full bg-white border border-black size-[24px] hover:border-green hover:bg-green group flex items-center justify-center'>
                    <Icons icon="rightArrowTop" className=" text-black group-hover:text-white transition-all ease-linear duration-150 " />
                </div>
            </div>
            {/* Chart */}
            <div className="relative scale-110 translate-y-[10px] outline-0!" style={{ outline: 'none' }}>
                <ResponsiveContainer width="100%" height={97}>
                    <BarChart
                        data={currentData}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        style={{ outline: 'none' }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#E1E4ED"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="day"
                            axisLine={{ stroke: '#E1E4ED', strokeWidth: 1 }}
                            tickLine={false}
                            tick={{ fill: '#444444', fontSize: 10, fontWeight: 400, letterSpacing: '-0.16px' }}

                        />
                        <YAxis hide tickCount={10} />
                        <Tooltip
                            content={(props) => <CustomTooltip {...props} unit={unit} />}
                            cursor={{ fill: '#227D530F', radius: 2 }}
                            wrapperStyle={{ outline: 'none' }}
                        />
                        <Bar dataKey="value" radius={[2, 2, 0, 0]} maxBarSize={12} fill="#227D53" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>

    )
}

export default WasteChart
