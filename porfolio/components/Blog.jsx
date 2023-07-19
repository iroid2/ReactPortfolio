import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { posts } from "@/blogs";
export default function Blog() {
  console.log(posts);
  return (
    <div className="blogs-container globContainerPadding">
      <Heading title={"BLOGS"} />
      <div className="blogs-section">
        <div className="blog">
          <div className="blog-thumbnail">
            <Image src={"/images/about.jpg"} alt="" width={200} height={100} />
          </div>
          <div className="blog-details">
            <h1>How to get into Programming</h1>
            <h2>Basics on what you have to consider</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus libero veritatis magnam obcaecati! Quae tenetur
              blanditiis deserunt accusamus perspiciatis quidem corrupti
              veritatis repudiandae asperiores fuga. Repellat, sunt ipsum!
            </h4>
          </div>
        </div>
        <div className="blog">
          <div className="blog-thumbnail">
            <Image src={"/images/about.jpg"} alt="" width={200} height={100} />
          </div>
          <div className="blog-details">
            <h1>How to get into Programming</h1>
            <h2>Basics on what you have to consider</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus libero veritatis magnam obcaecati! Quae tenetur
              blanditiis deserunt accusamus perspiciatis quidem corrupti
              veritatis repudiandae asperiores fuga. Repellat, sunt ipsum!
            </h4>
          </div>
        </div>
        <div className="blog">
          <div className="blog-thumbnail">
            <Image src={"/images/about.jpg"} alt="" width={200} height={100} />
          </div>
          <div className="blog-details">
            <h1>How to get into Programming</h1>
            <h2>Basics on what you have to consider</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus libero veritatis magnam obcaecati! Quae tenetur
              blanditiis deserunt accusamus perspiciatis quidem corrupti
              veritatis repudiandae asperiores fuga. Repellat, sunt ipsum!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
