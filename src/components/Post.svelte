<script>
    import {deletePost} from '../stores/store';
export let content;
export let date;
export let id;
</script>
<!--Let's make a div for posts-->
<!--Let's make a mechanism to judge date -->
<!--Let's rather make a deleting mechanism for the dates-->
<div class="post-card">
    <p>{content}</p>
    <div class="date">
        <h2>{date}</h2>
    </div>
    <div class="delete-div">
        <button on:click={deletePost(id)} class="delete">Delete</button>
    </div>
    
    
</div>

<style>
    .post-card {
        position: relative;
        width: 250px;
        height: 200px;
        box-sizing: border-box;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin-bottom: 15px;
        padding: 10px;
    }

    .delete-div {
        position: relative;
        height: 135px;
    }
    .date {
        display: block;
        position: absolute;
        bottom: 0px;
    }
    .delete {
        display: block;
        position: absolute;
        bottom: 0px;
        background-color: rgb(255, 15, 15);
        color: white;
        padding: 7px 16px;
        border: none;
    }
    .delete:hover {
        background-color: rgb(255, 0, 0);
    }
    .delete:active {
        background-color: rgb(255, 0, 0);
    }
</style>