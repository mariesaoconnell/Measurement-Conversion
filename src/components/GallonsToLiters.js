import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

function GallonsToLiters(props) {

  let [gallons, setGallons] = useState(0);
  let [liters, setLiters] = useState(0);

  function gallonsToLitersAlg(G){
    return G * 3.785
  }

  function handleChange(event){
    setGallons(event.target.value)  }

  useEffect(()=>{
    setLiters(gallonsToLitersAlg(gallons))
  }, [gallons, liters])

  return (
		<Container>
			<h3 className='pb-5 text-center'>Gallons to Liters</h3>

			<Form>
				<Row>
					<Col>
						<Form.Group className='d-inline-flex'>
							<Form.Control type='number' min='0' onChange={handleChange} />
							<Form.Label className='m-auto px-4'>Gallons</Form.Label>
						</Form.Group>
					</Col>
					<Col>
						<h2>=</h2>
					</Col>
					<Col>
						<Form.Group className='d-inline-flex'>
							<Form.Control disabled value={liters}/>
							<Form.Label className='m-auto px-4'>Liters</Form.Label>
						</Form.Group>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}

export default GallonsToLiters;
