import React, {useState,useEffect} from 'react'
import { getArticles } from '../api'  
import Popover from '@mui/material/Popover';
import SearchBar from './SearchBar';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';  
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
 
 

function News() {
    const [bitcoinArticle, setbitcoinArticle] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const [popover,setPopover] = useState()
    const [searchTopic, setsearchTopic] = useState()
    useEffect(()=>{ 
        getArticles(searchTopic).then(res=>setbitcoinArticle(res)) 
    },[searchTopic]) 

    const handleClick = (event,desc) => {
        setAnchorEl(event.currentTarget);
        setPopover(desc)
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

      const searchForTopic = async topic => {  
          setsearchTopic(topic)  
      }

      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;

  return (
    <> 
     <SearchBar searchForTopic={searchForTopic} />
    <Box>
      <Grid container spacing='15px'> 
            {bitcoinArticle.map((article=>(
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }} onClick={e=>handleClick(e,article.description)}>
            <CardMedia
              component="img" 
              image={article.urlToImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.description}
              </Typography>
            </CardContent> 
          </Card>
            </Grid>
            )))} 
      </Grid>
    </Box>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>{popover}</Typography>
      </Popover>
    </> 
  )
}

export default News