<script lang="ts">
    import { onMount } from 'svelte';
    import {El, Dropdown, Popover, Button} from 'yesvelte'
    export let content:any = undefined


    console.log('slot: ', $$slots)

   
</script>

<div class='content-panel' id = 'content-panel'>
    
    {#if content}
    {@html content}
    {/if}
    <slot></slot>
</div>
