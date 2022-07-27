import React from "react";
import { useAppSelector } from "../store/store.hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import '../style/details.css'

const DetailsRacun:React.FC=()=>{
    const { id } = useParams();
    const racun=useAppSelector((state) => {
        if(id)
        return state.racun.find((racun) => racun.id === parseInt(id));
        else
        return null;
    });
    const navigate = useNavigate();
    console.log(typeof(racun))

    const redirect=()=>{
        navigate("/")
    }
    return(
        <div className="div1">
            {racun && 
                <div className="contrainer2">
                    <div>
                        <label>ID:</label>
                        <span>{racun.id}</span>
                    </div>
                    <div>
                        <label>Broj računa:</label>
                        <span>{racun.brRacuna}</span>
                    </div>
                    <div>
                        <label>Redni broj računa: </label>
                        <span>{racun.RBR}</span>
                    </div>
                    <div>
                        <label>Smjer računa:</label>
                        <span>{racun.smjer} račun</span>
                        
                    </div>
                    <div>
                        <label>Datum računa:</label>
                        <span>{racun.datumRacuna.toLocaleDateString()}</span>
                    </div>
                    <div>
                        <label>Rok plaćanja: </label>
                        <span>{racun.rokPlacanja.toLocaleDateString()}</span>
                    </div>
                    <div>
                        <label>OIB partnera:</label>
                        <span>{racun.OIBPartnera}</span>
                    </div>
                    <div>
                        <label>Naziv partnera: </label>
                        <span>{racun.nazivPartner}</span>
                    </div>
                    <div>
                        <label>Adresa partnera: </label>
                        <span>{racun.adresaPartnera}</span>
                    </div>
                    <div>
                        <label>Iznos prije poreza: </label>
                        <span>{racun.iznosPrije}</span>
                    </div>
                    <div>
                        <label>Porez: </label>
                        <span>{racun.porez}</span>
                    </div>
                    <div>
                        <label>Iznos poreza: </label>
                        <span>{racun.iznosPoreza}</span>
                    </div>
                    <div>
                        <label>Iznos sa porezom: </label>
                        <span >{racun.saPorezon}</span>
                    </div>
                    <br></br>
                    <Button onClick={redirect}>Povratak na početnu</Button>
                </div>
            }
        </div>
    )
}

export default DetailsRacun;