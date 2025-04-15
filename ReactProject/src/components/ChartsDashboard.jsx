import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const FinalPriceTrend = ({ products }) => {
  const chartData = products.map((item, index) => ({
    name: item.title,
    shortName: item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title,
    price: item.finalPrice,
  }));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Final Price Trend</h2>

      <div style={{ width: "100%", overflowX: "auto" }}>
        <div style={{ minWidth: chartData.length * 40, height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 30, bottom: 80, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="shortName"
                angle={-45}
                textAnchor="end"
                interval={Math.floor(chartData.length / 10)}
                height={100}
              />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [`${value} SAR`, "Final Price"]}
                labelFormatter={(label, payload) => {
                  const fullName = chartData.find(d => d.shortName === label)?.name;
                  return fullName || label;
                }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#4ADE80"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FinalPriceTrend;
