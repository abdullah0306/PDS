
'use client';
import { useRouter } from 'next/navigation';
import { FiArrowLeft, FiBold, FiUnderline, FiList, FiImage, FiLink, FiTag } from 'react-icons/fi';

const CreatePost = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F4F7FE] ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <FiArrowLeft
            className="text-gray-600 hover:text-black cursor-pointer"
            onClick={() => router.push('/dashboard/content')} // navigate back to CMS page
          />
          <h2 className="text-xl font-semibold text-gray-700">Create New Post</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100 text-sm">
            Save as Draft
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm bg-blue">
            Publish
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Left Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="mb-4">
            <label className="text-sm text-gray-600 font-medium">Post Title</label>
            <input
              type="text"
              placeholder="Enter post title"
              className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600 font-medium">Excerpt</label>
            <input
              type="text"
              placeholder="Brief summary of your post"
              className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600 font-medium">Content</label>
            <div className="border border-gray-200 rounded-md mt-1">
              {/* Toolbar */}
              <div className="flex items-center gap-4 px-3 py-2 border-b text-gray-500 text-sm">
                <FiBold className="cursor-pointer hover:text-gray-700" />
                <FiUnderline className="cursor-pointer hover:text-gray-700" />
                <FiList className="cursor-pointer hover:text-gray-700" />
                <FiImage className="cursor-pointer hover:text-gray-700" />
                <FiLink className="cursor-pointer hover:text-gray-700" />
              </div>
              {/* Textarea */}
              <textarea
                placeholder="Write your post content here..."
                rows={10}
                className="w-full px-3 py-3 text-sm resize-none focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="space-y-6">
          {/* Featured Image */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Featured Image</h3>
            <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
              <p className="text-gray-400 text-sm mb-1">Drag & drop an image or</p>
              <p className="text-blue-600 text-sm cursor-pointer">Browse files</p>
            </div>
            <input
              type="text"
              placeholder="Or enter image URL"
              className="mt-3 w-full px-3 py-2 border border-gray-200 rounded-md text-sm"
            />
          </div>

          {/* Category */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Category</h3>
            <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm">
              <option>Select a category</option>
              <option>Tutorials</option>
              <option>Strategy</option>
              <option>SEO</option>
            </select>
          </div>

          {/* Tags */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Tags</h3>
            <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Add a tag..."
                className="flex-1 px-3 py-2 text-sm focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-3 py-2">
                <FiTag />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
