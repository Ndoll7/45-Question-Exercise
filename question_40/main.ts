
// define the make-album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if(tracks !== undefined){
        album.tracks = tracks
    }

    return album;
}

//calling three function and create 3 variables with different values
let album1 = make_album("Hamza", "Album tittle 1");

let album2 = make_album("Hamza", "Album title 2", 10);

let album3 = make_album("Hamza", "Album title 3", );

//print values of our object created my function
console.log(album1);

console.log(album2);

console.log(album3);