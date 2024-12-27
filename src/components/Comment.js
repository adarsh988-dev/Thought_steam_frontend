import React, { useState } from 'react';
import CommentForm from './CommentForm';

export default function Comment({ id, content, username, timestamp, replies, onReply }) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="border-l-2 border-gray-200 mb-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="mt-2 text-sm text-gray-600">
          <span className="font-semibold">{username}</span> • {timestamp}
        </div>
        <p className="text-gray-800">{content}</p>
        <button
          onClick={() => setShowReplyForm((prev) => !prev)}
          className="mt-2 text-sm text-indigo-600 hover:text-indigo-800"
        >
          {showReplyForm ? 'Cancel' : 'Reply'}
        </button>
        {showReplyForm && (
          <div className="mt-4">
            <CommentForm
              parentId={id}
              onSubmit={(content, parentId) => {
                onReply(content, parentId); 
                setShowReplyForm(false); 
              }}
            />
          </div>
        )}
      </div>
      {replies.length > 0 && (
        <div className="mt-4 ml-4">
          <button
            onClick={() => setShowReplies((prev) => !prev)}
            className="text-sm text-indigo-600 hover:text-indigo-800"
          >
            {showReplies ? 'Hide Replies' : `Show Replies (${replies.length})`}
          </button>
          {showReplies && (
            <div className="mt-4">
              {replies.map((reply) => (
                <Comment key={reply.id} {...reply} onReply={onReply} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
