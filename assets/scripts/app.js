const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc19ca3339msh709c023f688b9fdp1dc903jsn099caf21fe27',
		'X-RapidAPI-Host': 'ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com'
	}
}

const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-find-ip-location-and-ip-info.p.rapidapi.com/backend/ipinfo/?ip=${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
}

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = $input
    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('arua-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if(ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('arua-busy')
})