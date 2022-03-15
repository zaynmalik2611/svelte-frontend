<script>
    import {isModal, closeModal} from '../stores/store';
    export let content;
</script>
<div id="background" style="--display: {$isModal ? 'block' : 'none'};" on:click={closeModal}></div>

<div id="modal" style="--display: {$isModal ? 'block' : 'none'};">
    <p>{content}</p>
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
        padding: 25px 20px;
    }
</style>