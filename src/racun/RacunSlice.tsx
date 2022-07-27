import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";



export interface Racun{
    id:number,
    brRacuna:string,
    RBR:number,
    smjer:string,
    datumRacuna:Date,
    rokPlacanja:Date,
    nazivPartner:string,
    adresaPartnera:string,
    OIBPartnera:string,
    iznosPrije:number,
    porez:number,
    iznosPoreza:number,
    saPorezon:number,  
}


const initialState:Racun[]=[{
    id:1,
    brRacuna:'2',
    RBR:12,
    smjer:'ulazni',
    datumRacuna:new Date(),
    rokPlacanja:new Date(),
    nazivPartner:'Niko',
    adresaPartnera:'Šibenska 37',
    OIBPartnera:'321543654',
    iznosPrije:100,
    porez:25,
    iznosPoreza:25,
    saPorezon:125
},
{
    id:2,
    brRacuna:'3',
    RBR:13,
    smjer:'ulazni',
    datumRacuna:new Date("2020-01-16"),
    rokPlacanja:new Date("2020-02-16"),
    nazivPartner:'Ana',
    adresaPartnera:'Splitksa 37',
    OIBPartnera:'842374234',
    iznosPrije:100,
    porez:25,
    iznosPoreza:25,
    saPorezon:125
},
{
    id:3,
    brRacuna:'43dasd',
    RBR:20,
    smjer:'izlazni',
    datumRacuna:new Date("2021-01-16"),
    rokPlacanja:new Date("2021-02-16"),
    nazivPartner:'Judita',
    adresaPartnera:'Miljenka Buljana 30',
    OIBPartnera:'',
    iznosPrije:1000,
    porez:25,
    iznosPoreza:250,
    saPorezon:1250
},
{
    id:4,
    brRacuna:'798fsd',
    RBR:213,
    smjer:'ulazni',
    datumRacuna:new Date("2022-07-16"),
    rokPlacanja:new Date("2022-09-16"),
    nazivPartner:'Josipa',
    adresaPartnera:'Put Kuka 27',
    OIBPartnera:'983216312',
    iznosPrije:750,
    porez:20,
    iznosPoreza:150,
    saPorezon:900
},
{
    id:5,
    brRacuna:'687h2',
    RBR:100,
    smjer:'izlazni',
    datumRacuna:new Date("2022-02-18"),
    rokPlacanja:new Date("2022-03-18"),
    nazivPartner:'Luka',
    adresaPartnera:'Put Ferate 2',
    OIBPartnera:'',
    iznosPrije:900,
    porez:20,
    iznosPoreza:180,
    saPorezon:1080
}
]

const racunSlice=createSlice({
    name:'racun',
    initialState,
    reducers:{
        addRacun:(state,action:PayloadAction<Racun>)=>{
            const existingID=state.find((item)=>item.id===action.payload.id);
            const existingBrRac=state.find((item)=>item.brRacuna===action.payload.brRacuna)
            if(existingID || existingBrRac){
                console.log('error')
                
            }
            else{
                return [action.payload,...state]
            };
            
        },
        deleteRacun:(state,action:PayloadAction<number>)=>{
            return state= state.filter(racun=>racun.id!==action.payload);
        },
        updateRacun: (state, action: PayloadAction<Racun>) => {
            const {
                payload: {id,brRacuna,RBR,smjer,datumRacuna,rokPlacanja,nazivPartner,adresaPartnera,OIBPartnera,iznosPrije,porez,iznosPoreza,saPorezon},
              } = action;
            return state=state.map((racun) =>racun.id === id ? { ...racun, id,brRacuna,RBR,smjer,datumRacuna,rokPlacanja,nazivPartner,adresaPartnera,OIBPartnera,iznosPrije,porez,iznosPoreza,saPorezon } : racun);
        },
        sortSilazno:(state,action:PayloadAction<string>)=>{
            if(action.payload==='id'){
                return state=state.sort((a,b)=>b.id-a.id)
            }
            switch(action.payload){
                case 'id':
                    return state=state.sort((a,b)=>b.id-a.id)

                case 'brRacun':
                    return state=state.sort((a,b)=>b.brRacuna > a.brRacuna ? 1 : b.brRacuna < a.brRacuna ? -1 : 0)
                case 'RBR':
                    return state=state.sort((a,b)=>b.RBR-a.RBR)
                case 'smjer':
                    return state=state.sort((a,b)=>a.smjer > b.smjer ? 1 : a.smjer < b.smjer ? -1 : 0)
                case 'datumRacuna':
                    return state=state.sort((a,b)=>b.datumRacuna.getTime() - a.datumRacuna.getTime())
                case 'nazivPartnera':
                    return state=state.sort((a,b)=>a.nazivPartner > b.nazivPartner ? 1 : a.nazivPartner < b.nazivPartner ? -1 : 0)
                case 'saPorezom':
                    return state=state.sort((a,b)=>b.saPorezon-a.saPorezon)
            }
        },
        sortUzlazno:(state,action:PayloadAction<string>)=>{

            switch(action.payload){
                case 'id':
                    return state=state.sort((a,b)=>a.id-b.id)

                case 'brRacun':
                    return state=state.sort((a,b)=>a.brRacuna > b.brRacuna ? 1 : a.brRacuna < b.brRacuna ? -1 : 0)
                case 'RBR':
                    return state=state.sort((a,b)=>a.RBR-b.RBR)
                case 'smjer':
                    return state=state.sort((a,b)=>a.smjer > b.smjer ? 1 : a.smjer < b.smjer ? -1 : 0)
                case 'datumRacuna':
                    return state=state.sort((a,b)=>a.datumRacuna.getTime()  - b.datumRacuna.getTime())
                case 'nazivPartnera':
                    return state=state.sort((a,b)=>b.nazivPartner > a.nazivPartner ? 1 : b.nazivPartner < a.nazivPartner ? -1 : 0)
                case 'saPorezom':
                    return state=state.sort((a,b)=>a.saPorezon-b.saPorezon)
            }
        }

    }
})


export const getRacunSelector=(state:RootState)=>state.racun;
export const {addRacun,deleteRacun,updateRacun,sortSilazno,sortUzlazno}=racunSlice.actions;

export default racunSlice.reducer;