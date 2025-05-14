import React from 'react';
import { FiFileText, FiGrid, FiUsers, FiClock } from 'react-icons/fi';
import Link from 'next/link';

const statsData = [
  { title: 'Total Posts', value: 6, icon: <FiFileText className="text-white-600" /> },
  { title: 'Categories', value: 8, icon: <FiGrid className="text-white-600" /> },
  { title: 'Users', value: 126, icon: <FiUsers className="text-white-600" /> },
  { title: 'Published Today', value: 4, icon: <FiClock className="text-white-600" /> },
];

const recentPosts = [
  {
    title: 'Getting Started with Content Management',
    category: 'Tutorials',
    date: '2025-03-15',
    status: 'Published',
  },
  {
    title: 'Advanced Content Strategies',
    category: 'Strategy',
    date: '2025-03-10',
    status: 'Published',
  },
  {
    title: 'Content SEO Best Practices',
    category: 'SEO',
    date: '2025-03-05',
    status: 'Draft',
  },
  {
    title: 'The Future of Content Creation',
    category: 'Trends',
    date: '2025-02-28',
    status: 'Published',
  },
  {
    title: 'Content Analytics and Measurement',
    category: 'Analytics',
    date: '2025-02-20',
    status: 'Published',
  },
];

const recentActivity = [
  {
    icon: '📝',
    text: 'New post "10 Tips for Better Content" was published',
    time: '2 hours ago',
  },
  {
    icon: '💬',
    text: 'New comment on "Getting Started Guide"',
    time: '4 hours ago',
  },
  {
    icon: '✏️',
    text: 'Post "Email Marketing Trends" was updated',
    time: 'Yesterday',
  },
];

const performance = [
  { label: 'Page Views', value: '12.4k', percent: 90, color: 'bg-blue-500' },
  { label: 'Engagement Rate', value: '4.3%', percent: 43, color: 'bg-green-500' },
  { label: 'Bounce Rate', value: '24%', percent: 24, color: 'bg-yellow-500' },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-[#F4F7FE]">
     <div className="flex justify-between items-center p-6">
      <h2 className="text-2xl font-semibold text-gray-700">CMS</h2>
      <div>
        <Link key="/dashboard/create-post" href="/dashboard/categories">
            <button className="bg-white-600 text-blue px-4 py-2 rounded-lg text-[14px]">Add New Category</button>
         </Link>
         <Link key="/dashboard/create-post" href="/dashboard/create-post">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg bg-blue text-[14px]">Add New Post</button>
         </Link>
      </div>
     </div>
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statsData.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-3 flex items-center justify-start shadow-sm">
            <div className="bg-[#6366f1] text-white p-3 rounded-lg text-xl">{stat.icon}</div>
            <div className='ml-4'>
              <h4 className="text-sm text-gray-500">{stat.title}</h4>
              <p className="text-2xl font-bold text-gray-700 mt-0">{stat.value}</p>
            </div>
            
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Posts</h3>
        <div>
          {recentPosts.map((post, idx) => (
            <div key={idx} className="flex justify-between items-center border-b py-3">
              <div>
                <h4 className="font-medium text-gray-800">{post.title}</h4>
                <p className="text-sm text-gray-500">{post.category} &nbsp;•&nbsp; {post.date} &nbsp;&nbsp;
                {post.status === 'Published' ? (
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Published</span>
                ) : (
                  <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded">Draft</span>
                )}
                </p>
              </div>
              <div className="flex items-center">
                <button className="text-blue-600 text-sm text-blue">Edit</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right mt-4">
          <button className="text-sm text-blue-500 hover:underline text-blue">View All Posts</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
          <ul className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <li key={idx} className="flex gap-3 items-start text-sm text-gray-600">
                <span className="text-xl">{activity.icon}</span>
                <div>
                  <p>{activity.text}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Performance */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Performance</h3>
          <div className="space-y-6">
            {performance.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="text-gray-800 font-medium">{item.value}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
