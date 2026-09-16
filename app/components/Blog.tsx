import React from "react";
import Link from "next/link";

import type { Blogs } from "../blogs/page";
interface BlogPostProps {
  post: Blogs;
}
const Blog = ({ post }: BlogPostProps) => {
  const { id, title } = post;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link href={`/blogs/${id}`}>
            <button className="btn btn-primary">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
