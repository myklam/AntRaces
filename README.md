# AntRaces

## Description

This app is for those who are obsessed with the underground ant racing phenomenon. It allows the user to get inside information on odds for upcoming races, so that they can place winning bets.

Now go forth and make millions

## Running the app

1. Clone the repo and enter the directory:
```
$ git clone https://github.com/myklam/AntRaces.git
$ cd AntRaces
```
2. Install dependencies
```
$ yarn install
```
3. Install pods
```
$ cd ios
$ pod install
$ cd ..
```
4. Start the packager
```
$ react-native start
```
5. Run the app (in a new terminal window)
#### __iOS__
```
$ react-native run-ios
```
#### __Android__ (You will need to have emulator running or device connected)
```
$ react-native run-android
```

## Notes

### Graphql
I have read a ton about graphql, and played with a small amount on the server side, but this is my first foray into using it in React Native.

The main issue that I had with it was local state. I am using `<Query />` in the `AntStatsScreen` file, and I was having a hard time figuring out how I could edit/modify the data returned by the query, so that I could add the odds and status to the ants objects. I quickly found out that using `setState` within the `<Query>` was a bad idea so my solution was to just pass the data to a child and save it there in that child's state so that I could  manipulate it. I'm sure there's a better way to achieve this, but given time constraints this is how I solved this issue.

### Animations
I was really intrigued by the animation portion of the project. I had it set up so that my three ants would slide across the screen, but I didn't have time to figure out how to loop the animation back around once the ants had gone off screen. This is something I might try to figure out later, as it it interesting.

Instead I opted to use a library that will do an infinite animation on the carousel. This is not the best solution, because it takes my three distinct ant image, and makes it look like an infinite list of ants.