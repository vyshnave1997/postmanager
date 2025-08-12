import React from "react";
import { List, Card } from "antd";
import PostItem from "./PostItem";

export default function PostList({ posts, onDelete, onEdit }) {
  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={posts}
      renderItem={(post) => (
        <List.Item>
          <PostItem post={post} onDelete={onDelete} onEdit={onEdit} />
        </List.Item>
      )}
    />
  );
}
