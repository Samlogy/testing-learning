export function add(a: number, b: number) {
  return a + b;
}

export function devide(a: number, b: number) {
  if (b === 0) throw new Error("Parameter is not a number!");
  return a / b;
}

export async function fetchAPI(url: string, options = {}) {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
