function fetchPosts() {
    let posts = fetch("http://localhost:4000/api/posts")
		.then(res => res.json())
		.then(data => {
			return data;
		}).catch(error => {
			console.log(error);
			return [];
		});
    return posts;
}

export default fetchPosts;