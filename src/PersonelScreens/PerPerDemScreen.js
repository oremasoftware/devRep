import React from "react";
import Logo from "./logok.png";


function PerPerDemScreen() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 9,
            border:"0.2px solid black",
            borderRadius:"2%"
        }}>
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    marginTop:"4px",
                    marginBottom:"4px",
                    border:"0.6px solid black"
                }}>
                {headPart()}
            </div>

            <div style={{
                display: "flex",
                flex: 1,
                marginTop:"4px",
                marginBottom:"4px",
                border:"0.6px solid black"
            }}>
                {underHeadPart()}
            </div>
            <div style={{
                display: "flex",
                flex: 1,
                marginTop:"4px",
                marginBottom:"4px",
                border:"0.6px solid black"
            }}>
                {personelInfoPart()}
            </div>
            <div style={{
                display: "flex",
                flex: 1,
                marginTop:"4px",
                marginBottom:"4px",
                border:"0.6px solid black"
            }}>
                {personelDatesAndExp()}
            </div>
            <div style={{
                display: "flex",
                flex: 1,
                marginTop:"4px",
                marginBottom:"4px",
                border:"0.6px solid black"
            }}>
                {vhcUsageOfPers()}
            </div>
            <div style={{
                display: "flex",
                flex: 1,
                marginTop:"4px",
                marginBottom:"4px",
                border:"0.6px solid black"
            }}>
                {perExplPart()}
            </div>
            <div style={{
                display: "flex",
                flex: 1,
                marginTop:"4px",
                marginBottom:"4px",
                border:"0.6px solid black"
            }}>
                {vhclUsgInfo()}
            </div>
            <div style={{
                display: "flex",
                flex: 1,
                marginTop:"4px",
                marginBottom:"4px",
                border:"0.6px solid black"
            }}>
                {perAccpPart()}
            </div>

            <div style={{
                display: "flex",
                flex: 1,
                marginTop:"4px",
                marginBottom:"4px",
                border:"0.6px solid black"
            }}>
                {formDetailsPart()}
            </div>
        </div>
    )
}

//ÜSTTEN 2.BLOK KOMPONENT İZİN TÜRÜ ALINIR, BİR KOMPONENTİ DE İÇERDE YARATIR.
function underHeadPart() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flex:6
        }}>
            <div style={{
                display: "flex",
                flex:1,
                justifyContent:"center",
                border: "0.5px solid black",
                borderRadius: "2%",
                textAlign: "center"
            }}>
                <h1 style={{
                    display:"flex",
                    flex:1,
                    fontFamily:"Scada",
                    fontSize:"22px",
                    margin:"auto",
                    justifyContent:"center"
                }}>
                    İZİN TÜRÜ
                </h1>

            </div>
            <div style={{
                display: "flex",
                flex:5
            }}>
                {perAccCompt()}
            </div>
        </div>
    );
}

//İZİN TİPİ SEÇME COMPONENTİ
function perAccCompt() {
    let userPerSel = 1;

    let yearlyPer=false;
    let missionPer=false;
    let otherPer=false;


    if(userPerSel===1){
        yearlyPer=true;
    }
    else if(userPerSel===2){
        missionPer=true;
    }
    else if(userPerSel===3){
        otherPer=true;
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 6,
            border: "0.2px solid black"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 3
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight: "0.1px solid black",
                    borderBottom: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 0.8,
                        fontFamily:"Scada",
                        fontSize: "18px",
                        margin:"auto"
                    }}>
                        Yıllık İzin
                    </h1>

                    <input disabled checked={yearlyPer} type="checkbox" style={{
                        margin:"auto",
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                    }}/>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight: "0.1px solid black",
                    borderBottom: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontFamily:"Scada",
                        fontSize: "18px",
                        margin:"auto"
                    }}>
                        Görevli
                    </h1>

                    <input type="checkbox" disabled checked={missionPer} style={{
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                        margin:"auto"
                    }}/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderBottom: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontFamily:"Scada",
                        fontSize: "18px",
                        margin:"auto"
                    }}>
                        Diğer
                    </h1>
                    <input type="checkbox" disabled checked={otherPer} style={{
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                        margin:"auto"
                    }}/>
                </div>
            </div>
            <div style= {{
                display: "flex",
                flexDirection: "row",
                flex: 3
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight:"0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 0.8,
                        fontSize: "14px",
                        margin:"auto",
                        fontFamily:"Scada"
                    }}>
                        Ücretsiz İzin
                    </h1>

                    <input type="checkbox" style={{
                        margin:"auto",
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                    }}/>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    borderRight: "0.1px solid black"
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontSize: "16px",
                        fontFamily:"Scada",
                        margin:"auto"
                    }}>
                        Ücretli İzin
                    </h1>

                    <input type="checkbox" style={{
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                        margin:"auto"
                    }}/>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1
                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 0.8,
                        justifyContent: "center",
                        fontSize: "12px",
                        fontFamily:"Scada",
                        margin:"auto"
                    }}>
                        2 Ay İçinde Telafi Yapılacak
                    </h1>
                    <input type="checkbox" style={{
                        display: "flex",
                        flex: 0.2,
                        height:"80%",
                        margin:"auto"
                    }}/>
                </div>
            </div>
        </div>
    )
}

//ÜST BAŞLIĞIN OLDUĞU KOMPONENT
function headPart() {
    let folderNumb = "551";
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flex: 5,
            border: "0.1px solid black"
        }}>
            <img src={Logo} alt="Logo" style={{
                display: "flex",
                flex: 1,
                width: "200px",
                height: "100px",
                margin: "0.1vw",
                border: "0.1px solid black",
                borderRadius: "2%"
            }}/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 4,

            }}>
                <div style={{
                    display: "flex",
                    flex: 2,
                    justifyContent: "flex-start",
                    border: "0.1px solid black",
                    margin: "0.1vw",

                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1.8,
                        justifyContent: "center",
                        fontSize: "3vw",
                        fontWeight: "normal",
                        margin: "auto",
                        fontFamily: "Scada"
                    }}>
                        DESIRD TASARIM
                    </h1>

                    <h1 style={{
                        display: "flex",
                        flex: 0.2,
                        fontSize: "2.5vw",
                        justifyContent: "center",
                        margin: "auto",
                        fontFamily: "Scada"
                    }}>
                        (AS)
                    </h1>
                </div>

                <div style={{
                    display: "flex",
                    flex: 2,
                    justifyContent: "flex-start",
                    border: "0.1px solid black",
                    margin: "0.1vw",

                }}>
                    <h1 style={{
                        display: "flex",
                        flex: 1.9,
                        textAlign: "center",
                        justifyContent: "center",
                        fontSize: "2.5vw",
                        fontWeight: "normal",
                        margin: "auto",
                        fontFamily: "Scada"
                    }}>
                        PERSONEL İZİN BELGESİ FORMU
                    </h1>

                    <h1 style={{
                        display: "flex",
                        flex: 0.1,
                        fontSize: "2.5vw",
                        justifyContent: "center",
                        margin: "auto",
                        border: "0.5px solid black",
                        fontFamily: "Scada"
                    }}>
                        No:50
                    </h1>
                </div>
            </div>
        </div>
    );
}

//BLOCK THREE
function personelInfoPart() {
    let personelAdSoyad = "Zozan Kartal";
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flex: 6,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flex: 4.333,
                border:"0.5px solid black"

            }}>
                <h1 style={{
                    display: "flex",
                    justifyContent:"center",
                    flex:1,
                    textAlign:"center",
                    fontFamily: "Scada",
                    margin:"auto",
                    fontSize: "18px",
                    borderTop:"0px",
                    fontWeight: "normal"
                }}
                >AD SOYAD</h1>
                <div style={{
                        display: "flex",
                        justifyContent:"center",
                        flex:3.333,
                        border:"0.5px solid black",
                        borderLeft:"1px solid black",
                        borderTop:"0px"
                    }}
                    >
                    <h1 style={{
                        display: "flex",
                        flex:3.333,
                        justifyContent:"center",
                        margin:"auto",
                        fontFamily: "Scada",
                        fontSize: "15px",
                        textAlign:"center"
                    }}
                    >
                        KARTAL DUMAN
                    </h1>
                 </div>
            </div>
            <div style={{
                display: "flex",
                flex:1.666,
                justifyContent:"center"
            }}>
                <h1 style={{
                    display: "flex",
                    flex:1.667,
                    justifyContent:"center",
                    textAlign:"center",
                    margin:"auto",
                    fontSize:"18px",
                    fontFamily:"Scada",
                    borderBottom:"0.5px solid black",
                    borderRight:"0.5px solid black"
                }}
                >Talep Tarih : 22/22/2222</h1>
            </div>
        </div>
    );
}

//BLOCK FOUR
function personelDatesAndExp() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flex: 3,
            border:"0.2px solid black"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3

            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 3,
                    textAlign: "center"
                }}>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        textAlign: "center",
                        alignItems:"center",
                        borderTop: "0px",
                        borderRight: "0.5px solid black"
                    }}>
                        <h1 style={{
                            display:"flex",
                            flex: 1,
                            justifyContent:"center",
                            fontSize: "15px",
                            margin:"auto"
                        }}> İZİN </h1>
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 1,
                        alignItems: "center",
                        border: "0.2px solid black",

                    }}>

                        <h1 style={{
                            display:"flex",
                            flex: 1,
                            justifyContent:"center",
                            fontSize: "15px",
                            margin:"auto"
                        }}>TARİHİ</h1>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 1,
                        alignItems: "center",
                        border: "0.2px solid black",
                        borderTop:"0px"
                    }}>
                        <h1 style={{
                            display:"flex",
                            flex: 1,
                            justifyContent:"center",
                            fontSize: "15px",
                            margin:"auto"
                        }}>SAATİ</h1>
                    </div>
                </div>
            </div>


            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    textAlign: "center",
                    alignItems:"center",
                    borderLeft: "0.5px solid black",
                    borderRight: "0.5px solid black",
                    borderTop: "0px"
                }}>
                    <h1 style={{
                        display:"flex",
                        flex: 1,
                        justifyContent:"center",
                        fontSize: "15px",
                        margin:"auto"
                    }}>BAŞLANGIÇ</h1>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black",

                }}>

                    <h1 style={{
                        display:"flex",
                        flex: 1,
                        justifyContent:"center",
                        fontSize: "15px",
                        margin:"auto"
                    }}>22/22/2222</h1>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black",
                    borderTop:"0px"
                }}>
                    <h1 style={{
                        display:"flex",
                        flex: 1,
                        justifyContent:"center",
                        fontSize: "15px",
                        margin:"auto"
                    }}>22:22</h1>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3,
                textAlign: "center"
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    textAlign: "center",
                    alignItems:"center",
                    borderTop: "0px",
                    borderLeft:"0.5px solid black"
                }}>
                    <h1 style={{
                        display:"flex",
                        flex: 1,
                        justifyContent:"center",
                        fontSize: "15px",
                        margin:"auto"
                    }}>BİTİŞ</h1>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black",

                }}>

                    <h1 style={{
                        display:"flex",
                        flex: 1,
                        justifyContent:"center",
                        fontSize: "15px",
                        margin:"auto"
                    }}>22/22/2222</h1>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                    border: "0.2px solid black",
                    borderTop:"0px"
                }}>
                    <h1 style={{
                        display:"flex",
                        flex: 1,
                        justifyContent:"center",
                        fontSize: "15px",
                        margin:"auto"
                    }}>22:22</h1>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 3,
                textAlign: "center"
            }}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    textAlign: "center",
                    alignItems:"center",
                    borderTop: "0px",
                    borderLeft:"1px solid black"
                }}>
                    <h1 style={{
                        display:"flex",
                        flex: 1,
                        justifyContent:"center",
                        fontSize: "15px",
                        margin:"auto"
                    }}>İZİN SÜRESİ</h1>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 2,
                    alignItems: "center",
                    border: "0.2px solid black",

                }}>

                    <h1 style={{
                        display:"flex",
                        flex: 1,
                        justifyContent:"center",
                        fontSize: "15px",
                        margin:"auto"
                    }}> 2 gün 22 saat</h1>
                </div>
            </div>
        </div>
    );
}

function vhcUsageOfPers() {
    let compvhcUsg = "EVET"
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flex: 4,
            border: "0.2px solid black",
        }}>
            <div style={{
                display: "flex",
                flex: 2,
                justifyContent: "center",
                textAlign: "center",
                margin:"auto"
            }}
            >
                <h1 style={{
                    display: "flex",
                    flex: 2,
                    justifyContent: "center",
                    textAlignment: "center",
                    fontSize: "12px",
                    fontFamily: "Scada",
                    margin:"auto"
                }}>
                    GÖREVLİ İSE ŞİRKET ARACI KULLANACAK MI :
                </h1>

            </div>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                flex: 0.60,
                paddingLeft: "30px",
                borderLeft: "0.1px solid black",
                textAlignment: "center",
                fontFamily: "Scada",
                fontSize: "16px"
            }}
            >
                EVET
                <input style={{
                    display: "flex",
                    justifyContent:"center",
                    flex: 0.4,
                }} type="checkbox"/>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flex: 0.60,
                alignItems: "center",
                paddingLeft: "20px",
                borderLeft: "0.1px solid black",
                textAlignment: "center",
                fontSize: "16px",
                fontFamily: "Scada"
            }}
            >
                HAYIR
                <input style={{
                    display: "flex",
                    flex: 0.40
                }} type="checkbox"/>

            </div>

        </div>
    );
}

//HERE THE EXPLANATION OF PERMISSON DEMAND THAT DESCRIBED BY PERSONEL11
function perExplPart() {
    return (
        <div style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            flexDirection: "row"
        }}>
            <h1 style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                flex: 0.1,
                padding: "0.1vw",
                border: "0.2px solid black",
                height: "100%",
                margin:"auto"

            }}>Açıklama:
            </h1>

            <p style={{
                display: "flex",
                alignItems:"row",
                justifyContent: "flex-start",
                flexDirection: "row",
                flex: 0.9,
                wordBreak:"break-word"
            }}>
                Tatil yapacağım.
            </p>
        </div>
    )
}

//HERE WE TAKE
function vhclUsgInfo() {
    return (
        <div style={{
            display: "flex",
            flex: 2,
            flewDirection: "row",
            justifyContent: "center",
            border: "0.35px solid black"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                flex: 2,
                borderLeft: "0.1px solid black",
            }}
            >
                <h1 style={{
                    display: "flex",
                    justifyContent:"center",
                    flex:1,
                    fontFamily:"Scada",
                    fontSize:"16px",
                    margin:"auto"
                }}>
                    Kendi Aracı:
                </h1>

                <input style={{
                    display: "flex",
                    flex: 0.3,
                }} type="checkbox"/>
                <p style={{
                    display: "flex",
                    justifyContent:"center",
                    borderLeft: "0.1px solid black",
                    alignItems: "center",
                    flex: 0.7,
                    margin: "auto",
                    fontSize: 15
                }}> ___ km</p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                flex: 2,
                borderLeft: "0.1px solid black",
                textAlignment: "center"
            }}
            >
                <h1 style={{
                    display: "flex",
                    justifyContent:"center",
                    flex:1,
                    fontFamily:"Scada",
                    fontSize:"16px",
                    margin:"auto"
                }}>
                   Otobus/Travmay:
                </h1>
                <input style={{
                    display: "flex",
                    flex: 0.3
                }} type="checkbox"/>
                <p style={{
                    display: "flex",
                    fontSize: 15,
                    alignItems: "center",
                    textAlignment: "center",
                    justifyContent:"center",
                    borderLeft: "0.1px solid black",
                    flex: 0.7,
                    margin: "auto"
                }}> ___ ₺</p>
            </div>


        </div>
    )
}

function perAccpPart() {
    const imza1 = require('./ornImz.png');
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 21,

        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"center",
                flex: 3,
                textAlign: "center"
            }}>
                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: "12px",
                    border: "0.2px solid black",
                    margin:"auto",
                    padding:"5px"
                }}>
                    İZİNLİ PERSONEL ONAYI
                </h1>

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: "12px",
                    border: "0.2px solid black",
                    margin:"auto",
                    padding:"5px"

                }}>
                    SORUMLU AMİR ONAYI
                </h1>

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex: 1,
                    fontSize: "13px",
                    border: "0.2px solid black",
                    margin:"auto",
                    padding:"4px"
                }}>
                   GENEL MÜDÜR ONAYI
                </h1>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                flex:6,
                textAlign: "center"
            }}>
                <h1 style={{

                    display: "flex",
                    justifyContent: "center",
                    flex:2,
                    fontSize: "15px",
                    border: "0.2px solid black",
                    padding:"10px",
                    margin:"auto"
                }}>
                    ZOZAN KARTAL
                </h1>

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex:2,
                    fontSize: "15px",
                    border: "0.2px solid black",
                    padding:"10px",
                    margin:"auto"
                }}>
                    KARTAL ZOZAN
                </h1>

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    flex:2,
                    fontSize: "15px",
                    border: "0.2px solid black",
                    padding:"10px",
                    margin:"auto"
                }}>
                    KOZAN KARTAL
                </h1>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"center",
                flex: 12,
                textAlignment: "center"
            }}>
                <img src={imza1} alt="imza" style={{
                    border: "0.5px solid black",
                    width: "33vw",
                    height: "5vw",
                    display: "flex",
                    justifyContent: "center",
                    flex: 4
                }}/>
                <img src={imza1} alt="imza" style={{
                    border: "0.5px solid black",
                    display: "flex",
                    width: "33vw",
                    height: "5vw",
                    justifyContent: "center",
                    flex: 4
                }}/>
                <img src={imza1} alt="imza" style={{
                    border: "0.5px solid black",
                    width: "33vw",
                    height: "5vw",
                    display: "flex",
                    justifyContent: "center",
                    flex: 4
                }}/>
            </div>

        </div>
    )
}

function formDetailsPart() {
    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            flex:4
        }}>
            <h1 style={{
                display:"flex",
                justifyContent:"center",
                flex:0.6,
                fontSize:"1vw",
                margin:"auto"
            }}>
                Form No: IKFR002
            </h1>

            <h1 style={{
                display:"flex",
                justifyContent:"center",
                flex:1,
                fontSize:"1vw",
                margin:"auto"
            }}>
                Form Yayın Tarihi: 21/09/2016
            </h1>
            <h1 style={{
                display:"flex",
                justifyContent:"center",
                flex:1.4,
                fontSize:"1vw",
                margin:"auto"
            }}>
                Form Revizyon Tarihi :02.07.2019
            </h1>
            <h1 style={{
                display:"flex",
                justifyContent:"center",
                flex:1,
                fontSize:"1vw",
                margin:"auto"
            }}>
                Form Revizyon No: 0002
            </h1>


        </div>

    )
}

export default PerPerDemScreen;
