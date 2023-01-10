import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skaiciuotuvas() {



    const [ltr, setLtr] = useState(0);
    const [sp, setSp] = useState(0);
    const [h, setH] = useState(0);
    const [rezultatas, setRezultatas] = useState(0);


    let norm =
        <div>
            <div className="card-body m-0 alert alert-light">
                Rezervuaras užpildytas {rezultatas}%
            </div>
            <ProgressBar style={{ height: 25 + 'px' }} now={rezultatas} />
        </div>;

    const tank80 =
        <div>
            <div className="card-body m-0 alert alert-success">
                Rezervuaras užpildytas {rezultatas}%
            </div>
            <ProgressBar style={{ height: 25 + 'px' }} now={rezultatas} label={`${rezultatas}%`} />
        </div>;

    const tank80_100 =
        <div>
            <div className="card-body m-0 alert alert-warning">
                Rezervuaras užpildytas {rezultatas}%
            </div>
            <ProgressBar style={{ height: 25 + 'px' }} variant="warning" now={rezultatas} label={`${rezultatas}%`} />
        </div>;

    const tank100 =
        <div>
            <div className="card-body m-0 alert alert-danger fs-4">
                Rezervuaras perpildytas!!!!!! {rezultatas}%
            </div>
            <ProgressBar style={{ height: 25 + 'px' }} variant="danger" now={rezultatas} label={`${rezultatas}%`} />
        </div>;


    console.log(rezultatas)

    const skaiciuotiHandler = () => {

        setRezultatas(
            Math.round(sp * h / ltr * 100 * 100) / 100
        )

        // setLtr("");
        // setSp("");
        // setH("");

    }
    const changeLtrHandler = (event) => {
        setLtr(event.target.value);
    }
    const changeSpHandler = (event) => {
        setSp(event.target.value);
    }
    const changeHHandler = (event) => {
        setH(event.target.value);
    }
    console.log(sp);

    if (rezultatas == 0) {
        norm = norm
    } else if (rezultatas <= 80) {
        norm = tank80
    } else if (rezultatas > 80 && rezultatas < 100) {
        norm = tank80_100
    }
    else if (rezultatas => 100) {
        norm = tank100
    }
    ;

    return (


        <div className="col-md-6">

            <div><ProgressBar now={rezultatas}></ProgressBar></div>

            <div className="card m-3">
                <div className="card-header bg-info">
                    Rezervuaras
                </div>
                <form>
                    <div className="m-3">
                        <p>Rezervuaro talpa (l):</p>
                        <input type="text" onChange={changeLtrHandler} value={ltr} />
                    </div>

                    <div className="m-3">
                        <p>Rezervuaro pildymo greitis (l/val.):</p>
                        <input type="text" onChange={changeSpHandler} value={sp} />
                    </div>

                    <div className="m-3">
                        <p>Laikas, kiek rezervuaras bus pildomas (val.):</p>
                        <input type="text" onChange={changeHHandler} value={h} />
                    </div>
                    <button type="button" className="btn btn-primary m-3" onClick={skaiciuotiHandler}>Skaičiuoti
                    </button>
                </form>

            </div>

            <div className="col-md-6 m-3">
                <div className="card ">
                    <div className="card-header bg-info">
                        Rezervuaro užpildymas
                    </div>

                    {norm}

                </div>
            </div>

        </div>

    );
}

export default Skaiciuotuvas;