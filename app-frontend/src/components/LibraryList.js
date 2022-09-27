// import { Link } from "react-router-dom";

// const BlogList = ({ blogs }) => {
//   return (
//     <>
//       {blogs.map((blog) => (
//         <Link key={blog.name} to={`/${blog.name}`}>
//           <h3>{blog.title}</h3>
//           <p>{blog.content[0].substring(0, 9)}......</p>
//         </Link>
//       ))}
//     </>
//   );
// };

// export default BlogList;
import blogs from "../containers/pages/blog-content";
import Article from "./article/Article";
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
} from "../containers/blog/imports";

const [blog1, blog2, blog3, blog4, blog5] = blogs;

export const [component1, component2, component3, component4, component5] = [
  <div>
    <Article
      imgUrl={blog01}
      date="Sep 09, 2022"
      title="Anti-Matter and Code Automation. Let us explore how it is?"
      blogs={blog1.name}
    />
  </div>,
  <div>
    <Article
      imgUrl={blog02}
      date="Sep 09, 2022"
      title="Anti-Matter and AI is the future. Let us explore how it is?"
      blogs={blog2.name}
    />
  </div>,
  <div>
    <Article
      imgUrl={blog03}
      date="Sep 09, 2022"
      title="Anti-Matter suggesting  AI. Let us explore how it is?"
      blogs={blog3.name}
    />
  </div>,
  <div>
    <Article
      imgUrl={blog04}
      date="Sep 09, 2022"
      title="Anti-Matter and Block-Chain can bring new revolution. Let us explore how it is?"
      blogs={blog4.name}
    />
  </div>,
  <div>
    <Article
      imgUrl={blog05}
      date="Sep 09, 2022"
      title="Anti-Matter and Open  AI is the future. Let us explore how it is?"
      blogs={blog5.name}
    />
  </div>,
];

const LibraryList = [
  {
    name: "Blog-1",
    content: component1,
  },
  {
    name: "Blog-2",
    content: component2,
  },
  {
    name: "Blog-3",
    content: component3,
  },
  {
    name: "Blog-4",
    content: component4,
  },
  {
    name: "Blog-5",
    content: component5,
  },
];

export default LibraryList;
