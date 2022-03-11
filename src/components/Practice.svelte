<script>
    import { writable, derived } from 'svelte/store';
    const itemsInCart = writable(0);
    const cartContents = writable([]);
    const totalPrice = derived(itemsInCart, $itemsInCart => $itemsInCart * .5);
    
    const addItem = (item) => {
        console.log(item);
        itemsInCart.update(items => items + 1);
        cartContents.update(contents => [...contents, item]);
    }
    let inventory = ['apples', 'leeks', 'flour', 'potatoes', 'berries'];
    export let location;
    export let navigate;
</script>

<div>
    <h1>Practice</h1>
    <div class = "items">
        {#each inventory as item}
        <div class="item">
            <h2>{ item }</h2>
            <button on:click={() => addItem(item)}>
                Add Item
            </button>
          </div>
        {/each}
      </div>
    
      <p>There are { $itemsInCart } items in your cart.</p>
      <p>Cart total: ${ $totalPrice }</p>
      <p>Cart contents:</p>
            
      <ol>
        {#each $cartContents as item}
          <li>{item}</li>
        {/each}
      </ol>
</div>

<style>
 .items {
   display: flex;
   flex-direction: row;
  }
  .item {
    width: 25%;
  }
</style>