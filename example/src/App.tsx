import { VidATor } from 'atorable-react'
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { MdOutlineBlurOn } from 'react-icons/md'

// import { Public } from '@material-ui/icons/'
// import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import img from './atorable.png'
import bunny from './bunny.mp4'
import bunnyTor from './bunny.torrent'
import { ShowPrgrs } from './ShowPrgrs'

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link
                color='inherit'
                href='https://github.com/sergethompson/atorable-react'
            >
                atorable-react
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: 'orange' // theme.palette.background.paper,
    },
    main: {
        backgroundColor: '#5270d9' // theme.palette.background.paper,
    },
    icon: {
        marginRight: theme.spacing(2),
        color: '#5270d9',
        fontStyle: 'bold',
        fontFamily: 'PT Sans, sans-serif'
    },
    heroContent: {
        backgroundColor: '#5270d9', // theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
        // font: 'helvetica' // movie about this font
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: '0',
        paddingBottom: '0',
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' // 16:9
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: '#5270d9', // theme.palette.background.paper,
        padding: theme.spacing(6)
    }
}))

// const cards = [1, 2, 3]
// let imgPath =
//   'magnet:?xt=urn:btih:dc94d0d5b4a4ca82bbe4d335ddb65ef7ea3de374&dn=DSC4470.jpg&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.jpg&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FDSC4470.torrent'
// let sintel =
//     'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
// let oceanFish =
//   'magnet:?xt=urn:btih:17a613e4a81e52cf41cab72157a24faecaa8f2f5&dn=GOPR0093.mp4&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.mp4&xs=http%3A%2F%2Flocalhost%3A8080%2Fassets%2Fimg%2FGOPR0093.torrent'
let bunnyMagnet =
    'magnet:?xt=urn:btih:2bd1f18edf0503c435a93aa8891e8c9b07eb87b2&dn=bunny.59b8487d.mp4&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fatorable.github.io%2Fatorable-react%2Fstatic%2Fmedia%2Fbunny.59b8487d.mp4&xs=https%3A%2F%2Fatorable.github.io%2Fatorable-react%2Fstatic%2Fmedia%2Fbunny.97b7255e.torrent'
export default function Album() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                className={classes.header}
                color='secondary'
                position='relative'
            >
                <Toolbar className={classes.icon}>
                    <MdOutlineBlurOn
                        className='navbar-icon'
                        style={{ color: '#5270d9' }}
                    />
                    <Typography variant='h5' color='inherit' noWrap>
                        {/* <h1
                            style={{
                                color: '#5270d9',
                                fontFamily: 'PT Sans, sans-serif'
                            }}
                        > */}
                        ATORABLE
                        {/* </h1> */}
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.main}>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth='sm'>
                        <Typography
                            component='h1'
                            variant='h2'
                            align='center'
                            color='textPrimary'
                            gutterBottom
                        >
                            atorable-react
                        </Typography>
                        <CardMedia
                            className={classes.cardMedia}
                            image={img}
                            title='atorable-react'
                        />
                        {/* <h1
                            style={{
                                color: '#5270d9',
                                fontFamily: 'PT Sans, sans-serif'
                            }}
                        >
                            ATORABLE
                        </h1>

                        <p style={{ fontAlign: 'center' }}>
                            <img
                                height='300'
                                width='300'
                                title='atorable logo'
                                src='../atorable.svg'
                            />
                        </p> */}
                        <Typography
                            variant='h5'
                            align='center'
                            color='textSecondary'
                            paragraph
                        >
                            React component that processes a{' '}
                            <Link color='inherit' href='https://webtorrent.io/'>
                                Webtorrent
                            </Link>{' '}
                            magnet uri and makes the resulting file available
                            for viewing or other custom uses.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justifyContent='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        <Link
                                            color='inherit'
                                            href='https://www.npmjs.com/package/atorable-react'
                                        >
                                            NPM
                                        </Link>{' '}
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        <Link
                                            color='inherit'
                                            href='https://github.com/sergethompson/atorable-react'
                                        >
                                            GITHUB
                                        </Link>{' '}
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <VidATor
                        width={'480'}
                        height={'360'}
                        type={'video/mp4'}
                        magnetURI={bunnyMagnet}
                        ShowPrgrs={ShowPrgrs}
                    />

                    {/* <VidStrmATor
            width='320'
            height='240'
            autoplay={true}
            magnetURI={steel}
          /> */}
                    {/* <br /> */}
                    {/* <ImgATor magnetURI={imgPath} style={{ border: 'solid' }} /> */}

                    {/* <WrapATor magnetURI={imgPath}>
          </WrapATor> */}
                </Container>
                {/* Card Container below */}
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    <a href={bunnyTor} download>
                        <span role='img'>🦶</span>
                    </a>
                </Typography>
                <Typography
                    variant='subtitle1'
                    align='center'
                    color='textSecondary'
                    component='p'
                >
                    If you like this you will <span role='img'>❤️</span>{' '}
                    <Link
                        color='inherit'
                        href='https://github.com/sergethompson/atorable-loader'
                    >
                        atorable-loader
                    </Link>{' '}
                </Typography>
                <Copyright />
                <video
                    style={{ position: 'absolute', left: '-9999px' }}
                    // poster={iGif} // TODO: make this loading gif work
                    // width={props.width}
                    // height={props.height}
                    // controls
                    // autoPlay
                    // muted
                    // ref={videoElement}
                    src={bunny}
                >
                    <source type={'video/mp4'} />
                    Your browser does not support the video tag.
                </video>
            </footer>
            {/* End footer */}
        </React.Fragment>
    )
}

//  <Container className={classes.cardGrid} maxWidth='md'>
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card className={classes.card}>
//                   <CardMedia
//                     className={classes.cardMedia}
//                     image={img}
//                     title='atorable-react'
//                   />
//                   <CardContent className={classes.cardContent}>
//                     <Typography gutterBottom variant='h5' component='h2'>
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe
//                       the content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size='small' color='primary'>
//                       View
//                     </Button>
//                     <Button size='small' color='primary'>
//                       Edit
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>

// ;<Container className={classes.cardGrid} maxWidth='md'>
//   {/* End hero unit */}
//   <Grid container spacing={4}>
//     <Grid item key={card} xs={12} sm={6} md={4}>
//       <Card className={classes.card}>
//         <CardContent className={classes.cardContent}></CardContent>
//       </Card>
//     </Grid>
//   </Grid>
// </Container>
