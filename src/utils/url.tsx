export function gotoUrl(url: string) {
    window.open(url, "_blank")?.focus();
}