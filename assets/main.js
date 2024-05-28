const socket = io()
const messages = document.querySelector(".messages")
const form = document.querySelector(".form")
const input = document.querySelector(".input")
const nameblock = document.querySelector(".name")

const userName = prompt("Ваше имя: ")
nameblock.innerHTML = `${userName}`