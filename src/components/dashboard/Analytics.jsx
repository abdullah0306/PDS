'use client';

import { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from 'react-simple-maps';

// Colors for Pie Chart (User Traffic)
const PIE_CHART_COLORS = ['#4318FF', '#A78BFA', '#BCA0FC', '#B0B8C5'];

// Data for the main chart
const fullData = {
  '7 Days': [
    { month: 'Mon', bar: 12, bar2: 4, line: 20 },
    { month: 'Tue', bar: 18, bar2: 5, line: 30 },
    { month: 'Wed', bar: 22, bar2: 6, line: 28 },
    { month: 'Thu', bar: 20, bar2: 4, line: 35 },
    { month: 'Fri', bar: 16, bar2: 3, line: 25 },
    { month: 'Sat', bar: 24, bar2: 6, line: 40 },
    { month: 'Sun', bar: 20, bar2: 5, line: 33 },
  ],
  '30 Days': Array.from({ length: 30 }, (_, i) => ({
    month: `Day ${i + 1}`,
    bar: Math.floor(Math.random() * 30) + 10,
    bar2: Math.floor(Math.random() * 8) + 2,
    line: Math.floor(Math.random() * 50) + 20,
  })),
  '6 Months': [
    { month: '02', bar: 10, bar2: 4, line: 20 },
    { month: '03', bar: 20, bar2: 6, line: 40 },
    { month: '04', bar: 15, bar2: 5, line: 30 },
    { month: '05', bar: 25, bar2: 6, line: 50 },
    { month: '06', bar: 20, bar2: 4, line: 35 },
    { month: '07', bar: 30, bar2: 6, line: 60 },
  ],
  '12 Months': [
    { month: 'Jan', bar: 18, bar2: 5, line: 33 }, { month: 'Feb', bar: 20, bar2: 6, line: 36 }, { month: 'Mar', bar: 22, bar2: 7, line: 38 }, { month: 'Apr', bar: 24, bar2: 5, line: 40 }, { month: 'May', bar: 26, bar2: 6, line: 43 }, { month: 'Jun', bar: 28, bar2: 7, line: 45 }, { month: 'Jul', bar: 30, bar2: 6, line: 47 }, { month: 'Aug', bar: 32, bar2: 8, line: 50 }, { month: 'Sep', bar: 28, bar2: 6, line: 42 }, { month: 'Oct', bar: 26, bar2: 5, line: 39 }, { month: 'Nov', bar: 24, bar2: 4, line: 37 }, { month: 'Dec', bar: 22, bar2: 3, line: 34 },
  ],
};

const pieChartData = [
  { name: 'Data A', value: 41 },
  { name: 'Data B', value: 25 },
  { name: 'Data C', value: 17 },
  { name: 'Data D', value: 17 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const percentageText = `${(percent * 100).toFixed(0)}%`;
  const nameText = name;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="sans-serif"
    >
      <tspan x={x} dy="-0.4em" fontSize="11px" fontWeight="bold">
        {percentageText}
      </tspan>
      <tspan x={x} dy="1.1em" fontSize="9px">
        {nameText}
      </tspan>
    </text>
  );
};

// --- UsersByCountryStats Component ---
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const MAP_HIGHLIGHT_COLOR = "#5D6DD1"; // Blue for map highlights and progress bars
const MAP_MARKER_BG_COLOR = "#1F2937"; // Dark gray for marker backgrounds
const MAP_DEFAULT_FILL_COLOR = "#E5E7EB"; // Light gray for non-highlighted countries

const topCountriesStatsData = [
  { name: 'United Kingdom', users: 192, barPercentage: 90 },
  { name: 'India', users: 64, barPercentage: 60 },
  { name: 'Nepal', users: 11, barPercentage: 30 },
  { name: 'China', users: 8, barPercentage: 20 },
];

// List of country names to highlight on the map.
// These names should match the 'name' property in the TopoJSON file (geo.properties.name).
const highlightedCountryNames = [
    // North America
    "United States of America", "Canada", "Mexico",
    // Europe
    "United Kingdom", "Ireland", "France", "Spain", "Portugal", "Germany", "Poland", "Italy",
    "Netherlands", "Belgium", "Luxembourg", "Switzerland", "Austria", "Czechia", // Czechia is often the name for Czech Republic
    "Denmark", "Norway", "Sweden", "Finland", "Greece", "Hungary", "Romania", "Bulgaria",
    // Australia & NZ
    "Australia", "New Zealand",
    // Asia (from target image image_9b6669.png)
    "Turkey", "Saudi Arabia", "Iran", // "Iran (Islamic Republic of)" is common name in datasets
    "Japan", "South Korea", // "Republic of Korea" for South Korea
    "Philippines", "Indonesia", "Malaysia", "Thailand", "Vietnam",
    "India" // India also appears highlighted in the target map
];

// Data for the annotation markers (percentage bubbles)
const mapAnnotationsData = [
  { regionName: 'North America Focus', percentage: 59, subject: [-100, 50], dx: -30, dy: -30 },
  { regionName: 'Europe Focus', percentage: 45, subject: [10, 52], dx: 30, dy: -30 },
  { regionName: 'Australia Focus', percentage: 26, subject: [135, -25], dx: 30, dy: 30 }, // Adjusted subject for Australia
];


function UsersByCountryStats() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">Where do your users visiting from?</h2>
      <p className="text-sm text-gray-500 mb-6">Users by Country</p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <ResponsiveContainer width="100%" height={350}>
            <ComposableMap
              projectionConfig={{
                scale: 95,
                center: [10, 15]
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map(geo => {
                    // Use geo.properties.name for matching against highlightedCountryNames
                    const countryName = geo.properties.name;
                    const isHighlighted = highlightedCountryNames.includes(countryName);
                    {/* For debugging, you can log country names: console.log(countryName); */}
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHighlighted ? MAP_HIGHLIGHT_COLOR : MAP_DEFAULT_FILL_COLOR}
                        stroke="#FFFFFF"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: isHighlighted ? "#4A5CC0" : "#D1D5DB" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
              {mapAnnotationsData.map(({ regionName, percentage, subject, dx, dy }) => (
                <Annotation
                  key={regionName}
                  subject={subject}
                  dx={dx}
                  dy={dy}
                  connectorProps={{
                    stroke: MAP_MARKER_BG_COLOR,
                    strokeWidth: 1,
                    strokeLinecap: "round"
                  }}
                >
                  <rect x={0} y={0} width={40} height={40} rx={20} fill={MAP_MARKER_BG_COLOR} />
                  <text x={20} y={24} textAnchor="middle" alignmentBaseline="middle" fill="#FFFFFF" fontSize={12} fontWeight="bold">
                    {percentage}%
                  </text>
                </Annotation>
              ))}
            </ComposableMap>
          </ResponsiveContainer>
        </div>

        <div className="md:w-1/2">
          <div className="flex justify-between text-sm font-medium text-gray-600 mb-3">
            <span>Top Countries</span>
            <span>Users</span>
          </div>
          <div className="space-y-4">
            {topCountriesStatsData.map(country => (
              <div key={country.name}>
                <div className="flex justify-between text-sm text-gray-700 mb-1">
                  <span>{country.name}</span>
                  <span className="font-semibold">{country.users}</span>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full w-full">
                  <div
                    className="h-2.5 rounded-full"
                    style={{ width: `${country.barPercentage}%`, backgroundColor: MAP_HIGHLIGHT_COLOR }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
              View Countries
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
// --- End of UsersByCountryStats Component ---

export default function Dashboard() {
  const [selectedRange, setSelectedRange] = useState('6 Months');
  const data = fullData[selectedRange] || [];

  return (
    <div className="min-h-screen bg-[#F4F7FE] p-6 space-y-6">
      {/* Row 1: Main Chart and Pie Chart */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Chart */}
        <div className="lg:w-[60%] bg-white rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Users', value: '395', change: '+348.9', color: 'text-green-500' },
              { label: 'New users', value: '932', change: '+565.7', color: 'text-green-500' },
              { label: 'Avg. engagement time', value: '1m 23s', change: '-565.7', color: 'text-red-500' },
              { label: 'Total revenue', value: '$0.00', change: '', color: '' },
            ].map(({ label, value, change, color }) => (
              <div key={label}>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{label}</span>
                  {change && <span className={`text-xs ${color}`}>{change}</span>}
                </div>
                <div className="text-xl font-bold text-gray-800">{value}</div>
              </div>
            ))}
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', borderRadius: 8, borderColor: '#EDF2F7' }}
                labelStyle={{ color: '#4A5568' }}
              />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="bar" name="All Audits" barSize={14} fill="#8ED6FF" radius={[5, 5, 0, 0]} />
              <Bar dataKey="bar2" name="Completed" barSize={14} fill="#005792" radius={[5, 5, 0, 0]} />
              <Line
                type="monotone"
                dataKey="line"
                name="Completion %"
                stroke="#FFA726"
                strokeWidth={3}
                dot={{ r: 4, stroke: '#FFA726', strokeWidth: 2, fill: '#fff' }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {['7 Days', '30 Days', '6 Months', '12 Months'].map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedRange === range
                      ? 'bg-[#4318FF] text-white'
                      : 'bg-[#F4F7FE] text-gray-600 hover:bg-[#E0E7FF]'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center gap-2 text-sm font-medium">
              <HiOutlineDocumentReport />
              Export PDF
            </button>
          </div>
        </div>

        {/* Pie Chart (User Traffic) */}
        <div className="lg:w-[40%] bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start ">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">User Traffic</h2>
              <p className="text-sm text-gray-500">User per day</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-800">251</div>
              <div className="text-sm text-gray-500">Last 3 Days</div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
                labelLine={false}
                label={renderCustomizedPieLabel}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} stroke="#FFFFFF" strokeWidth={1} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-4">
            <div className="text-sm text-gray-500 flex justify-between border-t pt-4">
              <span>Top Countries</span>
              <span>Users</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-700">United Kingdom</span>
              <span className="font-semibold text-gray-700">12</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Users by Country Stats - Updated */}
      <UsersByCountryStats />

    </div>
  );
}