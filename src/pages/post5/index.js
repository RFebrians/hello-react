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

export default function Post5() {

  return (
    <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Hooks | {meta.title}</title>
          <meta
            name="description"
            content={meta.description}
          />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> Hooks </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="ab_block">
        <h1>Apa itu Hooks ?</h1>
        <p>Pada tahun 2018 di React Conference . </p>
        <blockquote>Sophie Alpert dan Dan Abramov mengenalkan fitur baru pada React , yaitu Hooks . https://youtu.be/dpw9EHDh2bM </blockquote>
        <MDEditor.Markdown source="`iframe YT`" />
        <blockquote>Mereka mengatakan dengan Hooks 90% code lebih bersih dan mudah dipahami tanpa mengurangi fitur state dan lifecycle itu sendiri . </blockquote>
        <h4> useState Hook Overview </h4>
        <p> useState , seperti namanya , useState berfungsi untuk memanajemen state pada components sehingga menjadi lebih interaktif . </p>
        <MDEditor.Markdown source="`gist loaded`" />
        <br></br>
        <h4>useEffect Overview </h4>
        <br></br>
        <p> useEffect adalah Hook yang berguna untuk memanajemen lifecycle . </p>
        <p> Ini menggantikan ComponentDidMount , ComponentDidUpdate dan ComponentWillUnmount yang berada pada Class Component sebelumnya . </p>
        <MDEditor.Markdown source="`gist loaded`" />
        </div>
        <div className="ab_block">
        <h3> Peraturan Hooks </h3>
        <li>	Hooks hanya dipanggil pada posisi teratas . </li>
        <p> Hooks tidak dapat digunakan pada loops , conditions , atau nested functions . Contoh </p>
        <MDEditor.Markdown source="`gist loaded`" />
        <li> Hooks hanya dipanggil pada Function Components </li>
        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> useState Hook </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <p> useState berguna untuk memanajemen state . </p>
        <MDEditor.Markdown source="`gist loaded`" />
        <p> Lihat bagan struktur berikut </p>
        <MDEditor.Markdown source="`image`" />
        <h4> Mendeklarasikan Variabel State </h4>
        <MDEditor.Markdown source="`gist loaded`" />

        <h3> Kapan useState digunakan ? </h3>

      <p> useState digunakan untuk melakukan local state pada Component .</p>
      <p> Untuk Global state , seperti User Log in Log out , useContext mungkin lebih tepat pada penggunaannya . </p>

      <Row className="mb-5 mt-3">
        <Col lg="5">
          <h1 className="display-4 mb-4"> useEffect Hook </h1>{" "}
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <p>React dikenal sebagai powerful management state berbasis Single Page Application . Kemudian useEffect hadir untuk melengkapi lifecycle . </p>
      <p> useEffect dinamakan juga efek samping atau efek . </p>
      <p> useEffect biasa digunakan untuk lifecycle pada React . </p>
      <blockquote> Lifecycle setidaknya mengandung tiga bagian yaitu , </blockquote>
      <li>ComponentDidMount </li>
	    <li>ComponentDidUpdate </li>
	    <li>ComponentWillUnmount </li>
      <br></br>
      <blockquote> Lifecycle itu bisa diibaratkan seperti Biji Bunga yang ditanam (mount) , kemudian tumbuh seiring waktu (update) , dan akan layu pada waktu nya (unmount) . </blockquote>
      <p> Sama seperti Lifecycle pada Component ,  </p>
      <li> User datang ke halaman kemudian lifecycle bekerja (mounted Component) , </li>
      <li> berinteraksi pada state seiring waktu (update) , </li>
      <li> kemudian (unmount Component ) ketika meninggalkan halaman </li>

      <h4> Penggunaan useEffect </h4>
      <MDEditor.Markdown source="`gist loaded`" />
      <MDEditor.Markdown source="`image`" />

      <Row className="mb-5 mt-3">
        <Col lg="5">
          <h1 className="display-4 mb-4"> useRef Hook </h1>{" "}
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <h4> useRef Hook merupakan hook  yang powerful yang menggantikan getElementById , getElementByClassName . </h4>
      <p> useRefHook mengizinkan untuk membuat tag element pada aplikasi , kemudian nya mereferensikan (memanggilnya) kembali ketika dibutuhkan . </p>
      <MDEditor.Markdown source="`gist`" />

        </div>
    </HelmetProvider>

  );
}
