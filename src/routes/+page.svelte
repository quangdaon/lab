<script lang="ts">
	export let data;

	const apps = data.apps;
</script>

<div class="container">
	<div class="intro">
		<h1>Welcome to My Lab</h1>
	</div>

	<div class="apps">
		{#each apps as app}
			<div class="app">
				<h2> 
					<a rel="external" href="/{app.path}">{app.name}</a>
				</h2>
        <p>{app.description}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
	}

	.container {
		max-width: 1080px;
		margin: auto;
	}

	.intro {
		text-align: center;
	}
</style>
