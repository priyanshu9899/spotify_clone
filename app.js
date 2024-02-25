const music = new Audio ('audio/0.mp3');
//music.play();

const songs = [ {
    id: '1',
    songName:`Arjan Vailly <br />
    <div class="subtitle">Manan Bhardwaj</div>`,
    poster: "https://imgs.search.brave.com/p2UDDwcxU2XHWGfRKEE9TQvGt1EzOLD3FFthS7-jebU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2luZWpvc2guY29t/L25ld3NpbWcvbmV3/c21haW5pbWcvYXJq/YW4tdmFpbGx5LXNv/bmctZnJvbS1hbmlt/YWwtcmVsZWFzZWRf/Yl8xODExMjMwMzU3/LmpwZw"
},
{
    id: '2',
    songName:`Satranga <br />
    <div class="subtitle">Arijit Singh, Shreyas Puranik</div>`,
    poster: "https://imgs.search.brave.com/OtKOh0Ooy5Kq179oaxslR_AvZy6G1dnfV7kvf5xqpeQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS80/MTUvU2F0cmFuZ2Et/RnJvbS1BTklNQUwt/SGluZGktMjAyMy0y/MDIzMTAyNzEzMTAz/Mi01MDB4NTAwLmpw/Zw"
},
{
    id: '3',
    songName:` Hua Main <br />
    <div class="subtitle">Raghav Chaityanya</div>`,
    poster: "https://pagalnew.com/coverimages/hua-main-animal-500-500.jpg"
},
{
    id: '4',
    songName:`Papa Meri Jaan<br />
    <div class="subtitle">Sonu Nigam</div>`,
    poster: "https://pagalnew.com/coverimages/papa-meri-jaan-animal-500-500.jpg"
},
{
    id: '5',
    songName:`Pehle Bhi Main<br />
    <div class="subtitle">Vishal Mishra</div>`,
    poster: "https://i.ytimg.com/vi/a9H_cn0mnhc/hqdefault.jpg"
},
{
    id: '6',
    songName:`Kashmir<br />
    <div class="subtitle">Manan Bhardwaj, Shreya Ghoshal</div>`,
    poster: "https://imgs.search.brave.com/p2UDDwcxU2XHWGfRKEE9TQvGt1EzOLD3FFthS7-jebU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2luZWpvc2guY29t/L25ld3NpbWcvbmV3/c21haW5pbWcvYXJq/YW4tdmFpbGx5LXNv/bmctZnJvbS1hbmlt/YWwtcmVsZWFzZWRf/Yl8xODExMjMwMzU3/LmpwZw"
},
{
    id: '7',
    songName:`Saari Duniya Jalaa Denge <br />
    <div class="subtitle">B Praak</div>`,
    poster: "https://imgs.search.brave.com/NW5O9xsvYGehnVKs2u0d2QvRHtZebCM_cEjJlmJuyfQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bHlyaWNzZ29hbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTEvc2Fhcmkt/ZHVuaXlhLWphbGFh/LWRlbmdlLWFuaW1h/bC1iLXByYWFrLmpw/Zw"
},
{
    id: '8',
    songName:`Abrars Entry Jamal Kudu<br />
    <div class="subtitle">Harshavardhan Rameshwar</div>`,
    poster: "https://pagalnew.com/coverimages/abrars-entry-jamal-kudu-animal-500-500.jpg"
},
{
    id: '9',
    songName:`Haiwaan<br />
    <div class="subtitle">Ashim Kemson</div>`,
    poster: "https://imgs.search.brave.com/p2UDDwcxU2XHWGfRKEE9TQvGt1EzOLD3FFthS7-jebU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2luZWpvc2guY29t/L25ld3NpbWcvbmV3/c21haW5pbWcvYXJq/YW4tdmFpbGx5LXNv/bmctZnJvbS1hbmlt/YWwtcmVsZWFzZWRf/Yl8xODExMjMwMzU3/LmpwZw"
}]


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime<=0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
})


const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}


let index = 0;
let title = document.getElementById('title');


Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
         index = el.target.id;
         //console.log(index);
         music.src = `audio/${index}.mp3`;
         music.play();
         masterPlay.classList.remove('bi-play-fill');
         masterPlay.classList.add('bi-pause-fill');

         let songTitles = songs.filter((els) => {
            return els.id == index;
        });
        
        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgba(209, 199, 199, 0.1)';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    //console.log(min1);

    if (sec1<10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerHTML = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    if (sec2<10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerHTML = `${min2}:${sec2}`;

    if (music_curr>=music_dur) {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }

    let progress = (music_curr/music_dur)*100;
    seek.value = progress;
    bar2.style.width = `${progress}%`;
    dot.style.left = `${progress}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot'); 

vol.addEventListener('change', () => { 
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.addEventListener('click', ()=>{
    index = (index<=0) ? songs.length-1 : index-1;
    music.src = `audio/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
       return els.id == index;
   });
   
   songTitles.forEach(elss => {
       let { songName } = elss;
       title.innerHTML = songName;
   });

   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgba(209, 199, 199, 0.1)';
   makeAllplays();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index = (index>=songs.length-1) ? 0 : index+1;
    music.src = `audio/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
       return els.id == index;
   });
   
   songTitles.forEach(elss => {
       let { songName } = elss;
       title.innerHTML = songName;
   });

   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgba(209, 199, 199, 0.1)';
   makeAllplays();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
}) 
    

const imageElement = document.getElementById('albumImage');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        const imageUrl = el.target.parentElement.querySelector('img').src;
        imageElement.src = imageUrl;
    })
});


// scrollButtons

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 300;
})

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 300;
})

let popular_artists_left = document.getElementById('popular_artists_left');
let popular_artists_right = document.getElementById('popular_artists_right');
let item = document.getElementsByClassName('item')[0];

popular_artists_right.addEventListener('click', ()=>{
    item.scrollLeft += 300;
})

popular_artists_left.addEventListener('click', ()=>{
    item.scrollLeft -= 300;
})
