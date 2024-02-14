console.log('welcome to the project ')
// initialize the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myprogressBar= document.getElementById('myprogressBar');
let gif= document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName= document.getElementById('masterSongName');



let songs=[
    {songName : "Phir Aur Kya Chahiye" , filePath : "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName : "Tere Vaaste" , filePath : "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName : "Apna Bana Le" , filePath : "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName : "song 4" , filePath : "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName : "song 5" , filePath : "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName : "song 6" , filePath : "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName : "song 7" , filePath : "songs/7.mp3", coverPath: "covers/7.jpg"},
    // {songName : "song1" , filePath : "songs/8.mp3", coverPath: "covers/8.jpg"},
    // {songName : "song1" , filePath : "songs/9.mp3", coverPath: "covers/9.jpg"},
]

songItems.forEach((element,i)=>
{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    // element.getElementsByClassName("timestamp")[0].innerText=songs[i].filePath.duration;
})
// audioElement.play();

masterplay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.play();
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            gif.style.opacity=1;
            
        }
    else
        {
            audioElement.pause();
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
            gif.style.opacity=0;
        }
})
// listen to events
audioElement.addEventListener('timeupdate',()=>{
progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
myprogressBar.value=progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})

const makeAllPlays=() =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
    {
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
    })
       
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex= parseInt(e.target.id);
        gif.style.opacity=1;
            makeAllPlays();
            masterSongName.innerText=songs[songIndex].songName;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            
            audioElement.src=`songs/${songIndex+1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');

           


        // console.log(e.target);
        // e.target.classList.remove()
    })

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;

            audioElement.currentTime=0;
            audioElement.play();
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
           
    }
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex-=1;
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            
    }
})
