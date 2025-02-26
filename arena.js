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
				<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.22 256.89">
					<defs>
					</defs>
					<g id="Layer_1-2" data-name="Layer_1">
						<path fill="none" stroke="white" stroke-width="3" d="M72.11,256.39h59.54c9.13-.13,10.83-3.46,11.59-4.6s.5-3.59,0-6.11-3.83-3.97-3.83-3.97v-92.09s-1.15-35.44-.36-39.76.26-7.09-1.44-8.66-18.7-5.97-27.68-9.84c-8.99-3.87-13.32-9.77-16.86-14.17s-2.57-9.9-2.57-9.9h2.08l.89-.85v-4.62l-1.27-1.54,4.58-47.31C90.72.41,72.11.5,72.11.5c0,0-18.61-.09-24.66,12.47l4.58,47.31-1.27,1.54v4.62l.89.85h2.08s.97,5.51-2.57,9.9c-3.54,4.4-7.87,10.3-16.86,14.17-8.99,3.87-25.98,8.27-27.68,9.84s-2.23,4.33-1.44,8.66-.36,39.76-.36,39.76v92.09s-3.33,1.45-3.83,3.97-.76,4.98,0,6.11,2.46,4.47,11.59,4.6h59.54Z"/>
					</g>
				</svg>
			</button>
			<dialog class="modal">
				<button class="exit">×</button>
				<div class="modal-contents">
					<h2>${block.title}</h2>
					<h3>Parfum</h3>
					<h4>Added By ${block.connected_by_username}</h4>
					<div class="divider-line"></div>
					<img src="${block.image.original.url}">
					<p>${block.description}</p>
				</div>
				<a class="Modal-Link" href="${ block.source.url }">Discover More</a>
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
				<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.38 218.76">
					<defs>
					</defs>
					<g id="Layer_1-2" data-name="Layer_1">
						<path fill="none" stroke="white" stroke-width="2"  d="M123.88,76.28v138.66s-.15,3.1-4.17,3.26c-4.03.15-57.52,0-57.52,0,0,0-53.49.15-57.52,0-4.03-.16-4.17-3.26-4.17-3.26V76.28l9.37-8.86h27.97v-19.16s-4.47-1.49-4.68-6.27c-.21-4.78,3.55-5.96,3.55-5.96v-2.12h-10.65l-6.93-7.23V7.73L26.05.5h72.27l6.94,7.23v18.95l-6.94,7.23h-10.65v2.12s3.76,1.18,3.55,5.96c-.21,4.78-4.68,6.27-4.68,6.27v19.16h27.97l9.37,8.86Z"/>
					</g>
				</svg>
			</button>
			<dialog class="modal">
					<button class="exit">×</button>
					<div class="modal-contents">
						<h2>${block.title}</h2>
						<h3>Parfum</h3>
						<h4>Added By ${block.connected_by_username}</h4>
						<div class="divider-line"></div>
						<img src="${block.image.large.url}">
						<p>${block.description}</p>
					</div>
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
				<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.85 224.1">
					<defs>
					</defs>
					<g id="Layer_1-2" data-name="Layer_1"> <g>
						<path fill="none" stroke="white" stroke-width="2" d="M105.35,196.47s-3.05,5.09-5.15,18.03c-.61,3.33-.86,5.3-4.44,6.04-3.42.71-19.7,2.87-31.58,3.04-.13,0-.25,0-.38,0h-.38c-.13,0-.25,0-.38,0h0c-.13,0-.25,0-.38,0-11.88-.17-28.16-2.33-31.59-3.04-3.57-.74-3.82-2.71-4.43-6.04-2.1-12.94-5.15-18.03-5.15-18.03,0,0-22.71-50.5-20.89-80.71,1.83-30.21,36.07-38.04,41.53-39.64,5.47-1.61,7.61-6.11,7.61-6.11h-3.6c-1.7,0-3.07-1.38-3.06-3.08,0-2.4.01-6.07-.02-10.49-.06-8.04-8.82-9.01-14.64-19.41-5.82-10.39-5.48-19.32-5.68-20.72-.2-1.4.2-3.4,2.6-4.1,2.65-.63,5.21-1.18,7.65-1.66C49.94-.19,63.42.51,63.42.51c0,0,13.48-.7,30.43,10.04,2.44.48,5,1.03,7.65,1.66,2.4.7,2.8,2.7,2.6,4.1-.2,1.4.14,10.33-5.68,20.72-5.82,10.4-14.59,11.37-14.64,19.41-.03,4.42-.03,8.09-.02,10.49.01,1.7-1.36,3.08-3.06,3.08h-3.6s2.14,4.5,7.61,6.11c5.46,1.6,39.7,9.43,41.53,39.64,1.82,30.21-20.89,80.71-20.89,80.71Z"/>
						</g>
					</g>
				</svg>
			</button>
			<dialog class="modal">
				<button class="exit">×</button>
				<div class="modal-contents">
					<h2>${block.title}</h2>
					<h3>Parfum</h3>
					<h4>Added By ${block.connected_by_username}</h4>
					<div class="divider-line"></div>
					<p id="just-text">${block.content}</p>
					<p>${ block.description_html ? block.description_html : '' }</p>
					<div class="divider-line-bottom"></div>
				</div>
			</dialog>
			</li>
			`

		channelBlocks.insertAdjacentHTML('beforeend', textItem)	
	}

	// Uploaded (not linked, including videos) media…
	else if (block.class == 'Attachment') {
		let attachment = block.attachment.content_type 

		if (attachment.includes('video')) {

			let videoItem =
				`
				<li class="attachment-block">
					<button>
					<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.87 192.94">
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
							<path class="cls-1" d="M144.37,116.67c0,45.76-41.71,74.07-41.71,74.07,0,0-9.58,1.7-30.23,1.7s-30.22-1.7-30.22-1.7c0,0-41.71-28.31-41.71-74.07S50.09,44.74,50.09,44.74c0,0,7.72-5.72,7.72-15.62s-5.73-12.43-5.73-12.43h0l-19.47-1.13V2.5L72.43.5l39.83,2v13.06l-19.48,1.13h0s-5.72,2.53-5.72,12.43,7.72,15.62,7.72,15.62c0,0,49.59,26.18,49.59,71.93Z"/>
							</g>
						</svg>
					</button>
					<dialog class="modal">
						<button class="exit">×</button>
						<h2>${block.title}</h2>
						<h3>Parfum</h3>
						<h4>Added By ${block.connected_by_username}</h4>
						<div class="divider-line"></div>
						<video controls src="${ block.attachment.url }"></video>
						<p>${ block.description_html ? block.description_html : '' }</p>
					</dialog>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', videoItem)
			// More on video, like the `autoplay` attribute:
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
		}

		// Uploaded PDFs!
		else if (attachment.includes('pdf')) {

			let PdfItem =
				`
				<li class="pdf-block">
					<button>
						<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.99 203.94">
							<defs>
							</defs>
							<g id="Layer_1-2" data-name="Layer_1">
							<path fill="none" stroke="white" stroke-width="2" d="M31.41,86.86l4.6-7.26h-1.65c-1.51,0-2.73-1.22-2.73-2.72V3.23c0-1.51,1.22-2.73,2.73-2.73h30.28c1.5,0,2.72,1.22,2.72,2.73v73.65c0,1.5-1.22,2.72-2.72,2.72h-1.67l5.04,7.27h.45s22.99.62,22.99.62c0,0,7.91-.48,6.96,8.39-.95,8.86-13.97,76.28-13.97,76.28,0,0-.64,1.99-.75,10.38-.11,8.4,0,14.3,0,14.3,0,0,.33,2.61-3.33,3.57-3.67.96-13.52,3.03-30.86,3.03s-27.2-2.07-30.86-3.03c-3.67-.96-3.33-3.57-3.33-3.57,0,0,.1-5.9,0-14.3-.11-8.39-.76-10.38-.76-10.38,0,0-13.02-67.42-13.97-76.28-.95-8.87,6.97-8.39,6.97-8.39l23.86-.63Z"/>
							</g>
					  </svg>
					</button>
					<dialog class="modal">
						<button class="exit">×</button>
						<div class="modal-contents">
							<h2>${block.title}</h2>
							<h3>Parfum</h3>
							<h4>Added By ${block.connected_by_username}</h4>
							<div class="divider-line"></div>
							<img src="${ block.image.thumb.url }">
							<p>${ block.description_html ? block.description_html : '' }</p>
						</div>
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
						<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.24 232.49">
							<defs>
							</defs>
							<g id="Layer_1-2" data-name="Layer_1">
							<path fill="none" stroke="white" stroke-width="2" d="M112.74,167.96c0,30.83-30.4,61.45-30.4,61.45,0,0-1.66,2.22-22.97,2.55-.88.01-1.8.02-2.75.03-.95-.01-1.87-.02-2.75-.03-21.3-.33-22.96-2.55-22.96-2.55,0,0-30.41-30.62-30.41-61.45s37.96-74.08,41.09-79.22c2.72-4.47,2.95-7.55,2.96-8.28h-1.05c-1.31,0-2.37-1.06-2.37-2.37v-8.1s-2.06-.6-2.06-4.12,2.06-4.28,2.06-4.28h2.47v-2.06c-2.1-.48-2.39-1.24-2.39-1.24,0,0-11.64-29.33-12.97-32.6-1.34-3.28,1-5.25,1-5.25L53.6,1.54c1.78-1.38,4.27-1.38,6.05,0l24.35,18.91s2.34,1.97,1,5.25c-1.33,3.27-12.97,32.6-12.97,32.6,0,0-.29.76-2.39,1.24v2.06h2.47s2.06.76,2.06,4.28-2.06,4.12-2.06,4.12v8.1c0,1.31-1.06,2.37-2.37,2.37h-1.04c.01.73.22,3.82,2.95,8.28,3.14,5.14,41.09,48.38,41.09,79.22Z"/>
							</g>
						</svg>
					</button>
					<dialog class="modal">
						<button class="exit">×</button>
						<div class="modal-contents">
							<h2>${block.title}</h2>
							<h3>Parfum</h3>
							<h4>Added By ${block.connected_by_username}</h4>
							<div class="divider-line"></div>
							<img src="${ block.image.thumb.url }">
							<audio controls src="${block.attachment.url}"></audio>
							<p>${ block.description_html ? block.description_html : '' }</p>
						</div>
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
					<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.87 192.94">
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
							<path class="cls-1" d="M144.37,116.67c0,45.76-41.71,74.07-41.71,74.07,0,0-9.58,1.7-30.23,1.7s-30.22-1.7-30.22-1.7c0,0-41.71-28.31-41.71-74.07S50.09,44.74,50.09,44.74c0,0,7.72-5.72,7.72-15.62s-5.73-12.43-5.73-12.43h0l-19.47-1.13V2.5L72.43.5l39.83,2v13.06l-19.48,1.13h0s-5.72,2.53-5.72,12.43,7.72,15.62,7.72,15.62c0,0,49.59,26.18,49.59,71.93Z"/>
							</g>
						</svg>
				</button>
				<dialog class="modal">
					<button class="exit">×</button>
					<div class="modal-contents">
						<h2>${block.title}</h2>
						<h3>Parfum</h3>
						<h4>Added By ${block.connected_by_username}</h4>
						<div class="divider-line"></div>
						${ block.embed.html }
						<p>${ block.description_html ? block.description_html : '' }</p>
					</div>
				</dialog>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', linkedVideoItem)
			// More on iframe: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
		}

	}
}

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

	let  videoBlocks = document.querySelectorAll('.video-block')
	videoBlocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let dialog = block.querySelector('dialog')
		let closeButton = dialog.querySelector('button')

		openButton.onclick = () => {
			dialog.showModal();

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
			dialog.showModal();

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

	let  pdfBlocks = document.querySelectorAll('.pdf-block')
	pdfBlocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let dialog = block.querySelector('dialog')
		let closeButton = dialog.querySelector('button')


		openButton.onclick = () => {
			dialog.showModal();

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
	})