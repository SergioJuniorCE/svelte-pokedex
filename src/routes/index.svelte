<script context="module">
	export async function load({ page }) {
		const num = 150;
		const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
		const res = await fetch(url);
		const data = await res.json();
		const loadedPokemon = data.results.map((data, index) => {
			return {
				name: data.name,
				id: `${index + 1}`,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`
			};
		});
		return {
			props: {
				pokemons: loadedPokemon
			}
		};
	}
</script>

<script>
	import Pokecard from '../components/Pokecard.svelte';

	export let pokemons;

	let search = '';
	let filteredPokemon = [];

	$: {
		if (search) {
			filteredPokemon = pokemons.filter(
				(pokemon) =>
					pokemon.name.includes(search.toLocaleLowerCase()) ||
					pokemon.id.includes(search.toLocaleLowerCase())
			);
		} else {
			filteredPokemon = [...pokemons];
		}
	}
</script>

<svlete:head>
	<title>Pokemons</title>
</svlete:head>

<main>
	<h1 class="text-4xl text-center my-8 uppercase">Pokedex (made with Svelte!)</h1>

	<input
		class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
		type="text"
		placeholder="Search pokemon"
		bind:value={search}
	/>

	<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
		{#each filteredPokemon as pokemon}
			<Pokecard {pokemon} />
		{/each}
	</div>
</main>
