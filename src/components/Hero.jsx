import React from "react";
import HeroPoster from "../../public/hero-poster.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="row d-flex align-items-center bg-dark-blue100">
        <div className="col-md ">
          <img className="hero-img img-fluid" src={HeroPoster} />
        </div>
        <div className="col-md d-flex align-items-center justify-content-md-start fw-bold">
          <div className="">
            <span className="text-white " style={{ fontSize: "24px" }}>
              Belajar
              <br /> dari Praktisi Terbaik!
            </span>
            <div className="">
              <button
                className="btn bg-white btn-sm fw-bold text-center dark-blue100 my-3 rounded-pill "
                style={{ fontSize: "16px", width: "240px", radius: "10px" }}
                onClick={() => navigate("/kelas-saya")}
              >
                IKUTI KELAS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="" style={{marginTop: "100px"}}>
    //   <div class="fw-bold row align-items-md-stretch">
    //     <div class="col-md-6">
    //       <div class="h-100 p-5 text-bg-dark rounded-3">
    //         <h2>Change the background</h2>
    //         <p>
    //           Swap the background-color utility and add a `.text-*` color
    //           utility to mix up the jumbotron look. Then, mix and match with
    //           additional component themes and more.
    //         </p>
    //         <button class="btn btn-outline-light" type="button">
    //           Example button
    //         </button>
    //       </div>
    //     </div>
    //     <div class="col-md-6">
    //       <div class="h-100 p-5 bg-body-tertiary border rounded-3">
    //         <h2>Add borders</h2>
    //         <p>
    //           Or, keep it light and add a border for some added definition to
    //           the boundaries of your content. Be sure to look under the hood at
    //           the source HTML here as we've adjusted the alignment and sizing of
    //           both column's content for equal-height.
    //         </p>
    //         <button class="btn btn-outline-secondary" type="button">
    //           Example button
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
