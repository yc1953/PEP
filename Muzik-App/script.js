let musicContainer = $('.current-playing-song');
let playBtn = $('.play-btn');
let prevBtn = $('.prev-btn');
let nextBtn = $('.next-btn');
let audio = $('#audio');
let progressBarContainer = $('.progress-bar-container');
let progressBar = $('.progress-bar');
let title = $('.seek-name');
let artist = $('.seek-artist');
let musicIcon = $('.music-icon');
let currTime = $('.currentTime');
let totTime = $('.totalDuration');
let modeIcon = $('.mode-change-icon');
let musicList = $('.music-items-list');

let songs = [
    {
        poster: 'https://cover.djpunjab.org/49677/300x300/RiRi-Diljit-Dosanjh.jpg',
        songName: ' RiRi',
        songLink: 'http://s320.ve.vc/data/320/49677/297258/RiRi%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/49313/300x300/Paigambar-Diljit-Dosanjh.jpg',
        songName: ' Paigambar',
        songLink: 'http://s320.ve.vc/data/320/49313/296862/Paigambar%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/49075/300x300/Welcome-To-My-Hood-Diljit-Dosanjh.jpg',
        songName: ' Welcome To My Hood',
        songLink: 'http://s320.ve.vc/data/320/49075/296598/Welcome%20To%20My%20Hood%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/47092/300x300/Sauda-Khara-Khara-(Good-Newwz)-Diljit-Dosanjh.jpg',
        songName: ' Sauda Khara Khara',
        songLink: 'http://s320.ve.vc/data/320/47092/294176/Sauda%20Khara%20Khara%20(Good%20Newwz)%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/46882/300x300/Nanak-Aadh-Jugaadh-Jiyo-Diljit-Dosanjh.jpg',
        songName: ' Nanak Aadh Jugaadh Jiyo',
        songLink: 'http://s320.ve.vc/data/320/46882/293902/Nanak%20Aadh%20Jugaadh%20Jiyo%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/46196/300x300/Muchh-Diljit-Dosanjh.jpg',
        songName: ' Muchh',
        songLink: 'http://s320.ve.vc/data/320/46196/292868/Muchh%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/45658/300x300/Shadaa-Diljit-Dosanjh.jpg',
        songName: ' Shadaa',
        songLink: 'http://p3201.ve.vc/data/320/45658/292179/Shadaa%20Title%20Song%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/45645/300x300/Mor-(Shadaa)-Diljit-Dosanjh.jpg',
        songName: ' Mor',
        songLink: 'http://p3201.ve.vc/data/320/45658/292178/Mor%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/45609/300x300/Mehfil-(Shadaa)-Diljit-Dosanjh.jpg',
        songName: ' Mehfil',
        songLink: 'http://p3201.ve.vc/data/320/45658/292176/Mehfil%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/45565/300x300/Expensive-(Shadaa)-Diljit-Dosanjh.jpg',
        songName: ' Expensive',
        songLink: 'http://p3201.ve.vc/data/320/45658/292175/Expensive%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/45505/300x300/Mehndi-(Shadaa)-Diljit-Dosanjh.jpg',
        songName: ' Mehndi',
        songLink: 'http://p3201.ve.vc/data/320/45658/292177/Mehndi%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/45241/300x300/Kylie-Kareena-Diljit-Dosanjh.jpg',
        songName: ' Kylie Kareena',
        songLink: 'http://s320.ve.vc/data/320/45241/291615/Kylie%20Kareena%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/44909/300x300/Jimmy-Choo-Diljit-Dosanjh.jpg',
        songName: ' Jimmy Choo',
        songLink: 'http://s320.ve.vc/data/320/44909/291105/Jimmy%20Choo%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/44762/300x300/Gabru-Nu-Diljit-Dosanjh.jpg',
        songName: ' Gabru Nu',
        songLink: 'http://s320.ve.vc/data/320/44762/290901/Gabru%20Nu%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/44570/300x300/High-End-Remix-Diljit-Dosanjh.jpg',
        songName: ' High End Remix',
        songLink: 'http://s320.ve.vc/data/320/44570/290631/High%20End%20Remix%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/44403/300x300/Thug-Life-Diljit-Dosanjh.jpg',
        songName: ' Thug Life',
        songLink: 'http://s320.ve.vc/data/320/44403/290398/Thug%20Life%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp38',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/44264/300x300/Roar-Diljit-Dosanjh.jpg',
        songName: ' Roar',
        songLink: 'http://p3201.ve.vc/data/320/44264/290147/Fashion - Diljit Dosanjh (DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/44255/300x300/Gulabi-Pagg-Diljit-Dosanjh.jpg',
        songName: ' Gulabi Pagg',
        songLink: 'http://s320.ve.vc/data/320/44255/290133/Gulabi%20Pagg%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/44083/300x300/Jind-Mahi-Diljit-Dosanjh.jpg',
        songName: ' Jind Mahi',
        songLink: 'http://s320.ve.vc/data/320/44083/289934/Jind%20Mahi%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/44027/300x300/Aar-Nanak-Paar-Nanak-Diljit-Dosanjh.jpg',
        songName: ' Aar Nanak Paar Nanak',
        songLink: 'http://s320.ve.vc/data/320/44027/289866/Aar%20Nanak%20Paar%20Nanak%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/43845/300x300/Putt-Jatt-Da-Diljit-Dosanjh.jpg',
        songName: ' Putt Jatt Da',
        songLink: 'http://s320.ve.vc/data/320/43845/289646/Putt%20Jatt%20Da%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/42767/300x300/Ishq-Di-Baajiyaan-Diljit-Dosanjh.jpg',
        songName: ' Ishq Di Baajiyaan',
        songLink: 'http://s320.ve.vc/data/320/42767/288132/Ishq%20Di%20Baajiyaan%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/42021/300x300/Confidential-Diljit-Dosanjh.jpg',
        songName: ' Offline',
        songLink: 'http://p3201.ve.vc/data/320/42021/287005/Offline%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/41987/300x300/High-End-Diljit-Dosanjh.jpg',
        songName: ' High End',
        songLink: 'http://p3201.ve.vc/data/320/42021/287000/High%20End%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/41442/300x300/Raat-Di-Gedi-Diljit-Dosanjh.jpg',
        songName: ' Raat Di Gedi',
        songLink: 'http://s320.ve.vc/data/320/41442/286109/Raat%20Di%20Gedi%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/39966/300x300/Ho-Gaya-Talli-(Super-Singh)-Diljit-Dosanjh.jpg',
        songName: ' Ho Gaya Talli',
        songLink: 'http://s320.ve.vc/data/320/39966/283832/Ho%20Gaya%20Talli%20(Super%20Singh)%20-%20Diljit%20Dosanjh%20(DjPunjab.Com).mp3',
        artistName: 'Diljit Dosanjh'
    },
    {
        poster: 'https://cover.djpunjab.org/50244/300x300/Brown-Shortie-Sidhu-Moose-Wala.jpg',
        songName: ' Brown Shortie',
        songLink: 'http://s320.ve.vc/data/320/50244/297880/Brown Shortie - Sidhu Moose Wala (DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/50236/300x300/Moosedrilla-Sidhu-Moose-Wala.jpg',
        songName: ' Moosedrilla',
        songLink: 'http://s1281.ve.vc/data/128/50236/297872/Moosedrilla - Sidhu Moose Wala (DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/50223/300x300/Us-Sidhu-Moose-Wala.jpg',
        songName: ' Us',
        songLink: 'http://s1281.ve.vc/data/128/50223/297859/Us - Sidhu Moose Wala (DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/50216/300x300/Racks-And-Rounds-Sidhu-Moose-Wala.jpg',
        songName: ' Racks And Rounds',
        songLink: 'http://s320.ve.vc/data/320/50216/297852/Racks And Rounds - Sidhu Moose Wala (DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/50209/300x300/UNFUCKWITHABLE-Sidhu-Moose-Wala.jpg',
        songName: ' UNFUCKWITHABLE',
        songLink: 'http://s320.ve.vc/data/320/50209/297839/UNFUCKWITHABLE - Sidhu Moose Wala (DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/50203/300x300/Burberry-Sidhu-Moose-Wala.jpg',
        songName: ' Burberry',
        songLink: 'http://s320.ve.vc/data/320/50203/297833/Burberry%20-%20Sidhu%20Moose%20Wala%20(DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/50200/300x300/Bitch-Im-Back-Sidhu-Moose-Wala.jpg',
        songName: ' Bitch Im Back',
        songLink: 'http://s320.ve.vc/data/320/50200/297829/Bitch%20Im%20Back%20-%20Sidhu%20Moose%20Wala%20(DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/49500/300x300/Panjab-(My-Motherland)-Sidhu-Moose-Wala.jpg',
        songName: ' Panjab (My Motherland)',
        songLink: 'http://s320.ve.vc/data/320/49500/297063/Panjab%20(My%20Motherland)%20-%20Sidhu%20Moose%20Wala%20(DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/49173/300x300/Bai-Bai-Gulab-Sidhu.jpg',
        songName: ' Bai Bai',
        songLink: 'http://s1281.ve.vc/data/128/49173/296717/Bai Bai - Gulab Sidhu (DjPunjab.Com).mp3',
        artistName: 'Gulab Sidhu'
    },
    {
        poster: 'https://cover.djpunjab.org/49077/300x300/Bad-Sidhu-Moose-Wala.jpg',
        songName: ' Bad',
        songLink: 'http://s320.ve.vc/data/320/49077/296600/Bad%20-%20Sidhu%20Moose%20Wala%20(DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/48818/300x300/Game-Shooter-Kahlon.jpg',
        songName: ' Game',
        songLink: 'http://s1281.ve.vc/data/128/48818/296300/Game - Shooter Kahlon (DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/48733/300x300/My-Block-Ft.-Byg-Byrd-Sidhu-Moose-Wala.jpg',
        songName: ' My Block Ft. Byg Byrd',
        songLink: 'http://s320.ve.vc/data/320/48733/296207/My%20Block%20Ft.%20Byg%20Byrd%20-%20Sidhu%20Moose%20Wala%20(DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/48706/300x300/No-Worries-Raja-Game-Changerz.jpg',
        songName: ' No Worries',
        songLink: 'http://s1281.ve.vc/data/128/48706/296180/No Worries - Raja Game Changerz (DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/48648/300x300/Doctor-Sidhu-Moose-Wala.jpg',
        songName: ' Doctor',
        songLink: 'http://s320.ve.vc/data/320/48648/296115/Doctor%20-%20Sidhu%20Moose%20Wala%20(DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/48559/300x300/Sanju-Sidhu-Moose-Wala.jpg',
        songName: ' Sanju',
        songLink: 'http://s320.ve.vc/data/320/48559/295996/Sanju%20-%20Sidhu%20Moose%20Wala%20(DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/48509/300x300/Paapi-Rangrez-Sidhu.jpg',
        songName: ' Paapi',
        songLink: 'http://s1281.ve.vc/data/128/48509/295946/Paapi - Rangrez Sidhu (DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/48366/300x300/Bambiha-Bole-Sidhu-Moose-Wala.jpg',
        songName: ' Bambiha Bole',
        songLink: 'http://s1281.ve.vc/data/128/48366/295803/Bambiha Bole - Sidhu Moose Wala (DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/48357/300x300/Aj-Kal-Ve-Barbie-Maan.jpg',
        songName: ' Aj Kal Ve',
        songLink: 'http://s320.ve.vc/data/320/48357/295783/Aj%20Kal%20Ve%20-%20Barbie%20Maan%20(DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/48199/300x300/Dear-Mama-Sidhu-Moose-Wala.jpg',
        songName: ' Dear Mama',
        songLink: 'http://s320.ve.vc/data/320/48199/295575/Dear%20Mama%20-%20Sidhu%20Moose%20Wala%20(DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/48159/300x300/Jail-Sidhu-Moose-Wala.jpg',
        songName: ' Jail',
        songLink: 'http://s320.ve.vc/data/320/48159/295535/Jail%20-%20Sidhu%20Moose%20Wala%20(DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/47903/300x300/911-Sidhu-Moose-Wala.jpg',
        songName: ' 911',
        songLink: 'http://s320.ve.vc/data/320/47903/295243/911 - Sidhu Moose Wala (DjPunjab.Com).mp3',
        artistName: 'Sidhu Moosewala'
    },
    {
        poster: 'https://cover.djpunjab.org/50022/300x300/Few-Days-Karan-Aujla.jpg',
        songName: ' Few Days',
        songLink: 'http://s320.ve.vc/data/320/50022/297647/Few Days - Karan Aujla (DjPunjab.Com).mp3',
        artistName: 'Karan Aujla'
    },
    {
        poster: 'https://cover.djpunjab.org/49563/300x300/Guilty-Inder-Chahal.jpg',
        songName: ' Guilty',
        songLink: 'http://s320.ve.vc/data/320/49563/297126/Guilty - Inder Chahal (DjPunjab.Com).mp3',
        artistName: 'Karan Aujla'
    },
    {
        poster: 'https://cover.djpunjab.org/49160/300x300/Dont-Like-Goldy-Desi-Crew.jpg',
        songName: ' Dont Like',
        songLink: 'http://s320.ve.vc/data/320/49160/296704/Dont Like - Goldy Desi Crew (DjPunjab.Com).mp3',
        artistName: 'Karan Aujla'
    },
    {
        poster: 'https://cover.djpunjab.org/48605/300x300/Haan-Haige-Aa-Karan-Aujla.jpg',
        songName: ' Haan Haige Aa',
        songLink: 'http://s320.ve.vc/data/320/48605/296057/Haan Haige Aa - Karan Aujla (DjPunjab.Com).mp3',
        artistName: 'Karan Aujla'
    },
    {
        poster: 'https://cover.djpunjab.org/47699/300x300/Red-Eyes-Karan-Aujla.jpg',
        songName: ' Red Eyes',
        songLink: 'http://s320.ve.vc/data/320/47699/295004/Red Eyes - Karan Aujla (DjPunjab.Com).mp3',
        artistName: 'Karan Aujla'
    },
    {
        poster: 'https://cover.djpunjab.org/47653/300x300/Mexico-Karan-Aujla.jpg',
        songName: ' Mexico',
        songLink: 'http://s320.ve.vc/data/320/47653/294945/Mexico - Karan Aujla (DjPunjab.Com).mp3',
        artistName: 'Karan Aujla'
    },
    {
        poster: 'https://cover.djpunjab.org/47571/300x300/Sheikh-Karan-Aujla.jpg',
        songName: ' Sheikh',
        songLink: 'http://s320.ve.vc/data/320/47571/294830/Sheikh - Karan Aujla (DjPunjab.Com).mp3',
        artistName: 'Karan Aujla'
    },
    {
        poster: 'https://cover.djpunjab.org/47179/300x300/My-Name-Karan-Aujla.jpg',
        songName: ' My Name',
        songLink: 'http://s1281.ve.vc/data/128/47179/294278/My Name - Karan Aujla (DjPunjab.Com).mp3',
        artistName: 'Karan Aujla'
    },
    {
        poster: 'https://cover.djpunjab.org/47081/300x300/Chitta-Kurta-(Original)-Karan-Aujla.jpg',
        songName: ' Chitta Kurta (Original)',
        songLink: 'http://s320.ve.vc/data/320/47081/294165/Chitta Kurta - Karan Aujla (DjPunjab.Com).mp3',
        artistName: 'Karan Aujla'
    },
    {
        poster: 'https://cover.djpunjab.org/46439/300x300/2-AM-Karan-Aujla.jpg',
        songName: ' 2 AM',
        songLink: 'http://s320.ve.vc/data/320/46439/293286/2 AM - Karan Aujla (DjPunjab.Com).mp3',
        artistName: 'Karan Aujla'
    }
]

for (let i = 0; i < songs.length; i++) {
    let container = `<div class="music-item-container song-${i + 1}">
                            <div class="music-item-picture">
                                <div class="dummy-container song-${i + 1}">
                                    <img src="${songs[i]["poster"]}"
                                    alt="${songs[i]["songName"]}" class="music-poster">
                                    <div class="overlay">
                                        <div class="icon-overlay">
                                            <i class="fa fa-play"></i>
                                            <!-- <span class="material-icons" style="font-size: 5rem;">
                                                pause_circle
                                            </span> -->
                                        </div>
                                        <div class="icon-overlay-playlist">
                                            <span class="material-icons">
                                                playlist_add
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="music-item-name">${songs[i]["songName"]}</div>
                                <div class="music-item-artist">${songs[i]["artistName"]}</div>
                            </div>
                        </div>`;
    musicList.append(container);
}

let currIdx = 0;
loadSong(songs[currIdx]);
audio[0].volume = 1

audio.on("canplaythrough", function () {
    let totMin = Math.floor(audio[0].duration / 60);
    let totSec = Math.floor(audio[0].duration) % 60;
    if (Math.floor(totMin / 10) == 0) {
        if (Math.floor(totSec / 10) == 0)
            totTime.text(`0${totMin}:0${totSec}`);
        else
            totTime.text(`0${totMin}:${totSec}`);
    }
    else {
        if (Math.floor(totSec / 10) == 0)
            totTime.text(`${totMin}:0${totSec}`);
        else
            totTime.text(`${totMin}:${totSec}`);
    }
});

function loadSong(song) {
    title.text(song["songName"]);
    artist.text(song["artistName"]);
    audio.attr("src", song["songLink"]);
    musicIcon.attr("src", song["poster"]);
    currTime.text(`${audio[0].currentTime}`);
    totTime.text(`${audio[0].duration}`);
}

function playSong() {
    audio[0].play();
    $(`.dummy-container .overlay .icon-overlay .fa-pause`).removeClass('fa-pause').addClass('fa-play');
    $(`.dummy-container.song-${currIdx + 1} .overlay .icon-overlay .fa`).removeClass('fa-play').addClass('fa-pause');
    playBtn.text("pause_circle");
}

function pauseSong() {
    audio[0].pause();
    $(`.dummy-container.song-${currIdx + 1} .overlay .icon-overlay .fa`).removeClass('fa-pause').addClass('fa-play');
    playBtn.text("play_circle");
}

playBtn.click((e) => {
    let isPlaying = ($('.play-btn').text().split('_')[0] == "pause");
    if (isPlaying) {
        pauseSong();
    }
    else {
        playSong();
    }
});



nextBtn.click((e) => {
    currIdx = (currIdx + 1) % songs.length;
    pauseSong();
    loadSong(songs[currIdx]);
    playSong();
})

prevBtn.click((e) => {
    currIdx = (currIdx - 1 + songs.length) % songs.length;
    pauseSong();
    loadSong(songs[currIdx]);
    playSong();
});

function updateProgressBar(e) {
    const { duration, currentTime } = e.srcElement;
    let currMin = Math.floor(currentTime / 60);
    let currSec = Math.floor(currentTime) % 60;
    if (Math.floor(currMin / 10) == 0) {
        if (Math.floor(currSec / 10) == 0)
            currTime.text(`0${currMin}:0${currSec}`);
        else
            currTime.text(`0${currMin}:${currSec}`);
    }
    else {
        if (Math.floor(currSec / 10) == 0)
            currTime.text(`${currMin}:0${currSec}`);
        else
            currTime.text(`${currMin}:${currSec}`);
    }
    let progressPercentage = (currentTime / duration) * 100;
    progressBar.css("width", `${progressPercentage}%`);
    if (progressPercentage == 100)
        pauseSong();
}

audio[0].addEventListener('timeupdate', updateProgressBar);

progressBarContainer.click(function (e) {
    let width = this.clientWidth;
    let clickX = e.offsetX;
    const duration = audio[0].duration;
    audio[0].currentTime = (clickX / width) * duration;
});

function switchToDarkMode() {
    let navbar = $('.navbar');
    navbar.css({ "background-color": "#090A0A", "color": "#fff" });

    let searchItemContainer = $('.search-icon-container');
    searchItemContainer.css({ "background-color": "#090A0A" });

    let searchBar = $('.search-bar');
    searchBar.css({ "background-color": "#090A0A", "color": "#fff" });

    let selectionArea = $('.selection-area');
    selectionArea.css({ "background-color": "#090A0A", "color": "#fff" });

    let selectionArea1 = $('.selection-area-1');
    selectionArea1.css({ "background-color": "#090A0A", "color": "#fff" });

    let musicArea = $('.music-area');
    musicArea.css({ "background-color": "#1d2020" });

    let musicHeading = $('.music-heading');
    musicHeading.css({ "color": "#fff" });

    let musicItemName = $('.music-item-name');
    musicItemName.css({ "color": "#fff" });

    let currentPlayingSong = $('.current-playing-song');
    currentPlayingSong.css({ "background-color": "#090A0A" });

    let circle = $('.circle');
    circle.css({ "background-color": "#fff" });

    let circleVolume = $('.circle-volume');
    circleVolume.css({ "background-color": "#fff" });

    let songControls = $('.song-controls');
    songControls.css({ "color": "#fff" });

    let durationDetails = $('.duration-details');
    durationDetails.css({ "color": "#fff" });

    let moreOptions = $('.more-options');
    moreOptions.css({ "color": "#fff" });

    let volumeControls = $('.volume-controls');
    volumeControls.css({ "color": "#fff" });

    let songArtistDetails = $('.song-artist-details');
    songArtistDetails.css({ "color": "#fff" });

    let volumeControlBar = $('.volume-control-bar');
    volumeControlBar.css({ "background-color": "#090A0A" });
}

function switchToLightMode() {
    let navbar = $('.navbar');
    navbar.css({ "background-color": "#fff", "color": "#090A0A" });

    let searchItemContainer = $('.search-icon-container');
    searchItemContainer.css({ "background-color": "#fff" });

    let searchBar = $('.search-bar');
    searchBar.css({ "background-color": "#fff", "color": "#090A0A" });

    let selectionArea = $('.selection-area');
    selectionArea.css({ "background-color": "#fff", "color": "#090A0A" });

    let selectionArea1 = $('.selection-area-1');
    selectionArea1.css({ "background-color": "#fff", "color": "#090A0A" });

    let musicArea = $('.music-area');
    musicArea.css({ "background-color": "#e6e6e6" });

    let musicHeading = $('.music-heading');
    musicHeading.css({ "color": "#444" });

    let musicItemName = $('.music-item-name');
    musicItemName.css({ "color": "#696969" });

    let currentPlayingSong = $('.current-playing-song');
    currentPlayingSong.css({ "background-color": "#fff" });

    let circle = $('.circle');
    circle.css({ "background-color": "#090A0A" });

    let circleVolume = $('.circle-volume');
    circleVolume.css({ "background-color": "#090A0A" });

    let songControls = $('.song-controls');
    songControls.css({ "color": "#090a0a" });

    let durationDetails = $('.duration-details');
    durationDetails.css({ "color": "#090a0a" });

    let moreOptions = $('.more-options');
    moreOptions.css({ "color": "#090a0a" });

    let volumeControls = $('.volume-controls');
    volumeControls.css({ "color": "#090a0a" });

    let songArtistDetails = $('.song-artist-details');
    songArtistDetails.css({ "color": "#444" });

    let volumeControlBar = $('.volume-control-bar');
    volumeControlBar.css({ "background-color": "#fff" });
}

$('.mode-change-icon').click(function (e) {
    let text = $('.mode-change-icon').text().split('_')[0].trim();
    if (text == "dark") {
        $('.mode-change-icon').text("light_mode");
        switchToDarkMode();
    }
    else {
        $('.mode-change-icon').text("dark_mode");
        switchToLightMode();
    }
});

let text = $('.mode-change-icon').text().split('_')[0].trim();
if (text == "dark") {
    $('.mode-change-icon').text("light_mode");
    switchToDarkMode();
}

$('.dummy-container').click(function (e) {
    progressBar.css("width", `${0}%`);
    playBtn.text("play_circle");
    let index = $(this).attr('class').split(' ')[1].split('-')[1];
    let currState = $(`.dummy-container.song-${index} .overlay .icon-overlay .fa`).attr('class').split(' ')[1].split('-')[1];
    console.log($($(this).children()[1]));
    if (currState == "play") {
        if (currIdx != index - 1) {
            currIdx = index - 1;
            loadSong(songs[currIdx]);
        }
        playSong();
    }
    else if (currState == "pause") {
        pauseSong();
    }
});

let selectionAreaExists = true;

function addSelectionArea() {
    $('.selection-area-1').remove();
    let selectionArea = `<div class="selection-area">
                            <div class="section-heading">Library</div>
                            <div class="sections-container">
                                <div class="section-item selected">
                                    <span class="material-icons icon">
                                        home
                                    </span>
                                    Home
                                </div>
                                <div class="section-item">
                                    <span class="material-icons icon">
                                        playlist_play
                                    </span>
                                    Playlists
                                </div>
                            </div>
                        </div>`;

    $('.dashboard-container').prepend(selectionArea);
    let text = $('.mode-change-icon').text().split('_')[0].trim();
    if (text == "dark") {
        switchToLightMode();
    }
    else {
        switchToDarkMode();
    }
}

function removeSelectionArea() {
    $('.selection-area').remove();
    let selectionArea1 = `<div class="selection-area-1">
                                <div class="sections-container" style="display: flex; flex-direction: column; align-items: center;">
                                    <div class="section-item-1 selected" style="display: flex; flex-direction: column; align-items: center; margin-bottom: 40px">
                                        <div class="icon-container">
                                            <span class="material-icons icon-1" style="font-size: 2rem;">
                                                home
                                            </span>
                                        </div>
                                        <div class="description">
                                            Home
                                        </div>
                                    </div>
                                    <div class="section-item-1" style="display: flex; flex-direction: column;">
                                        <div class="icon-container">
                                            <span class="material-icons icon-1" style="font-size: 2rem;">
                                                playlist_play
                                            </span>
                                        </div>
                                        <div class="description">
                                            Playlist
                                        </div>
                                    </div>
                                </div>
                            </div>`;
    $('.dashboard-container').prepend(selectionArea1);
    let text = $('.mode-change-icon').text().split('_')[0].trim();
    if (text == "dark") {
        switchToLightMode();
    }
    else {
        switchToDarkMode();
    }
}

$('.menu-toggle-btn').click(function (e) {
    if (!selectionAreaExists) {
        $('.music-area').css("width", "85%");
        addSelectionArea();
        selectionAreaExists = true;

    }
    else {
        removeSelectionArea();
        $('.music-area').css("width", "94%");
        selectionAreaExists = false;
    }
})
let volumeBarExists = false;
let currVolumeLevel = 100;
$('.volume-btn').click(function (e) {
    let volumeBar = `<div class="volume-control-bar">
                        <div class="volume-progress-bar">
                            <div class="volume-bar" style="height: calc(100% - ${currVolumeLevel}%)">
                                <div class="circle-volume"></div>
                            </div>
                        </div>
                    </div>`;
    if (!volumeBarExists) {
        $('.volume-control-btn').append(volumeBar);
        volumeBarExists = true;
    }
    else {
        $('.volume-control-bar').remove();
        volumeBarExists = false;
    }


    let text = $('.mode-change-icon').text().split('_')[0].trim();
    if (text == "dark") {
        switchToLightMode();
    }
    else {
        switchToDarkMode();
    }



    $('.volume-progress-bar').click(function (e) {
        let elm = $(this);
        x = e.pageX - elm.offset().left;

        // coordinates of location.
        y = e.pageY - elm.offset().top;
        let volumePercentage = Math.floor(((elm.height() - y) / elm.height()) * 100);
        if (volumePercentage < 0) {
            volumePercentage = 0;
        }
        if (volumePercentage > 100) {
            volumePercentage = 100;
        }
        audio[0].volume = volumePercentage / 100;
        currVolumeLevel = volumePercentage;
        $('.volume-bar').css("height", `calc(100% - ${volumePercentage}%)`)
    });

    $('.dummy-container').click(function (e) {
        $('.volume-control-bar').remove();
        volumeBarExists = false;
    });

    playBtn.click((e) => {
        $('.volume-control-bar').remove();
        volumeBarExists = false;
    });

    nextBtn.click((e) => {
        $('.volume-control-bar').remove();
        volumeBarExists = false;
    })

    prevBtn.click((e) => {
        $('.volume-control-bar').remove();
        volumeBarExists = false;
    });

    $('.three-dots').click((e) => {
        $('.volume-control-bar').remove();
        volumeBarExists = false;
    });
});