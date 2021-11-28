import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/jpg/avatar-persona.jpg";

import "./ReviewsCourses.scss";

export default function ReviewsCourses() {
  return (
    <>
      <Row className="review-courses">
        <Col lg={4}></Col>
        <Col lg={16} className="review-courses__title">
          <h2>
            Forma parte de los +35 mil estudiantes que estan aprendiendo con mis
            cursos
          </h2>
        </Col>
        <Col lg={4}></Col>
      </Row>

      <Row>
        <Col lg={4}></Col>
        <Col lg={16} className="review-courses__title">
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Alonso Campos"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Muy buen curso saludos jaja"
              ></CardReview>
            </Col>
            <Col md={8}>
              <CardReview
                name="David Ramiro"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Muy buen curso saludos jaja"
              ></CardReview>
            </Col>
            <Col md={8}>
              <CardReview
                name="Valentina Rubio"
                subtitle="Alumna de Udemy"
                avatar={AvatarPersona}
                review="Muy buen curso saludos jaja"
              ></CardReview>
            </Col>
          </Row>
        </Col>
        <Col lg={4}></Col>
      </Row>

      <Row>
        <Col lg={4}></Col>
        <Col lg={16} className="review-courses__title">
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Marc Perez"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Muy buen curso saludos jaja"
              ></CardReview>
            </Col>
            <Col md={8}>
              <CardReview
                name="Jesus Cruz"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Muy buen curso saludos jaja"
              ></CardReview>
            </Col>
            <Col md={8}>
              <CardReview
                name="Francisco Garcia"
                subtitle="Alumna de Udemy"
                avatar={AvatarPersona}
                review="Muy buen curso saludos jaja"
              ></CardReview>
            </Col>
          </Row>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;
  return (
    <Card className="review-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar}></Avatar>}
        title={name}
        description={subtitle}
      ></Meta>
    </Card>
  );
}
