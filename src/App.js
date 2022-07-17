import PropTypes from 'prop-types'

function Food({name, picture, raiting}) {
	return (<div>
		<h3>I love {name}</h3>
		<h4>{raiting} / 5.0</h4>
		<img src={picture} alt='' />
		
	</div>)
}

const foodILike = [
	{
		'id': 1,
		'name': 'borsh',
		'image': 'https://images.unian.net/photos/2020_10/1602057485-3102.jpg?0.35294953458404765',
		'raiting': 4.9
	},
	{
		'id': 2,
		'name': 'soup',
		'image': 'https://www.bing.com/th?id=AMMS_c89aa7b8faa93870ac6b2f399e429cbc&w=306&h=459&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1',
		'raiting': 4.2
	},
	{
		'id': 3,
		'name': 'stack',
		'image': 'https://th.bing.com/th/id/R.cf8c79a92decdf9f1be3b17941dadc4e?rik=ehhObNZsfGnTJA&pid=ImgRaw&r=0',
		'raiting': 3.9
	},
	{
		'id': 4,
		'name': 'chicken',
		'image': 'https://th.bing.com/th/id/R.4a9884b70f19bdab905d391ff99b9d82?rik=U65kj87ypPayDg&pid=ImgRaw&r=0',
		'raiting': 4.1
	},
	{
		'id': 5,
		'name': 'fish',
		'image': 'https://th.bing.com/th/id/OIP.9iB5X7BEtVo5pQ3Ne69xvwHaEK?pid=ImgDet&rs=1',
		'raiting': 2.3
	},
]

function renderFood(el) {
	return <Food key={el.id} name={el.name} picture={el.image} raiting={el.raiting} />
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	raiting: PropTypes.number.isRequired
}

function App() {
	return (
		<div>
			{console.log(foodILike.map(renderFood))}
			{foodILike.map(renderFood)}
		</div>
	);
}

export default App;
