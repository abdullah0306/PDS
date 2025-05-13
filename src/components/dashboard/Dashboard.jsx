'use client';

import { useEffect, useState } from 'react';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { FiHardDrive, FiUpload, FiShield, FiMessageSquare, FiFileText, FiBarChart2, FiMousePointer, FiShoppingBag, FiUserPlus, FiDollarSign, FiCreditCard, FiShoppingCart, FiUserCheck, FiFilePlus, FiFolder, FiMenu, FiChevronDown } from 'react-icons/fi';

const COLORS = ['#4318FF', '#6AD2FF', '#EFF4FB', '#4318FF'];

const revenueData = [
  { name: 'Jan', revenue: 32000, profit: 24000 },
  { name: 'Feb', revenue: 38000, profit: 28000 },
  { name: 'Mar', revenue: 35000, profit: 26000 },
  { name: 'Apr', revenue: 42000, profit: 32000 },
  { name: 'May', revenue: 40000, profit: 30000 },
  { name: 'Jun', revenue: 45000, profit: 34000 }
];

const dailyTrafficData = [
  { name: 'Mon', visits: 4000 },
  { name: 'Tue', visits: 3000 },
  { name: 'Wed', visits: 5000 },
  { name: 'Thu', visits: 4500 },
  { name: 'Fri', visits: 6000 },
  { name: 'Sat', visits: 5500 },
  { name: 'Sun', visits: 4800 }
];

const pieChartData = [
  { name: 'Your Files', value: 63 },
  { name: 'System', value: 25 },
  { name: 'Other', value: 12 }
];

const contactFormData = [
  { name: 'Jan', leads: 65, service: 45 },
  { name: 'Feb', leads: 85, service: 55 },
  { name: 'Mar', leads: 45, service: 35 },
  { name: 'Apr', leads: 75, service: 65 },
  { name: 'May', leads: 55, service: 45 },
  { name: 'Jun', leads: 85, service: 75 }
];

export default function DashboardPage() {

  const [stats, setStats] = useState({
    earnings: '$350.4',
    spend: '$642.39',
    sales: '$574.34',
    yourBalance: '$1,000',
    newTasks: '154',
    totalProjects: '2935',
    totalUsers: '32,983',
    clicks: '2.42m',
    salesAmount: '2,400$',
    newCustomers: '320'
  });

  return (
    <div className="space-y-6 bg-[#F4F7FE] min-h-screen p-4">
      {/* Header with User Menu */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <FiMenu className="h-6 w-6" />
        </button>
       
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
        {/* Earnings */}
        <div className="rounded-md bg-white px-4 py-2 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-medium text-gray-400">Earnings</p>
              <h3 className="mt-1 text-xl font-bold text-[#2B3674]">{stats.earnings} <span className="text-[#05CD99] text-[12px] font-medium">6%</span></h3>
            </div>
            <div className="rounded-full bg-[#4318FF]/10 p-3">
              <FiDollarSign className="h-6 w-6 text-[#4318FF]" />
            </div>
          </div>
         
        </div>

        {/* Spend this month */}
        <div className="rounded-md bg-white px-4 py-2 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-medium text-gray-400">Spend this month</p>
              <h3 className="mt-1 text-xl font-bold text-[#2B3674]">{stats.spendThisMonth} <span className="text-[#05CD99] text-[12px] font-medium">10%</span></h3>
            </div>
            <div className="rounded-full bg-[#4318FF]/10 p-3">
              <FiCreditCard className="h-6 w-6 text-[#4318FF]" />
            </div>
          </div>
         
        </div>

        {/* Sales */}
        <div className="rounded-md bg-white px-4 py-2 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-medium text-gray-400">Sales</p>
              <h3 className="mt-1 text-xl font-bold text-[#2B3674]">{stats.sales} <span className="text-[#05CD99] text-[12px] font-medium">5%</span></h3>
            </div>
            <div className="rounded-full bg-[#4318FF]/10 p-3">
              <FiShoppingCart className="h-6 w-6 text-[#4318FF]" />
            </div>
          </div>
        
        </div>
                        
        {/* Your Balance */}
        <div className="rounded-md bg-white px-4 py-2 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-medium text-gray-400">Your Balance</p>
              <h3 className="mt-1 text-xl font-bold text-[#2B3674]">{stats.yourBalance} <span className="text-[#05CD99] text-[12px] font-medium">+28%</span></h3>
            </div>
            <div className="rounded-full bg-[#4318FF]/10 p-3">
              <FiUserCheck  className="h-6 w-6 text-[#4318FF]" />
            </div>
          </div>
        </div>
      </div>

 

      {/* Active Users Stats and Contact Form */}
      <div className="grid grid-cols-1 gap-4 lg:flex">
        {/* Active Users Stats */}
        <div className="w-full lg:basis-[60%] 2xl:basis-[66.6667%] rounded-[20px] bg-white px-4 py-2 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2B3674] mb-4">Active Users Stats</h3>
          <p className="text-sm text-[#A3AED0] mb-6">Sales Summary</p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4">
            {/* Total Users */}
            <div className="rounded-xl bg-[#FFF8F0] p-4">
              <div className="mb-2 rounded-full bg-[#FFB547]/20 p-2 w-fit">
                <FiBarChart2 className="h-6 w-6 text-[#FFB547]" />
              </div>
              <h4 className="text-2xl font-bold text-[#2B3674]">{stats.totalUsers}</h4>
              <p className="text-sm text-[#A3AED0]">Total Users</p>
              <p className="text-xs text-[#FFB547] mt-1">+10% from yesterday</p>
            </div>
            {/* Clicks */}
            <div className="rounded-xl bg-[#F0FFF3] p-4">
              <div className="mb-2 rounded-full bg-[#05CD99]/20 p-2 w-fit">
                <FiMousePointer className="h-6 w-6 text-[#05CD99]" />
              </div>
              <h4 className="text-2xl font-bold text-[#2B3674]">{stats.clicks}</h4>
              <p className="text-sm text-[#A3AED0]">Clicks</p>
              <p className="text-xs text-[#05CD99] mt-1">+8% from yesterday</p>
            </div>
            {/* Sales */}
            <div className="rounded-xl bg-[#FFF0F9] p-4">
              <div className="mb-2 rounded-full bg-[#FF2E93]/20 p-2 w-fit">
                <FiShoppingBag className="h-6 w-6 text-[#FF2E93]" />
              </div>
              <h4 className="text-2xl font-bold text-[#2B3674]">{stats.salesAmount}</h4>
              <p className="text-sm text-[#A3AED0]">Sales</p>
              <p className="text-xs text-[#FF2E93] mt-1">+2% from yesterday</p>
            </div>
            {/* New Customer */}
            <div className="rounded-xl bg-[#F0F3FF] p-4">
              <div className="mb-2 rounded-full bg-[#4318FF]/20 p-2 w-fit">
                <FiUserPlus className="h-6 w-6 text-[#4318FF]" />
              </div>
              <h4 className="text-2xl font-bold text-[#2B3674]">{stats.newCustomers}</h4>
              <p className="text-sm text-[#A3AED0]">New Customer</p>
              <p className="text-xs text-[#4318FF] mt-1">+3% from yesterday</p>
            </div>
          </div>
        </div>

        {/* Contact Form Leads */}
        <div className="w-full lg:basis-[40%] 2xl:basis-[33.3333%] rounded-[20px] bg-white ps-0 pe-4 py-2 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2B3674] mb-4 ps-4">Contact Form Leads</h3>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1 min-w-0">
              <div className="h-[200px] w-[100%] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={contactFormData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#EDF2F7" vertical={false} />
                    <XAxis dataKey="name" stroke="#A0AEC0" tickLine={false} />
                    <YAxis stroke="#A0AEC0" tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Bar dataKey="leads" stackId="a" fill="#C6F6D5" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="service" stackId="a" fill="#68D391" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-4 mt-4 ps-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C6F6D5]" />
                  <span className="text-sm text-gray-500">Leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#68D391]" />
                  <span className="text-sm text-gray-500">Service</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[120px] xl:w-[150px] 2xl:w-[240px] bg-[#F7FAFC] p-2 rounded-xl space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E6FFFA] flex items-center justify-center">
                    <FiUserPlus className="h-5 w-5 text-[#2C7A7B]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 font-semibold">Weekly Leads</span>
                    <p className="text-sm text-gray-700">125 new leads this week</p>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF8FF] flex items-center justify-center">
                    <FiBarChart2 className="h-5 w-5 text-[#2B6CB0]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 font-semibold">Conversion Rate</span>
                    <p className="text-sm text-gray-700">32% conversion from leads</p>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F0FFF4] flex items-center justify-center">
                    <FiCreditCard className="h-5 w-5 text-[#2F855A]" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 font-semibold">Response Time</span>
                    <p className="text-sm text-gray-700">Average 2.5 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Analytics Charts */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* CMS Chart */}
        <div className="w-full lg:w-[40%] rounded-[20px] bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Content Management System (CMS)</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Blog Posts', value: 35 },
                { name: 'Posts', value: 10 },
                { name: 'Forms', value: 55 },
                { name: 'Pages', value: 20 }
              ]} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="name" stroke="#718096" tickLine={false} fontSize={12} />
                <YAxis stroke="#718096" tickLine={false} axisLine={false} domain={[0, 60]} ticks={[0, 15, 30, 45, 60]} fontSize={12} />
                <Tooltip />
                <Bar dataKey="value" fill="#4299E1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 bg-[#F8F9FF] p-4 rounded-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF8FF] flex items-center justify-center">
                <FiFileText className="h-5 w-5 text-[#3182CE]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2D3748]">Content Overview</p>
                <p className="text-sm text-gray-500">120 total content items managed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E6FFFA] flex items-center justify-center">
                <FiMessageSquare className="h-5 w-5 text-[#319795]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2D3748]">Active Forms</p>
                <p className="text-sm text-gray-500">28 forms with 1.2k submissions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Gateway Chart */}
        <div className="w-full lg:w-[30%] rounded-[20px] bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Payment Gateway Integration</h3>
          <div className="h-[250px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-[#4299E1] p-4">
                <FiCreditCard className="h-6 w-6 text-white" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Stripe', value: 45 },
                    { name: 'PayPal', value: 35 },
                    { name: 'Other', value: 20 }
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  startAngle={90}
                  endAngle={450}
                  paddingAngle={2}
                  dataKey="value"
                >
                  <Cell fill="#4299E1" />
                  <Cell fill="#805AD5" />
                  <Cell fill="#F687B3" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-end gap-4 mt-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#4299E1] font-medium">Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#805AD5] font-medium">PayPal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#F687B3] font-medium">Other</span>
            </div>
          </div>
          <div className="bg-[#F8F9FF] p-2 rounded-xl space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#EBF8FF] flex items-center justify-center">
                <FiDollarSign className="h-5 w-5 text-[#3182CE]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2D3748]">Total Transactions</p>
                <p className="text-sm text-gray-500">$524,890 processed</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#E9D8FD] flex items-center justify-center">
                <FiShield className="h-5 w-5 text-[#6B46C1]" width={38}/>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2D3748]">Success Rate</p>
                <p className="text-sm text-gray-500">99.8% successful transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#FED7E2] flex items-center justify-center">
                <FiDollarSign className="h-5 w-5 text-[#B83280]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#2D3748]">Average Transaction</p>
                <p className="text-sm text-gray-500">$156 per transaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Portal Chart */}
        <div className="w-full lg:w-[40%] rounded-[20px] bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Client Portal for Data Uploads</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Documents', value: 50 },
                { name: 'Images', value: 35 },
                { name: 'Videos', value: 20 },
                { name: 'Other', value: 12 }
              ]} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="name" stroke="#718096" tickLine={false} fontSize={12} />
                <YAxis stroke="#718096" tickLine={false} axisLine={false} domain={[0, 60]} ticks={[0, 15, 30, 45, 60]} fontSize={12} />
                <Tooltip />
                <Bar dataKey="value" fill="#0BC5EA" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-[#F8F9FF] p-4 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E6FFFA] flex items-center justify-center">
                  <FiUpload className="h-5 w-5 text-[#319795]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2D3748]">Total Uploads</p>
                  <p className="text-sm text-gray-500">107 files this month</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EBF8FF] flex items-center justify-center">
                  <FiHardDrive className="h-5 w-5 text-[#3182CE]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2D3748]">Storage Used</p>
                  <p className="text-sm text-gray-500">1.2 GB of 5 GB</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-[#2D3748]">Storage Usage</span>
                <span className="text-sm text-[#2D3748]">24%</span>
              </div>
              <div className="h-2 bg-[#EDF2F7] rounded-full overflow-hidden">
                <div className="h-full w-[24%] bg-[#4299E1] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sales & Transactions Management */}
      <div className="rounded-[20px] bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-6">Sales & Transactions Management</h3>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={[
                { name: 'Jan', sales: 30, revenue: 25 },
                { name: 'Feb', sales: 45, revenue: 40 },
                { name: 'Mar', sales: 35, revenue: 38 },
                { name: 'Apr', sales: 55, revenue: 50 },
                { name: 'May', sales: 40, revenue: 45 },
                { name: 'Jun', sales: 65, revenue: 60 }
              ]}
              margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
              <XAxis dataKey="name" stroke="#718096" tickLine={false} fontSize={12} />
              <YAxis stroke="#718096" tickLine={false} axisLine={false} fontSize={12} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#ED8936"
                strokeWidth={3}
                dot={{ fill: '#ED8936', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#4299E1"
                strokeWidth={3}
                dot={{ fill: '#4299E1', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-[#F8F9FF] p-4 rounded-xl mt-6 grid grid-cols-4 gap-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FED7D7] flex items-center justify-center">
              <FiShoppingBag className="h-5 w-5 text-[#E53E3E]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2D3748]">Monthly Sales</p>
              <p className="text-sm text-gray-500">$28,000 in June</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FEEBC8] flex items-center justify-center">
              <FiBarChart2 className="h-5 w-5 text-[#DD6B20]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2D3748]">Growth</p>
              <p className="text-sm text-gray-500">+15% from last month</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FED7E2] flex items-center justify-center">
              <FiCreditCard className="h-5 w-5 text-[#B83280]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2D3748]">Refund Rate</p>
              <p className="text-sm text-gray-500">1.2% of total sales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
