import React from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

function PerNavScreen() {
    return (
        <div>
            <Col>
                <Row style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20vw",
                    marginBottom: "20vw"
                }}>
                    <Link to="perFillScreen" style={{
                        textDecoration: "none", display: "flex", flex: 1,
                        height: "20vw"
                    }}>
                        <button type="button" className="btn btn-success" style={{
                            display: "flex",
                            marginRight: "5px",
                            flex: 1,
                            height: "20vw",
                            justifyContent: "center",
                            borderRadius: "5%",
                            textAlign: "center",
                            fontWeight: "normal"
                        }}>
                            <h1 style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                fontSize: "3vw",
                                margin: "auto"
                            }}>
                                İZİN TALEBİ YARAT
                            </h1>
                        </button>
                    </Link>
                    <Link to="PerPrevPerDisScreen" style={{
                        textDecoration: "none", display: "flex", flex: 1,
                        height: "20vw"
                    }}>
                        <button type="button" className="btn btn-success" style={{
                            display: "flex",
                            flex: 1,
                            height: "20vw",
                            borderRadius: "5%",
                            textAlign: "center",
                            justifyContent: "center"
                        }}>
                            <h1 style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                fontSize: "3vw",
                                margin: "auto"
                            }}>
                                GEÇMİŞ İZİNLERİ GÖRÜNTÜLE
                            </h1>
                        </button>
                    </Link>
                </Row>
            </Col>
        </div>
    );
}

export default PerNavScreen;