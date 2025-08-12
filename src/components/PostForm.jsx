import React from "react";
import { Form, Input, Button, Space } from "antd";

export default function PostForm({ onAdd }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onAdd({ title: values.title, body: values.body, userId: 1 });
    form.resetFields();
  };

  return (
    <Form form={form} layout="inline" onFinish={onFinish}>
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
        <Button type="primary" htmlType="submit">
          Add Post
        </Button>
      </Form.Item>
    </Form>
  );
}
