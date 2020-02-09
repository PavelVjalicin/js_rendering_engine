import {glWindow} from "./engine/glWindow"

const socket = new WebSocket("ws://localhost:3000")

socket.addEventListener("open", (e) => {
  socket.send("Here I am")
})

socket.addEventListener("message",(e:MessageEvent) => {
  if(e.data === "refresh") {
    window.location.reload()
  }
})

let canvas = document.createElement("canvas")

document.getElementsByTagName("body")[0].appendChild(canvas)

glWindow(canvas)