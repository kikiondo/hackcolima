
export default function fetchData() {
 return fetch('https://www.datos.gov.co/views/f33t-b2xd.json?accessType=WEBSITE&method=getDefaultView')
    .then(res => res.json())
}