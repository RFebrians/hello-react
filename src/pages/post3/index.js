import React from "react";
import "./style.css";
import MDEditor from "@uiw/react-md-editor";
import ReactEmbedGist from "react-embed-gist";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services
} from "../../content_option";

export default function Post3() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Styling | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Row className="mb-5 mt-3">
        <Col lg="5">
          <h1 className="display-4 mb-4"> Styling in React </h1>{" "}
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="ab_block">
        <br></br>
        <h4>
          Pada React kita dapat menggunakan beberapa Styling untuk Components ,
          diantaranya adalah CSS , SCSS atau Styled Components dari Libraries
          untuk React .
        </h4>
        <br></br>
        <h2>Metode 1 CSS</h2>
        <div>
          <ReactEmbedGist
            gist="RFebrians/41d0155c41cb222ec00ed668558ab7d1"
            file="MyButton.js"
          />
        </div>
        <ReactEmbedGist
          gist="RFebrians/41d0155c41cb222ec00ed668558ab7d1"
          file="styles.css"
        />
        <p>Dari kesimpulan code diatas </p>
        <li> CSS </li>
      </div>

      <div className="ab_block">
        <h2>Metode 2 Styled Component</h2>
        <p> Jalankan Command berikut pada Command Line atau terminal </p>
        <ReactEmbedGist
          gist="RFebrians/41d0155c41cb222ec00ed668558ab7d1"
          file="styles.css"
        />
        <br></br>
        <h4>
          {" "}
          Browser akan mengalihkan ke locallhost:3000 artinya React-App siap
          dibuat . Tetapi sebelum memulai mari kita pelajari fundamentalnya
          secara singkat .{" "}
        </h4>
      </div>
    </HelmetProvider>
  );
}
