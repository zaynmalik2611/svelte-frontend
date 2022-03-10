<script>
	import {Router, Route, Link} from "svelte-navigator";

	import Login from './components/Login.svelte';
	import Signup from './components/Signup.svelte';
	import Navbar from './components/Navbar.svelte';

	import {post} from './stores/store';

	import {onMount} from "svelte";
	let posts = [];

	let foo = 'baz';
	let bar = 'qux';

	onMount(async () => {
		fetch("http://localhost:4000/api/posts")
		.then(res => res.json())
		.then(data => {
			posts = data;
			console.log(posts);
		}).catch(error => {
			console.log(error);
			return [];
		});
	});

	async function doPost(body) {
		console.log("body: ", body);
		await fetch('http://localhost:4000/api/posts/postAPost', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
	}

	function postAPost(e) {
		const formData = new FormData(e.target);
		const data = {};
    	for (let field of formData) {
      		const [key, value] = field;
      		data[key] = value;
    	}
    	console.log(data)
		doPost(data);
	}
</script>
<Router>
	<header>
		<Navbar />
	</header>
	<main>
		<!--Now our focus should be on building the logic of the application-->
		<!--What does our application do?-->
		<!--Let's make a simple form that add posts-->
		<!--But we also need a backend for our application, so let's build a backend first-->
		<Route path="login" component={Login} />
		<Route path="signup" component={Signup} />
		<Route>
			<h1>Tailwind css has been added finally</h1>
			<form on:submit|preventDefault={postAPost} class="content">
				<label for="content">Post</label>
				<input id="content" name="content" type="text" value="" />
				<input id="date" name="created_at" type="hidden" value={new Date()}>
				<button type="submit">Post</button>
			</form>
			<h2>Posts</h2>
			<ul>
				{#each posts as post}
					<li>{post.content}...{post.created_at}</li>
				{/each}
			</ul>
		</Route>
	</main>
</Router>

<style>
</style>