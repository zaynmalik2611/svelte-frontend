import {writable} from "svelte/store";

const posts = writable([]);

async function populatePosts() {
    let fetchedPosts = await fetch("http://localhost:4000/api/posts")
		.then(res => res.json())
		.then(data => {
			return data;
		}).catch(error => {
			console.log(error);
			return [];
		});
    posts.update(() => [...fetchedPosts]);
}

async function addPost(post) {
    await fetch('http://localhost:4000/api/posts/postAPost', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(post)
		}).then(res => {
            posts.update((posts) => [...posts, post]);
            return res;
        }).catch(error => {
            console.log(error);
            return error;
        });
}


export { posts, populatePosts, addPost };