import React from 'react';
import Price from './component/Price';
import Name from './component/Name';
import Description from './component/Description';
import Image from './component/Image';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const firstName="yosri";
  return (
     <div>
     <Card style={{ width: '18rem' }}>
     <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description/>
        <Price/>
        </Card.Text>
        
      </Card.Body>
    </Card>
      {
        firstName!=="" ? <img src="https://motorolaus.vtexassets.com/arquivos/ids/162813/thinkphone-pdp-ecom-render-5-carbon-black-qq6n0fna.png?v=638084623680430000" alt=''/> :<h1>hello there</h1>
      }
     </div>
  );
}

export default App;
