import {createTheme} from "@mui/material/styles";
 
export const theme = createTheme({
    components:{
        MuiCssBaseline:{
            styleOverrides:{
                body:{
                    background:'#EEE',
                    'a':{
                        color:'#138B93',
                        fontSize:13,
                        fontWeight:500,
                        lineHeight:'20px',
                        underline:'none',
                    }
                }, 
            }
        },
        MuiButton:{
            variants:[{
                props:{variant:'mainButton'},
                style:{
                    backgroundColor:'#50c2c9',
                    color:'#fff',
                    height:60,
                    borderRadius:'20px',
                    textAline:'center',
                }
            }]
        },
        Typography:[{
            fontFamily:'Poppins',
            MuiH1:{
                fontWeight:700,
                fontSize:18,
                lineHeight:'12px',
                fontStyle:'normal',
                color:'#000',
            },
            variants:[{
                props:{variant:'p-alignCenter'},
                style:{
                    fontWeight:400,
                    fontSize:13,
                    lineHeight:'19.5px',
                    textAline: 'center',
                    color: 'rgba(0, 0, 0, 0.79)',
                },
            },{
                variants:[{
                    props:{variant:'p-alignStart'},
                    style:{
                        fontWeight:400,
                        fontSize:13,
                        lineHeight:'19.5px',
                        // textAline: 'left',
                        color: 'rgba(0, 0, 0, 0.79)',
                    }
                }]
            },{
                variants:[{
                props:{variant:'p-button'},
                style:{
                    fontWeight:600,
                    fontSize:18,
                    lineHeight:'27px',
                    Align:'center',
                    color:'#fff',
                    }
                }]
            }]  
                
        }]
            
    },
    
})



// export const theme = createTheme({
//     components: {
//         MuiCssBaseline: {
//             styleOverrides: {
//                 body: {
//                     background: '#EEE',
//                     '.margin': {
//                         margin: 50
//                     },
//                     'a': {

//                     },
//                     '#myId': {

//                     }
//                 }
//             }
//         },
//         MuiButton: {
//             variants: [
//                 {
//                     props: {variant: 'mainButton'},
//                     style: {
//                         color: '#fff',
//                         backgroundColor: '#50C2C9',
//                         borderRadius: '20px',
//                         textAlign: 'center',
//                         height: 60,
//                         '&:hover': {
//                             backgroundColor: '#50C2C9',
//                         }
//                     }
//                 },
//                 {
//                     props: {variant: 'secondaryButton'},
//                     style: {

//                     }
//                 }
//             ]
//         }
//     },
//     palette: {
//         primary: {
//             main: '#50C2C9',
//             light: '#94F6FC'
//         },
//         background: '#EEE'
//     },
//     typography: {
//         fontFamily: 'Poppins',
//         h1: {
//             fontSize: 18,
//             fontWeight: 700,
//             lineHeight: '27px'
//         },
//     },


// })
