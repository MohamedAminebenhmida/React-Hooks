import React from "react";
import './MovieCard.css'
import Card from 'react-bootstrap/Card';
function movie({title,posterUrl,description,rate}) {

  return ( 
    <div className="movie-figure">
    <Card style={{ width: '18rem',height:'540px' }}>
    <Card.Img variant="top" src={posterUrl} style={{ width: '18rem',height:'340px' }}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
  
    <Card.Text>
        {rate}
      </Card.Text>
  </Card>  
  </div>
   );
}
export default movie ;