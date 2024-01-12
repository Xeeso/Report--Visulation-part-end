import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import FileInput from "./Fileinput";
import Datainput from "./LineChart/LineChart";
import  BarChart from "./BarChart/BarChart";
import  PieChart from "./PieChart/PieChart";

function App() {
  return (
     <div className="content">
        <h1>Excel to JSON Converter</h1>
        <div className="d-flex justify-content-around">
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Title>Line Chart</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Pie Chart</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Dount Chart</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Bar Chart</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </div>
        <div className="d-flex justify-content-around">
            <FileInput />
            <Datainput />
        </div>
        <div className="d-flex justify-content-around">
            <BarChart />
            <PieChart />
        </div>
    </div>
  );
}
export default App;
