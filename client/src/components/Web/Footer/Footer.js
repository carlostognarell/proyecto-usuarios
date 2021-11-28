import React from "react";
import { Layout, Col, Row } from "antd";
import MyInfo from "./MyInfo";
import NavigationFooter from "./NavigationFooter";
import Newsletter from "../Newsletter";

import "./Footer.scss";

export default function Footer() {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <Row>
        <Col md={4}></Col>
        <Col md={16}>
          <Row>
            <Col md={8}>
              <MyInfo></MyInfo>
            </Col>
            <Col md={8}>
              <NavigationFooter></NavigationFooter>
            </Col>
            <Col md={8}>
              <Newsletter></Newsletter>
            </Col>
          </Row>
          <Row className="footer__copyright">
            <Col md={12}>© ALL RIGHTS RESERVED</Col>
            <Col md={12}>Carlos Tognarell Ross | Desarrollador</Col>
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Footer>
  );
}
