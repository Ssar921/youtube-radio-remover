function cleanUrl() {
	const url = new URL(location.href);

	const list = url.searchParams.get("list");

	// Only target YouTube's auto-generated radio/mix playlists
	if (list?.startsWith("RD")) {
		url.searchParams.delete("list");
		url.searchParams.delete("start_radio");
		url.searchParams.delete("rv");

		history.replaceState({}, "", url);
	}
}

// Run immediately
cleanUrl();

// Run whenever YouTube navigates internally
document.addEventListener("yt-navigate-finish", cleanUrl);

// Fallback for cases where YouTube changes URL without firing the event
let lastUrl = location.href;

setInterval(() => {
	if (location.href !== lastUrl) {
		lastUrl = location.href;
		cleanUrl();
	}
}, 500);
