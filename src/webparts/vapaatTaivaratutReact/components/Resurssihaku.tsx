import * as React from 'react';

interface propsit  {
    myValue: any;  
}

class Resurssihaku extends React.Component<propsit> {


    state = { alkupvm: new Date(), loppupvm: new Date(), paikkakunnat: new Array<string>(), tyypit: new Array<string>()};

constructor(props : propsit) 
{
    super(props);
    this.state =  {alkupvm: new Date(), loppupvm: new Date(), paikkakunnat: new Array<string>(), tyypit: new Array<string>()};
   
}

private radioButtonChange = (e) => {
    console.log('radiobutton changed. Value: ', e.currentTarget.value);
    
}

private listChange = (e) => {
    if (this.state.paikkakunnat.indexOf(e.currentTarget.value) == -1) {
        this.state.paikkakunnat.push(e.currentTarget.value);
    }
    else {
        this.state.paikkakunnat.splice(this.state.paikkakunnat.indexOf(e.currentTarget.value), 1);
    }
    console.log('listcomponent changed. Value: ', e.currentTarget.value);
    console.log("paikkakunnat: " + this.state.paikkakunnat);
}

private tyyppiChange = (e) => { 
    if (this.state.tyypit.indexOf(e.currentTarget.value) == -1) {
    this.state.tyypit.push(e.currentTarget.value);
}
else {
    this.state.tyypit.splice(this.state.tyypit.indexOf(e.currentTarget.value), 1);
}
console.log('tyypit changed. Value: ', e.currentTarget.value);
console.log("tyypit: " + this.state.tyypit);
this.props.myValue();

}


render() {
    return (
    <div>
     <div className="form-inline">
      <div className="row">
        <div id="resurssihaku"><h1><b>Hae vapaat tilat:</b></h1><br /><br /></div>
       </div>
        <div className="row">
          <div className="col-lg-5"></div>
            <input type="radio" name="resurssihaku" value="vapaat" onChange={this.radioButtonChange} /> Vapaat tilat <br />
            <input type="radio" name="resurssihaku" value="varatut" onChange={this.radioButtonChange} /> Varatut tilat <br />
            <input type="radio" name="resurssihaku" value="infotv" onChange={this.radioButtonChange} /> Varatut tilat INFOTV-NÄKYMÄ <br />
            <input type="radio" name="resurssihaku" value="ruokailijat" onChange={this.radioButtonChange} /><b>Wilma ARVIO</b> viikon päiväkohtaisista ruokailijamääristä toimipisteittäin <br />
            <input type="radio" name="resurssihaku" value="ruokailijat2" onChange={this.radioButtonChange} /><b>Primukseen perustuva arvio</b> viikon päiväkohtaisista ruokailijamääristä toimipisteittäin <br />
            </div>
        </div>
        <div className="col-lg-5">
                <div className="col-lg-6"><div id="pvmTxt">Pvm: </div><input type="text" id="alkaenpvm" value={this.state.alkupvm.toLocaleDateString("fi-FI")} /></div>

                <div className="col-lg-6">
                    <div id="paattyenPvmTxt">Päättyen pvm: </div><input type="text" id="paattyenpvm" value={this.state.loppupvm.toLocaleDateString("fi-FI")} />
                </div>
            </div>
            <br /><br />
            <div className="row">
            <input type="radio" name="ajankohta" value="kokop" onChange={this.radioButtonChange}  /> Koko työpäivä (klo 8-16) <br />
            <input type="radio" name="ajankohta" value="kokop2" onChange={this.radioButtonChange} /> Koko päivä (klo 8-21) <br />
            <input type="radio" name="ajankohta" value="aamup" onChange={this.radioButtonChange} /> Aamupäivä (klo 8-12)<br />
            <input type="radio" name="ajankohta" value="iltap" onChange={this.radioButtonChange} /> Iltapäivä (klo 12-16)<br />
            <input type="radio" name="ajankohta" value="ilta" onChange={this.radioButtonChange} />  Ilta (klo 16-21)<br />
           </div>
           <div className="row">
            <div className="col-lg-5">
                <b>Valitse toimipiste:</b><br />
                <input className="form-check-input" type="checkbox" id="ASK" name="ASK" value="ASK" onChange={this.listChange} /> &nbsp;Askola (ASK)<br />
                <input className="form-check-input" type="checkbox" id="HER" name="HER" value="HER" onChange={this.listChange} /> &nbsp;Herttoniemi (HER)<br />
                <input className="form-check-input" type="checkbox" id="KER" name="KER" value="KER" onChange={this.listChange} /> &nbsp;Kerava (KER)<br/>
                <input className="form-check-input" type="checkbox" id="LOV" name="LOV" value="LOV" onChange={this.listChange} /> &nbsp;Loviisa (LOV)<br/>
                <input className="form-check-input" type="checkbox" id="AMT" name="AMT" value="AMT" onChange={this.listChange} /> &nbsp;Ammattitie (AMT)<br/>
                <input className="form-check-input" type="checkbox" id="PMT" name="PMT" value="PMT" onChange={this.listChange} /> &nbsp;Perämiehentie (PMT)<br/>
                <input className="form-check-input" type="checkbox" id="POM" name="POM" value="POM" onChange={this.listChange} /> &nbsp;Aleksanterinkatu, POMO-talo (POM)<br/>
                <input className="form-check-input" type="checkbox" id="VAN" name="VAN" value="VAN" onChange={this.listChange} /> &nbsp;Vantaa (VAN)<br/>
                <input className="form-check-input" type="checkbox" id="HKK" name="HKK" value="HKK" onChange={this.listChange} /> &nbsp;Hevosenkengänkatu (HKK)<br/>
                <input className="form-check-input" type="checkbox" id="LUN" name="LUN" value="LUN" onChange={this.listChange} /> &nbsp;Lundinkatu (LUN)<br/>
            </div>
            <div className="col-lg-5">
                <b>Valitse tyyppi: </b><br />
                <input className="form-check-input-type" type="checkbox" id="ALL" name="ALL" value="ALL" onChange={this.tyyppiChange} /> &nbsp;Valitse kaikki/Ei mitään <br />
                <input className="form-check-input-type" type="checkbox" id="ATK" name="ATK" value="ATK" onChange={this.tyyppiChange} /> &nbsp;ATK-luokka (ATK)<br />
                <input className="form-check-input-type" type="checkbox" id="ERI" name="ERI" value="ERI" onChange={this.tyyppiChange} /> &nbsp;Erikoistila (ERI)<br />
                <input className="form-check-input-type" type="checkbox" id="KIE" name="KIE" value="KIE" onChange={this.tyyppiChange} /> &nbsp;Kielistudio (KIE)<br />
                <input className="form-check-input-type" type="checkbox" id="LII" name="LII" value="LII" onChange={this.tyyppiChange} /> &nbsp;Liikuntasali (LII)<br />
                <input className="form-check-input-type" type="checkbox" id="LUE" name="LUE" value="LUE" onChange={this.tyyppiChange} /> &nbsp;Luentosali (LUE)<br />
                <input className="form-check-input-type" type="checkbox" id="NEU" name="NEU" value="NEU" onChange={this.tyyppiChange} /> &nbsp;Neuvotteluhuone (NEU) <br />
                <input className="form-check-input-type" type="checkbox" id="TEO" name="TEO" value="TEO" onChange={this.tyyppiChange} /> &nbsp;Teoriatila (TEO) <br />
                <input className="form-check-input-type" type="checkbox" id="YKS" name="YKS" value="YKS" onChange={this.tyyppiChange} /> &nbsp;Yksilöohjaushuone (YKS) <br />
                <input className="form-check-input-type" type="checkbox" id="MUU" name="MUU" value="MUU" onChange={this.tyyppiChange} /> &nbsp;Muun tyyyppinen tila (MUU) <br />

            </div>
            </div>  
        </div>   
        
);
}
}
export default Resurssihaku;
