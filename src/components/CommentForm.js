import React, { useState } from 'react';

export default function CommentForm({ parentId, onSubmit }) {
  const [content, setContent] = useState('');
  const [error, setError] = useState(''); // State for error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length >= 3 && content.length <= 200) {
      onSubmit(content, parentId); // Pass content and parentId to parent
      setContent(''); // Clear input
      setError(''); // Reset error state
    } else {
      setError('Content must be between 3 and 200 characters.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            {parentId ? 'Reply' : 'Comment'}
          </label>
          <textarea
            id="content"
            name="content"
            rows={3}
            required
            minLength={3}
            maxLength={200}
            className="mt-1 p-1 block w-full rounded-md border-gray-300 bg-slate-200 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setError(''); // Clear error while typing
            }}
          />
          <p className={`mt-2 text-sm ${content.length > 200 ? 'text-red-500' : 'text-gray-500'}`}>
            {200 - content.length} characters remaining
          </p>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
        <button
          type="submit"
          className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {parentId ? 'Reply' : 'Post Comment'}
        </button>
      </form>
    </div>
  );
}
