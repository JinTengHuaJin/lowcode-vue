export default function getIcon(url: string) {
  return new URL(url, import.meta.url).href;
}
