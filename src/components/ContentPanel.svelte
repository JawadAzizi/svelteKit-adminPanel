<script lang="ts">
    import { onMount } from 'svelte';
    import {El} from 'yesvelte'
    export let content:any = undefined

   



</script>

<div class='content-panel' id = 'content-panel'>
    
    {#if content}
    {@html content}
    {/if}
    <slot></slot>
</div>
