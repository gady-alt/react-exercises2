import { useLayoutEffect } from "react";

function List(){
    const favArtist = ["james blake", "6lack", "Ririmba", "Lal megao"]
    const favArtistitem = favArtist.map(artist => <li>{artist}</li>)
    return(<ul>{favArtistitem}</ul>);
}
export default List