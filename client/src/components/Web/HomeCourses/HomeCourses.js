import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import wordPress from "../../../assets/img/jpg/wordpress.jpg";
import prestashop from "../../../assets/img/jpg/prestashop-1-7.jpg";
import cssGrid from "../../../assets/img/jpg/css-grid.jpg";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Aprende y mejora tus habilidades</h2>
      </Col>
      <Col lg={4}></Col>
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reactJsHooks}
              title="React JS Hooks"
              subtitle="Intermedio - React/Javascript"
              link="https://courses.agustinnavarrogaldon.com/react"
            ></CardCourse>
          </Col>
          <Col md={6}>
            <CardCourse
              image={reactNative}
              title="React Native Expo"
              subtitle="Intermedio - React/Javascript"
              link="https://courses.agustinnavarrogaldon.com/react-native-expo"
            ></CardCourse>
          </Col>
          <Col md={6}>
            <CardCourse
              image={javaScript}
              title="JavaScript ES6"
              subtitle="Basico - Javascript"
              link="https://courses.agustinnavarrogaldon.com/javascript"
            ></CardCourse>
          </Col>
          <Col md={6}>
            <CardCourse
              image={wordPress}
              title="WordPress"
              subtitle="Basico - WordPress"
              link="https://courses.agustinnavarrogaldon.com/wordpress"
            ></CardCourse>
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={prestashop}
              title="PrestaShop 1.7"
              subtitle="Basico - PrestaShop"
              link="https://courses.agustinnavarrogaldon.com/prestashop"
            ></CardCourse>
          </Col>
          <Col md={6}></Col>
          <Col md={6}></Col>
          <Col md={6}>
            <CardCourse
              image={cssGrid}
              title="CSS Grid"
              subtitle="Intermedio - CSS"
              link="https://courses.agustinnavarrogaldon.com/css-grid"
            ></CardCourse>
          </Col>
        </Row>
      </Col>
      <Col lg={4}></Col>
      <Col lg={24} className="home-courses__more">
        <Link to="/courses">
          <Button>Ver más</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title}></img>}
        actions={[<Button>Ingresar</Button>]}
      >
        <Meta title={title} description={subtitle}></Meta>
      </Card>
    </a>
  );
}
