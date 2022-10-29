import Grid from "@mui/material/Grid";
import  Typography  from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import './App.css';

function App() {
  return (
    <Grid container flexDirection={'column'} textAlign={'center'}>
      <Typography variant={'MuiH1'}>
        Gets things done with TODo
      </Typography>
      <Grid>
        <Typography variant={'p-alignCenter'} sx={{textAlign:'center'}}>
          Lorem ipsum dolor sit amet,<br></br>
          consectetur adipiscing elit.
          Magna in<br></br> volutpat, tristique
          lacinia ut.<br></br> Elementum non turpis
          nullam ipsum.<br></br>
        </Typography>
      </Grid>
      <Button variant={'mainButton'} className={'margin'} sx={{
        width: 325,
        textAlign:'center'
      }}>
        <Typography variant={'p-button'}>
          GetStarted
        </Typography>
      </Button>
      <Link underline={'none'} color={'#138B93'}>Sing in</Link> 
    </Grid>
  );
}

export default App;
