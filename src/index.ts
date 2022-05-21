import fetch from "node-fetch"

const res = await fetch("https://ipinfo.io/ip")
const ip = await res.text()
console.log(ip)

