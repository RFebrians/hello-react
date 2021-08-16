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
            <h1 className="display-4 mb-4"> Create React App </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="ab_block">
        <h2> Initializing </h2>
        <br></br>
        <h4>Sebelum memulai React Application pastikan anda telah menginstall node JS dan npm https://nodejs.org  . </h4>
        <br></br>
        <p>Pilihlah salah satu IDE atau Text Editor yang cocok untuk digunakan .</p>
<p>Dan untuk memulai anda akan sering menggunakan command atau terminal sebagai perantara</p>
<p>Buka Command dan cek version node dan npm , </p>
<p>alternatifnya anda dapat menggunakan yarn</p>
        <MDEditor.Markdown source="`$ node –version`" />
        <MDEditor.Markdown source="`$ npm –version`" />
        </div>

        <div className="ab_block">
        <h2>Create React App</h2>
        <p> Jalankan Command berikut pada Command Line atau terminal </p>
        <MDEditor.Markdown source="`$ npx create-react-app my-app`" />
        <MDEditor.Markdown source="`$ cd my-app`" />
        <MDEditor.Markdown source="`$ npm start`" />
        <br></br>
        <h4> Browser akan mengalihkan ke locallhost:3000 artinya React-App siap dibuat .
        Tetapi sebelum memulai mari kita pelajari fundamentalnya secara singkat . </h4>

        </div>
    </HelmetProvider>

  );
}
