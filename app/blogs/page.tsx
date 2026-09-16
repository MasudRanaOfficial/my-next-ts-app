import React from "react";
import Blog from "../components/Blog";

const blogsData: Blogs[] = [
  {
    id: 1,
    title: "What Is JavaScript?",
    description:
      "A beginner-friendly introduction to JavaScript and how it makes websites interactive.",
    author: "Masud Rana",
    category: "JavaScript",
    date: "2026-09-10",
    image: "https://example.com/javascript.jpg",
  },
  {
    id: 2,
    title: "Understanding React Components",
    description:
      "Learn what React components are and how they help you build reusable UI.",
    author: "John Doe",
    category: "React",
    date: "2026-09-09",
    image: "https://example.com/react.jpg",
  },
  {
    id: 3,
    title: "CSS Flexbox Explained",
    description:
      "A simple guide to using CSS Flexbox for creating flexible and responsive layouts.",
    author: "Sarah Smith",
    category: "CSS",
    date: "2026-09-08",
    image: "https://example.com/flexbox.jpg",
  },
  {
    id: 4,
    title: "Getting Started with TypeScript",
    description:
      "Discover how TypeScript adds type safety and makes JavaScript development easier.",
    author: "Alex Johnson",
    category: "TypeScript",
    date: "2026-09-07",
    image: "https://example.com/typescript.jpg",
  },
  {
    id: 5,
    title: "How Does the Internet Work?",
    description:
      "Understand what happens behind the scenes when you visit a website.",
    author: "Michael Brown",
    category: "Web Development",
    date: "2026-09-06",
    image: "https://example.com/internet.jpg",
  },
  {
    id: 6,
    title: "Beginner's Guide to Git and GitHub",
    description:
      "Learn the basics of Git and GitHub and how developers manage their code.",
    author: "Emily Wilson",
    category: "Git",
    date: "2026-09-05",
    image: "https://example.com/github.jpg",
  },
  {
    id: 7,
    title: "Responsive Web Design Basics",
    description:
      "Learn how to make websites look great on phones, tablets, and desktop screens.",
    author: "David Lee",
    category: "Web Design",
    date: "2026-09-04",
    image: "https://example.com/responsive.jpg",
  },
];

export interface Blogs {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  date: string;
  image: string;
}

const BlogsPage = () => {
  return (
    <div>
      <h2>Our Blogs</h2>
      {blogsData.map((post) => (
        <Blog key={post.id} post={post}></Blog>
      ))}
    </div>
  );
};

export default BlogsPage;
