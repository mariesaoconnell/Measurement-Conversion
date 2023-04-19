import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

function CupsToOunces(props) {

  let [cups, setCups] = useState(0);
  let [ounces, setOunces] = useState(0);

  function cupsToOuncesAlg(C){
    return C * 8
  }

  function handleChange(event){
    setCups(event.target.value)  }

  useEffect(()=>{
    setOunces(cupsToOuncesAlg(cups))
  }, [cups, ounces])

  return (
		<Container>
			<h3 className='pb-5 text-center'>Cups to Ounces</h3>

			<Form>
				<Row>
					<Col>
						<Form.Group className='d-inline-flex'>
							<Form.Control type='number' min='0' onChange={handleChange} />
							<Form.Label className='m-auto px-4'>Cups</Form.Label>
						</Form.Group>
					</Col>
					<Col>
						<h2>=</h2>
					</Col>
					<Col>
						<Form.Group className='d-inline-flex'>
							<Form.Control disabled value={ounces} />
							<Form.Label className='m-auto px-4'>Ounces</Form.Label>
						</Form.Group>
					</Col>
				</Row>
			</Form>
		</Container>
	);
}

export default CupsToOunces;
