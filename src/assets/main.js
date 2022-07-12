const api = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCqUDNq_oiXprZYtiejwyh0g&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById('contento');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4afbd6ed7msh721b61f9d7fc7cep1bd547jsne2d295e26b95',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
/*
fetch(`${api}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
*/

async function fetchdata(url_api){
    const response = await fetch(url_api, options)
    const data = await response.json();
    return data;
}


(async ()=>{
    try {
        const videos = await fetchdata(api);
        let view = `
        ${videos.items.map(video=>`
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        `;
        contento.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();