// This allows us to process/render the descriptions, which are in Markdown!
// More about Markdown: https://en.wikipedia.org/wiki/Markdown
let markdownIt = document.createElement('script')
markdownIt.src = 'https://cdn.jsdelivr.net/npm/markdown-it@14.0.0/dist/markdown-it.min.js'
document.head.appendChild(markdownIt)



// Okay, Are.na stuff!
let channelSlug = 'the-fragrance' // The “slug” is just the end of the URL


// First, let’s lay out some *functions*, starting with our basic metadata:
let placeChannelInfo = (data) => {
	// Target some elements in your HTML:
	console.log("block", data.contents[11]);
	let channelTitle = document.getElementById('channel-title')
	// let channelDescription = document.getElementById('channel-description')
	// let channelCount = document.getElementById('channel-count')
	// let channelLink = document.getElementById('channel-link')

	// Then set their content/attributes to our data:
	channelTitle.innerHTML = data.title
	// channelDescription.innerHTML = window.markdownit().render(data.metadata.description) // Converts Markdown → HTML
	// channelCount.innerHTML = data.length
	// channelLink.href = `https://www.are.na/channel/${channelSlug}`
}



// Then our big function for specific-block-type rendering:
let renderBlock = (block) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.getElementById('channel-blocks')


	
	// Links!
	if (block.class == 'Link') {
		
		let linkItem =
		`
		<li class="link-block">
			<button>
				<h2>click here</h2>
			</button>
			<dialog class="modal">
				<button class="exit">×</button>
				<img src="${block.image.original.url}">
				<h3 class="block-title">${block.title}</h3>
			</dialog>
		</li>
		`
		
		channelBlocks.insertAdjacentHTML('beforeend', linkItem)
		
	}
	
	// Images!
	else if (block.class == 'Image') {

		let imageItem =
			`
			<li class="image-block">
			<button>
				<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.99 203.94">
						<defs>
						  <style>
							.cls-1 {
							  fill: none;
							  stroke: #fff;
							  stroke-miterlimit: 10;
							  stroke-width: 2px;
							}
						  </style>
						</defs>
						<g id="Layer_1-2" data-name="Layer_1">
						  <path class="cls-1" d="M31.41,86.86l4.6-7.26h-1.65c-1.51,0-2.73-1.22-2.73-2.72V3.23c0-1.51,1.22-2.73,2.73-2.73h30.28c1.5,0,2.72,1.22,2.72,2.73v73.65c0,1.5-1.22,2.72-2.72,2.72h-1.67l5.04,7.27h.45s22.99.62,22.99.62c0,0,7.91-.48,6.96,8.39-.95,8.86-13.97,76.28-13.97,76.28,0,0-.64,1.99-.75,10.38-.11,8.4,0,14.3,0,14.3,0,0,.33,2.61-3.33,3.57-3.67.96-13.52,3.03-30.86,3.03s-27.2-2.07-30.86-3.03c-3.67-.96-3.33-3.57-3.33-3.57,0,0,.1-5.9,0-14.3-.11-8.39-.76-10.38-.76-10.38,0,0-13.02-67.42-13.97-76.28-.95-8.87,6.97-8.39,6.97-8.39l23.86-.63Z"/>
						</g>
				</svg>
			</button>
			<dialog class="modal">
					<button class="exit">×</button>
					<img src="${block.image.large.url}">
					<h3 class="block-title">${block.title}</h3>
			</dialog>
			</li>
			`

		channelBlocks.insertAdjacentHTML('beforeend', imageItem)

			}

	// Text!
	else if (block.class == 'Text') {

		let textItem =
			`
			<li class="text-block">
			<button>
				<h2>click here</h2>
			</button>
			<dialog class="modal">
				<button class="exit">×</button>
				<p>${block.content}</p>
				<h3 class="block-title">${block.title}</h3>
			</dialog>
			</li>
			`

		channelBlocks.insertAdjacentHTML('beforeend', textItem)	
	}

	// Uploaded (not linked) media…
	else if (block.class == 'Attachment') {
		let attachment = block.attachment.content_type // Save us some repetition

		// Uploaded videos!
		if (attachment.includes('video')) {
			// …still up to you, but we’ll give you the `video` element:
			let videoItem =
				`
				<li class="attachment-block">
					<button>
						<h2>click here</h2>
					</button>
					<dialog class="modal">
						<button class="exit">×</button>
						<video controls src="${ block.attachment.url }"></video>
						<h3 class="block-title">${block.title}</h3>
					</dialog>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', videoItem)
			// More on video, like the `autoplay` attribute:
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
		}

		// Uploaded PDFs!
		else if (attachment.includes('pdf')) {

			console.log("pdf", block)

			let PdfItem =
				`
				<li class="pdf-block">
					<button>
						<h2>click here</h2>
					</button>
					<dialog class="modal">
						<button class="exit">×</button>
						<figure class="pdf-block">
							<img src="${ block.image.thumb.url }">
							<h3 class="block-title">${ block.title }</h3>
						</figure>
					<dialog>
				</li>
				`

		channelBlocks.insertAdjacentHTML('beforeend', PdfItem)	

		}

		// Uploaded audio!
		else if (attachment.includes('audio')) {
			let audioItem =
				`
				<li class="audio-block">
					<button>
						<h2>click here</h2>
					</button>
					<dialog class="modal">
						<h3>HELLO</h3>
						<button class="exit">×</button>
						<audio controls src="${block.attachment.url}"></audio>
						<h3 class="block-title">${ block.title }</h3>
					</dialog>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', audioItem)
			// More on audio: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio

		}

	}

	// Linked media…
	else if (block.class == 'Media') {
		let embed = block.embed.type

		// Linked video!
		if (embed.includes('video')) {
			// …still up to you, but here’s an example `iframe` element:
			let linkedVideoItem =
				`
				<li class="media-block">
				<button>
					<h2>click here</h2>
				</button>
				<dialog class="modal">
					<button class="exit">×</button>
					${ block.embed.html }
					<h3 class="block-title">${block.title}</h3>
				</dialog>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', linkedVideoItem)
			// More on iframe: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
		}

	}
}



// It‘s always good to credit your work:
// let renderUser = (user, container) => { // You can have multiple arguments for a function!
// 	let userAddress =
// 		`
// 		<address>
// 			<img src="${ user.avatar_image.display }">
// 			<h3>${ user.first_name }</h3>
// 			<p><a href="https://are.na/${ user.slug }">Are.na profile ↗</a></p>
// 		</address>
// 		`
// 	container.insertAdjacentHTML('beforeend', userAddress)
// }

let initInteraction = () => {
	let  linkBlocks = document.querySelectorAll('.link-block')
	linkBlocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let dialog = block.querySelector('dialog')
		let closeButton = dialog.querySelector('button')

		openButton.onclick = () => {
			dialog.showModal()
		}

		closeButton.onclick = () => {
			dialog.close()
		}

		dialog.onclick = (event) => {
			if (event.target == dialog) {
				dialog.close()
			}
		}
	})

	let  imageBlocks = document.querySelectorAll('.image-block')
	imageBlocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let dialog = block.querySelector('dialog')
		let closeButton = dialog.querySelector('button')

		openButton.onclick = () => {
			dialog.showModal()
		}

		closeButton.onclick = () => {
			dialog.close()
		}

		dialog.onclick = (event) => {
			if (event.target == dialog) {
				dialog.close()
			}
		}
	})

	let  textBlocks = document.querySelectorAll('.text-block')
	textBlocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let dialog = block.querySelector('dialog')
		let closeButton = dialog.querySelector('button')

		openButton.onclick = () => {
			dialog.showModal()
		}

		closeButton.onclick = () => {
			dialog.close()
		}

		dialog.onclick = (event) => {
			if (event.target == dialog) {
				dialog.close()
			}
		}
	})

	// …None of these are opening

	let  attachmentBlocks = document.querySelectorAll('.attachment-block')
	attachmentBlocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let dialog = block.querySelector('dialog')
		let closeButton = dialog.querySelector('button')

		openButton.onclick = () => {
			dialog.showModal()
		}

		closeButton.onclick = () => {
			dialog.close()
		}

		dialog.onclick = (event) => {
			if (event.target == dialog) {
				dialog.close()
			}
		}
	})

	let  pdfBlocks = document.querySelectorAll('.pdf-block')
	pdfBlocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let dialog = block.querySelector('dialog')
		let closeButton = dialog.querySelector('button')

		openButton.onclick = () => {
			dialog.showModal()
		}

		closeButton.onclick = () => {
			dialog.close()
		}

		dialog.onclick = (event) => {
			if (event.target == dialog) {
				dialog.close()
			}
		}
	})

	let  audioBlocks = document.querySelectorAll('.audio-block')
	audioBlocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let dialog = block.querySelector('dialog')
		let closeButton = dialog.querySelector('button')

		openButton.onclick = () => {
			dialog.showModal()
		}

		closeButton.onclick = () => {
			dialog.close()
		}

		dialog.onclick = (event) => {
			if (event.target == dialog) {
				dialog.close()
			}
		}
	})

	let  mediaBlocks = document.querySelectorAll('.media-block')
	mediaBlocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let dialog = block.querySelector('dialog')
		let closeButton = dialog.querySelector('button')

		openButton.onclick = () => {
			dialog.showModal()
		}

		closeButton.onclick = () => {
			dialog.close()
		}

		dialog.onclick = (event) => {
			if (event.target == dialog) {
				dialog.close()
			}
		}
	})
}

// Now that we have said what we can do, go get the data:
fetch(`https://api.are.na/v2/channels/${channelSlug}?per=100`, { cache: 'no-store' })
	.then((response) => response.json()) // Return it as JSON data
	.then((data) => { // Do stuff with the data
		console.log("data", data) // Always good to check your response!
		placeChannelInfo(data) // Pass the data to the first function

		// Loop through the `contents` array (list), backwards. Are.na returns them in reverse!
		data.contents.reverse().forEach((block) => {
			console.log(block) // The data for a single block
			renderBlock(block) // Pass the single block data to the render function
		})

		initInteraction()

		// Also display the owner and collaborators:
		// let channelUsers = document.getElementById('channel-users') // Show them together
		// data.collaborators.forEach((collaborator) => renderUser(collaborator, channelUsers))
		// renderUser(data.user, channelUsers)
	})