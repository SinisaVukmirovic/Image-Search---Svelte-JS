<script>

</script>

<div class="app">
	<h1>Svelte Image Search</h1>
	<h4>with Nature Images API</h4>

	<form>
		<label for="search-term">Search:</label>
		<input type="text" name="search-term" />
		<button type="submit">Search</button>
	</form>

	<img id="searchingImg" src="../searching.gif" alt="Searching...">

	<section class="images"></section>
</div>