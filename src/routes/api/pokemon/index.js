export async function get({params}) {
  const num = 150;
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
	const res = await fetch(url);
	const data = await res.json();
	const pokemons = data.results.map((data, index) => {
		return {
			name: data.name,
			id: `${index + 1}`,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	return {
		status: 200,
		body: pokemons
	};
}