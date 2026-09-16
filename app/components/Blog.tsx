import React from 'react';

import type { Blogs } from '../blogs/page';
interface BlogPostProps {
  post: Blogs;
}
const Blog = ({post}: BlogPostProps) => {

  const {title, description} = post;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;