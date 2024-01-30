<script>
	import { goto } from '$app/navigation';

	import axios from 'axios';

	let loading = false;
	let title;
	let content;

	const onSubmit = () => {
		loading = true;
		axios
			.post('/api/post', { title, content }, { headers: { 'content-type': 'application/json' } })
			.then(() => {
				goto('/posts');
				alert('successfully posted');
			})
			.catch((error) => {
				if (error && error.response && error.response.data && error.response.data.message) {
					alert(error.response.data.message);
				}
			})
			.finally(() => (loading = false));
	};
</script>

<div class="container">
	<div class="card">
		<div class="card-body">
			<div class="p-4">
				<div class="h2">New Post</div>
				<div class="mb-4 text-muted">Use the form below to submit a post.</div>
				<form action="" on:submit|preventDefault={onSubmit}>
					<div class="form-group mb-4">
						<label for="name">Title</label>
						<input
							type="text"
							bind:value={title}
							class="form-control mt-2"
							required
							placeholder="My Post"
							disabled={loading}
						/>
					</div>

					<div class="form-group mb-4">
						<label for="name">Content</label>
						<textarea
							rows="20"
							bind:value={content}
							class="form-control mt-2"
							required
							disabled={loading}
						/>
					</div>

					<button class="btn btn-primary mb-4 w-100" disabled={loading}> Submit </button>
				</form>
			</div>
		</div>
	</div>
</div>
