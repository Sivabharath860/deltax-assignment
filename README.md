# dx-assignment
## _Spotify Clone_

![plot](https://github.com/Sivabharath860/deltax-assignment/blob/main/images/addA.png?raw=true)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is a spotify clone developed using Angular, Node js, MySql.

## Features

- Display's Top 10 songs based on average user rating.
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
- Display's Top 10 artists based on average rating of his/her songs.
- [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
- User can rate songs on a scale of [1-5].
- [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
- User can add a new song with existing artists. 
- [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
- Incase the artist is not in the database ,user can add a new artist in the same screen.
- [![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
- Also included a user authentication page.

# Database Tables:
- users table ( userId, userName, password, email ).
- songs table ( songId, songName, dor(date of release), image(cover image) ).
- artits table ( artistId, name, dob(date of birth), bio(biography of artist) ).
- artist_song table ( songId, artistId ).
songs and artists tables has a many to many relation , so a joining table named artist_song created to store the combination of artist and song.
- song_rating ( songId, userId, rating ).


# Validations:
- adding a song- checks whether the song is already present in the database.
- adding an artist- checks whether the artist already present in the database.
- rating a song- allows rating a song only if the user have'nt rated before.
- adding a artist-song combination- implemented update and delete cascade while definig the relations with the parent artistsn and songs table.

# Angular Modules Used:
- HttpClientModule,
- FormsModule,
- ReactiveFormsModule ,
- BrowserModule,
- ModalModule,
- MatAutocompleteModule,
- MatInputModule,
- BrowserAnimationsModule,
- NgMultiSelectDropDownModule,
- AppRoutingModule


