import React, { useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';

import CupsToOunces from './CupsToOunces';
import GallonsToLiters from './GallonsToLiters';

function Main() {
  const [key, setKey] = useState('gallons')

  return (
		<Container className='bg-light rounded-5 p-5'>
			<Tabs
				id='conversion-selector'
				activeKey={key}
				onSelect={(k) => setKey(k)}>
				<Tab eventKey='gallons' title='Gallons to Liters' className='p-5'>
					<GallonsToLiters />
				</Tab>
				<Tab eventKey='ounces' title='Cups to Ounces' className='p-5'>
					<CupsToOunces />
				</Tab>
			</Tabs>
		</Container>
	);
}

export default Main;
