<script>
    import {populatePosts, posts} from '../stores/store';
    import {onMount} from "svelte";

    import Post from './Post.svelte';

    onMount(async () => {
        await populatePosts();
	});

</script>

<div class="posts-div">
    <h2 class="posts-heading">Posts</h2>
    <ul>
        {#each $posts as post}
            <Post content={post.content} date={post.created_at} />
        {/each}
    </ul>
</div>

<style>

.posts-div {
    margin: auto;
    width: fit-content;
}

.posts-heading {
    margin-bottom: 10px;
}

</style>