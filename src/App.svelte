<script>
	import {Router, Route} from "svelte-navigator";

	import Login from './components/Login.svelte';
	import Signup from './components/Signup.svelte';
	import Navbar from './components/Navbar.svelte';
	import Posts from './components/Posts.svelte';
	import Practice from './components/Practice.svelte';

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
			<Posts />
		</Route>
	</main>
</Router>

<style>

</style>