export function numberWithCommas(n) {
    var parts=n?.toString()?.split(".");
    return parts ? parts?.[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "") : '';
}
