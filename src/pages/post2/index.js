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
          <title> What is React | {meta.title}</title>
          <meta
            name="description"
            content={meta.description}
          />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> What is React ? </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="ab_block">
        <h1> React merupakan salah satu Javascript Library paling populer . </h1>
        <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"
      alt="new"
      />
        <p>React dibuat oleh Facebook pada tahun 2015 kemudian berkembang pesat di kalangan Developer .</p>
        <p>Dengan hadirnya React Hooks pada tahun 2018 , hal ini membuatnya menjadi nilai tambah , yaitu efisien dan rapi dalam kode tanpa mengurangi fungsi lifecycle itu sendiri .</p>
        </div>
        <div className="ab_block">
        <h4>React adalah Component-Based , maksudnya semuanya adalah Component .</h4>
<p>Contoh , Button merupakan Component , Header merupakan Component , Sidebar merupakan Component dan semua itu dapat di reusable atau digunakan kembali pada halaman lain tanpa harus menulis ulang kode .</p>
<p>Component adalah Javascript Function yang berisi JSX Elements (Javascript XML) , yang merupakan gabungan dari Javascript dan HTML.</p>
        </div>
    </HelmetProvider>


  );
}
