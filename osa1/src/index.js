import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) =>{
  return(
    <div>
      <h1>{props.kurssi.nimi}</h1>
    </div>
  )
}

const Sisalto = (props) =>{
  return(
    <div>
      <p> {props.osat[0].nimi} {props.osat[0].tehtavia} </p>
      <p> {props.osat[1].nimi} {props.osat[1].tehtavia} </p>
      <p> {props.osat[2].nimi} {props.osat[2].tehtavia} </p>
    </div>
  )
}

const Yhteensa = (props) => {
  return(
    <div>
      <p>yhteensä: {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
    </div>
  )
}

const Button = ({handler, text}) => (
  <button onClick={handler}>{text}</button>
)

const Statistic = ({arvo, text}) => {
  if (isNaN(arvo)) {
    return(
      <td>{text}: {0}</td>
    )
  } else {
    return(
      <td>{text}: {arvo}</td>
    )
  }
}

const Statistics = (props) => {
  if (props.state.kaikki === 0) {
    return(
      <h3>Yhtään palautetta ei ole annettu</h3>
    )
  } else {
    return(
      <div>
        <h2> Statistiikkaa </h2>
        <table>
          <tbody>
            <tr>
              <Statistic arvo={props.state.hyvä} text ='Hyviä: '/>
            </tr>
            <tr>
              <Statistic arvo={props.state.neutraali} text ='Neutraaleja: '/>
            </tr>
            <tr>
              <Statistic arvo={props.state.huono} text ='Huonoja: '/>
            </tr>
            <tr>
              <Statistic arvo={(props.state.hyvä-props.state.huono)/props.state.kaikki} text ='Keskiarvo: '/>
            </tr>
            <tr>
              <Statistic arvo={props.state.hyvä/props.state.kaikki} text ='Positiivisia: '/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

class Unicafe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyvä: 0,
      neutraali: 0,
      huono:0,
      kaikki: 0
    }
  }

  klik = (arvo) => {
    return () => {
      if (arvo === 0) {
      this.setState({
         hyvä: this.state.hyvä +1,
         kaikki: this.state.kaikki + 1
       })
     } else if (arvo === 1) {
       this.setState({
          neutraali: this.state.neutraali +1,
          kaikki: this.state.kaikki + 1
        })
      } else {
        this.setState({
           huono: this.state.huono +1,
           kaikki: this.state.kaikki + 1
         })
      }
     }
    }

  positiivisia = (props) => {
    return(props.state.hyvä/props.state.kaikki)
  }

  render() {
    return (
      <div>
        <h1>Unicafe</h1>
        <h2>Anna palautetta</h2>
        <div>
        <table>
            <tbody>
              <tr>
                <td><Button handler={this.klik(0)} text="Hyvä"/></td>
                <td><Button handler={this.klik(1)} text="Neutraali"/></td>
                <td><Button handler={this.klik(2)} text="Huono"/></td>
              </tr>
            </tbody>
          </table>
          <Statistics state={this.state}/>
        </div>
      </div>
    )
  }
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko kurssi = {kurssi}/>
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
      <br/>
      <Unicafe/>
      <br/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
