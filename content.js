function cleanUrl() {
	const url = new URL(location.href);

	const list = url.searchParams.get("list");

	// Only target YouTube's auto-generated radio/mix playlists
	if (list?.startsWith("RD")) {
		url.searchParams.delete("list");
		url.searchParams.delete("start_radio");
		url.searchParams.delete("rv");

		history.replaceState({}, "", url);

		location.reload();
	}
}

// Run immediately
cleanUrl();

// Run whenever YouTube navigates internally
document.addEventListener("yt-navigate-finish", cleanUrl);
