import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export default function Post3() {
  return (
    <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta
            name="description"
            content={meta.description}
          />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> React Hooks </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="ab_block">
        <h1>Apa itu Hooks ?</h1>
        <p>Hooks merupakan fungsi yang memungkinkan Anda untuk “mengaitkan” state dan fitur-fitur lifecycle React dari function component.
        Hooks tidak dapat berfungsi didalam kelas — Hooks memungkinkan menggunakan React tanpa kelas.</p>
        <p>React menyediakan beberapa Hooks bawaan seperti useState.
        Anda dapat membuat Hooks sendiri untuk menggunakan ulang stateful behavior antara komponen yang berbeda.</p>
        </div>
    </HelmetProvider>

  );
}
