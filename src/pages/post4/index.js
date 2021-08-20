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
          <title> Props | {meta.title}</title>
          <meta
            name="description"
            content={meta.description}
          />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> Style and Props </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="ab_block">
        <h1>Style and Props</h1>
        <p>Style dan Props , lalu apa hubungannya ? </p>
        <blockquote>Props kepanjangannya adalah properties . Props merupakan value yang dapat di pass ke children component </blockquote>
        <blockquote>Sedangkan Style disini hanya sebagai percobaan untuk membedakan </blockquote>
        <p>Untuk lebih jelasnya mari mencoba mempraktikan props dengan style  </p>
        <p> Contoh kita buat Button Components </p>
        <MDEditor.Markdown source="`gist loaded`" />
        <br></br>
        <h4>Pass a Prop </h4>
        <br></br>
        <MDEditor.Markdown source="`images`" />
        </div>
        <div className="ab_block">
        <MDEditor.Markdown source="`gist loaded`" />

        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> Props </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <p> Kita telah mengetahui perbedaan dan penggunaan props pada styling , tetapi apakah props itu sebenarnya ? </p>
        <p> props kepanjangan dari properties , dan bisa digunakan untuk passing data antar components . </p>
        <p> props merupakan read-only dan tidak dapat diubah . </p>
        <p> props hanya dapat diturunkan dari parent component . </p>
        <h1> Parent Component dan Child Component </h1>
        <p> Katakanlah kita mempunyai sebuah Card Component , yang di dalamnya ada Button . </p>
        <li> Karena Button berada di dalam Card , maka Button itu dikatakan Child . </li>
        <li> Sedangkan Card adalah Parent . </li>
        <blockquote> Ibarat kehidupan nya , child (anak) dapat menurunkan props (sifat) dari parent (orang tua) . </blockquote>
        <MDEditor.Markdown source="`image`" />
        <MDEditor.Markdown source="`gist loaded`" />

        <h3> Contoh berikut kita akan mencoba membuat component Card dengan props sebagai Button yang Active . </h3>
        <h4> Create Parent Component </h4>
        <MDEditor.Markdown source="`gist loaded`" />

        <h4> Create Child Component </h4>
        <p> Kita akan membuat child component MyButton . </p>
        <p> Jadi Mycard adalah Parent , dan MyButton adalah Child . </p>
        <p> Untuk membedakannya kita gunakan styled component . Warna biru gradien adalah Active dan abu-abu adalah Inactive .</p>
        <MDEditor.Markdown source="`gist loaded`" />

        </div>

    </HelmetProvider>

  );
}
