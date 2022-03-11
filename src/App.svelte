<script>
	import {Router, Route} from "svelte-navigator";

	import Login from './components/Login.svelte';
	import Signup from './components/Signup.svelte';
	import Navbar from './components/Navbar.svelte';
	import Posts from './components/Posts.svelte';
	import Practice from './components/Practice.svelte';

	import {addPost} from './stores/store';

	function postAPost(e) {
		const formData = new FormData(e.target);
		const data = {};
    	for (let field of formData) {
      		const [key, value] = field;
      		data[key] = value;
    	}
    	console.log(data)
		addPost(data);
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
		<Route path="practice" component={Practice} />
		<Route>
			<h1>Tailwind css has been added finally</h1>
			<form on:submit|preventDefault={postAPost} class="content">
				<label for="content">Post</label>
				<input id="content" name="content" type="text" value="" />
				<input id="date" name="created_at" type="hidden" value={new Date()}>
				<button type="submit">Post</button>
			</form>
			<Posts />
		</Route>
	</main>
</Router>

<style>
</style>