const music = document.querySelector('audio');
const img = document.querySelector("img");
const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const artist = document.getElementById("artist");
const title = document.getElementById("title");

const songs = [
    {
        name:"music-1",
        image:"image-1",
        title: "Twinkle Twinkle",
        artist: "Julie"
    },
    {
        name:"music-2",
        image:"image-2",
        title: "Speaker Joy",
        artist: "Srimpa"
    },
    {
        name:"music-1",
        image:"image-3",
        title: "Speaker Joy",
        artist: "Srimpa"
    },
    {
        name:"music-2",
        image:"image-4",
        title: "Speaker Joy",
        artist: "Srimpa"
    }

]

var isPlaying = false;
//for play
const playMusic=()=>{
   isPlaying = true;
    music.play();
    
    play.classList.replace('fa-play','fa-pause');
    img.classList.add("anime");
};
//for pause
const pauseMusic=()=>{
   isPlaying = false;
    music.pause();
    
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove("anime");
};

play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
});

//changing the music data;

const loadSongs = (songs) =>{
  title.textContent = songs.title;
  artist.textContent = songs.artist;
 music.src ="music/"+songs.name +".mp3";
 img.src ="images/"+songs.image +".jpg";

};

songIndex = 0;
const nextSong = ()=>{
    songIndex = (songIndex+1)% songs.length;
    loadSongs(songs[songIndex]);
    if(isPlaying)
    playMusic();
}

const prevSong = ()=>{
    songIndex = (songIndex-1 + songs.length)% songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}


next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);