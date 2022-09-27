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
let dateObj = new Date();
var today = new Date("2021-10-06");
var month = today.toLocaleString("default", { month: "short" });
let year = dateObj.getUTCFullYear();

export const [component1, component2, component3, component4, component5] = [
  <div>
    <Article
      imgUrl={blog01}
      date={month + " " + year}
      title="Anti-Matter's Web and Mobile App Development service. Let us explore"
      blogs={blog1.name}
    />
  </div>,
  <div>
    <Article
      imgUrl={blog02}
      date={month + " " + year}
      title="Anti-Matter and AI is the future. Let us explore how it is?"
      blogs={blog2.name}
    />
  </div>,
  <div>
    <Article
      imgUrl={blog03}
      date={month + " " + year}
      title="Anti-Matter's IT Solutions"
      blogs={blog3.name}
    />
  </div>,
  <div>
    <Article
      imgUrl={blog04}
      date={month + " " + year}
      title="Anti-Matter and Block-Chain can bring new revolution. Let us explore how it is?"
      blogs={blog4.name}
    />
  </div>,
  <div>
    <Article
      imgUrl={blog05}
      date={month + " " + year}
      title="Anti-Matter's Digital Marketing Services"
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
