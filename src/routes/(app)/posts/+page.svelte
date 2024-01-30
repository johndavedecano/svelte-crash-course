<script>
	import axios from 'axios';

	export let data;

	let posts = data.userPosts || [];

	const onDelete = (id) => {
		const conf = window.confirm('are you sure you wanna delete this item?');

		if (conf) {
			axios.delete('/api/post/' + id).then(() => {
				posts = posts.filter((item) => item.id !== id);
			});
		}
	};
</script>

<div class="container">
	<div class="card">
		<div class="card-header d-flex">
			<div class="flex-grow-1">Manage Posts</div>
			<a href="/posts/create" class="btn btn-primary btn-sm">Add New</a>
		</div>
		<div class="card-body">
			{#each posts as item}
				<div class="d-flex align-items-center">
					<div class="flex-grow-1">
						<h3>
							<a href="/posts/{item.id}">
								{item.title}
							</a>
						</h3>
					</div>
					<a
						href="/"
						class="btn btn-sm btn-danger"
						on:click|preventDefault={() => onDelete(item.id)}>Delete</a
					>
				</div>
			{:else}
				<div class="text-muted">No posts yet</div>
				<a href="/posts/create">create new post</a>
			{/each}
		</div>
	</div>
</div>
