pragma solidity >=0.4.22 <0.8.0;

contract Album{
    string public album;
    string public artist;
    string public imageurl;

    struct Song{
        uint  id;
        string name;
        string duration;
        string genre;
    }

    // Constructor
    constructor () public{
        album = "";
        artist = "";
    }

    function setData(string memory _name,string memory _artist, string memory _url) public{
        album = _name;
        artist = _artist;
        imageurl = _url;
    }

    //Mapping to fetch songs
    mapping(uint => Song) public songs;

    //Store Song Count
    uint public songsCount;
    
    function addSong(string memory _name,string memory _duration,string memory _genre) public{
        songsCount++;
        songs[songsCount] = Song(songsCount,_name,_duration,_genre);
    }

}