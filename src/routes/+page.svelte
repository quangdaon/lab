<script lang="ts">
	export let data;

	const apps = data.apps;
</script>

<main class="container">
	<header class="intro">
		<h1>Welcome to My Lab</h1>
		<p>
			This is where I publish one-off experimental projects, usually related to math or science.
		</p>
	</header>

	<section class="apps">
		{#each apps as app}
			<article class="app">
				<h2>
					{#if app.externalLink}
						<a href={app.externalLink} target="_blank" rel="noreferrer">{app.name}</a>
					{:else}
						<a href="/{app.path}" rel="external">{app.name}</a>
					{/if}
				</h2>
				<p>{@html app.description}</p>
				{#if app.links}
					<p class="links">
						{#each app.links as link}
							<a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
						{/each}
					</p>
				{/if}
			</article>
		{/each}
	</section>

	<footer class="footer">
		A <a href="https://www.quangdao.com">Quangdao Nguyen</a> catastrophe. All rights reserved. |
		<a href="https://github.com/quangdaon/lab" target="_blank" rel="noreferrer">Repo</a>
	</footer>
</main>

<style>
	:global(body) {
		font-size: 24px;
		line-height: 1.5;
		margin: 1em 0;
	}

	.container {
		max-width: 1080px;
		padding: 0 1em;
		margin: auto;
	}

	.app {
		margin: 2em 0;
	}

	h2 {
		margin-bottom: 0.5em;
	}

	.intro {
		text-align: center;
	}

	.links a {
		display: inline-block;
		margin-right: 0.5em;
		margin-top: 0.5em;
	}

	.footer {
		margin-top: 2em;
		text-align: center;
	}
</style>
