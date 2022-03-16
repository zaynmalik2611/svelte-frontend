<script>
    import {populatePosts, posts, addPost} from '../stores/store';
    import {onMount} from "svelte";

    import Fa from 'svelte-fa';
    import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

    import Post from './Post.svelte';

    let content = "";
    $: isDisabled = content.length === 0 ? true: false;

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
        console.log(data);
		// addPost(data);
	}


</script>
<div class="posts-div">
    <form on:submit|preventDefault={postAPost} class="post-form">
        <label class="content-label" for="content">Post</label>
        <input class="content-input" id="content" name="content" type="text" bind:value={content} />
        <label class="post-image-label" for="image"><Fa class="inline-block mr-1" icon={faCloudArrowUp} />Image Upload</label>
        <input type="file" name="image" id="image">
        <!-- <progress id="file" value="32" max="100"> 32% </progress> -->
        <input id="date" name="created_at" type="hidden" value={new Date().toISOString()}>
        <button disabled={isDisabled} 
            style="--bg-color: {isDisabled ? '': 'black'};--text-color: {isDisabled ? '#ababab': 'white'};" 
            class="post-btn" type="submit">Post</button>
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

    .content-label {
        text-align: center;
    }

    .content-input {
		height: 38px;
        width: 375px;
		padding: 3px 3px;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    /* progress[value] {
        width: 375px;
        height: 7px;
        margin-bottom: 3px;
    }
    progress[value]::-webkit-progress-bar {
        background-color: #eee;
        border-radius: 2px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }
    progress[value]::-webkit-progress-value {
        background-color: blue;    
    } */
    .post-image-label {
        border: 1px solid #ccc;
        display: block;
        padding: 6px 12px;
        border-radius: 5px;
        cursor: pointer;
    }
    input[type="file"] {
        display: none;
    }
	.post-btn {
        display: block;
		padding: 9px 35px;
		border-radius: 7px;
        margin: auto;
        margin-top: 9px;
	}

	.post-btn:hover {
		background-color: var(--bg-color);
		color: var(--text-color);
	}

    .posts-heading {
        margin-bottom: 10px;
    }

</style>