import React,{useState,useEffect} from 'react';
import {Box, Typography,Button, Grid,Alert, buttonBaseClasses} from '@mui/material';
import {CustomSideBar,Forex,CustomTextField,CustomContent,CustomModal,Skrill,PerfectMoney,Neteller,Bitcoin} from '../Components';
import {useParams} from 'react-router-dom'
import client from '../api/client';
import {ke,ug,tz,gha,sa,nigeria,deriv,perfect,neteller,skrill,bitcoin} from '../assets'
import Profile from './Profile'
import Chat from './Chat'
import Affiliate from './Affiliate';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
function UserPortal() {
    const {id} = useParams()
    const [amount,setAmount] = useState('')
    const [url,setUrl] = useState('')
    const [country,setCountry] = useState('')
    const [local,setLocal] = useState(false)
    const [page,setPage] = useState("Binary/Deriv")
    const [error,setError] = useState('')
    const sign = localStorage.getItem('country')
    const [deposit,setDeposit]=useState(0)
    const [withdraw,setWithdraw] = useState(0)
    const [open,setOpen] = useState(false)
    const [open2,setOpen2] = useState(false)
    const [open3,setOpen3] = useState(false)
    const [open4,setOpen4] = useState(false)
    const [open5,setOpen5] = useState(false)
    const [open6,setOpen6] = useState(false)
    const [open7,setOpen7] = useState(false)
    const [open8,setOpen8] = useState(false)
    const [placeholder,setPlaceholder] = useState('')
    const [account,setAccount] = useState()
    const [visible,setVisible] = useState(false)
    const [visible2,setVisible2] = useState(true)
    const [bankname1,setBankname1] = useState('')
    const [mpesanumber,setmpesaNumber] = useState()
    const [accountnumber,setAccountnumber] = useState()
    const [branch,setBranch] = useState('')
    const [method,setMethod] = useState('')
    const [transact,setTransact] = useState('')
    const [transacterror,setTransacterror] = useState('')
    const options = {method: 'GET', headers: {Accept: 'application/json'}};
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
        console.log(response.data.user)
       })

    }
    const x= 300
    const style={
      height:40,
      width:200,
      borderRadius:5
    }
    const style2={
      height:40,
      width:100,
      borderRadius:5
    }
    function getCountry(){
    if(localStorage.getItem('country') === 'KES'){
      setCountry(ke)
      setLocal(true)
    }else if(localStorage.getItem('country') === 'UGX'){
      setCountry(ug)
    }else if(localStorage.getItem('country') === 'TZS'){
       setCountry(tz)
    }else if(localStorage.getItem('country') === 'GHS'){
        setCountry(gha)
    }else if(localStorage.getItem('country') === 'ZAR'){
        setCountry(sa)
    }else if(localStorage.getItem('country') === 'NGN'){
        setCountry(nigeria)
    }
    }
    useEffect(()=>{    
       getUser()
       getCountry()

    },[])
    const handleChange = (e)=>{
      setAmount(e.target.value)
      if(e.target.value < 1200){
         setError('Amount you entered is below $10 ')
      }else if(e.target.value >= 1200){
        setError('')
        fetch(`https://api.fastforex.io/convert?from=${sign}&to=USD&amount=${e.target.value}&api_key=41952e2375-eef8670fae-rghqcw`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response.result.USD)
          setDeposit(response.result.USD*98/100)
         
        })
        .catch(err => console.error(err));
      }
    }
    
    const handleChange2 = (e)=>{
      var amount = e.target.value;
   
      fetch(`https://api.fastforex.io/convert?from=USD&to=${sign}&amount=${e.target.value}&api_key=41952e2375-eef8670fae-rghqcw`, options)
        .then(response => response.json())
        .then(response=> {
          console.log(response.result.rate)
          setWithdraw(response.result.rate*e.target.value*95.5/100)
        })
        .catch(error => console.log('error', error));
    }
 
    const handleSave = async()=>{
     if(!data.craccount && !account){
       setError("Please update your Binary Account")
     }else if(!account ){
      setAccount(data.craccount)
     }
     setOpen(false)
     setOpen2(true)
    }

    const handleSave4 = async()=>{
      if(!data.craccount && !account){
        setError("Please update your Binary Account")
      }else if(!account ){
       setAccount(data.craccount)
      }
      setOpen4(false)
      setOpen5(true)
     }


    const handleEdit = ()=>{
        setOpen(true)
        setOpen2(false)
    }
    const handleEdit2 = ()=>{
      setOpen4(true)
      setOpen5(false)
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

    const handleSave5 = async ()=>{
      try {
         await client.patch('/globalauth/updateuser/'+id,{
           craccount:account
         }).then((response)=>{
             setOpen5(false)
             setOpen6(true)
         })
      } catch (error) {
       console.log(error.message)
      }
     }

    const handleSave3 = async()=>{
        setOpen3(false)
        setVisible(true)
        setVisible2(false)
        console.log(account)
    }
    const handleSave6 = async()=>{
      setOpen6(false)
      setOpen7(true)
  }
  const handleSave7 = async()=>{
    setOpen8(true)
    setOpen7(false)
}
    const handlePay = async()=>{
  
     await client.post('/pay/i-pay',{
        email:data.email,
        phone:data.phone,
        amount:1,
        account:account,
        name:data.name,
      }).then(response=>setUrl(response.data))
        if(url != ''){
          window.location.replace(url);
      }
    }

    const handleTransaction = async()=>{
      try {
        await client.post('/transaction',{
          name:data.name,
          email:data.email,
          phone:data.phone,
          mpesanumber:mpesanumber,
          bankname:bankname1,
          accountnumber:accountnumber,
          branch:branch,
          method:method
      }).then((response)=>{
         if(response.data){
          console.log(response.data.transaction)
          setTransact("Transaction saved successfully")
         }
      })
      } catch (error) {
        setTransacterror("Kindly input the missing fields or check your internet connection")
      }
    }
    return (
    <Box sx={{width:"100%", height:{
      lg:"100%",
      md:"100%",
      xs:"180vh",
      sm:"180vh"
    },display:"flex", position:"relative",}}>
    <Box sx={{width:"20%",height:"100%"}}>
    <CustomSideBar country={country} page1={()=>setPage("Binary/Deriv")} page2={()=>setPage("Perfect Money")} page3={()=>setPage("Neteller")} page4={()=>setPage("Skrill")} page5={()=>setPage("Bitcoin")} page6={()=>setPage("Affiliate")} page7={()=>setPage("Profile")} page8={()=>setPage("Support")}/>
    </Box>
    <Box sx={{width:{
      lg:"60%",
      md:"60%",
      xs:"80%",
      sm:"80%"
    },height:"100%",backgroundColor:"whitesmoke",color:"black",justifyContent:"center",alignItems:"center",textAlign:"center",pt:4}}>

    {/* binary/deriv */}

    {page === 'Binary/Deriv' && 
    <>
      <Typography variant='h5' component="h4">Binary/Deriv</Typography>
    <Grid container sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",mt:1}}>

      <CustomContent image={deriv} width={x} height={392}>
        <Typography component="h5" variant="h5" sx={{fontSize:30}}>Deposit </Typography>
        <Typography component="h5" variant="h5" sx={{fontSize:30}}>To </Typography>
        <Typography component="h5" variant="h5" sx={{fontSize:30}}>Binary/Deriv </Typography>
        <hr style={{marginLeft:5}}></hr>
        <p>Amount in {sign}</p>

        <CustomModal handleClose={()=>setOpen(false)} title="Binary Account"
         content={<>
        {error && <Alert color='error'>{error}</Alert>}
         <p>Enter your Binary.com Account</p>
         <CustomTextField placeholder={data.craccount} value={account} 
         handleChange={(e)=>setAccount(e.target.value)} />
         <br></br>
         <Button variant="contained" onClick={handleSave}>Save Account</Button></>}
         open={open}/>

        <CustomModal handleClose={()=>setOpen2(false)} title="CONFIRM"
         content={<>
          <hr></hr>
          Binary account {account} will be saved! All Deposit and Withdaw will be done through this account.
         <br></br>      <br></br>
         <Button variant="contained" color='inherit' onClick={handleEdit}>Edit</Button>
         <Button variant="contained" sx={{mx:2}} onClick={handleSave2}>Save</Button>
         </>}
         open={open2}/>

        <CustomModal handleClose={()=>setOpen3(false)} title="Success!"
         content={<>
          <hr></hr>
          Information successfully saved!
          Click ok to continue to deposit or withdraw
         <br></br>      <br></br>
         <Button variant="contained" sx={{mx:2}} onClick={handleSave3}>OK</Button>
         </>}
         open={open3}/>

        <input type="number" placeholder="amount" onChange={handleChange} style={style}/>
        <hr style={{marginLeft:5,marginTop:35}}></hr>
        You Will Receive
        ${deposit.toFixed(2)}
        <b><p style={{color:"red"}}>{error}</p></b>
        {visible2 && <Button variant="contained" onClick={()=>setOpen(true)} color="success">Deposit Now</Button>}
        {!error && visible && <Button variant="contained" onClick={handlePay} color="success">Deposit</Button>}
      </CustomContent>

      <CustomContent image={deriv} width={x} height={392}>
        <Typography component="h5" variant="h5" sx={{fontSize:30}}>Withdraw </Typography>
        <Typography component="h5" variant="h5" sx={{fontSize:30}}>From </Typography>
        <Typography component="h5" variant="h5" sx={{fontSize:30}}>Binary/Deriv </Typography>
        <hr style={{marginLeft:5}}></hr>
        <p>Amount in USD</p>

        <CustomModal handleClose={()=>setOpen4(false)} title="Binary Account"
         content={<>
         {error && <Alert color='error'>{error}</Alert>}
         <p>Enter your Binary.com Account</p>
         <CustomTextField placeholder={data.craccount} value={account} 
         handleChange={(e)=>setAccount(e.target.value)} />
         <br></br>
         <Button variant="contained" onClick={handleSave4}>Save Account</Button></>}
         open={open4}/>

      <CustomModal handleClose={()=>setOpen5(false)} title="CONFIRM"
         content={<>
          <hr></hr>
          Binary account {account} will be saved! All Deposit and Withdaw will be done through this account.
         <br></br>      <br></br>
         <Button variant="contained" color='inherit' onClick={handleEdit2}>Edit</Button>
         <Button variant="contained" sx={{mx:2}} onClick={handleSave5}>Save</Button>
         </>}
         open={open5}/>

        <CustomModal handleClose={()=>setOpen6(false)} title="Success!"
         content={<>
          <hr></hr>
          Information successfully saved!
          Click ok to continue to deposit or withdraw
         <br></br>      <br></br>
         <Button variant="contained" sx={{mx:2}} onClick={handleSave6}>OK</Button>
         </>}
         open={open6}/>

        <CustomModal handleClose={()=>setOpen7(false)} title="Withdraw"
         content={<>
          <hr></hr>
         From Binary.com<br></br>
         Go to the cashier <NavigateNextIcon sx={{mb:-0.8}}/>Payment Agent <NavigateNextIcon sx={{mb:-0.8}}/>Withdraw <br></br>
         (withdrawal verification link will be sent to your email).
         Click on that link and fill in the questionnaire
         For payment agent select E-Mpesa Global , <br></br>
         Payment Agent ID (LEAVE IT BANK)<br></br>
         ENTER AMOUNT IN USD
         <hr></hr>
         Funds will be sent to <br></br>
         MPESA Number : 0725123456
         <br></br>      <br></br>
         <Button variant="contained" onClick={handleSave7} sx={{mx:2}}>OK</Button>
         </>}
         open={open7}/>

         <CustomModal handleClose={()=>setOpen8(false)} title="Withdraw Account"
         content={<>
          {transact && <Alert color='success'>{transact}</Alert>}
          {transacterror && <Alert color='error'>{transacterror}</Alert> }
          <hr></hr>
          <input type="radio" value="MPESA Only" onChange={(e)=>setMethod(e.target.value)} />MPESA Only<br></br>
          <input type="radio" value="Bank Only" onChange={(e)=>setMethod(e.target.value)} />Bank Only<br></br>
          <input type="radio" value="Mpesa and Bank" onChange={(e)=>setMethod(e.target.value)} />MPESA and Bank<br></br>
          Large Amounts Over 100,000 Will be Sent to Bank
          <hr></hr>
          <CustomTextField value={mpesanumber} handleChange={(e)=>setmpesaNumber(e.target.value)}  placeholder="MPESA Number [0725654125]"/>
          <CustomTextField value={bankname1} handleChange={(e)=>setBankname1(e.target.value)} placeholder="Bank Name"/>
          <CustomTextField value={accountnumber} handleChange={(e)=>setAccountnumber(e.target.value)}  placeholder="Account Number" />
          <CustomTextField value={branch} handleChange={(e)=>setBranch(e.target.value)}  placeholder="Branch"/>
          <br></br>
         <Button variant="contained" onClick={handleTransaction} sx={{mx:2}}>OK</Button>
         </>}
         open={open8}/>




        <input type="number" placeholder="amount" onChange={handleChange2} style={style}/>
        <hr style={{marginLeft:5,marginTop:35}}></hr>
        You Will Receive {" "}
       {sign}{" "}{withdraw.toFixed(2)}
       <br></br>
       <Button sx={{mt:2}} variant="contained" onClick={()=>setOpen4(true)}  color="success">Withdraw</Button>
      </CustomContent>
    </Grid>
    </>
    }
    {/* Perfect Money*/}
   {page === 'Perfect Money' && 
     <PerfectMoney  sign={sign} id={id}/>
   }

   {/* Neteller */}
   {page === 'Neteller' && 
      <Neteller sign={sign} id={id}/>
   }
    {page === 'Skrill' && 
       <Skrill sign={sign} id={id}/>
   }

{page === 'Bitcoin' && 
    <Bitcoin sign={sign} id={id}/>
   }

{page === 'Profile' && 
   <>
   <Profile/>
   </>
}
{page === 'Support' && 
   <>
   <Chat/>
   </>
}
{page === 'Affiliate' && 
   <>
   <Affiliate/>
   </>
}

    </Box>
    <Box sx={{width:"20%",background:"white",height:"150vh", display:{
      lg:"block",
      md:"block",
      xs:"none",
      sm:"none"
    }}}>
     <Forex/>
    </Box>
    </Box>
    );
}

export default UserPortal;



// var myHeaders = new Headers();
// myHeaders.append("apikey", "lxx9k9il7Kj7DQI6fyHj4RjDWzM9LMC3");
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch(`https://api.apilayer.com/currency_data/convert?to=USD&from=${sign}&amount=${e.target.value}`, requestOptions)
//   .then(response => response.json())
//   .then(result => {
//     console.log(result)
//     setDeposit(result.result*98/100)
//     setAmount(deposit)
//   })
//   .catch(error => console.log('error', error));