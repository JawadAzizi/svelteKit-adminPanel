<script lang="ts">
  import 'yesvelte/css/tabler.min.css'
  import { El } from "yesvelte";
  import Header from "../components/Header.svelte";
  import SideBar from "../components/SideBar.svelte";
  import ContentPanel from "../components/ContentPanel.svelte";
  import {onMount} from 'svelte'
  import {request} from './services'

  import './index.css'
  let compactMode = true
  let mobileMode = false
  let data: string
  
  onMount(()=>{
        let mql = window.matchMedia('(max-width: 480px)')
        mobileMode = mql.matches
        mql.addEventListener('change', (v)=>{
            mobileMode = v.matches
        })
    })
  const sidebarToggleHandler = (e:any)=>{
    compactMode = !compactMode
    console.log('handled compact mode', compactMode)
  }

  const handleLoad = async (e:any)=>{
    console.log('load: =>', e.detail)

    //e.detail is the relative path
    const response = await request.get(e.detail)
    console.log('load response: => ',response.data)
    data = response.data

    
  }

</script>

<El  class='admin-panel'>
  <SideBar on:load ={handleLoad}  {compactMode} {mobileMode}  on:toggleSidebar={sidebarToggleHandler}></SideBar>
  <El class='header-content-wrapper'>
    <Header {compactMode} {mobileMode} on:toggleSidebar={sidebarToggleHandler}></Header>
    <ContentPanel  content = {data}>
      
    </ContentPanel>
  </El>
</El>