var instasearchApp = new Vue({
	
	el: '#app-instasearch',
	
	data: { 
		nameSearchString: "",
		photoFeed: null
	},
	
	mounted() {
		axios
			.get('https://open-football-apis.github.io/open-football-api/teams.json')
			.then(response => {
				this.photoFeed = response.data;
			})
			.catch(error => console.log(error))
	},
	
	 computed: {
        
        filteredPhotoFeed: function () {
			
            var photos = this.photoFeed;
            var nameSearchString = this.nameSearchString;

            if(!nameSearchString){
                return photos;
            }

            searchString = nameSearchString.trim().toLowerCase();

            photos = photos.filter(function(item){
                if(item.name.toLowerCase().indexOf(nameSearchString) !== -1){
                    return item;
                }
            })

            return photos;
        }
	 }
	
});
