<script>
	import { goto } from '$app/navigation';

	/** @type {import('./$types').LayoutData} */
	export let data;

	$: user = data.user;
</script>

<header class="p-3 mb-3 border-bottom">
	<div class="container">
		<div
			class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
		>
			<a
				href="/"
				class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
			>
				<svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"
					><use xlink:href="#bootstrap"></use></svg
				>
			</a>

			<ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
				<li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
				<li><a href="/posts" class="nav-link px-2 link-body-emphasis">Posts</a></li>
			</ul>

			{#if user}
				<div class="text-end d-flex align-items-center">
					<div class="me-2">
						Welcome, <span class="fw-bold">{user.name}</span>
					</div>
					<button
						type="button"
						class="btn btn-outline-primary me-2"
						on:click={() => goto('/logout')}>Logout</button
					>
				</div>
			{:else}
				<div class="col-md-3 text-end">
					<button type="button" class="btn btn-outline-primary me-2" on:click={() => goto('/login')}
						>Login</button
					>
					<button type="button" class="btn btn-primary" on:click={() => goto('/register')}
						>Sign-up</button
					>
				</div>
			{/if}
		</div>
	</div>
</header>

<slot />
