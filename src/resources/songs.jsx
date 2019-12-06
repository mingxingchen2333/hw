import { Component } from "react";

const songs = [
    { name: "Papercut", genre: "Electronic Dance", artist: "Zedd" },
    { name: "Trampoline", genre: "R&B", artist: "Alex Mendoza"},
    { name: "GoodThing", genre: "Electronic Dance", artist: "Zedd"},
    { name: "NeverBetheSame", genre: "Pop", artist: "Camila Cabello"},
    { name: "It'sYou", genre: "Soul", artist: "Ali Gatie"},
    { name: "ImAlright", genre: "Reggaeton", artist: "Maxi Priest"},
    { name: "Fendi", genre: "Hip Hop", artist: "Nicki Minaj & Murda Beatz"},
    { name: "Umbrella", genre: "R&B", artist: "Rihanna"},
    { name: "PerfectPlaces", genre: "Pop", artist: "Lorde"},
    { name: "Scream", genre: "Pop", artist: "Usher"},
    { name: "ByeBye", genre: "R&B", artist: "Mariah Carey"},
    { name: "Press", genre: "Hip Hop", artist: "Cardi B"},
    { name: "Despacito", genre: "Reggaeton", artist: "Luis Fonsi & Daddy Yankee"},
    { name: "Shameless", genre: "Rock", artist: "Camila Cabello"},
    { name: "KnowBetter", genre: "R&B", artist: "Tinashe"},
    { name: "Heartless", genre: "R&B", artist: "The Weeknd"},
    { name: "BadToYou", genre: "R&B", artist: "Ariana Grande, Normani, Nicki Minaj"},
    { name: "Morning", genre: "R&B", artist: "Teyana Taylor, Kehlani"},
    { name: "LastName", genre: "R&B", artist: "Future"},
    { name: "Northside", genre: "Pop", artist: "Ama Lou"},
    { name: "Lover", genre: "Pop", artist: "Taylor Swift"},
    { name: "Liar", genre: "Pop", artist: "Camila Cabello"},
    { name: "Younger", genre: "Pop", artist: "Jonas Blue, HRVY"},
    { name: "Memories", genre: "Pop", artist: "Maroon 5"},
    { name: "Quepena", genre: "Reggaeton", artist: "Maluma, J Balvin"},
    { name: "Yesterday", genre: "Soul", artist: "Leon Bridges"},
];

export default class LoadResources extends Component {
    load() {
        return songs;
    }
}