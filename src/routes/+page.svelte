<script lang="ts">
	export let data;

	const apps = data.apps;
</script>

<main class="container">
	<header class="intro">
		<h1>Welcome to My Lab</h1>
		<p>
			This is where I will be publish one-off experimental projects, usually related to math or
			science.
		</p>
	</header>

	<section class="apps">
		{#each apps as app}
			<article class="app">
				<h2>
					<a rel="external" href="/{app.path}">{app.name}</a>
				</h2>
				<p>{@html app.description}</p>
				<p><a href={app.repo} target="_blank" rel="noreferrer">View Source Code</a></p>
			</article>
		{/each}
	</section>

	<footer class="footer">
		&copy;{new Date().getFullYear()} Quangdao Nguyen |
		<a href="https://github.com/quangdaon/lab" target="_blank" rel="noreferrer">Repo</a>
	</footer>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Golos+Text&display=swap');
	:global(body) {
		margin: 0;
		font-family: 'Golos Text', sans-serif;
	}

	.container {
		max-width: 1080px;
		padding: 0 1em;
		margin: auto;
	}

	.app {
		margin: 2em 0;
	}

	.intro {
		text-align: center;
	}

	.footer {
		margin-top: 2em;
		text-align: center;
	}
</style>
