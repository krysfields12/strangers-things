import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/posts"

  const Posts = ({ posts }) => {

    return (
        posts && posts.map((post) => {
            return (
                <div key={post._id}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <h5>{post.price}</h5>
                </div>
            )
        })
    )}

export default Posts