import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Card,
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Checkbox,
  Select,
  Upload
} from "antd";

const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AppForm = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: '700px',
          boxShadow: '0 35px 45px rgba(0, 0, 0, 0.35)',
        }}
      >
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
          layout="horizontal"
          style={{ width: '100%' }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Application Form</h2>
          <Form.Item
            label="Salutation"
            name="salutation"
            rules={[{ required: true, message: 'Please select a salutation' }]}
          >
            <Radio.Group>
              <Radio value="Mister">Mr.</Radio>
              <Radio value="Mistress">Mrs.</Radio>
              <Radio value="Miss">Ms</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please enter your first name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: 'Please enter your last name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Select>
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Location" name="location">
            <Cascader
              options={[
                {
                  value: "Jamshedpur",
                  label: "Jsr",
                  children: [
                    {
                      value: "Jharkhand",
                      label: "JH"
                    }
                  ]
                }
              ]}
            />
          </Form.Item>
          <Form.Item label="D.O.B" name="dob">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Select Age" name="age">
            <InputNumber />
          </Form.Item>
          <Form.Item label="About Yourself" name="about">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Upload"
            name="upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
            name="details"
            valuePropName="checked"
            wrapperCol={{offset: 6,span: 18}}>
            <Checkbox>All Details Filled</Checkbox>
          </Form.Item>
          <Form.Item
            name="t&c"
            valuePropName="checked"
            wrapperCol={{offset: 6,span: 18}}>
            <Checkbox>Accept All Terms & Conditions</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AppForm;
