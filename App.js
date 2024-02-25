import logo from './logo.svg';
import './App.css';

function App() {
 

const details = {

    name:["sadiq","rahul","arfath"],
    age:[25,26,26],
    no :[7892652144,74588684698,92879793904],
    place:["Pune","banglore"],
    work:["TCS","police","Mercedes-Benz"]
    
}

 let myself = ["Details"];

  return (
    
    <div>

    <h1>{myself + "of my friends"}</h1>
    <h1>{myself[1]}</h1>

    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', border: '5px solid #ddd',}}>

        <thead style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', border: '1px solid #ddd' }}>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th>Name</th>
                <th>Age</th>
                <th>number</th>
                <th>Occupation</th>
                <th>place</th>
                
                
            </tr>
        </thead>
        <tbody >
          
            <tr style= {{border: '5px solid #ddd'}}>
                <td>{details.name[0]}</td>
                <td>{details.age[0]}</td>
                <td>{details.no[0]}</td>
                <td>{details.work[0]}</td>
                <td>{details.place[0]}</td>
            </tr>
            <tr style= {{border: '5px solid #ddd'}}>
                <td>{details.name[1]}</td>
                <td>{details.age[1]}</td>
                <td>{details.no[1]}</td>
                <td>{details.work[1]}</td>
                <td>{details.place[1]}</td>
            </tr>
            <tr style= {{border: '5px solid #ddd'}}>
                <td>{details.name[2]}</td>
                <td>{details.age[2]}</td>
                <td>{details.no[2]}</td>
                <td>{details.work[2]}</td>
                <td>{details.place[1]}</td>
            </tr>
        </tbody>
    </table>
    </div>
  );
}

export default App;
