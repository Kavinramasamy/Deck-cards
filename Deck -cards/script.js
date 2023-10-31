
//API link for deck of card

let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

//Function to getting a card form deck

async function randomCard() {
    await fetch(url)
        .then((response) => response.json())
        .then((data) => imageOfCard(data.deck_id))
        .catch((error) => alert("Reload the page..." + error));

}
//Getting image of the card

async function imageOfCard(idofcard) {
    let url2 = `https://deckofcardsapi.com/api/deck/${idofcard}/draw/?count=1`
    await fetch(url2)
        .then((response) => response.json())
        .then((data) => setImage(data.cards[0].images.png))
        .catch((error) => alert("Reload the page..." + error));

}
//Diplaying the image in the screen

function setImage(image) {
    document.getElementsByClassName("image")[0].src = image;
}

//Function call
randomCard();


