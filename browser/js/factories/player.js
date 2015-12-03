app.factory('PlayerFactory',function($q){

	var audio = document.createElement('audio');
	var isPlaying = false;
	var currentSong;
function play (event, song){
	 
    // stop existing audio (e.g. other song) in any case
    // pause();
    // $scope.playing = true;
    // resume current song
    // if (song === $scope.currentSong) return audio.play();
    // enable loading new song

    // $scope.currentSong = song;
    // var audio = document.createElement('audio');
    console.log('we started at ',audio.currentTime);
    if(currentSong===song) {
    	audio.play();
    	// isPlaying = false;
    }
    else {
	    audio.src = song.audioUrl;
	    audio.load();
	    audio.play();
	    isPlaying = true;
	    console.log(song);
	    currentSong = song;
    }
}

function pause () {
    audio.pause();
    isPlaying = false;
    console.log(audio.currentTime);
    var stopTime = audio.currentTime;
  }

  var returnObj = {};
  returnObj.play = play;
  returnObj.pause = pause;
  returnObj.toggle = toggle;
  returnObj.isPlaying = isPlaying;
  returnObj.currentSong = currentSong;
  returnObj.getCurrentSong = getCurrentSong;

  return returnObj;

  var toggle = function (song) {
    // if ($scope.playing) $rootScope.$broadcast('pause');
    if ($scope.playing) pause()
    else $rootScope.$broadcast('play', song);
  }



  var toggle = function (song) {
    if ($scope.playing) $rootScope.$broadcast('pause');
    else $rootScope.$broadcast('play', song);
  }



  function getCurrentSong() {
  	return currentSong;
  }

  function next() {

  }

})