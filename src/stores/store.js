import {writable} from "svelte/store";

const posts = writable([]);
const isModal = writable(false);

function openModal() {
	isModal.update(val => val = true);
}

function closeModal() {
	isModal.update(val => val = false);
}

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

async function deletePost(id) {
	await fetch(`http://localhost:4000/api/posts/${id}`, {
		method: 'DELETE'
	}).then(res => {
		posts.update(posts => posts.filter((post) => {
			return post._id !== id;
		}));
	}).catch(error => {
		console.log(error);
		return error;
	});
}

export { posts, populatePosts, addPost, deletePost, isModal, openModal, closeModal };