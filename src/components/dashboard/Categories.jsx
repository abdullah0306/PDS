'use client';

import { useRouter } from 'next/navigation';
import {
  FiArrowLeft,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiArrowUp,
  FiArrowDown,
} from 'react-icons/fi';
import { useState } from 'react';

const Categories = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    slug: '',
    description: '',
  });

  // Sample category data
  const categories = [
    {
      id: 1,
      name: 'Tutorials',
      slug: 'tutorials',
      posts: 5,
      description: 'Step-by-step guides and tutorials',
    },
    {
      id: 2,
      name: 'Strategy',
      slug: 'strategy',
      posts: 3,
      description: 'Content marketing strategies',
    },
    {
      id: 3,
      name: 'SEO',
      slug: 'seo',
      posts: 2,
      description: 'Search engine optimization tips',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FE]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <FiArrowLeft
          className="text-gray-600 hover:text-black cursor-pointer"
          onClick={() => router.push('/dashboard/content')}
        />
        <h2 className="text-2xl font-semibold text-gray-700">Categories</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Add New Category Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm col-span-1">
          <h3 className="text-md font-semibold mb-4">Add New Category</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Category name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input
              type="text"
              placeholder="category-slug"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
            />
            <p className="text-xs text-gray-500 mt-1">
              The "slug" is the URL-friendly version of the name.
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              placeholder="Category description (optional)"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            ></textarea>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm flex items-center justify-center gap-2 bg-blue hover:bg-blue-700">
            <FiPlus /> Add Category
          </button>
        </div>

        {/* Right: Categories List */}
        <div className="bg-white p-6 rounded-xl shadow-sm col-span-1 md:col-span-2">
          <h3 className="text-md font-semibold mb-4">Categories</h3>

          <div className="space-y-4">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="p-4 border rounded-md hover:shadow-sm transition flex justify-between items-start"
              >
                <div>
                  <h4 className="font-semibold">{cat.name}</h4>
                  <p className="text-sm text-gray-500 mb-1">
                    Slug: {cat.slug} • {cat.posts} {cat.posts === 1 ? 'post' : 'posts'}
                  </p>
                  <p className="text-sm text-gray-600">{cat.description}</p>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <button className="text-gray-500 hover:text-gray-800">
                    <FiArrowUp />
                  </button>
                  <button className="text-gray-500 hover:text-gray-800">
                    <FiArrowDown />
                  </button>
                  <button className="text-blue-600 hover:text-blue-800">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
