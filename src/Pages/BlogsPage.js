import React from "react";
import Tittle from "../Components/Tittle";
import allBlogs from "../Components/allBlogs";

function BlogsPage() {
  return (
    <div>
      <div className="b-title">
        <Tittle title={"Experiences"} span={"Experiences"} />
      </div>
      <div className="BlogsPage">
        {allBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a className="blog-link">{blog.title}</a>
                <br />
                <a className="blog-subtitle">{blog.subtitle}</a>
                <br />
                <br />
                <a className="blog-para">{blog.para}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
