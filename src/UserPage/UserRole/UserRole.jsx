import React, { useState } from 'react';
import { Button, Modal, Form, Input, Table } from 'antd';
import { number } from 'prop-types';

const UserRole = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {

        // Update the table data with the new form data
        setTableData([...tableData, values]);

        // Close the modal
        setModalOpen(false);

        // Reset the form fields
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };

  const columns = [
    {
      title: 'Sl. No.',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'UserRole',
      dataIndex: 'UserName',
      key: 'UserName',
    },
    {
      title: 'Status',
      dataIndex: 'Active',
      key: 'Active',
    },
    {
      title: 'Action',
      dataIndex: 'De-activate',
      key: 'De-activate',
    },
  ];

 

  return (
    <>
   
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Add User-Role
      </Button>
      <Modal
        title="Add UserRole"
        centered
        open={modalOpen}
        maskClosable={false}
        keyboard={false}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Form form={form}>
          <Form.Item
            name="userRole"
            label="User Role"
            rules={[{ required: true, message: 'Please enter the UserRole' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please enter the Category' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      {tableData.length > 0 && (
        <div>
          <h2>Table Data:</h2>
          <Table dataSource={tableData} columns={columns} rowKey="UserRole" />
        
        </div>
      )}
    </>
  );
};

export default UserRole;
