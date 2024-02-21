import { useEffect, useState } from "react";

interface Comment {
  id: number;
  attributes: {
    title: string;
    posted: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
const BlogListView = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/comments/")
      .then((response) => response.json())
      .then((data) => setComments(data.data));
  }, []);
  console.log(comments[0]);
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.attributes.title}</h3>
          <p>{comment.attributes.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogListView;
