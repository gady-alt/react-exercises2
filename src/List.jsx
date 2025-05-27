import { useLayoutEffect } from "react";

function List(){
    const favArtist = [
        {name:"james blake", album:3},
        {name:"6lack", album: 4},
        {name:"Ririmba", album:0},
        {name:"Lal megao", album: 12},
        {name: "kendrick", album: 10}
    ]
    //favArtist.sort((a, b) => a.name.localeCompare(b.name)) //alphabetical
    //favArtist.sort((a, b) => b.name.localeCompare(a.name)) //unalphabetical
    //favArtist.sort((a, b) => a.album -b.album )//ascending
    favArtist.sort((a, b) => b.album -a.album )//descending
    const favArtistitem = favArtist.map(artist => <li>{artist.name}: <b>{artist.album}</b></li>)
    return(<ol>{favArtistitem}</ol>);
}
export default List