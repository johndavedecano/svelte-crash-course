<script>
	export let data;

	$: post = data.post || [];
</script>

<div class="container">
	<div class="card">
		<div class="card-header">Manage Posts</div>
		<div class="card-body">
			<h3>
				{post.title}
			</h3>
			<div class="text-muted">Author: {post.userId}</div>
			<div class="text-base">
				{@html post.content}
			</div>
		</div>
	</div>
</div>
