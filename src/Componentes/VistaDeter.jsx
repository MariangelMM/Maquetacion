import React from "react";
import img1 from "../Style/Dexter.png";
import img2 from "../Style/Didi.png";
import img3 from "../Style/Mandark.png";
import "../Style/Style.css";

const VistaDexter = () => {
    return (
        <div>
            <section class="container d-flex justify-content-center p-4">
                <div class="row">
                    <div className="col-sm-5">
                        <img className="pl-5" src={img1} alt="dexter" />
                    </div>
                    <div className="col-sm-5">
                        <h1 className="texto mb-3 h">One Lonely Ginger</h1>
                        <p className="texto">One lonely ginger tried to learn french over night, but he f*ke up and now he speaks only about eggs and cheese</p>
                        <div class="card bg-light row m-1">
                            <div>
                                <p class="texto text-secondary">My name is Mandark and I am Dexter's rival. He and I have been competing in science and other things for years and this race is just one more of those things where we try to beat each other, except I try to win by being sneaky and bad!</p>
                                <img className="col-sm-3 rounded float-right" src={img3} alt="mandark" />
                            </div>
                        </div>
                        <p className="texto text-primary m-3">Mandark, Dexter's rival</p>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <section class="container d-flex justify-content-center">
                <div class="row">
                    <div className="col-sm-6 pt-5">
                        <h1 className="texto h">Fighting for Power</h1>
                        <p className="texto mt-3">In a world where nobody understands him and his brilliant mind.</p>
                        <p className="texto">Dexter is the first ginger we ever fell in love with, he is the origi-</p>
                        <p className="texto mb-3">nal developer of evil deeds.</p>
                        <button className="btn btn-primary p-3 mt-3">Le'Download</button>
                    </div>
                    <div className="col-sm-4">
                        <img src={img2} alt="mandark" />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default VistaDexter;
