<script>
    import {isModal, closeModal} from '../stores/store';
    export let content;
    export let date;
    export let imageUrl;
</script>
<!--Let's define the image here as well-->
<!--Let's make another functionality. Some functionality that shows something on the site-->
<!--I think i should make image posting functionality-->

<div id="background" style="--display: {$isModal ? 'block' : 'none'};" on:click={closeModal}></div>

<div id="modal" style="--display: {$isModal ? 'block' : 'none'};">
    <div>
        <img src={imageUrl} alt="">
    </div>
    <p id="modal-content">{content}</p>
    <p id="modal-date">{date}</p>
</div>

<style>
    #background {
        display: var(--display);
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
    #modal {
        display: var(--display);
        position: fixed;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        filter: drop-shadow(0 0 20px #333);
    }
    #modal-content{
        padding: 10px 20px
    }
    #modal-date {
        text-align: right;
        font-size: 11px;
        font-weight: 300;
        padding: 0px 20px 10px 0px;
    }
</style>