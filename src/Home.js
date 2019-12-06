import React, {Component} from 'react';
import './App.css';
import Logo from "./components/HomeLogo";
import Search from "./components/banner";
import Player from "./components/player";
import WordLink from "./components/wordLink";
import LoadResources from "./resources/songs";
import SortByName from "./components/SortByName";
import SortByArtist from "./components/SortByArtist";

export default class App extends Component {

    constructor() {
        super();

        const resources = new LoadResources();
        const songs = resources.load();

        this.state = {
            genre: "",
            artist: "",
            sort: false,
            songs: songs
        };

        //bind revert back
        this.handleClickedLogo = this.handleClickedLogo.bind(this);

        //bind click sort event
        this.handleClickSortName = this.handleClickSortName.bind(this);
        this.handleClickSortArtist = this.handleClickSortArtist.bind(this);

        //bind click genre event
        this.handleClickRB = this.handleClickRB.bind(this);
        this.handleClickPop = this.handleClickPop.bind(this);
        this.handleClickReggaeton = this.handleClickReggaeton.bind(this);
        this.handleClickHipHop = this.handleClickHipHop.bind(this);
        this.handleClickElectronicDance = this.handleClickElectronicDance.bind(this);
        this.handleClickCountry = this.handleClickCountry.bind(this);
        this.handleClickRock = this.handleClickRock.bind(this);
        this.handleClickSoul = this.handleClickSoul.bind(this);
        this.handleClickBlues = this.handleClickBlues.bind(this);

        //bind click artist event
        this.handleClickAli = this.handleClickAli.bind(this);
        this.handleClickAriana = this.handleClickAriana.bind(this);
        this.handleClickCamila = this.handleClickCamila.bind(this);
        this.handleClickCardi = this.handleClickCardi.bind(this);
        this.handleClickMaluma = this.handleClickMaluma.bind(this);
        this.handleClickMariah = this.handleClickMariah.bind(this);
        this.handleClickMaroon5 = this.handleClickMaroon5.bind(this);
        this.handleClickNicki = this.handleClickNicki.bind(this);
        this.handleClickUsher = this.handleClickUsher.bind(this);
        this.handleClickJustin = this.handleClickJustin.bind(this);
        this.handleClickDanShay = this.handleClickDanShay.bind(this);
        this.handleClickZedd = this.handleClickZedd.bind(this);
    };

    //load results after being filtered and sorted
    loadResult() {
        return this.Filter(this.state.songs, this.state.genre, this.state.artist);
    }

    //filter and sort
    Filter(params, genre, artist) {
        var tmp;
        if (genre === "" && artist === "") {
            tmp = params;
        } else if (genre !== "") {
            tmp = params.filter(param => param.genre === genre);
        } else {
            tmp = params.filter(param => param.artist.includes(artist));
        }
        if (this.state.sort === true) {
            return tmp.sort((a, b) => a.artist.localeCompare(b.artist));
        } else {
            return tmp.sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    //when click R&B tag
    handleClickRB() {
        this.setState({
            genre: "R&B"
        });
    };

    //when click Pop tag
    handleClickPop() {
        this.setState({
            genre: "Pop"
        });
    }

    //when click Reggaeton tag
    handleClickReggaeton() {
        this.setState({
            genre: "Reggaeton"
        });
    }

    //when click Hip Hop tag
    handleClickHipHop() {
        this.setState({
            genre: "Hip Hop"
        });
    }

    //when click Country tag
    handleClickCountry() {
        this.setState({
            genre: "Country"
        });
    }

    //when click Electronic Dance tag
    handleClickElectronicDance() {
        this.setState({
            genre: "Electronic Dance"
        });
    }

    //when click Rock tag
    handleClickRock() {
        this.setState({
            genre: "Rock"
        });
    }

    //when click Soul tag
    handleClickSoul() {
        this.setState({
            genre: "Soul"
        });
    }

    //when click Blues tag
    handleClickBlues() {
        this.setState({
            genre: "Blues"
        });
    }


    //when click artists
    handleClickAli() {
        this.setState({
            artist: "Ali Gatie"
        })
    }

    handleClickAriana() {
        this.setState({
            artist: "Ariana Grande"
        })
    }

    handleClickCamila() {
        this.setState({
            artist: "Camila Cabello"
        })
    }

    handleClickCardi() {
        this.setState({
            artist: "Cardi B"
        })
    }

    handleClickMaluma() {
        this.setState({
            artist: "Maluma"
        })
    }

    handleClickMariah() {
        this.setState({
            artist: "Mariah Carey"
        })
    }

    handleClickMaroon5() {
        this.setState({
            artist: "Maroon 5"
        })
    }

    handleClickNicki() {
        this.setState({
            artist: "Nicki Minaj"
        })
    }

    handleClickUsher() {
        this.setState({
            artist: "Usher"
        })
    }

    handleClickJustin() {
        this.setState({
            artist: "Justin Bieber"
        })
    }

    handleClickDanShay() {
        this.setState({
            artist: "Dan + Shay"
        })
    }

    handleClickZedd() {
        this.setState({
            artist: "Zedd"
        })
    }

    //sort click event
    handleClickSortName() {
        this.setState({
            sort: false
        })
    }

    handleClickSortArtist() {
        this.setState({
            sort: true
        })
    }

    //reverted to original state
    handleClickedLogo() {
        this.setState({
            genre: "",
            artist: "",
            sort: false
        })
    }

    /* render function, etc */
    render() {
        var renderedPlayers = [];
        var Players = this.loadResult();
        for (let i = 0; i < Players.length; i++) {
            renderedPlayers.push(
                <div className="player"><Player name={Players[i].name}/></div>
            )
        }
        console.log(Players);

        return (
            <body>
            <div style={{textAlign: "center"}}>
                <div>
                    <div className="banner">
                        <div onClick={this.handleClickedLogo} style={{textAlign: 'left'}}><Logo /></div>
                        <div style={{marginTop: '-28px', marginLeft: '-100px'}}><Search/></div>
                    </div>
                    <div onClick={this.handleClickSortName} style={{marginLeft: '34cm',textAlign: 'left'}}><SortByName /></div>
                    <div onClick={this.handleClickSortArtist} style={{marginLeft: '34cm', marginTop: '-10px', textAlign: 'left'}}><SortByArtist /></div>
                </div>
                <div className="searchBox">
                    <div className="captionBox">
                        <p className="caption">Genres</p>
                    </div>
                    <div onClick={this.handleClickRB} className="word"> <WordLink name="R&B"/> </div>
                    <div onClick={this.handleClickPop} className="word"> <WordLink name="Pop"/> </div>
                    <div onClick={this.handleClickReggaeton} className="word"> <WordLink name="Reggaeton"/> </div>
                    <div onClick={this.handleClickHipHop} className="word"> <WordLink name="Hip Hop"/> </div>
                    <div onClick={this.handleClickCountry} className="word"> <WordLink name="Country"/> </div>
                    <div onClick={this.handleClickElectronicDance} className="word"> <WordLink name="Electronic Dance"/> </div>
                    <div onClick={this.handleClickRock} className="word"> <WordLink name="Rock"/> </div>
                    <div onClick={this.handleClickSoul} className="word"> <WordLink name="Soul"/> </div>
                    <div onClick={this.handleClickBlues} className="word"> <WordLink name="Blues"/> </div>
                    <hr id='splitline'/>
                    <div className="captionBox">
                        <p className="caption">Artist</p>
                    </div>
                    <div onClick={this.handleClickAli} className="word"> <WordLink name="Ali Gatie"/> </div>
                    <div onClick={this.handleClickAriana} className="word"> <WordLink name="Ariana Grande"/> </div>
                    <div onClick={this.handleClickCamila} className="word"> <WordLink name="Camila Cabello"/> </div>
                    <div onClick={this.handleClickCardi} className="word"> <WordLink name="Cardi B"/> </div>
                    <div onClick={this.handleClickDanShay} className="word"> <WordLink name="Dan + Shay"/> </div>
                    <div onClick={this.handleClickJustin} className="word"> <WordLink name="Justin Bieber"/> </div>
                    <div onClick={this.handleClickMaluma} className="word"> <WordLink name="Maluma"/> </div>
                    <div onClick={this.handleClickMariah} className="word"> <WordLink name="Mariah Carey"/> </div>
                    <div onClick={this.handleClickMaroon5} className="word"> <WordLink name="Maroon 5"/> </div>
                    <div onClick={this.handleClickNicki} className="word"> <WordLink name="Nicki Minaj"/> </div>
                    <div onClick={this.handleClickUsher} className="word"> <WordLink name="Usher"/> </div>
                    <div onClick={this.handleClickZedd} className="word"> <WordLink name="Zedd"/> </div>

                </div>
                <div className="videos">
                    <p style={{marginBottom: '1cm'}} className="tags"> Recently Featured Videos </p>
                    <div>{renderedPlayers}</div>
                </div>
            </div>
            </body>
        );
    }
};