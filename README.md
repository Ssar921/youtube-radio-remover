# YouTube Mix & Radio Remover

A Firefox extension that removes YouTube's auto-generated Mix and Radio playlist parameters from video URLs.

## What it does

Converts URLs like:

```text
https://www.youtube.com/watch?v=VIDEO_ID&list=RDVIDEO_ID&start_radio=1&rv=VIDEO_ID
```

into:

```text
https://www.youtube.com/watch?v=VIDEO_ID
```

This helps prevent YouTube from automatically placing videos into generated Mix or Radio playlists.

## Status

**v1** — functional but not perfect.

### Known limitations

- Some Mix links may briefly load before being cleaned.
- Some videos may reload once while the extension removes playlist parameters.
- Future YouTube updates may require changes.

## Privacy

This extension:

- Collects no data
- Sends no network requests
- Contains no analytics or tracking

## Installation

1. Open `about:debugging`
2. Select **This Firefox**
3. Click **Load Temporary Add-on**
4. Select `manifest.json`

## License

MIT
