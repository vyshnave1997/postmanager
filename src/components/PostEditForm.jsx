import React from "react";
import { Form, Input, Button, Space } from "antd";

export default function PostEditForm({ post, onUpdate, onCancel }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onUpdate(post.id, { ...post, title: values.title, body: values.body });
  };

  return (
    <Form
      form={form}
      layout="inline"
      initialValues={{ title: post.title, body: post.body }}
      onFinish={onFinish}
    >
      <Form.Item
        name="title"
        rules={[{ required: true, message: "Please enter title" }]}
      >
        <Input placeholder="Post Title" />
      </Form.Item>

      <Form.Item
        name="body"
        rules={[{ required: true, message: "Please enter body" }]}
      >
        <Input placeholder="Post Body" />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
