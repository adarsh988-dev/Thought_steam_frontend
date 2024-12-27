import React from 'react'
import Comment from './Comment'

export default function CommentList({ comments, onReply }) {
  return (
        <div className="w-[800px]">
            {comments.map((comment) => (
                <Comment key={comment.id} {...comment} onReply={onReply} />
            ))}
        </div>
  )
}

