import React, { useState, useEffect } from 'react'
import { InputBase, Button, Dialog, AppBar, Toolbar, IconButton, Slide, Typography,Grid } from '@material-ui/core/';
//import { withRouter, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import { Link } from 'react-router-dom'

import logo from '../../../assets/svg/logo_small.svg'
import colorLogo from '../../../assets/svg/logo_color.svg'
import search from '../../../assets/svg/search.svg'
import StorageImage from "../../imageRenderers/StorageImage";
import './Search.css'


const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
      backgroundColor: 'white',
    },
    title: {
      color:'black',
      marginLeft: theme.spacing(3),
      flex: 1,
    },
  }));
  
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Search({ getQuery, items, getType }) {

  const [text, setText] = useState('')
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState(false)
  const [bills, setBills] = useState(false)
  const [judgements, setJudgements] = useState(false)
  const [currentAffairs, setCurrentAffairs] = useState(false)

  const classes = useStyles();

  const handleHistory = () => {
    setHistory(!history);
  };

  const handleBills = () => {
    setBills(!bills);
  };

  const handleCurrentAffairs = () => {
    setCurrentAffairs(!currentAffairs);
    if (currentAffairs) {
      getType('&types=CurrentAffairs')
    } else {
      getType('')
    }
  };
  const handleJudgements = () => {
    setJudgements(!judgements);
  };

  useEffect(() => {
    const fetchType = () => {
      if(currentAffairs && judgements && bills && history)
        getType('')
      if(!currentAffairs && !judgements && !bills && !history)
        getType('')
      else if(currentAffairs && judgements && bills)
        getType('&types=CurrentAffairs%2CBills%2FLaws%2CJudgements')
        
      else if(currentAffairs && judgements && history)
        getType('&types=CurrentAffairs%2CHistory%2CJudgements')

      else if(bills && judgements && history)
        getType('&types=Bills%2FLaws%2CHistory%2CJudgements')
      
      else if(judgements && history)
        getType('&types=History%2CJudgements')

      else if(judgements && currentAffairs)
        getType('&types=CurrentAffairs%2CJudgements')

      else if(judgements && bills)
        getType('&types=Bills%2FLaws%2CJudgements')
      
      else if(history && bills)
        getType('&types=Bills%2FLaws%2CHistory')

      else if(history && currentAffairs)
        getType('&types=Bills%2FLaws%2CCurrentAffairs')
        
      else if(history)
        getType('&types=History')
      else if(currentAffairs)
        getType('&types=CurrentAffairs')
      else if(bills)
        getType('&types=Bills%2FLaws')
      else if(judgements)
        getType('&types=Judgements')
    }
      

    fetchType()

}, [currentAffairs, judgements, bills, history])

  
    {/*const handleClickOpen = () => {
      setOpen(true);
    };*/}
  
    const handleClose = () => {
      setOpen(false);
    };


    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(true);
        // console.log(items)
        // history.push('/search')
    }
 
  const url = (type, id) => {
    if (type === 'Bills/Laws') {
      return (
        '/digest/BillsLaws/' + id+'/1'
      );
    }
    else {
      return (
        '/digest/' + type + '/' + id + '/1'
      )
    }
  }

    return (
    <div className="search">                        
        <form onSubmit={handleSubmit}>
            <InputBase
                placeholder="Search…"
                className="nav-inputbase"
                value={text}
                onChange={(e) => onChange(e.target.value)}
                inputProps={{ 'aria-label': 'search' }}
            />
        </form>
        <div className="searchicon">
            <img src={search} alt="" style={{marginTop:'2px'}} onClick={handleSubmit}/>
        </div>

        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <img src={logo} alt="" className="search_logo"/>
            <img src={colorLogo} alt="" className="search_logo_big"/>
            <Typography variant="h6" className={classes.title}>
              {items ? items.length : 0 } results for "{text}"
            </Typography>
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon style={{color:'#5A5EBB'}}/>
            </IconButton>
          </Toolbar>

          <div className="filter_categories">
            <h5>Filter <span className="d-none">by category</span>:</h5>
            <Button 
              onClick={handleHistory} 
              style={{backgroundColor: history ? '#5A5EBB' : 'white', color: history ? 'white' : '#5A5EBB',border:'1.5px solid #5A5EBB'}}
            >
              History
            </Button>
            <Button 
              onClick={handleCurrentAffairs} 
              style={{backgroundColor: currentAffairs ? '#5A5EBB' : 'white', color: currentAffairs ? 'white' : '#5A5EBB',border:'1.5px solid #5A5EBB'}}
            >
              Current Affairs
            </Button>
            <Button 
              onClick={handleJudgements} 
              style={{backgroundColor: judgements ? '#5A5EBB' : 'white', color: judgements ? 'white' : '#5A5EBB',border:'1.5px solid #5A5EBB'}}
            >
              Judgements
            </Button>
            <Button 
              onClick={handleBills} 
              style={{backgroundColor: bills ? '#5A5EBB' : 'white', color: bills ? 'white' : '#5A5EBB',border:'1.5px solid #5A5EBB'}}
            >
              Bills & Laws
            </Button>
          </div>
          
        </AppBar>

        <div className="searchBody">
          <div className="" style={{display:'flex'}}>
              <h5 className="searchRes">Search Results</h5>
              <div className="hrLine"></div>
          </div>
              {items ? items.map((item) => {
                return (
                  <>
                  <Link to={url(item.digestType, item._id)}>
                    <Grid container className="searchContainer" key={item._id}>
                      <div className="searchCardBtn">
                        <Button>{item.digestType}</Button>
                      </div>
                      <Grid item xs={8} className="searchGrid" onClick={() => setOpen(false)}>
                        <h4>{item.title}</h4>
                        <h6>{item.description}</h6>
                      </Grid>
                      <Grid item xs={4} onClick={() => setOpen(false)} className="searchCardImage">
                        <StorageImage path="digest" imageId={item.imageId} />
                      </Grid>
                    </Grid>
                  </Link>
                  </>
                );
              }) : <> </>}             

        </div>
        
      </Dialog>
    </div>    
    )
}

export default Search
