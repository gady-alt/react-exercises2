
function List(props){
       const itemList = props.ListItem
    const smallAlbs = itemList.filter(smallAlb => smallAlb.album <10)
    const favArtistitem = smallAlbs.map(artist => <li>{artist.name}: <b>{artist.album}</b></li>)
    return(<ol>{favArtistitem}</ol>);
}
export default List