const mockData = {
  movies: [
    {
      overview: "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
      release_date: '2021-04-07',
      adult: false,
      backdrop_path: '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
      vote_count: 1882,
      genre_ids: [
        14,
        28,
        12,
        878,
        53
      ],
      original_title: 'Mortal Kombat',
      original_language: 'en',
      id: 460465,
      poster_path: '/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg',
      title: 'Mortal Kombat',
      video: false,
      vote_average: 7.9,
      popularity: 7612.95,
      media_type: 'movie'
    },
    {
      video: false,
      vote_average: 7.3,
      overview: 'An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.',
      release_date: '2021-04-29',
      title: "Tom Clancy's Without Remorse",
      adult: false,
      backdrop_path: '/fPGeS6jgdLovQAKunNHX8l0avCy.jpg',
      genre_ids: [
        28,
        12,
        53,
        10752
      ],
      vote_count: 210,
      original_language: 'en',
      original_title: "Tom Clancy's Without Remorse",
      poster_path: '/rEm96ib0sPiZBADNKBHKBv5bve9.jpg',
      id: 567189,
      popularity: 359.439,
      media_type: 'movie'
    },
    {
      poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
      video: false,
      vote_average: 8.2,
      overview: 'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
      release_date: '2021-03-24',
      id: 399566,
      adult: false,
      backdrop_path: '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
      title: 'Godzilla vs. Kong',
      genre_ids: [
        878,
        28,
        18
      ],
      vote_count: 5146,
      original_language: 'en',
      original_title: 'Godzilla vs. Kong',
      popularity: 3593.413,
      media_type: 'movie'
    },
    {
      original_language: 'en',
      poster_path: '/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
      first_air_date: '2021-03-19',
      vote_count: 5132,
      id: 88396,
      vote_average: 7.9,
      name: 'The Falcon and the Winter Soldier',
      origin_country: [
        'US'
      ],
      overview: 'Following the events of “Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.',
      backdrop_path: '/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg',
      original_name: 'The Falcon and the Winter Soldier',
      genre_ids: [
        10765,
        10759,
        18,
        10768
      ],
      popularity: 2965.392,
      media_type: 'tv'
    },
    {
      original_language: 'en',
      original_title: 'Nobody',
      poster_path: '/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
      video: false,
      vote_average: 8.5,
      id: 615457,
      release_date: '2021-03-18',
      vote_count: 1015,
      title: 'Nobody',
      adult: false,
      backdrop_path: '/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg',
      overview: "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
      genre_ids: [
        28,
        53,
        80
      ],
      popularity: 2516.939,
      media_type: 'movie'
    },
    {
      title: 'Nomadland',
      adult: false,
      backdrop_path: '/bjjZXrP8PEdFeJkKERc62xlarMI.jpg',
      id: 581734,
      original_language: 'en',
      original_title: 'Nomadland',
      poster_path: '/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg',
      video: false,
      vote_average: 7.4,
      vote_count: 760,
      overview: 'A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.',
      release_date: '2021-01-29',
      genre_ids: [
        18,
        37
      ],
      popularity: 397.321,
      media_type: 'movie'
    },
    {
      video: false,
      vote_average: 6.2,
      overview: 'A three-person crew on a mission to Mars faces an impossible choice when an unplanned passenger jeopardizes the lives of everyone on board.',
      release_date: '2021-04-22',
      adult: false,
      backdrop_path: '/lLUTG4e3asScennW3qryoXjG48Q.jpg',
      vote_count: 339,
      genre_ids: [
        18,
        878,
        53
      ],
      id: 559581,
      original_language: 'en',
      original_title: 'Stowaway',
      poster_path: '/yOscLK7KzEPDdi1P8RmevGIjOSp.jpg',
      title: 'Stowaway',
      popularity: 753.667,
      media_type: 'movie'
    },
    {
      first_air_date: '2021-04-23',
      vote_average: 8.4,
      id: 85720,
      vote_count: 215,
      poster_path: '/mrVoyDFiDSqfH4mkoRtccOv2vwh.jpg',
      backdrop_path: '/8z9qQkx7wA6FXpLV8Tiw9mfsRFK.jpg',
      overview: 'In a world cleaved in two by a massive barrier of perpetual darkness, a young soldier uncovers a power that might finally unite her country. But as she struggles to hone her power, dangerous forces plot against her. Thugs, thieves, assassins and saints are at war now, and it will take more than magic to survive.',
      genre_ids: [
        10765
      ],
      name: 'Shadow and Bone',
      original_language: 'en',
      origin_country: [
        'US'
      ],
      original_name: 'Shadow and Bone',
      popularity: 278.907,
      media_type: 'tv'
    },
    {
      title: "Zack Snyder's Justice League",
      adult: false,
      backdrop_path: '/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg',
      id: 791373,
      original_language: 'en',
      original_title: "Zack Snyder's Justice League",
      poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
      video: false,
      vote_average: 8.5,
      vote_count: 5250,
      overview: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
      release_date: '2021-03-18',
      genre_ids: [
        28,
        12,
        14,
        878
      ],
      popularity: 2176.988,
      media_type: 'movie'
    },
    {
      overview: "A quirky, dysfunctional family's road trip is upended when they find themselves in the middle of the robot apocalypse and suddenly become humanity's unlikeliest last hope.",
      release_date: '2021-04-22',
      adult: false,
      backdrop_path: '/5g0gisu56NsCGiMa00HWINbc25X.jpg',
      vote_count: 88,
      genre_ids: [
        16,
        12,
        35,
        10751
      ],
      original_title: 'The Mitchells vs. The Machines',
      original_language: 'en',
      id: 501929,
      poster_path: '/1RjkFdP1pQrqQ3DYKuxR9JnQ5JO.jpg',
      title: 'The Mitchells vs. The Machines',
      video: false,
      vote_average: 8.1,
      popularity: 61.593,
      media_type: 'movie'
    },
    {
      original_language: 'ja',
      original_title: '劇場版「鬼滅の刃」無限列車編',
      poster_path: '/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
      video: false,
      vote_average: 8.3,
      id: 635302,
      release_date: '2020-10-16',
      vote_count: 745,
      title: 'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
      adult: false,
      backdrop_path: '/3FVe3OAdgz060JaxIAaUl5lo6cx.jpg',
      overview: "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
      genre_ids: [
        16,
        28,
        12,
        14,
        18
      ],
      popularity: 2767.274,
      media_type: 'movie'
    },
    {
      vote_average: 5.9,
      overview: 'Catherine Clare reluctantly trades life in 1980 Manhattan for a remote home in the tiny hamlet of Chosen, New York, after her husband George lands a job teaching art history at a small Hudson Valley college. Even as she does her best to transform the old dairy farm into a place where young daughter Franny will be happy, Catherine increasingly finds herself isolated and alone. She soon comes to sense a sinister darkness lurking both in the walls of the ramshackle property—and in her marriage to George.',
      release_date: '2021-04-29',
      adult: false,
      backdrop_path: '/owOBJlzH3j3YHUbr3XqSH10CWzo.jpg',
      vote_count: 95,
      genre_ids: [
        27,
        9648,
        18,
        53
      ],
      id: 631060,
      original_language: 'en',
      original_title: 'Things Heard & Seen',
      poster_path: '/9tSkNmGt1K5Lgf0L0BTHHYJNz0W.jpg',
      title: 'Things Heard & Seen',
      video: false,
      popularity: 136.739,
      media_type: 'movie'
    },
    {
      title: 'The Marksman',
      adult: false,
      backdrop_path: '/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg',
      id: 634528,
      original_language: 'en',
      original_title: 'The Marksman',
      poster_path: '/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
      video: false,
      vote_average: 7.5,
      vote_count: 310,
      overview: 'Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.',
      release_date: '2021-01-15',
      genre_ids: [
        28,
        53,
        80
      ],
      popularity: 2176.957,
      media_type: 'movie'
    },
    {
      overview: 'Cold War spy Greville Wynne and his Russian source try to put an end to the Cuban Missile Crisis.',
      release_date: '2020-09-27',
      title: 'The Courier',
      id: 522241,
      adult: false,
      backdrop_path: '/3pIqd1hgZ2xqzWEyiYp4blqE9Fi.jpg',
      genre_ids: [
        18,
        53
      ],
      original_language: 'en',
      original_title: 'The Courier',
      poster_path: '/zFIjKtZrzhmc7HecdFXXjsLR2Ig.jpg',
      vote_count: 54,
      video: false,
      vote_average: 6.7,
      popularity: 64.777,
      media_type: 'movie'
    },
    {
      overview: 'While speeding off to help in an impromptu battle, The Flash blazes and rips through time, only to find himself dropped into the middle of World War II. It’s here that The Flash meets Wonder Woman and her top secret team, known as the Justice Society of America. Amidst the raging tides of war, gripping combat and the velocity of valor, The Flash must fight to return to his own timeline.',
      release_date: '2021-04-27',
      title: 'Justice Society: World War II',
      id: 736069,
      adult: false,
      backdrop_path: '/8LHSDyRizQ4kQz5rEHPKyXPvMG3.jpg',
      genre_ids: [
        16,
        10752,
        878
      ],
      original_language: 'en',
      original_title: 'Justice Society: World War II',
      poster_path: '/e4REOC6CZW8J6FslA4nRvdQXFXR.jpg',
      vote_count: 104,
      video: false,
      vote_average: 8.5,
      popularity: 269.702,
      media_type: 'movie'
    },
    {
      overview: 'Seven years since the Monsterpocalypse began, Joel Dawson has been living underground in order to survive. But after reconnecting over radio with his high school girlfriend Aimee, Joel decides to venture out to reunite with her, despite all the dangerous monsters that stand in his way.',
      release_date: '2020-10-16',
      adult: false,
      backdrop_path: '/lA5fOBqTOQBQ1s9lEYYPmNXoYLi.jpg',
      vote_count: 1743,
      genre_ids: [
        35,
        28,
        12,
        14
      ],
      original_title: 'Love and Monsters',
      original_language: 'en',
      id: 590223,
      poster_path: '/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg',
      title: 'Love and Monsters',
      video: false,
      vote_average: 7.4,
      popularity: 170.525,
      media_type: 'movie'
    },
    {
      title: 'The Father',
      adult: false,
      backdrop_path: '/h3weAFgg06GqchI2xDfufBgSFTj.jpg',
      id: 600354,
      original_language: 'en',
      original_title: 'The Father',
      poster_path: '/uxWXW1YYQENSv7OzHB4Hds0bK3b.jpg',
      video: false,
      vote_average: 8.3,
      vote_count: 562,
      overview: 'A man refuses all assistance from his daughter as he ages and, as he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.',
      release_date: '2020-12-23',
      genre_ids: [
        18
      ],
      popularity: 186.408,
      media_type: 'movie'
    },
    {
      title: 'Raya and the Last Dragon',
      adult: false,
      backdrop_path: '/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg',
      id: 527774,
      original_language: 'en',
      original_title: 'Raya and the Last Dragon',
      poster_path: '/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
      video: false,
      vote_average: 8.2,
      vote_count: 2563,
      overview: 'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.',
      release_date: '2021-03-03',
      genre_ids: [
        16,
        12,
        14,
        10751,
        28
      ],
      popularity: 1625.703,
      media_type: 'movie'
    },
    {
      poster_path: '/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg',
      video: false,
      vote_average: 6.7,
      overview: "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he's been given is a time and location where to find his quarry. No name. No description. Nothing.",
      release_date: '2021-04-30',
      id: 808023,
      adult: false,
      backdrop_path: '/3Ef8PWUiP1ehO1ESEroxb736srR.jpg',
      title: 'The Virtuoso',
      genre_ids: [
        53,
        28,
        80
      ],
      vote_count: 13,
      original_language: 'en',
      original_title: 'The Virtuoso',
      popularity: 142.739,
      media_type: 'movie'
    },
    {
      video: false,
      vote_average: 5.8,
      overview: 'In a world where supervillains are commonplace, two estranged childhood best friends reunite after one devises a treatment that gives them powers to protect their city.',
      release_date: '2021-04-09',
      adult: false,
      backdrop_path: '/z7HLq35df6ZpRxdMAE0qE3Ge4SJ.jpg',
      vote_count: 485,
      genre_ids: [
        28,
        12,
        35,
        14
      ],
      id: 615678,
      original_language: 'en',
      original_title: 'Thunder Force',
      poster_path: '/duK11VQd4UPDa7UJrgrGx90xJOx.jpg',
      title: 'Thunder Force',
      popularity: 1955.221,
      media_type: 'movie'
    }
  ],
  favourites: [
    {
      original_language: 'en',
      original_title: 'Nobody',
      poster_path: '/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
      video: false,
      vote_average: 8.5,
      id: 615457,
      release_date: '2021-03-18',
      vote_count: 1015,
      title: 'Nobody',
      adult: false,
      backdrop_path: '/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg',
      overview: "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
      genre_ids: [
        28,
        53,
        80
      ],
      popularity: 2516.939,
      media_type: 'movie',
      watched: true
    },
    {
      video: false,
      vote_average: 6.2,
      overview: 'A three-person crew on a mission to Mars faces an impossible choice when an unplanned passenger jeopardizes the lives of everyone on board.',
      release_date: '2021-04-22',
      adult: false,
      backdrop_path: '/lLUTG4e3asScennW3qryoXjG48Q.jpg',
      vote_count: 339,
      genre_ids: [
        18,
        878,
        53
      ],
      id: 559581,
      original_language: 'en',
      original_title: 'Stowaway',
      poster_path: '/yOscLK7KzEPDdi1P8RmevGIjOSp.jpg',
      title: 'Stowaway',
      popularity: 753.667,
      media_type: 'movie',
      watched: true
    },
    {
      poster_path: '/6KErczPBROQty7QoIsaa6wJYXZi.jpg',
      video: false,
      vote_average: 7.3,
      overview: 'Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.',
      release_date: '2021-02-11',
      id: 587807,
      adult: false,
      backdrop_path: '/9ns9463dwOeo1CK1JU2wirL5Yi1.jpg',
      title: 'Tom & Jerry',
      genre_ids: [
        35,
        10751,
        16
      ],
      vote_count: 1274,
      original_language: 'en',
      original_title: 'Tom & Jerry',
      popularity: 1050.532,
      media_type: 'movie',
      watched: false
    },
    {
      title: 'The Father',
      adult: false,
      backdrop_path: '/h3weAFgg06GqchI2xDfufBgSFTj.jpg',
      id: 600354,
      original_language: 'en',
      original_title: 'The Father',
      poster_path: '/uxWXW1YYQENSv7OzHB4Hds0bK3b.jpg',
      video: false,
      vote_average: 8.3,
      vote_count: 562,
      overview: 'A man refuses all assistance from his daughter as he ages and, as he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.',
      release_date: '2020-12-23',
      genre_ids: [
        18
      ],
      popularity: 186.408,
      media_type: 'movie',
      watched: false
    }
  ]
};

export default mockData;
