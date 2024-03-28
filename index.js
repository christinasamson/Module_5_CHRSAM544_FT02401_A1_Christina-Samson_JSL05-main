// Array of song objects
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Added "Shape of you" by "Ed Sheeran" to the songs array
    { title: "Shape of you", artist: "Ed Sheeran", genre: "Pop" },
    { title: "Smooth", artist: "Santana", genre: "Pop" },
    { title: "I Will Always Love You", artist: "Whitney Houston", genre: "Pop" },
    { title: "Hotel California", artist: "Eagles", genre: "Rock" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Convert guardians object to an array of key-value pairs
    const guardianEntries = Object.entries(guardians);
    
    // Create playlists for each guardian
    const playlists = guardianEntries.map(([guardian, preferredGenre]) => {
        // Filter songs based on the guardian's preferred genre
        const playlist = songs.filter(song => song.genre === preferredGenre);
        return {
            guardian: guardian,
            playlist: playlist
        };
    });

    // Loop through playlists and append them to the HTML content
    playlists.forEach(({ guardian, playlist }) => {
        const content = document.getElementById('playlists');
        const guardianDiv = document.createElement('div');

        const header = document.createElement('h2');
        header.textContent = `${guardian}'s Playlist`;
        header.style.color = 'white';
        // Remove the following line to remove the underline from the header
        // header.style.textDecoration = 'none';
        guardianDiv.appendChild(header);
    
        guardianDiv.style.color = '';
        guardianDiv.className = 'playlist';
        content.appendChild(guardianDiv);
    
        playlist.forEach(song => {
            const songDiv = document.createElement('div');
 
            songDiv.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            `<span class="song-titl"> ${song}</span>`
    
        guardianDiv.appendChild(songDiv);
        });
    });
}


// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
