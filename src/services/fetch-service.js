export async function getData() {

  return await window.fetch('/partsMisc')
                     .then(response => response.json());

}