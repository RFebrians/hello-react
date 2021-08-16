import React from "react";
import "./style.css";
import MDEditor from "@uiw/react-md-editor";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export default function Post4() {

  return (
    <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Styled Components | {meta.title}</title>
          <meta
            name="description"
            content={meta.description}
          />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> Styled Components </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="ab_block">
        <h1>Styling in React</h1>
        <p>Pada React kita dapat menggunakan beberapa Styling untuk Components , diantaranya adalah CSS , SCSS atau Styled Components dari Libraries untuk React .</p>
        <p>React menyediakan beberapa Hooks bawaan seperti useState.
        Anda dapat membuat Hooks sendiri untuk menggunakan ulang stateful behavior antara komponen yang berbeda.</p>
        <MDEditor.Markdown source="Hello Markdown! `Hi!`" />
        </div>
    </HelmetProvider>

  );
}
