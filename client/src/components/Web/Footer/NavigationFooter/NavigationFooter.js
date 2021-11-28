import React from "react";
import { Col, Row } from "antd";
import {
  BookOutlined,
  CodeOutlined,
  DatabaseOutlined,
  RightOutlined,
  HddOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <>
      <Row className="navigation-footer">
        <Col>
          <h3>Navigation</h3>
        </Col>
      </Row>
      <Row className="navigation-footer">
        <Col md={12}>
          <RenderListLeft></RenderListLeft>
        </Col>
        <Col md={12}>
          <RenderListRight></RenderListRight>
        </Col>
      </Row>
    </>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
          <BookOutlined></BookOutlined>
          Cursos Online
        </a>
      </li>
      <li>
        <a href="#">
          <CodeOutlined></CodeOutlined>
          Desarrollo Web
        </a>
      </li>
      <li>
        <a href="#">
          <DatabaseOutlined></DatabaseOutlined>
          Base de Datos
        </a>
      </li>
      <li>
        <a href="#">
          <RightOutlined></RightOutlined>
          Politica de Privacidad
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <HddOutlined></HddOutlined>
          Sistemas / Servidores
        </a>
      </li>
      <li>
        <a href="#">
          <AppstoreOutlined></AppstoreOutlined>
          CMS
        </a>
      </li>
      <li>
        <a href="#">
          <UserOutlined></UserOutlined>
          Portafolio
        </a>
      </li>
      <li>
        <a href="#">
          <RightOutlined></RightOutlined>
          Politica de Cookies
        </a>
      </li>
    </ul>
  );
}
