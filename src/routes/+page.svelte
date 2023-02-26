<script lang="ts">
	export let data;

	const apps = data.apps;
</script>

<main class="container">
	<header class="intro">
		<h1>Welcome to My Lab</h1>
	</header>

	<section class="apps">
		{#each apps as app}
			<article class="app">
				<h2>
					<a rel="external" href="/{app.path}">{app.name}</a>
				</h2>
				<p>{app.description}</p>
			</article>
		{/each}
	</section>

	<footer class="footer">
		&copy;{new Date().getFullYear()} Quangdao Nguyen |
		<a href="https://github.com/quangdaon/lab" target="_blank" rel="noreferrer">Repo</a>
	</footer>
</main>

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

	.footer {
		margin-top: 2em;
		text-align: center;
	}
</style>
