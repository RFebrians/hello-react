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
<<<<<<< HEAD
        <blockquote> Mari kita buat button seperti gambar berikut </blockquote>
        <p>image</p>
=======
>>>>>>> 0df16a2959338b5c7e557be9e9969cc0b17b8f87
        <h2>Metode 1 CSS</h2>
        <div>
          <ReactEmbedGist
            gist="RFebrians/41d0155c41cb222ec00ed668558ab7d1"
<<<<<<< HEAD
            file="null"
=======
            file="MyButton.js"
>>>>>>> 0df16a2959338b5c7e557be9e9969cc0b17b8f87
          />
        </div>
        <ReactEmbedGist
          gist="RFebrians/41d0155c41cb222ec00ed668558ab7d1"
<<<<<<< HEAD
          file="null"
        />
        <p>Dari kesimpulan code diatas </p>
        <li> Untuk menghubungkan style pada CSS diperlukan props className yang berada pada file style.css </li>
=======
          file="styles.css"
        />
        <p>Dari kesimpulan code diatas </p>
        <li> CSS </li>
>>>>>>> 0df16a2959338b5c7e557be9e9969cc0b17b8f87
      </div>

      <div className="ab_block">
        <h2>Metode 2 Styled Component</h2>
<<<<<<< HEAD
        <p> Lakukan penginstalan pada npm untuk menginstall styled component pada react </p>
        <MDEditor.Markdown source="`$ npm install styled-components `" />
        <ReactEmbedGist
          gist="RFebrians/41d0155c41cb222ec00ed668558ab7d1"
          file="null"
        />
        <br></br>
        <p>Kesimpulan Styled Component </p>
        <li>Styled Component biasanya ditaruh pada bawah setelah file ekspor dalam file yang sama </li>
=======
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
>>>>>>> 0df16a2959338b5c7e557be9e9969cc0b17b8f87
      </div>
    </HelmetProvider>
  );
}
