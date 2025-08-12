import React from "react";
import { Card, Button, Space } from "antd";

export default function PostItem({ post, onDelete, onEdit }) {
  return (
    <Card
      title={post.title}
      extra={
        <Space>
          <Button size="small" onClick={() => onEdit(post)}>
            Edit
          </Button>
          <Button danger size="small" onClick={() => onDelete(post.id)}>
            Delete
          </Button>
        </Space>
      }
    >
      {post.body}
    </Card>
  );
}
