export function sortByCompany(a, b) {
  if (a.company < b.company) {
    return -1;
  }
  if (a.company > b.company) {
    return 1;
  }
  return 0;
}
