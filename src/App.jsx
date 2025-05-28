import List from "./List.jsx"
function App() {
     const favArtist = [
        {id: 1, name:"james blake", album:3},
        {id: 2, name:"6lack", album: 4},
        {id: 3, name:"Ririmba", album:0},
        {id: 4, name:"Lal megao", album: 12},
        {id: 5, name: "kendrick", album: 10}
    ]
   return(<List ListItem={favArtist}/>);
}

export default App
