app.factory('ajax', function($http){
	returnedObj = {};
	$http.get('/api/albums/')
	  .then(res => $http.get('/api/albums/' + res.data[1]._id))
	  .then(res => res.data)
	  .then(album => {
	    album.imageUrl = '/api/albums/' + album._id + '.image';
	    album.songs.forEach(function(song){
	      song.audioUrl = '/api/songs/' + song._id + '.audio';
	    });
	    returnedObj.album = album;
	  }).catch(console.error.bind(console));
	  return returnedObj;
})