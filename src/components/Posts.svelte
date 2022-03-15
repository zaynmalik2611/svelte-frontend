<script>
    import {populatePosts, posts, addPost} from '../stores/store';
    import {onMount} from "svelte";

    import Post from './Post.svelte';


    onMount(async () => {
        await populatePosts();
	});

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
<div class="posts-div">
    <form on:submit|preventDefault={postAPost} class="post-form">
        <label for="content">Post</label>
        <input class="content-input" id="content" name="content" type="text" value="" />
        <input id="date" name="created_at" type="hidden" value={new Date().toISOString()}>
        <button class="post-btn" type="submit">Post</button>
    </form>
    <div class="posts-div">
        <h2 class="posts-heading">Posts</h2>
        <ul>
            {#each $posts as post}
                <Post id={post._id} content={post.content} date={post.created_at} />
            {/each}
        </ul>
    </div>
</div>

<style>
    .post-form {
        margin-bottom: 20px;
    }
    .posts-div {
        margin: auto;
        width: fit-content;
    }

    .content-input {
		height: 38px;
        width: 375px;
		padding: 3px 3px;
        border-radius: 5px;
    }

	.post-btn {
		padding: 7px 15px;
		border-radius: 7px;
	}

	.post-btn:hover {
		background-color: black;
		color: white;
	}

    .posts-heading {
        margin-bottom: 10px;
    }

</style>