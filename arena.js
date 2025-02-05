let channelSlug = 'the-fragrance' // The “slug” is just the end of the URL

let placeChannelInfo = (data) => {

let title = document.querySelector('#channel-title')
console.log(data.title)

title.innerHTML = data.title

let channelDescription = document.querySelector ('#channel-description')
channelDescription.innerHTML=(data.metadata.description)

}

// Now that we have said what we can do, go get the data:
fetch(`https://api.are.na/v2/channels/${channelSlug}?per=100`, { cache: 'no-store' })
	.then((response) => response.json()) // Return it as JSON data
	.then((data) => { // Do stuff with the data
		console.log(data) // Always good to check your response!
		placeChannelInfo(data)
		console.log(data.contents)

		let myFuntion = (block)  => {
			if (block.class == 'text') {
				console.log ('text')
			}
			console.log(block.title)
		}

		data.contents.forEach(myFuntion)
	})

	// Text!
	else if (block.class == 'Text') {
		console.log(block)
		let text-card = 
		
	}