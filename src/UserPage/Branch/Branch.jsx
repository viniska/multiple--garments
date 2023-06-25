import React, { useState } from 'react';
import { Button, Modal, Form, Input, Table } from 'antd';

const Branch = () => {
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
      title: 'Branch Name',
      dataIndex: 'branchName',
      key: 'branchName',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Add Branch
      </Button>
      <Modal
        title="Add Branches"
        centered
        open={modalOpen}
        maskClosable={false}
        keyboard={false}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="accept" type="primary" onClick={handleOk}>
            Accept
          </Button>,
        ]}
      >
        <Form form={form}>
          <Form.Item
            name="branchName"
            label="Branch Name"
            rules={[{ required: true, message: 'Please enter the branch name' }]}
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
          <Table dataSource={tableData} columns={columns} rowKey="branchName" />
        </div>
      )}
    </>
  );
};

export default Branch;
