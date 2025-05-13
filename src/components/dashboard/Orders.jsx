'use client';

import React from 'react';
import {
  FiTrendingUp,
  FiUserCheck,
  FiClock,
  FiFilePlus,
  FiDollarSign,
} from 'react-icons/fi';

// Helper function to generate a smooth Catmull-Rom spline path for SVG
// Adjusted tension for gentler curves.
const catmullRomToPath = (dataPoints, tension = 0.7) => { // Tension adjusted (e.g., 0.7 for gentler curves)
  if (!dataPoints || dataPoints.length < 2) return "";
  const points = dataPoints.map(p => [p.x, p.y]);

  let path = `M ${points[0][0].toFixed(2)},${points[0][1].toFixed(2)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 >= points.length ? (i + 1) : (i + 2)];

    const cp1x = p1[0] + (p2[0] - p0[0]) / 6 * tension;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6 * tension;
    
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6 * tension;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6 * tension;

    path += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2[0].toFixed(2)},${p2[1].toFixed(2)}`;
  }
  return path;
};


const Orders = () => {
  const statsData = [
    { title: 'Total Leads', value: '1,254', change: '+12%', period: 'vs last week', trend: 'up' },
    { title: 'Conversion Rate', value: '5.2%', change: '-1.3%', period: 'vs last month', trend: 'down' },
    { title: 'Avg. Response Time', value: '2h 15m', change: '+5%', period: 'vs yesterday', trend: 'up' },
    { title: 'New Leads', value: '346', change: '+8%', period: 'this week', trend: 'up' },
  ];

  const salesPoints = [
    { x: 0, y: 55 }, { x: 16.66, y: 70 }, { x: 33.33, y: 50 }, { x: 50, y: 25 },
    { x: 66.66, y: 35 }, { x: 83.33, y: 12 }, { x: 100, y: 0 }
  ];
  const salesPathD = catmullRomToPath(salesPoints, 0.7); // Applied tension

  const ordersPoints = [
    { x: 0, y: 100 }, { x: 16.66, y: 100 }, { x: 33.33, y: 100 }, { x: 50, y: 100 },
    { x: 66.66, y: 100 }, { x: 83.33, y: 100 }, { x: 100, y: 100 }
  ];
  const ordersPathD = `M ${ordersPoints[0].x.toFixed(2)},${ordersPoints[0].y.toFixed(2)} ` +
                      ordersPoints.slice(1).map(p => `L ${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');

  const yAxisChartLabels = ['$10000', '$7500', '$5000', '$2500', '$0'];
  const xAxisChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const gridYLevels = [0, 25, 50, 75, 100];

  return (
    <div className="min-h-screen bg-[#F4F7FE] ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Where do your users visiting from?</h2>
      <p className="text-sm text-gray-500 mb-6">Users by Country</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                <p className="text-2xl font-bold mt-2 text-gray-700">{stat.value}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-xs font-semibold ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-400">{stat.period}</span>
                </div>
              </div>
              <div className={`p-2 rounded-lg ${
                  stat.title === 'Total Leads' ? 'bg-blue-100' :
                  stat.title === 'Conversion Rate' ? 'bg-green-100' :
                  stat.title === 'Avg. Response Time' ? 'bg-yellow-100' :
                  stat.title === 'New Leads' ? 'bg-purple-100' : 'bg-gray-100'
                }`}>
                {stat.title === 'Total Leads' && <FiTrendingUp className="w-5 h-5 text-blue-500" />}
                {stat.title === 'Conversion Rate' && <FiUserCheck className="w-5 h-5 text-green-500" />}
                {stat.title === 'Avg. Response Time' && <FiClock className="w-5 h-5 text-yellow-500" />}
                {stat.title === 'New Leads' && <FiTrendingUp className="w-5 h-5 text-purple-500" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-5">
            {/* Adjusted title color */}
            <h3 className="text-xl font-semibold text-slate-700">Sales & Orders Overview</h3>
            
          </div>

          <div className="relative h-[220px] bg-white rounded-xl p-5 shadow-sm">
            {/* Y-Axis Labels */}
            <div className="absolute left-0 top-4 bottom-8 flex flex-col justify-between text-[12px] text-slate-500 pr-4">
                {yAxisChartLabels.map(label => (
                <span key={label}>{label}</span>
                ))}
            </div>

            {/* Chart SVG */}
            <div className="relative ml-12 h-[calc(100%-2rem)]">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Grid Lines */}
                {gridYLevels.map((yPos, index) => (
                    <line
                    key={`grid-${index}`}
                    x1="0" y1={yPos} x2="100" y2={yPos}
                    stroke="#e2e8f0"
                    strokeWidth="0.6"
                    strokeOpacity="0.5"
                    strokeDasharray="2 2"
                    />
                ))}

                {/* Orders Path & Points */}
                <path
                    d={ordersPathD}
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {ordersPoints.map((pt, index) => (
                    <circle
                    key={`orders-dot-${index}`}
                    cx={pt.x}
                    cy={pt.y}
                    r="1"
                    fill="#8b5cf6"
                    />
                ))}

                {/* Sales Path & Points */}
                <path
                    d={salesPathD}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {salesPoints.map((pt, index) => (
                    <circle
                    key={`sales-dot-${index}`}
                    cx={pt.x}
                    cy={pt.y}
                    r="1"
                    fill="#3b82f6"
                    />
                ))}
                </svg>
            </div>

            {/* X-Axis Labels */}
            <div className="absolute bottom-2 left-12 right-5 flex justify-between text-[12px] text-slate-500 pt-2">
                {xAxisChartLabels.map(label => (
                <span key={label}>{label}</span>
                ))}
            </div>
        </div>



          {/* Refined Legend - closer to chart, smaller icons/text, adjusted spacing */}
          <div className="mt-4 flex justify-center items-center space-x-3">
            <div className="flex items-center text-slate-500">
              <span className="inline-block w-2.5 h-2.5 rounded-full mr-1 border border-blue-500 bg-white"></span>
              <span className="text-xs">sales</span>
            </div>
            <div className="flex items-center text-slate-500">
              <span className="inline-block w-2.5 h-2.5 rounded-full mr-1 border border-purple-400 bg-white"></span>
              <span className="text-xs">orders</span>
            </div>
          </div>
        </div>

        {/* Right Panel: Quick Actions (assuming this part is okay) */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Quick Actions</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <FiFilePlus className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700 font-medium">Add New Order</span>
            </button>
            <button className="w-full flex items-center py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              <FiClock className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700 font-medium">Process Refund</span>
            </button>
            <button className="w-full flex items-center py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              <FiDollarSign className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700 font-medium">Generate Sales Report</span>
            </button>
          </div>
        </div>
      </div>
            {/* RECENT ORDERS TABLE */}
            <div className="bg-white mt-10 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-6">RECENT ORDERS</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="uppercase text-xs text-gray-700 bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">ORDER</th>
                <th scope="col" className="px-6 py-3">CUSTOMER</th>
                <th scope="col" className="px-6 py-3">DATE</th>
                <th scope="col" className="px-6 py-3">AMOUNT</th>
                <th scope="col" className="px-6 py-3">STATUS</th>
                <th scope="col" className="px-6 py-3">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { order: '#1023', customer: 'Ali Khan', date: '2025-05-10', amount: '$120.00', status: 'Pending' },
                { order: '#1022', customer: 'Fatima Raza', date: '2025-05-09', amount: '$320.50', status: 'Completed' },
                { order: '#1021', customer: 'Usman Javed', date: '2025-05-08', amount: '$89.00', status: 'Cancelled' },
              ].map((item, idx) => (
                <tr key={idx} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.order}</td>
                  <td className="px-6 py-4">{item.customer}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      item.status === 'Completed'
                        ? 'bg-green-100 text-green-600'
                        : item.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:underline text-xs">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Orders;