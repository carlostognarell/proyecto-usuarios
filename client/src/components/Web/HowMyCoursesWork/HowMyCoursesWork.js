import React from "react";
import { Row, Col, Card } from "antd";
import {
  MessageOutlined,
  KeyOutlined,
  ClockCircleOutlined,
  UserOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>¿Cómo funcionan mis cursos?</h2>
        <h3>
          Cada curso cuenta con contenido bajo la web de Udemy. activa las 24
          horas al día los 365 días del año
        </h3>
      </Col>
      <Col lg={4}></Col>
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon={<ClockCircleOutlined></ClockCircleOutlined>}
              title="Cursos y clases"
              description="Curso de entre 10 y 30 horas y cada clase del curso con duracion maxima de 15 minutos,
               faciles de llevar en tu dia a dia de aprendizaje."
            ></CardInfo>
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<KeyOutlined></KeyOutlined>}
              title="Acceso 24/7"
              description="Acceso a los cursos en cualquier momento, desde cualquier lugar sin importar dia y hora."
            ></CardInfo>
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<MessageOutlined></MessageOutlined>}
              title="Aprendizaje colaborativo"
              description="Aprende de los demás dejando tus dudas para que profesores y compañeros te ayuden."
            ></CardInfo>
          </Col>
        </Row>

        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon={<UserOutlined></UserOutlined>}
              title="Mejora tu perfil"
              description="Aprende y mejora tu perfil para mantenerte informado de las actualizaciones."
            ></CardInfo>
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<DollarOutlined></DollarOutlined>}
              title="Precios bajos"
              description="Obtén el curso que necesitas por solo 9.99 y ten acceso a el por tiempo ilimitado y soporte ilimitado."
            ></CardInfo>
          </Col>
          <Col md={8}>
            <CardInfo
              icon={<CheckCircleOutlined></CheckCircleOutlined>}
              title="Certificado de finalización"
              description="Al completar tu curso recibirás una certificación que te expedirá Udemy en PDF"
            ></CardInfo>
          </Col>
        </Row>
      </Col>
      <Col lg={4}></Col>
    </Row>
  );
}

function CardInfo(props) {
  const { icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="how-my-courses-work__card">
      {icon}
      <Meta title={title} description={description}></Meta>
    </Card>
  );
}
