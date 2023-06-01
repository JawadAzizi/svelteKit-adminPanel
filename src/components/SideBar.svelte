 <script lang="ts">
    import {  Modal ,OffcanvasBody, Dropdown ,DropdownItem, DropdownMenu, El, Icon, Sidebar, Offcanvas, OffcanvasHeader } from 'yesvelte'
    import { createEventDispatcher, onMount } from "svelte";
    import SidebarItem from './SidebarItem.svelte'
    export let sideBarItems:any = []
    export let compactMode = true
    export let mobileMode = false
    const dispatch = createEventDispatcher()
 
    console.log("compact", compactMode)
    //mock data for test
    sideBarItems.push(
        {
            icon:'home', title:' Dashboard', href: './',
             
        },
        {
            icon:"users", title: 'Users', href: './'
        },
        {
            icon:"box", title:"Pages", href: './',
            children: [
                {icon:'star', title: "Page 1", href: './'},
                {icon:'star', title: "Page 2", href: './'},
                {icon:'star', title: "Page 3", href: './'},
                {icon:'star', title: "Page 4", href: './'},
            ]
        },
        {
            icon:"star", title:"Products", href: './'
        },
        {
            icon:'home', title:' Plugins', href: './',
             children: [
                {icon:'star', title: "pligin 1", href: './'},
                {icon:'star', title: "pligin 2", href: './'},
                {icon:'star', title: "pligin 3", href: './'},
                {icon:'star', title: "pligin 4", href: './'},
            ]
        },
        {
            icon:'home', title:' Setting', href: './',
             children: [
                {icon:'star', title: "setting 1", href: './'},
                {icon:'star', title: "setting 2", href: './'},
                {icon:'star', title: "setting 3", href: './'},
                {icon:'star', title: "setting 4", href: './'},
            ]
        }
    )
</script> 

{#if !mobileMode}
    <El class='side-bar'  >
        <Sidebar  class='side-bar-wrapper {compactMode? "side-bar-wrapper-compact-mode": ''}' style='{compactMode? "overflow: visible;": ''}' theme='dark' >
            {#each sideBarItems as item}
                {#if item.children }
                    <SidebarItem on:load {compactMode} {...item}  >
                        {#each item.children as child}
                            <SidebarItem on:load {...child} ></SidebarItem>
                        {/each}
                    </SidebarItem>
                {:else}
                    <SidebarItem on:load {compactMode} {...item} />
                {/if}
            {/each}
            <slot ></slot>   
        </Sidebar> 
    </El>
{:else}

	
    <Offcanvas on:close={()=>dispatch('toggleSidebar')} show={!compactMode} backdrop class='y-app-theme-dark' autoClose >
        <OffcanvasHeader  title="Admin panel" p=0 m=0 />
        <OffcanvasBody p=0 m=0>
            <Sidebar style='position: static; width: 100%; height: 100%' theme='dark'>
                {#each sideBarItems as item}
                    {#if item.children }
                        <SidebarItem on:load {compactMode} {...item} >
                            {#each item.children as child}
                                <SidebarItem on:load {...child} ></SidebarItem>
                            {/each}
                        </SidebarItem>
                    {:else}
                        <SidebarItem on:load {compactMode} {...item} />
                    {/if}
                {/each}
            </Sidebar>
        </OffcanvasBody>
    </Offcanvas>

{/if}