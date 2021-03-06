import React, { useState } from "react";
import {
  Avatar,
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  notification,
} from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import { useDropzone } from "react-dropzone";
import { signUpAdminApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import "./AddUserForm.scss";

export default function EditUserForm(props) {
  const { setIsVisibleModal, setReloadUsers } = props;
  const [userData, setUserData] = useState({});

  const addUser = () => {
    if (
      !userData.name ||
      !userData.lastname ||
      !userData.role ||
      !userData.email ||
      !userData.password ||
      !userData.repeatpassword
    ) {
      notification["error"]({ message: "Todos los campos son obligatorios." });
    } else if (userData.password !== userData.repeatpassword) {
      notification["error"]({ message: "Las contraseñas deben ser iguales." });
    } else {
      const accessToken = getAccessTokenApi();
      signUpAdminApi(accessToken, userData)
        .then((response) => {
          notification["success"]({ message: response });
          setIsVisibleModal(false);
          setReloadUsers(true);
          setUserData({});
        })
        .catch((err) => {
          notification["error"]({ message: err });
        });
    }
  };

  return (
    <div className="add-user-form">
      <AddForm
        userData={userData}
        setUserData={setUserData}
        addUser={addUser}
      ></AddForm>
    </div>
  );
}

function AddForm(props) {
  const { userData, setUserData, addUser } = props;
  const { Option } = Select;
  return (
    <Form className="form-add" onFinish={addUser}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined></UserOutlined>}
              placeholder="Nombre"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            ></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined></UserOutlined>}
              placeholder="Apellidos"
              value={userData.lastname}
              onChange={(e) =>
                setUserData({ ...userData, lastname: e.target.value })
              }
            ></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<MailOutlined></MailOutlined>}
              placeholder="Correo electronico"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            ></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Selecciona un rol"
              onChange={(e) => setUserData({ ...userData, role: e })}
              value={userData.role}
            >
              <Option value="admin">Administrador</Option>
              <Option value="editor">Editor</Option>
              <Option value="reviewer">Revisor</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<LockOutlined></LockOutlined>}
              type="password"
              placeholder="Contraseña"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            ></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          {" "}
          <Form.Item>
            <Input
              prefix={<LockOutlined></LockOutlined>}
              type="password"
              placeholder="Repetir contraseña"
              onChange={(e) =>
                setUserData({ ...userData, repeatpassword: e.target.value })
              }
            ></Input>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Usuario
        </Button>
      </Form.Item>
    </Form>
  );
}
