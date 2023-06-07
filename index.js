console.log('Hello Google, Do you enjoy Apple Vision Pro and ready to release your glasses?')

addEventListener('copy', (event) => {
    navigator.clipboard.readText().then((text) => {
        console.log(text)
    })
})
