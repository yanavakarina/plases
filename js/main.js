const form = document.getElementById("place-form")
const placeName = document.getElementById("place-name")
const placeNote = document.getElementById("place-note")
const places = document.getElementById("places")
const emptyList = document.getElementById("empty-list")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const name = placeName.value.trim()

    if (name === "") {
        placeName.focus()
        return
    }

    const card = document.createElement("li")
    const title = document.createElement("h3")
    title.textContent = name
    card.append(title)

    const note = placeNote.value.trim()

    if (note !== "") {
        const paragraph = document.createElement("p")
        paragraph.textContent = note
        card.append(paragraph)
    }

    places.append(card)
    emptyList.hidden = true
    form.reset()
    placeName.focus()
})
