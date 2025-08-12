import React, { useEffect, useState } from "react";
import { Typography, Spin, Divider } from "antd";
import { ToastContainer, toast } from "react-toastify";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostEditForm from "./PostEditForm";

const { Title } = Typography;
const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function PostManager() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  // GET
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data.slice(0, 10));
      toast.success("✅ Posts loaded successfully");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  // POST
  const addPost = async (post) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      const newPost = await res.json();
      setPosts([newPost, ...posts]);
      toast.success("✅ Post added successfully");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add post");
    }
  };

  // PUT
  const updatePost = async (id, updatedPost) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });
      const data = await res.json();
      setPosts(posts.map((p) => (p.id === id ? data : p)));
      setEditPost(null);
      toast.success("✅ Post updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to update post");
    }
  };

  // DELETE
  const deletePost = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setPosts(posts.filter((p) => p.id !== id));
      toast.success("🗑️ Post deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to delete post");
    }
  };

  return (
    <div style={{ padding: 24, maxWidth: 800, margin: "0 auto" }}>
     <Title
  level={1}
  style={{
    color: "white",
    fontSize: "3rem", // bigger text
    fontFamily: "'Poppins', sans-serif", // custom font
    fontWeight: "bold",
    textAlign: "center",
  }}
>
  📌 Post Manager
</Title>

      <Divider />
      {editPost ? (
        <PostEditForm
          post={editPost}
          onUpdate={updatePost}
          onCancel={() => setEditPost(null)}
        />
      ) : (
        <PostForm onAdd={addPost} />
      )}
      <Divider />
      {loading ? (
        <Spin size="large" />
      ) : (
        <PostList
          posts={posts}
          onDelete={deletePost}
          onEdit={(post) => setEditPost(post)}
        />
      )}

      {/* Toast container must be in the root component */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
