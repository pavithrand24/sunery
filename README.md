# React Weather
A simple weather app built with React Native

# Development stack
+ I used [Visual Studio Code](https://code.visualstudio.com/) to have great support for React Native app development
+ I used git for version control, and stored progress on GitHub.
+ Currently only tested on an android device

# APIs
+ Weather data is retrieved from http://openweathermap.org/
+ You can see examples of API data in [react-weather/api](https://github.com/pavithrand24/sunery/blob/main/src/api/Api.js)

# Note about API data
The weather data retrived from Open Weather is not very accurate. Most of the time, the weather forecast is not correct.
The most reliable Indian weather data is hosted by Indian Bureau of Meteorology, however it is not very API friendly.  

# Current progress
- [x] App skeleton
- [x] Basic UI prototype
- [x] Call weather APIs for data
- [x] Implement weather service
- [x] Add card-gradient animations
- [x] Add button to refresh
- [x] Implement basic settings UI prototype with navigation
- [x] Create location and weather repositories
- [ ] Add support for ios devices

<img src="https://github.com/pavithrand24/sunery/blob/main/src/Screenshot/SH!.jpg?raw=true" width="300"><img src="https://github.com/pavithrand24/sunery/blob/main/src/Screenshot/SH2.jpg?raw=true" width="300">

# Running

## Clone & install

+ Clone this repo `git clone git@github.com:pavithrand24/sunery.git`
+ `cd react-weather`
+ run `npm install`

## API keys
+ Get your API key from http://openweathermap.org/
+ No key is required to use http://postcodeapi.com.au/
+ Create a new file `release/keys.js`:
```jsx
module.exports = {
	weatherApiKey: 'YOUR_KEY_HERE'
};
```

## iOS

+ Open `ReactWeather.xcodeproj` in `XCode`
+ Press `cmd+r` to build it

## Android

+ Run `android avd` and start an emulator
+ Run `react-native run-android`

## License

Released under the [MIT License](http://opensource.org/licenses/MIT).

# Feedback

Feedback is always welcome. Feel free to contact me, I would love to know if you notice something that can be done better. Please be nice, this is my first React Native app.
