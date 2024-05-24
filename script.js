const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const musicsEl = document.getElementById('musics');
const resultHeading = document.getElementById('result-heading');
const single_musicEl = document.getElementById('single-music');
const electronicBtn = document.getElementById('electronic-btn');
const popBtn = document.getElementById('pop-btn');
const synthpopBtn = document.getElementById('synthpop-btn');

// Sample JSON data
const jsonData = {
  "album": [
    {
      "idAlbum": "2112973",
      "idArtist": "111492",
      "idLabel": "43473",
      "strAlbum": "Homework",
      "strAlbumStripped": "Homework",
      "strArtist": "Daft Punk",
      "intYearReleased": "1997",
      "strStyle": "Electronic",
      "strGenre": "House",
      "strLabel": "Columbia",
      "strReleaseFormat": "Album",
      "intSales": "0",
      "strAlbumThumb": "https://www.theaudiodb.com/images/media/album/thumb/a4oagq1605597689.jpg",
      "strDescriptionEN": "Homework is the debut studio album released by French electronic music duo Daft Punk in January 20, 1997. Considered a blend of house, techno, acid, funk and occasionally hip-hop, its success brought worldwide attention to French progressive house music and incited interest in French touch music, as several touch artists gained influence from Homework's style. According to The Village Voice, the album revived house music and broke free from the \"Euro[dance] formula\".\nCritically and commercially acclaimed, Homework has sold over two million copies worldwide and received several gold and platinum certifications. The album featured singles that had significant impact in the French house and global dance music scenes. This includes the critically acclaimed and commercially successful \"Around the World\" and \"Da Funk\", which have been named among the best songs of their time.\nThe duo commented they had produced the series of tracks without an initial plan to release an album. As Thomas Bangalter stated, \"It was supposed to be just a load of singles. But we did so many tracks over a period of five months that we realized that we had a good album.\" The album is included in the book 1001 Albums You Must Hear Before You Die.",
    },
    {
      "idAlbum": "2112975",
      "idArtist": "111493",
      "idLabel": "43474",
      "strAlbum": "Human After All",
      "strAlbumStripped": "Human After All",
      "strArtist": "Daft Punk",
      "strArtistStripped": "Daft Punk",
      "intYearReleased": "2005",
      "strStyle": "Electronic",
      "strGenre": "House",
      "strLabel": "Columbia",
      "strReleaseFormat": "Album",
      "intSales": "0",
      "strAlbumThumb": "https://www.theaudiodb.com/images/media/album/thumb/vtrqrp1521246220.jpg",
      "strDescriptionEN": "Human After All is the third studio album by French duo Daft Punk, first released on March 14, 2005 internationally and a day later in the United States. With it, Daft Punk applies minimalism and rock music to their French house music style. It received mixed reviews noting its reported six-week creation, which is particularly short compared to previous albums Discovery and Homework. The album was released with the Copy Control protection system in some regions.",
    },
    {
      "idAlbum": "2118619",
      "idArtist": "111494",
      "idLabel": "43475",
      "strAlbum": "TRON: Legacy",
      "strAlbumStripped": "TRON Legacy",
      "strArtist": "Daft Punk",
      "strArtistStripped": "Daft Punk",
      "intYearReleased": "2010",
      "strStyle": "Electronic",
      "strGenre": "House",
      "strLabel": "Columbia",
      "strReleaseFormat": "Soundtrack",
      "intSales": "0",
      "strAlbumThumb": "https://www.theaudiodb.com/images/media/album/thumb/tron-legacy-4dfd9a6b7664a.jpg",
      "strDescriptionEN": "Tron: Legacy is the soundtrack to the 2010 film of the same name, released by Walt Disney Records on December 3, 2010. It is the first film score by French music duo Daft Punk.\nThe score of Tron: Legacy features an 85-piece orchestra, recorded at AIR Lyndhurst Studios in London. Kosinski stated that the score is intended to be a mixture of orchestral and electronic music. Daft Punk's score was arranged and orchestrated by Joseph Trapanese, who stated he is a fan of Daft Punk as a duo and as solo artists. The band collaborated with him for two years on the score, from pre-production to completion. The orchestra was conducted by Gavin Greenaway.\nA deluxe edition of the album was made available from the official Tron: Legacy soundtrack website that includes a poster of Daft Punk as they appear in the film. In regions outside the United States, a two-disc special edition was made available for a limited time. As a pre-order bonus for the album on the iTunes Store, \"Derezzed\" was released as a promotional single on December 8, 2010. The iTunes release of the album includes two bonus tracks: \"Father and Son\" and \"Outlands, Pt. II\". The Amazon MP3 version of the album includes the bonus track \"Sea of Simulation\". The Ovi release of the album includes the bonus track \"Sunrise Prelude\". The songs \"Separate Ways (Worlds Apart)\" by Journey and \"Sweet Dreams (Are Made of This)\" by Eurythmics are featured in the film, but absent from the soundtrack album.",
    },
    {
      "idAlbum": "2118620",
      "idArtist": "11145",
      "idLabel": "43476",
      "strAlbum": "TRON: Legacy R3CONF1GUR3D",
      "strAlbumStripped": "TRON Legacy R3CONF1GUR3D",
      "strArtist": "Daft Punk",
      "strArtistStripped": "Daft Punk",
      "intYearReleased": "2011",
      "strStyle": "Electronic",
      "strGenre": "House",
      "strLabel": "Columbia",
      "strReleaseFormat": "Remix",
      "intSales": "0",
      "strAlbumThumb": "https://www.theaudiodb.com/images/media/album/thumb/tron-legacy-r3conf1gur3d-4f1d54fcf3ef1.jpg",
      "strDescriptionEN": "Walt Disney Records released a remix album of the score titled Tron: Legacy Reconfigured on April 5, 2011. The album features remixes of selections of the film score by various artists.\nReception to the remix album was generally mixed. On Metacritic, the album holds an aggregate score of 59/100, indicating \"mixed or average reviews\". The Photek remix of \"End of Line\" was nominated for Best Remixed Recording, Non-Classical at the 54th Grammy Awards. The Glitch Mob's remix of \"Derezzed\" is used in various promos and trailers for the film's animated prequel, Tron: Uprising.",
    },
    {
      "idAlbum": "2118654",
      "idArtist": "111496",
      "idLabel": "43477",
      "strAlbum": "Discovery",
      "strAlbumStripped": "Discovery",
      "strArtist": "Daft Punk",
      "strArtistStripped": "Daft Punk",
      "intYearReleased": "2001",
      "strStyle": "Electronic",
      "strGenre": "House",
      "strLabel": "Columbia",
      "strReleaseFormat": "Album",
      "intSales": "2600000",
      "strAlbumThumb": "https://www.theaudiodb.com/images/media/album/thumb/uyqspx1364923956.jpg",
      "strDescriptionEN": "Discovery is the second studio album by the French house duo Daft Punk, released in March 2001. It marks a shift in the sound from Chicago house, which they were previously known for, to disco, post-disco and synthpop-inspired house. The album provided itself as a soundtrack to the anime film Interstella 5555: The 5tory of the 5ecret 5tar 5ystem, which was a collaboration between the creators of the album, Leiji Matsumoto, and Toei Animation.\nAll of the music videos for the tracks on the album are segments of the film. Interstella 5555 follows a story of a kidnapped extraterrestrial band. Discovery is recognized as a concept album in reviews by New Musical Express and Spin magazines. Early versions of the album included a \"Daft Club\" membership card. The card included a code which granted access to an online music service, which featured tracks later released on the album of the same name and Alive 1997.",
    },
    {
      "idAlbum": "2120081",
      "idArtist": "111497",
      "idLabel": "43478",
      "strAlbum": "Alive 2007",
      "strAlbumStripped": "Alive 2007",
      "strArtist": "Daft Punk",
      "strArtistStripped": "Daft Punk",
      "intYearReleased": "2007",
      "strStyle": "Electronic",
      "strGenre": "House",
      "strLabel": "Columbia",
      "strReleaseFormat": "Live",
      "intSales": "0",
      "strAlbumThumb": "https://www.theaudiodb.com/images/media/album/thumb/alive-2007-4e25c66c8524e.jpeg",
      "strDescriptionEN": "Alive 2007 is a live album by French house duo Daft Punk, first released on 19 November 2007. It is the second album recorded live by the duo, following Alive 1997. Alive 2007 features their performance at Bercy in Paris from 14 June 2007.\nThe physical release in North America was delayed to 4 December due to production issues, but the album became available as a digital download on 20 November 2007. A special edition of the album was released that includes the encore from the Alive 2007 tour on a second disc. It also includes a 50-page book containing photographs from the tour taken by DJ Falcon. The first single from the album, \"Harder, Better, Faster, Stronger (Alive 2007)\" was released digitally on 15 October 2007.\nThe album won the Grammy Award for Best Electronic/Dance Album in 2008.",
    },
    {
      "idAlbum": "2120091",
      "idArtist": "111498",
      "idLabel": "43479",
      "strAlbum": "Musique, Volume 1: 1993-2005",
      "strAlbumStripped": "Musique Volume 1 19932005",
      "strArtist": "Daft Punk",
      "strArtistStripped": "Daft Punk",
      "intYearReleased": "2006",
      "strStyle": "Electronic",
      "strGenre": "House",
      "strLabel": "Columbia",
      "strReleaseFormat": "Compilation",
      "intSales": "0",
      "strAlbumThumb": "https://www.theaudiodb.com/images/media/album/thumb/qypyvv1345464347.jpg",
      "strDescriptionEN": "Musique Vol. 1 1993-2005 is an anthology by Daft Punk released in Japan on 29 March 2006, in the United Kingdom on 3 April 2006, and in the United States on 4 April 2006. A special edition includes a bonus DVD with 12 music videos-two of which are new, \"The Prime Time of Your Life\" and \"Robot Rock (Maximum Overdrive)\". To save space on the audio CD, a few of the tracks are shorter edits. The song \"Digital Love\" appears only in the digital release and Japan edition. The DVD edition was rated 15 by the BBFC.",
    },
    {
      "idAlbum": "2162908",
      "idArtist": "111499",
      "idLabel": "43480",
      "strAlbum": "Random Access Memories",
      "strAlbumStripped": "Random Access Memories",
      "strArtist": "Daft Punk",
      "strArtistStripped": "Daft Punk",
      "intYearReleased": "2013",
      "strStyle": "Electronic",
      "strGenre": "House",
      "strLabel": "Columbia",
      "strReleaseFormat": "Album",
      "intSales": "0",
      "strAlbumThumb": "https://www.theaudiodb.com/images/media/album/thumb/random-access-memories-51764651042e5.jpg",
      "strDescriptionEN": "Random Access Memories is the upcoming fourth studio album by French electronic music duo Daft Punk. It will be released by Daft Life under exclusive license to Columbia Records on May 17, 2013 in Australia, May 20, 2013 in the United Kingdom and on May 21, 2013 in the United States. Work started on the record concurrently with the Tron: Legacy score, without a clear plan as to what its structure would be. Shortly after Daft Punk signed with Columbia, a gradual promotional rollout began for the album including billboards, television advertising and a web series.\nRandom Access Memories pays tribute to the late 1970s and early 80s era of music in the United States, particularly the sound of Los Angeles recordings of the period. Daft Punk recorded the album largely using live instrumentation with session musicians, and limited the use of electronics to drum machines, a modular synthesizer and vintage vocoders. The album also features collaborations with Panda Bear, Julian Casablancas, Todd Edwards, DJ Falcon, Chilly Gonzales, Giorgio Moroder, Nile Rodgers, Paul Williams and Pharrell Williams. Critical reception to the album has generally been positive.",
    },
    {
      "idAlbum": "2197190",
      "idArtist": "111410",
      "idLabel": "43481",
      "strAlbum": "Daft Club",
      "strAlbumStripped": "Daft Club",
      "strArtist": "Daft Punk",
      "strArtistStripped": "Daft Punk",
      "intYearReleased": "2003",
      "strStyle": "Electronic",
      "strGenre": "House",
      "strLabel": "Columbia",
      "strReleaseFormat": "Remix",
      "intSales": "0",
      "strAlbumThumb": "https://www.theaudiodb.com/images/media/album/thumb/daft-club-51d1ea81cf5ee.jpg",
      "strDescriptionEN": "Daft Club is an album by Daft Punk featuring numerous remixes of tracks from their 2001 album Discovery and one from Homework. It was released in 2003 (2004 in the United States).\nThe name of the album comes from Daft Punk's online music service, which featured remixed songs, a live recording of Daft Punk performing at the Que Club (which would later be released as Alive 1997) and an a cappella and instrumental version of \"Harder, Better, Faster, Stronger\". The service was available for free to people who bought early versions of the Discovery album. Each album included a \"Daft Club\" membership card, which granted access to the Daft Club website. The service ended in January 2003.\nLimited edition copies of the film Interstella 5555: The 5tory of the 5ecret 5tar 5ystem featured Daft Club as a second disc. The track \"Something About Us (Love Theme from Interstella 5555)\" is omitted from this version. A limited edition of this album was also released in Japan. It includes an extra track and a bonus DVD-Video. The DVD contains a preview of Interstella 5555, interviews in English with Daft Punk, a music video for \"Crescendolls\" from the film and a video for \"Something About Us\" that includes a montage of various scenes.\nTracks from Discovery were remixed in Daft Club except \"Nightvision\", \"Superheroes\", \"High Life\", \"Veridis Quo\" and \"Short Circuit\". In place of these tracks are additional remixes of \"Face to Face\", \"Harder, Better, Faster, Stronger\" and \"Aerodynamic\", respectively. Also featured is the \"Aerodynamic\" B-side titled \"Aerodynamite\", the previously-unreleased track \"Ouverture\" and a remix of the Homework track \"Phoenix\".",
    },
    {
      "idAlbum": "2197191",
      "idArtist": "111411",
      "idLabel": "43482",
      "strAlbum": "Alive 1997",
      "strAlbumStripped": "Alive 1997",
      "strArtist": "Daft Punk",
      "strArtistStripped": "Daft Punk",
      "intYearReleased": "2001",
      "strStyle": "Electronic",
      "strGenre": "House",
      "strLabel": "Columbia",
      "strReleaseFormat": "Live",
      "intSales": "0",
      "strAlbumThumb": "https://www.theaudiodb.com/images/media/album/thumb/177ni41614397506.jpg",
      "strDescriptionEN": "Alive 1997 is a live album by Daft Punk released in 2001. It contains a 45-minute excerpt of a live performance recorded at Birmingham's Que Club on 8 November 1997.\nThe album was initially released online as part of the Daft Club service. Early pressings of the Daft Punk album Discovery contained a card that would allow access to the Daft Club website containing remixes and the live recording. The Daft Club service ended in 2003. The Birmingham performance was selected by Daft Punk themselves for release, as they considered it to be their favorite from their Daftendirektour.\nAlive 1997 prominently features elements of \"Daftendirekt\", \"Da Funk\", \"Rollin' & Scratchin'\" and \"Alive\" from their Homework album. There are also prominent elements of Armand Van Helden's \"Ten Minutes Of Funk\" remix of \"Da Funk\". The live performance also contains elements of what would later become the track \"Short Circuit\" featured in Discovery. Alive 1997 contains the 45-minute excerpt in one continuous track on CD. The CD and vinyl packaging included a set of Daft Punk stickers. The layout for the album was done by Åbäke, and the photography by Serge Paulet.",
    },
    {
      "idAlbum": "211584",
      "idArtist": "111412",
      "idLabel": "43483",
      "strAlbum": "Even Now",
      "strAlbumStripped": "Even Now",
      "strArtist": "Barry Manilowr",
      "intYearReleased": "1978",
      "strStyle": "Electronic",
      "strGenre": "House",
      "strLabel": "USA",
      "strReleaseFormat": "Live",
      "intSales": "0",
      "strAlbumThumb": "https://upload.wikimedia.org/wikipedia/en/c/c7/Even_Now_cover.jpg",
      "strDescriptionEN": "The lyrics of this song describe the remorse and regret felt by the lyricist over leaving a woman with whom he had a great relationship with for a much better life with a different woman, even though his instincts told him that it wasn't the right move to make.",
    },
    {
      "idAlbum": "2114268",
      "idArtist": "111484",
      "idLabel": "43475",
      "strAlbum": "Dangerous Woman",
      "strAlbumStripped": "Dangerous Woman",
      "strArtist": "Ariana Grande",
      "intYearReleased": "2016",
      "strStyle": "Pop",
      "strLabel": "USA",
      "strReleaseFormat": "Live",
      "intSales": "0",
      "strAlbumThumb": "https://upload.wikimedia.org/wikipedia/ru/thumb/6/69/Dangerous_Woman_%28cover%29.jpg/411px-Dangerous_Woman_%28cover%29.jpg",
      "strDescriptionEN": "They say: You are a wild and dangerous woman. I answer them with the truth. But the truth is wild and dangerous.",
    },
    {
      "idAlbum": "2114355",
      "idArtist": "111493",
      "idLabel": "43485",
      "strAlbum": "Positions",
      "strAlbumStripped": "Positions",
      "strArtist": "Ariana Grande",
      "intYearReleased": "2020",
      "strStyle": "Pop",
      "strLabel": "USA",
      "strReleaseFormat": "Live",
      "intSales": "0",
      "strAlbumThumb": "https://upload.wikimedia.org/wikipedia/ru/a/a0/Ariana_Grande_-_Positions.png",
      "strDescriptionEN": "Positions debuted at number one on the US Billboard 200 chart with 174,000 equivalent units (including 42,000 pure album sales), becoming the singer's fifth chart-topper after staying at the top for two weeks. It was her third number one in less than two years and three months—at the time, it was the fastest accumulation of three number one studio albums ever by a female artist in the chart's history since 1956. But, if you take into account soundtracks, concerts and compilation albums, then Grande is third in this indicator after Donna Summer and Miley Cyrus. ",
    },
    {
      "idAlbum": "2113824",
      "idArtist": "111493",
      "idLabel": "43486",
      "strAlbum": "Starboy",
      "strAlbumStripped": "Starboy",
      "strArtist": "The Weeknd",
      "intYearReleased": "2016",
      "strStyle": "Synthpop",
      "strLabel": "USA",
      "strReleaseFormat": "Live",
      "intSales": "0",
      "strAlbumThumb": "https://upload.wikimedia.org/wikipedia/ru/e/e2/Starboysingle.jpg",
      "strDescriptionEN": "Starboy was released following the album's announcement, which, along with the album cover, was revealed the day before. Lyrically, it includes themes of extravagance associated with the celebrity lifestyle, as well as discussions of how such a lifestyle can make an artist vulnerable.",
    }
  ]
}

electronicBtn.addEventListener('click', () => filterByStyle('Electronic'));
popBtn.addEventListener('click', () => filterByStyle('Pop'));
synthpopBtn.addEventListener('click', () => filterByStyle('Synthpop'));

// Album filter function by style
function filterByStyle(style) {
  const filteredAlbums = jsonData.album.filter(album => album.strStyle === style);

  if (filteredAlbums.length === 0) {
    resultHeading.innerHTML = `<p>No albums found in the ${style} style.</p>`;
    musicsEl.innerHTML = '';
  } else {
    resultHeading.innerHTML = `<h2>Albums in the ${style} style:</h2>`;
    musicsEl.innerHTML = filteredAlbums
      .map(album => `
        <div class="album">
          <img src="${album.strAlbumThumb}" alt="${album.strAlbum}" />
          <div class="album-info" data-albumid="${album.idAlbum}">
            <h3>${album.strAlbum}</h3>
          </div>
        </div>
      `)
      .join('');
  }
}

// Search music and fetch from JSON
function searchMusic(e) {
  e.preventDefault();

  // Clear single music
  single_musicEl.innerHTML = '';

  // Get search term
  const term = search.value.toLowerCase();

  // Check for empty
  if (term.trim()) {
    resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;
    const filteredAlbums = jsonData.album.filter(album => album.strAlbum.toLowerCase().includes(term));

    if (filteredAlbums.length === 0) {
      resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
    } else {
      musicsEl.innerHTML = filteredAlbums
        .map(
          album => `
          <div class="album">
            <img src="${album.strAlbumThumb}" alt="${album.strAlbum}" />
            <div class="album-info" data-albumid="${album.idAlbum}">
              <h3>${album.strAlbum}</h3>
            </div>
          </div>
        `
        )
        .join('');
    }
    // Clear search text
    search.value = '';
  } else {
    alert('Please enter a search term');
  }
}

// Fetch album by ID from JSON
function getAlbumById(albumID) {
  const album = jsonData.album.find(album => album.idAlbum === albumID);
  addAlbumToDOM(album);
}

// Fetch random album from JSON
function getRandomMusic() {
  // Clear musics and heading
  musicsEl.innerHTML = '';
  resultHeading.innerHTML = '';

  const randomAlbum = jsonData.album[Math.floor(Math.random() * jsonData.album.length)];
  getAlbumById(randomAlbum.idAlbum);
}

// Add album to DOM
function addAlbumToDOM(album) {
  single_musicEl.innerHTML = ` 
    <div class="single-album">
        <h1>${album.strAlbum}</h1>
        <img src="${album.strAlbumThumb}" alt="${album.strAlbum}" />
        <div class="single-album-info">
        ${album.strArtist ? `<p>Artist: ${album.strArtist}</p>` : ''}
        ${album.intYearReleased ? `<p>Year: ${album.intYearReleased}</p>` : ''}
        </div>
        <div class="main">
            <p>${album.strDescriptionEN}</p>
        </div>
    </div>
    `;
}

// Event listeners
submit.addEventListener('submit', searchMusic);
random.addEventListener('click', getRandomMusic);

musicsEl.addEventListener('click', e => {
  const albumInfo = e.target.closest('.album-info');
  if (albumInfo) {
    const albumID = albumInfo.getAttribute('data-albumid');
    getAlbumById(albumID);
  }
});

// Добавление обработчиков событий для кнопок жанров
document.querySelectorAll('.genre-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const genre = btn.getAttribute('data-genre');
    filterByGenre(genre);
  });
});

// Фильтрация и отображение песен по выбранному жанру
function filterByGenre(genre) {
  const filteredAlbums = jsonData.album.filter(album => album.strGenre === genre);
  if (filteredAlbums.length === 0) {
    resultHeading.innerHTML = `<p>There are no ${genre} songs available.</p>`;
  } else {
    resultHeading.innerHTML = `<h2>${genre} Songs:</h2>`;
    musicsEl.innerHTML = filteredAlbums
      .map(
        album => `
          <div class="album">
            <img src="${album.strAlbumThumb}" alt="${album.strAlbum}" />
            <div class="album-info" data-albumid="${album.idAlbum}">
              <h3>${album.strAlbum}</h3>
            </div>
          </div>
        `
      )
      .join('');
  }
}
