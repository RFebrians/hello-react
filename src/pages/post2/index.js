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

export default function Post2() {
  return (
    <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Post2 | {meta.title}</title>
          <meta
            name="description"
            content={meta.description}
          />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="2">
            <h1 className="display-4 mb-4"> Postingan ke-2 </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="ab_block">
        <h1>hello this is header</h1>
        <p>this is paragraph</p>
        </div>
    </HelmetProvider>

  );
}
