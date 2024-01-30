<script>
	export let data;

	$: posts = data.userPosts || [];
</script>

<div class="container">
	<div class="card">
		<div class="card-header">Manage Posts</div>
		<div class="card-body">
			{#each posts as item}
				<h3 class="mb-2">
					<a href="/posts/{item.id}"> {item.title} </a>
				</h3>
			{:else}
				<div class="text-muted">No posts yet</div>
				<a href="/posts/create">create new post</a>
			{/each}
		</div>
	</div>
</div>
