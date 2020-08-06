import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import Logo from "./PersonelScreens/compLogo.png";
import PerNav from "./PersonelScreens/PerNav";
import DisPerDem from "./PersonelScreens/DisPerDem";
import PrevPer from "./PersonelScreens/PrevPer";
import PerFill from "./PersonelScreens/PerFill";
import NavPrevPer from "./PersonelScreens/SuccPer";
import SuccPer from "./PersonelScreens/SuccPer";
/*
const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged);
const dispatch = useDispatch();

onClick{}

*/
function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={LoginScreen}/>
                    <Route path="/PersonelScreens/PerNav" component={PerNav}/>
                    <Route path="/PersonelScreens/DisPerDem" component={DisPerDem}/>
                    <Route path="/PersonelScreens/PrevPer" component={PrevPer}/>
                    <Route path="/PersonelScreens/PerFill" component={PerFill}/>
                    <Route path="/PersonelScreens/NavPrevPer" component={NavPrevPer} />
                    <Route path="/PersonelScreens/SuccPer" component={SuccPer} />
                </Switch>
            </div>
        </Router>
    )
}


const LoginScreen = () => (
    <div style={{
        display: "flex",
        flex: 4,
        flexDirection:"column",
        justifyContent: "column",
        alignItems:"center",
        width:"100%"
    }}>

        <img src={Logo} style={{
            display: "flex",
            flexWrap:"wrap",
            flexDirection:"column",
            flex:1,
            height:"20vh"
            }}
             alt="Logo"/>
        <div style={{
            display: "flex",
            flexWrap:"wrap",
            flex: 3,
            backgroundColor: "rgba(153, 145, 145, 0.24)",
            padding:"1.4%",
            borderRadius:"2%",
            flexDirection:"column"
        }}>
            <h1 style={{
                display: "flex",
                textAlign:"center",
                fontFamily: "Roboto",
                fontStyle: "normal" ,
                fontWeight:"22px",
                color: "#675B5B",
                fontSize: "36px",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}>
                İZİN BİLGİ SİSTEMİ
            </h1>

            <div style={{
                display: "flex",
                flexDirection:"row",
                alignItems:"center",
                flex:1,
                justifyContent:"center",
                marginLeft:"5%",
                marginRight:"10%",
                marginBottom:"3%"

            }}>
                <h1 style ={{
                    display: "block",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "18px",
                    color: "#000000",
                    flex:0.35
                }}>
                    E-Posta:
                </h1>
                <input type="text" style={{
                    flex:0.65
                }}/>
            </div>
            <div style={{
                display: "flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                flex:1,
                marginLeft:"8%",
                marginRight:"10%"
            }}>
                <h1 style ={{
                    display: "flex",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "18px",
                    color: "#000000",
                    flex:0.35
                }}>
                   Şifre:
                </h1>
                <input type="text" style={{
                    display: "flex",
                    flex:0.65
                }}/>
            </div>
            <div style={{
                display:"flex",
                flex:1,
                justifyContent:"center",
                alignItems:"center",
                margin:"3%"
            }}>
                <Link to="/PersonelScreens/PerNav" style={{
                    display:"flex",
                    textDecoration:"none",
                    alignItems:"center",
                    flex:1,
                    justifyContent:"center"}}>
                    <button type="button" className="btn btn-info" style={{ display:"flex",flex:0.33,justifyContent:"center"}}>GİRİŞ</button>
                </Link>
            </div>
        </div>
        <h1 style={{
            display:"flex",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            textAlign: "center"

        }}>
            E-Posta/Şifre uyarı alanı.
        </h1>
    </div>
)

export default App;
