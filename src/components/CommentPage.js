import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { useParams } from 'react-router-dom';

export default function CommentPage() {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [image, setImage] = useState(null); 
  const { img_id } = useParams();

  const fetchImageById = async (id) => {
    // Replace with your actual API call
    const mockImages = {
      1: { id: 1, url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/tiger_shroff_0.png?size=690:388', title: 'Sample Image 1' },
      2: { id: 2, url: 'https://via.placeholder.com/800x400', title: 'Sample Image 2' },
    };
    return mockImages[id];
  };

  useEffect(() => {
    fetchImageById(img_id).then((img) => setImage(img));
  }, [img_id]);

  const handleComment = (content, parentId) => {
    const newComment = {
      id: Date.now(),
      content,
      username: user?.username || 'Anonymous',
      timestamp: new Date().toISOString(),
      replies: [],
    };

    if (parentId) {
      setComments(addReply(comments, parentId, newComment));
    } else {
      setComments([newComment, ...comments]);
    }
  };

  const addReply = (comments, parentId, newReply) => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        return { ...comment, replies: [newReply, ...comment.replies] };
      } else if (comment.replies.length > 0) {
        return { ...comment, replies: addReply(comment.replies, parentId, newReply) };
      }
      return comment;
    });
  };

  return (
    <div className="min-h-screen bg-slate-200">
      <div className="flex justify-center items-center pt-14">
        <div className="w-[800px]">
          {image ? (
            <div>
              <img src={image.url} alt={image.title} className="w-full rounded-lg shadow-lg" />
              <h2 className="text-center text-xl font-semibold mt-4">{image.title}</h2>
            </div>
          ) : (
            <p>Loading image...</p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="w-[800px]">
          <CommentForm onSubmit={handleComment} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <CommentList comments={comments} onReply={handleComment} />
      </div>
    </div>
  );
}
