import {writable} from 'svelte/store';

const count = writable(0);

const post = writable({
    content: "",
    date: new Date()
});

function increment() {
    count.update(v => v = v + 1)
}

export { count, increment, post }