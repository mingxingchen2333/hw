import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Papercut from './videoDir/Papercut.mp4';
import Trampoline from './videoDir/Trampoline.mp4';
import NeverBetheSame from './videoDir/NeverBetheSame.mp4';
import You from './videoDir/You.mp4';
import ImAlright from './videoDir/ImAlright.mp4';
import Fendi from './videoDir/Fendi.mp4';
import Umbrella from './videoDir/Umbrella.mp4';
import FeelItStill from './videoDir/FeelItStill.mp4';
import Scream from './videoDir/Scream.mp4';
import ByeBye from './videoDir/ByeBye.mp4';
import Press from './videoDir/Press.mp4';
import Despacito from './videoDir/Despacito.mp4';
import KnowBetter from './videoDir/KnowBetter.mp4';
import Heartless from './videoDir/Heartless.mp4';
import BadToYou from './videoDir/BadToYou.mp4';
import Morning from './videoDir/Morning.mp4';
import Lover from './videoDir/Lover.mp4';
import Liar from './videoDir/Liar.mp4';
import Memories from './videoDir/Memories.mp4';
import Quepena from './videoDir/QuePena.mp4';
import Yesterday from './videoDir/Yesterday.mp4';


export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            underline: 'none',
            displayImg: 'block'
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleUnderline = this.handleUnderline.bind(this);
        this.handleNoUnderline = this.handleNoUnderline.bind(this);
    };


    loadPlayer(props) {
        switch (props.name) {
            case "Papercut":
                return Papercut;
            case "Trampoline":
                return Trampoline;
            case "NeverBetheSame":
                return NeverBetheSame;
            case "It'sYou":
                return You;
            case "ImAlright":
                return ImAlright;
            case "Fendi":
                return Fendi;
            case "Umbrella":
                return Umbrella;
            case "FeelItStill":
                return FeelItStill;
            case "Scream":
                return Scream;
            case "ByeBye":
                return ByeBye;
            case "Press":
                return Press;
            case "Despacito":
                return Despacito;
            case "KnowBetter":
                return KnowBetter;
            case "Heartless":
                return Heartless;
            case "BadToYou":
                return BadToYou;
            case "Morning":
                return Morning;
            case "Lover":
                return Lover;
            case "Liar":
                return Liar;
            case "Memories":
                return Memories;
            case "Quepena":
                return Quepena;
            case "Yesterday":
                return Yesterday;
            default:
                return null;
        }
    }

    getSongName(props) {
        switch (props.name) {
            case "Papercut":
                return "Zedd - Papercut (Feat. Troye Sivan)";
            case "Trampoline":
                return "Alex Mendoza - Trampoline (Official Video)";
            case "GoodThing":
                return "Zedd & Kehlani - Good Thing (Official Music Video)";
            case "NeverBetheSame":
                return "Camila Cabello - Never Be the Same";
            case "It'sYou":
                return "Ali Gatie - It's You (Official Music Video)";
            case "ImAlright":
                return "Maxi Priest - I'm Alright (feat. Shaggy) (Official Music Video)";
            case "Fendi":
                return "PnB Rock - Fendi (Official Video) feat. Nicki Minaj & Murda Beatz";
            case "Umbrella":
                return "Rihanna - Umbrella (Orange Version) ft. JAY-Z";
            case "FeelItStill":
                return "Portugal. The Man - Feel It Still (Official Video)";
            case "PerfectPlaces":
                return "Lorde - Perfect Places";
            case "Scream":
                return "Usher - Scream (Filmed at FUERZA BRUTA NYC SHOW) (Official Video)";
            case "ByeBye":
                return "Mariah Carey - Bye Bye (Official Music Video)";
            case "Press":
                return "Cardi B - Press [Official Music Video]";
            case "Despacito":
                return "Luis Fonsi - Despacito ft. Daddy Yankee";
            case "CamouflageHat":
                return "Jason Aldean - Camouflage Hat (Official Audio)";
            case "Shameless":
                return "Camila Cabello - Shameless";
            case "RollSomeMo":
                return "Lucky Daye - Roll Some Mo (Official Video)";
            case "KnowBetter":
                return "Tinashe - Know Better (Lyrics)";
            case "Heartless":
                return "The Weeknd - Heartless (Official Video)";
            case "BadToYou":
                return "Ariana Grande, Normani, Nicki Minaj - Bad To You (Charlie’s Angels Soundtrack)(Official Lyric Video)";
            case "Morning":
                return "Teyana Taylor, Kehlani - Morning (Official Video)";
            case "LastName":
                return "Future - Last Name (Official Music Video) ft. Lil Durk";
            case "Northside":
                return "Ama Lou - NORTHSIDE (Official Music Video)";
            case "Lover":
                return "Taylor Swift - Lover";
            case "Liar":
                return "Camila Cabello - Liar";
            case "Hurt2BHuman":
                return "P!nk - Hurts 2B Human ft. Khalid";
            case "Younger":
                return "Jonas Blue, HRVY - Younger";
            case "Memories":
                return "Maroon 5 - Memories";
            case "Quepena":
                return "Maluma, J Balvin - Qué Pena (Official Video)";
            case "Sech":
                return "Sech - Otro Trago ft. Darell (Video Oficial)(0)";
            case "YoxTi":
                return "ROSALÍA, Ozuna - Yo x Ti, Tu x Mi (Official Video)";
            case "Fantasias":
                return "Rauw Alejandro  Farruko - Fantasías (Video Oficial)";
            case "Hours":
                return "Dan + Shay, Justin Bieber - 10,000 Hours (Official Music Video)";
            case "HellRight":
                return "Blake Shelton - Hell Right (ft. Trace Adkins) [Official Music Video]";
            case "EvenThough":
                return "Luke Combs - Even Though I'm Leaving (Official Video)";
            case "RightWhereILeftIt":
                return "Cole Swindell - Right Where I Left It (Official Music Video)";
            case "Yesterday":
                return "Leon Bridges - That Was Yesterday (Official Audio)";
            case "Hoochie":
                return "Muddy Waters - Hoochie Coochie Man   ( Chess 1954)";
            case "Thrill":
                return "B.B. King - The Thrill Is Gone ( 1969 ) HD";
            case "FixThis":
                return "Nonpoint - Fix This";
            default:
                return null;
        }
    }

    videoStyle = {
        width: '10cm',
        height: '6cm',
        backgroundColor: 'black',
        position: 'relative'
    };

    imgStyle = {
        width: '10cm',
        height: '6cm',
        backgroundColor: 'black',
        position: 'absolute'
    };

    fontStyle = {
        fontWeight: 600,
        fontSize: '13px',
        fontcolor: 'white',
        opacity: 0.8,
        width: '8cm',
        marginTop: '0px',
        marginLeft: '2px'
    };

    handleMouseEnter() {
        this.setState({
            show: true,
            displayImg: 'none'
        })
    };

    handleMouseLeave() {
        this.setState({
            show: false
        })
    };

    handleUnderline() {
        this.setState({
            underline: 'underline'
        })
    };

    handleNoUnderline() {
        this.setState({
            underline: 'none'
        })
    }

    render() {
        return (
            <div >
                <div style={this.videoStyle} onMouseOver={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <ReactPlayer style={{position: 'absolute'}}
                        url={this.loadPlayer(this.props)}
                        className='react-player'
                        playing={this.state.show}
                        width='100%'
                        height='100%'
                    />
                    {/*<div style={{display: this.state.displayImg}} onMouseOver={this.handleMouseEnter}>*/}
                    {/*    <img style={this.imgStyle} src={Cat}/>*/}
                    {/*</div>*/}
                </div>
                <p style={this.fontStyle}>
                    <a onMouseOver={this.handleUnderline}
                       onMouseLeave={this.handleNoUnderline}
                       style={{textDecoration: this.state.underline, color: 'white'}}
                       href="https://www.w3schools.com/html/">{this.getSongName(this.props)}</a>
                </p>
            </div>

        );
    }
}
