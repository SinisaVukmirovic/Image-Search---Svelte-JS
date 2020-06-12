<script>
	import searchImage from './apiCall.js';

	let searchTerm = '';
	let searchingImg = false;

	async function formSubmitted() {
		console.log(searchTerm);
		searchingImg = true;

		const images = await searchImage(searchTerm);
		console.log(images);
	}
</script>

<div class="app">
	<h1>Svelte Image Search</h1>
	<h4>with Nature Images API</h4>

	<form on:submit|preventDefault={formSubmitted}>
		<label for="search-term">Search:</label>
		<input bind:value={searchTerm} type="text" name="search-term" />
		<button type="submit">Search</button>
	</form>

	{#if searchingImg}
		<img id="searchingImg" src="../searching.gif" alt="Searching...">
	{/if}

	<section class="images"></section>
</div>