import { ChevronRight, ExpandMore } from '@material-ui/icons';
import { TreeItem, TreeView } from '@material-ui/lab';
import { Stack,Box,Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import inked from './inked.jpg'

// import ReactFamilyTree from 'react-family-tree';
// import FamilyNode from './your-components/FamilyNode';


function Main() {
  const WIDTH = 70;
const HEIGHT = 80;
const [upid, setupid] = useState("")
const [updateds, setupdateds] = useState("")
const [Id, setId] = useState('')
const [Name, setName] = useState('')
const [Designation, setDesignation] = useState('')
const [Team, setTeam] = useState('')
const [Manager, setManager] = useState('')
const [searc, setsearc] = useState('')
  const dataf=['suresh','mahesh','rajesjh']
  const [updates, setupdates] = useState(false)
  const [saved, setsaved] = useState([])
  useEffect(()=>{
    console.log('render',saved);
    },[saved])
  const saves=(event)=>{
    const brue=({
      Per:Math.random(),
      Identity:Id,
      Names:Name,
      Designations:Designation,
      Teams:Team,
      Managers:Manager
    })
  saved.push(brue);
  setId('')
  setName('')
  setDesignation('')
  setTeam('')
  setManager('')
console.log('saved',saved);
  }
  var test;
  //Editing
  const update=(id)=>{
console.log('id',id);
setupid(id)
console.log('test',upid);
setupdates(true)
const list=saved.filter(a=>a.Per==id)
const listed=list.map((a,i)=>
{return (setId(a.Identity),
  setName(a.Names),setDesignation(a.Designations),setTeam(a.Teams),setManager(a.Managers))})
console.log('list',listed);
  }
  //update
  const updated=()=>{
       console.log('test',upid);
   
      const caved=saved.map(a=>{
        if(a.Per==upid){
          return{
            ...updateds,
            Per:upid,
            Identity:Id,
            Names:Name,
            Designations:Designation,
            Teams:Team,
            Managers:Manager
          }
        }
        return a;
      })
      setsaved(caved);
      console.log(caved);
  }
  //reset
  const reset=()=>{
    setId('')
  setName('')
  setDesignation('')
  setTeam('')
  setManager('')
   }
  //delete
  const del=(id)=>{
   const list= saved.filter(a=>a.Per!=id);
    setsaved(list)
    console.log('saved',list);
  }
  //search
  const search=(e)=>{
   setsearc(e.target.value)
    console.log(searc);
   }

  return (
    <div style={{display:'flex'}}>Sub<br/>
    <div>
    <label>Id:</label>   <input type='text'        onChange={(e)=>setId(e.target.value)}          value={Id} />        <br/>
   <label>Name:</label><input type='text'         onChange={(e)=>setName(e.target.value)}        value={Name}/>       <br/>
   <label>Designation:</label><input type='text'  onChange={(e)=>setDesignation(e.target.value)} value={Designation}/><br/>
   <label>Team:</label><input type='text'         onChange={(e)=>setTeam(e.target.value)}        value={Team}/>       <br/>
   <label>Manager:</label><input type='text'      onChange={(e)=>setManager(e.target.value)}     value={Manager}/>    <br/>
<button  onClick={saves}>Save</button>
<Button sx={{tabSize:'20px',height:'20px',width:'50px',fontSize:'12px',marginLeft:'10px'}} variant='contained'
 onClick={()=>reset()}>Reset</Button>
{updates?
<Button sx={{tabsize:'30px',height:'20px',width:'50px',fontSize:'12px'
,backgroundColor:'skyblue',marginLeft:'10px'}} variant='contained' onClick={()=>updated()}>Update</Button>:''}

 <div style={{marginTop:'20px',width:'400px',marginLeft:'20px'}}>

  <input placeholder='search by name' style={{padding:'2px',borderRadius:'5px',marginLeft:'5px'}} onChange={(e)=>search(e)}/>
{Object.values(saved).filter(b=>b.Names.includes(searc)).map((a,i)=>{
  return(
    <div style={{backgroundColor:'rosybrown',borderRadius:'5px',display:'flex',marginTop:'10px',height:'160px'}}>
    <div style={{width:'400px',marginLeft:'20px',marginTop:'10px'}}>
    <b style={{width:'100px',backgroundColor:'yellow'}}>Identity:</b><a style={{width:'100px',marginLeft:'20px'}}>{a.Identity}</a><br/>
          <b>Names:</b><a style={{width:'100px',backgroundColor:'white',marginLeft:'24px'}}>{a.Names}</a><br/>
          <b>Design:</b><a style={{width:'100px',marginLeft:'20px'}}>  {a.Designations}</a><br/>
          <b>Team:</b><a style={{width:'100px',marginLeft:'32px'}}>    {a.Teams}</a>       <br/>
          <b>Manager:</b><a style={{width:'100px',marginLeft:'2px'}}>  {a.Managers}</a>  <br/>
    <Button sx={{tabSize:'20px',height:'20px',width:'50px',fontSize:'12px',marginLeft:'10px'}} variant='contained' onClick={()=>update(a.Per)}>Edit</Button>
    <Button sx={{tabsize:'30px',height:'20px',width:'50px',fontSize:'12px',backgroundColor:'red',marginLeft:'10px'}} variant='contained' onClick={()=>del(a.Per)}>Delete</Button>
    </div>
    
        </div>
  )
})}

 </div>
    </div>
  
<div style={{display:'flex'}}>
  <Subject saved={saved}/>
</div>
    </div>
  )
}

function Subject(props) {
  const [open, setopen] = useState(false)
  return(
    <div className='tree'>
      {props.saved.map((a,i)=>{
        return(
          <div style={{width:'1200px'}}>
  <ul>
    <li><a><img src="https://www.shareicon.net/data/2016/07/26/801997_user_512x512.png" style={{height:'50px',width:'50px'}} onClick={()=>setopen(true)}/>
  Id:  <span onClick={()=>setopen(false)}>{a.Identity}</span></a>
  {
    open?
    <div>
        <ul>
        <li><a>   <img src="https://tse3.mm.bing.net/th?id=OIP.Cl56H6WgxJ8npVqyhefTdQHaHa&pid=Api&P=0" style={{height:'50px',width:'50px'}}/>Name:<span>{a.Names}</span></a>
        <ul>
          <li><a>   <img src="https://www.codot.gov/business/civilrights/assets/team-icon.png/@@images/image" style={{height:'50px',width:'50px'}}/>Team:<span>{a.Teams}</span></a></li>
          <li><a>   <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/designation-1659762-1408615.png" style={{height:'50px',width:'50px'}}/><span>{a.Designations}</span></a></li>
          <li><a>   <img src="https://webstockreview.net/images/manager-clipart-store-manager-9.png" style={{height:'50px',width:'50px'}}/><span>{a.Managers}</span></a></li>
        </ul>
        </li>
        <li><a>   <img src="https://cdn0.iconfinder.com/data/icons/hexagone-business-finance-set-1/128/GOOD_JOB-512.png" style={{height:'50px',width:'50px'}}/><span>{a.Names}</span></a></li>
          <li><a>   <img src={inked} style={{height:'50px',width:'50px'}}/><span>{a.Per}</span></a></li>
        </ul>
    </div>
    :''
  }
        </li>
  </ul>
  
           </div>
        )
      })}
    </div>
  )
}


export default Main;