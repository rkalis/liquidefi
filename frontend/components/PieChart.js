import { PieChart, Pie, Cell } from 'recharts'

const CustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const PieChartWrap = ({data, baseSize = 200}) => {
  const COLORS = ['#00C49F', '#0088FE']
  const chartSize = (baseSize * 2) + 10
  return (
    <PieChart width={chartSize} height={chartSize}>
      <Pie
        data={data}
        cx={baseSize}
        cy={baseSize}
        labelLine={false}
        label={<CustomizedLabel />}
        outerRadius={baseSize}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}

export default PieChartWrap