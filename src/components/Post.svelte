<script>
export let content;
export let date;
</script>
<!--Let's make a div for posts-->
<div class="post-card">
    <p>{content}</p>
    <div class="date">
        <h2>{date}</h2>
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

    .date {
        display: block;
        position: absolute;
        bottom: 0px;
    }
</style>