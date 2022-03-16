<script>
    import {deletePost, isModal, openModal} from '../stores/store';
    import Modal from './Modal.svelte';
    import moment from 'moment';
    export let content;
    export let date;
// export let id;

    let imageUrl = "/images/missing.jpg";


moment.updateLocale('en', {
    relativeTime : {
        future: "in %s",
        past:   "%s ago",
        s:  "s",
        m:  "1 m",
        mm: "%d m",
        h:  "1 h",
        hh: "%d h",
        d:  "1 d",
        dd: "%d d",
        M:  "1 mth",
        MM: "%d mth",
        y:  "1 y",
        yy: "%d y"
    }
});

</script>

<!--Let's make a commenting functionality-->
<!--First I will have to implement it in the frontend and then in the backend-->
<!--I think I should also implement the post card feature-->
<!--There should also be a post size limit-->
<!--Frontend is what is visible to people, I should work on the frontend more-->


<div class="post-card">
    <div class="post-image-div">
        <img src={imageUrl} alt="">
    </div>
    <div class="content-div">
        <p class="content">{content.slice(0, 155)}
            {#if content.length > 150}
                <span>...</span>
                <button on:click={openModal} class="read-more-btn">Read More</button>
                <Modal imageUrl={imageUrl} content={content} date={moment(date).fromNow()}/>
            {/if}
        </p>
    </div>
    
    <div class="date">
        <h2 id="post-date">{moment(date).fromNow()}</h2>
    </div>
    <!-- <div class="delete-div">
        <button on:click={deletePost(id)} class="delete">Delete</button>
    </div>
     -->
    
</div>

<style>
    .post-card {
        position: relative;
        width: 250px;
        box-sizing: border-box;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin-bottom: 15px;
        padding: 25px 20px 15px 20px;
    }

    .post-image-div {
        margin-bottom: 10px;
    }

    .content-div {
        height: 85%;
        overflow: hidden;
        margin-bottom: 14px;
    }

    /* .delete-div {
        position: relative;
        height: 135px;
    } */
    .date {
        display: block;
        position: absolute;
        bottom: 3px;
        right: 10px;
        padding-bottom: 5px;
        font-size: 11px;
        font-weight: 300;
    }

    /* .delete {
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
    } */

    .read-more-btn {
        font-size: small;
        border-radius: 8px;
        padding: 3px 5px;
    }
    .read-more-btn:hover {
        background-color: black;
        color: white;
    }
</style>