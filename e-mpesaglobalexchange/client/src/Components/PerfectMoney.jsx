import {Typography,Grid, Button,Alert } from "@mui/material"
import {CustomContent,CustomModal,CustomTextField} from '../Components'
import {ke,ug,tz,gha,sa,nigeria,deriv,perfect,neteller,skrill,bitcoin} from '../assets'
import React,{useState} from 'react'
import client from "../api/client"
import { useEffect } from "react"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function PerfectMoney({sign ,id}){
    const options = {method: 'GET', headers: {Accept: 'application/json'}};
    const style={
        height:40,
        width:200,
        borderRadius:5
      }
      const [data,setData]=useState({
        name:'',
        email:'',
        phone:0,
        _id:'',       
        craccount:"",
        idNumber:0,
        bankname:"",
        banknumber:0
    })
    const getUser = async ()=>{
        await client.get(`/globalauth/getuser/${id}`).then(response=>{
         setData(response.data.user)
   
        })
 
     }
     useEffect(()=>{
        getUser()
     },[])
      const [amount,setAmount] = useState(0)
      const [error,setError] = useState('')
      const [error2,setError2] = useState('')
      const [account,setAccount] = useState()
      const [amount2,setAmount2] = useState(0)
      const [amount3,setAmount3] = useState(0)
      const [receive,setReceive] = useState(0)
      const [withdraw,setWithdraw] = useState(0)
      const [withdraw2,setWithdraw2] = useState(0)
      const [open,setOpen] = useState(false)
      const [open2,setOpen2] = useState(false)
      const [open3,setOpen3] = useState(false)
      const [open4,setOpen4] = useState(false)
      const [open5,setOpen5] = useState(false)
      const [open6,setOpen6] = useState(false)
      const [open7,setOpen7] = useState(false)
      const [open8,setOpen8] = useState(false)
      const [open9,setOpen9] = useState(false)
      const [open10,setOpen10] = useState(false)
      const [open11,setOpen11] = useState(false)
      const [mpesa,setMpesa] = useState(false)
      const [bank,setBank] = useState(false)
      const [method,setMethod] = useState('')
      const [mpesanumber,setMpesanumber] = useState()
      const [bankname,setBankName] = useState('')
      const [banknumber,setBankNumber] = useState()
      const [branch,setBranch] = useState('')
      const [accounttypenumber2,setAccounttypenumber2] = useState('')
      const [transact,setTransact] = useState('')
      const [transacterror,setTransacterror] = useState('')
      const handleChange = (e)=>{
       setAmount(e.target.value)
       setReceive(e.target.value * 98/100)
      }
      const handleChange2 = (e)=>{
        setAmount2(e.target.value)
      fetch(`https://api.fastforex.io/convert?from=USD&to=${sign}&amount=${e.target.value}&api_key=41952e2375-eef8670fae-rghqcw`, options)
      .then(response => response.json())
      .then(response=> {
        console.log(response.result.rate)
        setWithdraw(response.result.rate*e.target.value*95.5/100)
      })
      .catch(error => console.log('error', error));
      }
      const handleChange3 = (e)=>{
        setAmount3(e.target.value)
      fetch(`https://api.fastforex.io/convert?from=USD&to=${sign}&amount=${e.target.value}&api_key=41952e2375-eef8670fae-rghqcw`, options)
      .then(response => response.json())
      .then(response=> {
        console.log(response.result.rate)
        setWithdraw2(response.result.rate*e.target.value*95.5/100)
      })
      .catch(error => console.log('error', error));
      }
      
      const handleSell = ()=>{
          setOpen(true)
      }
      const handleSell2 = ()=>{
        if(!method){
          setError2("Kindly choose how to receive funds")
        }else if(method === "MPESA"){
          setOpen(false)
          setOpen7(true)
          setMpesa(true)
         setBank(false)
        }else if(method === "Bank"){
          setOpen(false)
          setOpen7(true)
          setBank(true) 
          setMpesa(false)
        }
    }
    async function newTransfer(){
      await client.post('/transfer',{

      })
    }
    const handleMode=()=>{
      if(!mpesanumber && !data.phone){
          setError('Kindly enter mpesa number')
      }else if(!mpesanumber){
        setMpesanumber(data.phone)
        setOpen7(false)
        setOpen6(true)
      }
    }

    const handleMode2=()=>{
      if(!bankname && !data.bankname && !banknumber && !data.banknumber){
        setError("Please update your Bank Details")
      }else if(!bankname || !banknumber){
        setBankName(data.bankname)
        setBankNumber(data.banknumber)
        setOpen7(false)
        setOpen6(true)
      } 
    }


    const handleSell3 = ()=>{
      setOpen6(false)
  }


    const handleSave = async()=>{
        if(!data.craccount && !account){
          setError("Please update your Binary Account")
        }else if(!account ){
         setAccount(data.craccount)
        }
        setOpen3(false)
        setOpen2(true)
       }

    const handleEdit = ()=>{
        setOpen3(true)
        setOpen2(false)
    }
    const handleSave2 = async ()=>{
        try {
           await client.patch('/globalauth/updateuser/'+id,{
             craccount:account
           }).then((response)=>{
               setOpen2(false)
               setOpen3(true)
           })
        } catch (error) {
         console.log(error.message)
        }
       }
       const handleWithdraw = ()=>{
        setOpen3(true)
       }
       const handleWithdraw1 = ()=>{
        setOpen10(true)
       }
       const handleSave4 = ()=>{
        if(!data.craccount && !account){
          setError("Please update your Binary Account")
        }else if(!account ){
         setAccount(data.craccount)
        }
        setOpen3(false)
        setOpen4(true)
       }
       const handleSave41 = ()=>{
        if(!data.craccount && !account){
          setError("Please update your Binary Account")
        }else if(!account ){
         setAccount(data.craccount)
        }
        setOpen10(false)
        setOpen11(true)
       }

       const handleSave3 = async()=>{
        try {
            await client.patch('/globalauth/updateuser/'+id,{
              craccount:account
            }).then((response)=>{
                setOpen4(false)
                setOpen5(true)
            })
         } catch (error) {
          console.log(error.message)
         }
       }
       const handleSaveFirst = async()=>{
        try {
            await client.patch('/globalauth/updateuser/'+id,{
              craccount:account
            }).then((response)=>{
                setOpen11(false)
                setOpen9(true)
            })
         } catch (error) {
          console.log(error.message)
         }
       }
       const handleOpen5 = ()=>{
        setOpen8(true)
        setOpen5(false)
       }

       const handleTransaction = async()=>{
        try {
          await client.post('/transaction',{
            name:data.name,
            email:data.email,
            phone:data.phone,
            mpesanumber:mpesanumber,
            bankname:bankname,
            accountnumber:banknumber,
            branch:branch,
            method:method,
            accounttypenumber:accounttypenumber2,
            accounttype:"PerfectMoney",
  
        }).then((response)=>{
           if(response.data){
            console.log(response.data.transaction)
            setTransact("Transaction saved successfully")
            setOpen8(false)
            setOpen6(true)
           }
        })
        } catch (error) {
          setTransacterror("Kindly input the missing fields or check your internet connection")
        }
      }
    return(
        <>
         <Typography variant='h5' component="h4">Perfect Money</Typography>
        <Grid container sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",mt:1}}>

        <CustomContent image={deriv} width="200" height={380}>
          <Typography component="h5" variant="h5" sx={{fontSize:30}}>Deposit </Typography>
          <Typography component="h5" variant="h5" sx={{fontSize:30}}>To </Typography>
          <Typography component="h5" variant="h5" sx={{fontSize:30}}>Binary/Deriv </Typography>
          <hr style={{marginLeft:5}}></hr>
          <CustomModal handleClose={()=>setOpen10(false)} title="Binary Account"
          content={<>
          {error && <Alert color='error'>{error}</Alert>}
         <p>Enter your Binary.com Account</p>
         <CustomTextField placeholder={data.craccount} value={account} 
         handleChange={(e)=>setAccount(e.target.value)} />
         <br></br>
         <Button variant="contained" onClick={handleSave41}>Save Account</Button></>}
         open={open10}/>
       <CustomModal handleClose={()=>setOpen11(false)} title="CONFIRM"
         content={<>
          <hr></hr>
          Binary account {account} will be saved! All Deposit will be done through this account.
         <br></br>      <br></br>
         <Button variant="contained" color='inherit' onClick={handleEdit}>Edit</Button>
         <Button variant="contained" sx={{mx:2}} onClick={handleSaveFirst}>Saved</Button>
         </>}
         open={open11}/>
        <CustomModal handleClose={()=>setOpen9(false)} open={open9}
         content={
          <>
          Deposit USD To Perfect Money Account: 
          <CustomTextField value="U39108273"/><Button sx={{mx:2,mt:1}} onClick={() => navigator.clipboard.writeText("U39108273")} variant="contained">Copy</Button>
          </>
         }/>
          <p>Amount in USD</p>
          <input type="number" value={amount} onChange={handleChange} placeholder="amount" style={style}/>
          <p>You will receive: ${receive} </p>
          <hr style={{marginLeft:5,marginTop:30}}></hr>
          <Button variant="contained" onClick={handleWithdraw1} sx={{mx:2,mt:2}}>Deposit</Button>
        </CustomContent>


        <CustomContent image={deriv} width="200" height={380}>
          <Typography component="h5" variant="h5" sx={{fontSize:30}}>Withdraw </Typography>
          <Typography component="h5" variant="h5" sx={{fontSize:30}}>From </Typography>
          <Typography component="h5" variant="h5" sx={{fontSize:30}}>Binary/Deriv </Typography>
          <hr style={{marginLeft:5}}></hr>
          {/* start */}
          <CustomModal handleClose={()=>setOpen3(false)} title="Binary Account"
         content={<>
          {error && <Alert color='error'>{error}</Alert>}
         <p>Enter your Binary.com Account</p>
         <CustomTextField placeholder={data.craccount} value={account} 
         handleChange={(e)=>setAccount(e.target.value)} />
         <br></br>
         <Button variant="contained" onClick={handleSave4}>Save Account</Button></>}
         open={open3}/>
        <CustomModal handleClose={()=>setOpen4(false)} title="CONFIRM"
         content={<>
          <hr></hr>
          Binary account {account} will be saved! All Deposit and Withdaw will be done through this account.
         <br></br>      <br></br>
         <Button variant="contained" color='inherit' onClick={handleEdit}>Edit</Button>
         <Button variant="contained" sx={{mx:2}} onClick={handleSave3}>Save</Button>
         </>}
         open={open4}/>

        <CustomModal handleClose={()=>setOpen5(false)} title="Withdraw"
         content={<>
          <hr></hr>
         From Binary.com<br></br>
         Go to the cashier <NavigateNextIcon sx={{mb:-0.8}}/>Payment Agent <NavigateNextIcon sx={{mb:-0.8}}/>Withdraw <br></br>
         (withdrawal verification link will be sent to your email).
         Click on that link and fill in the questionnaire
         For payment agent select E-Mpesa Global , <br></br>
         Payment Agent ID (LEAVE IT BANK)<br></br>
         <hr></hr>
         <br></br>      <br></br>
         <Button variant="contained" onClick={handleOpen5} sx={{mx:2}}>OK</Button>
         </>}
         open={open5}/> 
        <CustomModal handleClose={()=>setOpen8(false)} title="Withdraw Account"
         content={<>
          {transact && <Alert color='success'>{transact}</Alert>}
          {transacterror && <Alert color='error'>{transacterror}</Alert> }
          <hr></hr>
          <input type="radio" value="MPESA Only" onChange={(e)=>setMethod(e.target.value)} />MPESA Only<br></br>
          <input type="radio" value="Bank Only" onChange={(e)=>setMethod(e.target.value)} />Bank Only<br></br>
          <input type="radio" value="Mpesa and Bank" onChange={(e)=>setMethod(e.target.value)} />MPESA and Bank<br></br>
          <input type="radio" value="Perfect Money" onChange={(e)=>setMethod(e.target.value)} />Perfect Money<br></br>
          Large Amounts Over 100,000 Will be Sent to Bank
          <hr></hr>
          <CustomTextField label="Mpesa Number"  value={mpesanumber} handleChange={(e)=>setMpesanumber(e.target.value)}    placeholder={data.phone}/>
          <CustomTextField label="Bank Name" value={bankname} handleChange={(e)=>setBankName(e.target.value)}    placeholder={data.bankname}/>
          <CustomTextField label="Bank Number" value={banknumber} handleChange={(e)=>setBankNumber(e.target.value)}   placeholder={data.banknumber} />
          <CustomTextField label="Branch" value={branch} handleChange={(e)=>setBranch(e.target.value)} />
          <CustomTextField label="Perfect Money Account" value={accounttypenumber2} handleChange={(e)=>setAccounttypenumber2(e.target.value)}  />
          <br></br>
         <Button variant="contained" onClick={handleTransaction} sx={{mx:2}}>OK</Button>
         </>}
         open={open8}/>
         <CustomModal handleClose={()=>setOpen6(false)} open={open6}
         content={
          <>
          Deposit USD To Perfect Money Account: 
          <CustomTextField value="U39108273"/><Button sx={{mx:2,mt:1}} onClick={() => navigator.clipboard.writeText("U39108273")} variant="contained">Copy</Button>
          </>
         }/>
       {/* stop */}

          <p>Amount in USD</p>
          <input type="number" style={style} value={amount3} onChange={handleChange3}/>
          <p>You will receive{sign}{" "}{withdraw2.toFixed()} </p>
          <hr style={{marginLeft:5,marginTop:30}}></hr>
          <Button variant="contained" sx={{mt:2}} onClick={handleWithdraw}>Withdraw</Button>
          
        </CustomContent>

        <CustomContent image={perfect} width="200" height={380}>
          <Typography component="h5" variant="h5" sx={{fontSize:30}}>Sell</Typography>
          <Typography component="h5" variant="h5" sx={{fontSize:30}}>Perfect</Typography>
          <Typography component="h5" variant="h5" sx={{fontSize:30}}>Money </Typography>
          <hr style={{marginLeft:5}}></hr>
          <CustomModal handleClose={()=>setOpen3(false)} title="Binary Account"
         content={<>
          {error && <Alert color='error'>{error}</Alert>}
         <p>Enter your Binary.com Account</p>
         <CustomTextField placeholder={data.craccount} value={account} 
         handleChange={(e)=>setAccount(e.target.value)} />
         <br></br>
         <Button variant="contained" onClick={handleSave4}>Save Account</Button></>}
         open={open3}/>
        <CustomModal handleClose={()=>setOpen4(false)} title="CONFIRM"
         content={<>
          <hr></hr>
          Binary account {account} will be saved! All Deposit and Withdaw will be done through this account.
         <br></br>      <br></br>
         <Button variant="contained" color='inherit' onClick={handleEdit}>Edit</Button>
         <Button variant="contained" sx={{mx:2}} onClick={handleSave3}>Save</Button>
         </>}
         open={open4}/>
        <CustomModal handleClose={()=>setOpen5(false)} title="Withdraw"
         content={<>
          <hr></hr>
         From Binary.com<br></br>
         Go to the cashier <NavigateNextIcon sx={{mb:-0.8}}/>Payment Agent <NavigateNextIcon sx={{mb:-0.8}}/>Withdraw <br></br>
         (withdrawal verification link will be sent to your email).
         Click on that link and fill in the questionnaire
         For payment agent select E-Mpesa Global , <br></br>
         Payment Agent ID (LEAVE IT BANK)<br></br>
         <hr></hr>
         <br></br>      <br></br>
         <Button variant="contained" onClick={handleOpen5} sx={{mx:2}}>OK</Button>
         </>}
         open={open5}/> 
        <CustomModal handleClose={()=>setOpen8(false)} title="Withdraw Account"
         content={<>
          {transact && <Alert color='success'>{transact}</Alert>}
          {transacterror && <Alert color='error'>{transacterror}</Alert> }
          <hr></hr>
          <input type="radio" value="MPESA Only" onChange={(e)=>setMethod(e.target.value)} />MPESA Only<br></br>
          <input type="radio" value="Bank Only" onChange={(e)=>setMethod(e.target.value)} />Bank Only<br></br>
          <input type="radio" value="Mpesa and Bank" onChange={(e)=>setMethod(e.target.value)} />MPESA and Bank<br></br>
          <input type="radio" value="Perfect Money" onChange={(e)=>setMethod(e.target.value)} />Perfect Money<br></br>
          Large Amounts Over 100,000 Will be Sent to Bank
          <hr></hr>
          <CustomTextField label="Mpesa Number"  value={mpesanumber} handleChange={(e)=>setMpesanumber(e.target.value)}    placeholder={data.phone}/>
          <CustomTextField label="Bank Name" value={bankname} handleChange={(e)=>setBankName(e.target.value)}    placeholder={data.bankname}/>
          <CustomTextField label="Bank Number" value={banknumber} handleChange={(e)=>setBankNumber(e.target.value)}   placeholder={data.banknumber} />
          <CustomTextField label="Branch" value={branch} handleChange={(e)=>setBranch(e.target.value)} />
          <CustomTextField label="Perfect Money Account" value={accounttypenumber2} handleChange={(e)=>setAccounttypenumber2(e.target.value)}  />
          <br></br>
         <Button variant="contained" onClick={handleTransaction} sx={{mx:2}}>OK</Button>
         </>}
         open={open8}/>

          <p>Amount in USD</p>
  
          <input type="number" placeholder="" value={amount2} onChange={handleChange2} style={style}/>
          <br></br><br></br>
          <p>You will receive:{sign}{" "}{withdraw.toFixed()}  </p>
          <hr style={{marginLeft:5,marginTop:5}}></hr>
          <Button variant="contained" onClick={handleWithdraw}>Sell</Button>
        </CustomContent>


      </Grid>
      </>
    )
}