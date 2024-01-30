<script>
	export let data;

	$: posts = data.posts || [];
</script>

<div class="container">
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<h2>Latest News</h2>
	{#each posts as item}
		<div class="card mb-2">
			<div class="card-body">
				<h3>
					<a href="/posts/{item.id}"> {item.title} </a>
				</h3>
			</div>
		</div>
	{:else}
		<div class="text-muted">No posts yet</div>
		<a href="/posts/create">create new post</a>
	{/each}
</div>
