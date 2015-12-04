app.factory('PlayerFactory',function($q, ajax){

	var audio = document.createElement('audio');
	var isPlaying = false;
	var currentSong;
	var album = ajax.album;
function play (event, song){	 
    // stop existing audio (e.g. other song) in any case
    // pause();
    // $scope.playing = true;
    // resume current song
    // if (song === $scope.currentSong) return audio.play();
    // enable loading new song

    // $scope.currentSong = song;
    // var audio = document.createElement('audio');
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
    var stopTime = audio.currentTime;
  }

  var returnObj = {};
  returnObj.play = play;
  returnObj.pause = pause;
  returnObj.toggle = toggle;
  returnObj.prevSong = prevSong;
  returnObj.nextSong = nextSong;
  returnObj.isPlaying = isPlaying;
  returnObj.currentSong = currentSong;
  returnObj.getCurrentSong = getCurrentSong;

  return returnObj;

  var toggle = function (song) {
    // if ($scope.playing) $rootScope.$broadcast('pause');
    if ($scope.playing) pause();
    else $rootScope.$broadcast('play', song);
  }



  var toggle = function (song) {
    if ($scope.playing) $rootScope.$broadcast('pause');
    else $rootScope.$broadcast('play', song);
  }



  function getCurrentSong() {
  	return currentSong;
  }

  function nextSong() {
  	var idx = album.songs.indexOf(currentSong);
  	var song = album.songs[idx + 1];
  	play(null, song);
  }
	function prevSong() {
		var idx = album.songs.indexOf(currentSong);
		var song = album.songs[idx - 1];
		play(null, song);
	}
})