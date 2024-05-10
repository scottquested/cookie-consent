import Script from "next/script";

export async function CookiebotBanner() {
  return (
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid="67b29a32-f6f7-4613-96ec-d2be109f42ed"
      type="text/javascript"
    />
  );
}
