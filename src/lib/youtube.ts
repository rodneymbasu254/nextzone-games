export function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    let videoId: string | null = null;

    if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.slice(1);
    }

    if (
      parsedUrl.hostname === "www.youtube.com" ||
      parsedUrl.hostname === "youtube.com"
    ) {
      videoId = parsedUrl.searchParams.get("v");

      if (!videoId && parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/embed/")[1];
      }
    }

    if (!videoId) {
      return null;
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return null;
  }
}