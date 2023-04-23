const btnEl = document.getElementById("btn");
const jokeElement = document.getElementById("joke");
const apiKey = "chVEZRx/5FQcMRpF7v8c1A==a6KPguL64gaf1lkD";

const options = {
	method: "GET",
	headers: {
		"X-Api-Key": apiKey,
	},
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {

	try {
		jokeElement.innerText = "Updating...";
		btnEl.disabled = true;
		btnEl.innerText = "Loading...";
		const response = await fetch(apiURL, options);
		const data = await response.json();

		btnEl.disabled = false;
		btnEl.innerText = "TELL ME A JOKE";
		jokeElement.innerText = data[0].joke;

	} catch (error) {
		alert("Some error has occured")
		btnEl.innerText = "TELL ME A JOKE";
		jokeElement.innerText = "Couldn't refresh feed";
		// btnEl.disabled = false;
	}


}

btnEl.addEventListener("click", getJoke)