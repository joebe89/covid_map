import { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from '../components/Head.jsx';

const Marker = dynamic(() => import('../components/Marker.jsx'), {
	ssr: false,
});


function Home() {
	const [currentTab, setTab] = useState(null);

	const MapWithNoSSR = dynamic(() => import('../components/Map.jsx'), {
		ssr: false,
	});

	const tabs = [
		{
			title: 'Insight 1',
			data: [<Marker coords={[51.50231662893924, -0.2885731950705691]} />]
		},
		{
			title: 'Insight 2',
			data: [<Marker coords={[53.468825163298064, -2.315550596081499]} />]
		},
		{
			title: 'Insight 3',
			data: [<Marker coords={[51.10544704231317, -4.159193781705373]} />]
		},
	];
	return (
		<main>
			<Head title="COVID UK Map" />
			<section id="sidebar">
				<div id="header">
					<h3>COVID UK</h3>
					<h5>Insights on the map</h5>
				</div>
				<div className="divider" />
				{tabs.map(({ title }, idx) => {
					return (
						<a
							key={title}
							className={`tab ${currentTab === idx ? 'active' : ''}`}
							role="button"
							onClick={e => {
								e.preventDefault();
								setTab(prevState => prevState !== idx ? idx : null);
							}}
						>
							{title}
						</a>
					)
				})}
			</section>
			<section id="content">
				<div>
					<p>Select from the options in the sidebar to alter your insight</p>
				</div>
				<MapWithNoSSR data={typeof currentTab === 'number' && tabs[currentTab].data}/>
			</section>
		</main>
	);
}

export default Home;
