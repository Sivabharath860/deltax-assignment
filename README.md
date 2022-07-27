# dx-assignment
## _Spotify Clone_

![plot](https://github.com/Sivabharath860/deltax-assignment/blob/main/images/addA.png?raw=true)



This is a spotify clone developed using Angular, Node js, MySql.

# Features

# Display's Top 10 songs based on average user rating.
- ![plot](https://github.com/Sivabharath860/deltax-assignment/blob/main/images/topTenS.png?raw=true)
# Display's Top 10 artists based on average rating of his/her songs.
- ![plot](https://github.com/Sivabharath860/deltax-assignment/blob/main/images/topTenA.png?raw=true)
# User can rate songs on a scale of [1-5].
- ![plot](https://github.com/Sivabharath860/deltax-assignment/blob/main/images/rsong.png?raw=true)
- ![plot](https://github.com/Sivabharath860/deltax-assignment/blob/main/images/rating.png?raw=true)
- ![plot](https://github.com/Sivabharath860/deltax-assignment/blob/main/images/afterRate.png?raw=true)
# User can add a new song with existing artists. 
- ![plot](https://github.com/Sivabharath860/deltax-assignment/blob/main/images/addS1.png?raw=true)
# Incase the artist is not in the database ,user can add a new artist in the same screen.
- ![plot](https://github.com/Sivabharath860/deltax-assignment/blob/main/images/addA.png?raw=true)
# Also included a user authentication page.
- ![plot](https://github.com/Sivabharath860/deltax-assignment/blob/main/images/login.png?raw=true)

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


