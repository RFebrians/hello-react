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
  services
} from "../../content_option";

export default function Post2() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> What is React | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Row className="mb-5 mt-3">
        <Col lg="5">
          <h1 className="display-4 mb-4"> What is React ? </h1>{" "}
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="ab_block">
        <h1>
          {" "}
          React merupakan salah satu Javascript Library paling populer .{" "}
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"
          alt="new"
        />
        <p>
          React dibuat oleh Facebook pada tahun 2015 kemudian berkembang pesat
          di kalangan Developer .
        </p>
        <p>
          Dengan hadirnya React Hooks pada tahun 2018 , hal ini membuatnya
          menjadi nilai tambah , yaitu efisien dan rapi dalam kode tanpa
          mengurangi fungsi lifecycle itu sendiri .
        </p>
      </div>
      <div className="ab_block">
        <h4>
          React adalah Component-Based , maksudnya semuanya adalah Component .
        </h4>
        <p>
          Contoh , Button merupakan Component , Header merupakan Component ,
          Sidebar merupakan Component dan semua itu dapat di reusable atau
          digunakan kembali pada halaman lain tanpa harus menulis ulang kode .
        </p>
        <p>
          Component adalah Javascript Function yang berisi JSX Elements
          (Javascript XML) , yang merupakan gabungan dari Javascript dan HTML.
        </p>
      </div>
      <Row className="mb-5 mt-3">
        <Col lg="5">
          <h1 className="display-4 mb-4"> Create React App </h1>{" "}
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="ab_block">
        <h2> Initializing </h2>
        <br></br>
        <h4>
          Sebelum memulai React Application pastikan anda telah menginstall node
          JS dan npm https://nodejs.org .{" "}
        </h4>
        <br></br>
        <p>
          Pilihlah salah satu IDE atau Text Editor yang cocok untuk digunakan .
        </p>
        <p>
          Dan untuk memulai anda akan sering menggunakan command atau terminal
          sebagai perantara
        </p>
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
        <h4>
          {" "}
          Browser akan mengalihkan ke locallhost:3000 artinya React-App siap
          dibuat . Tetapi sebelum memulai mari kita pelajari fundamentalnya
          secara singkat .{" "}
        </h4>
      </div>

      <Row className="mb-5 mt-3">
        <Col lg="5">
          <h1 className="display-4 mb-4"> React Component </h1>{" "}
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="ab_block">
        <p>Pada React , semua yang berada di UI merupakan Component .</p>
        <p>
          Component merupakan Javascript Function yang ditulis pada React
          element atau JSX .
        </p>
        <h3>Creating a Component</h3>
        <Row className="mb-2 mt-3"></Row>
        <h4>Create a New File </h4>
        <p>
          Buat File baru bernama MyButtonComponent.js dan import React pada
          posisi teratas.
        </p>
        import React from "react"
        <h3>Create a Function</h3>
        <p>
          Selanjutnya buat Function bernama MyButtonComponent . (Note Function
          biasanya diawali huruf kapital)
        </p>
      </div>
    </HelmetProvider>
  );
}
