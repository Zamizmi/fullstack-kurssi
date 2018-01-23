import React from 'react'
import ReactDOM from 'react-dom'
import Kurssi from './components/Kurssi'

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

  const kurssi  =
    [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <div>
      {kurssi.map(kurssi =>
      <div key={kurssi.id}>
         <Kurssi props={kurssi}/>
      </div>)}
    </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
