<script>
	import { goto } from '$app/navigation';

	import axios from 'axios';

	let loading = false;
	let email;
	let password;

	const onSubmit = () => {
		loading = true;
		axios
			.post(
				'/api/auth/login',
				{ email, password },
				{ headers: { 'content-type': 'application/json' } }
			)
			.then(() => goto('/'))
			.catch((error) => {
				if (error && error.response && error.response.data && error.response.data.message) {
					alert(error.response.data.message);
				}
			})
			.finally(() => (loading = false));
	};

	const onRegister = () => goto('/register');
</script>

<div class="col-12 col-lg-6 col-xl-4 px-4">
	<div class="card">
		<div class="card-body">
			<div class="p-4">
				<div class="h2">Account Login</div>
				<div class="mb-4 text-muted">Use the form below to get started.</div>
				<form action="" on:submit|preventDefault={onSubmit}>
					<div class="form-group mb-4">
						<label for="email">Email Address</label>
						<input
							type="email"
							bind:value={email}
							class="form-control mt-2"
							required
							placeholder="test@test.com"
							disabled={loading}
						/>
					</div>

					<div class="form-group mb-4">
						<label for="email">Password</label>
						<input
							type="password"
							bind:value={password}
							class="form-control mt-2"
							required
							placeholder=""
							disabled={loading}
						/>
					</div>
					<button class="btn btn-primary mb-4 w-100" disabled={loading}> Submit </button>
					<button
						class="btn btn-outline-primary w-100"
						disabled={loading}
						type="button"
						on:click={onRegister}
					>
						Register
					</button>
				</form>
			</div>
		</div>
	</div>
</div>
