// TODO: Declare any global variables we need
let headsTotal = 0
let tailsTotal = 0
let totalFlips = 0
let coinImg = document.querySelector('#coin')


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector('#flip').addEventListener('click', function() {

        numRand = Math.floor(Math.random() * 2) + 1
        if (numRand == 1) {
            addHeads()

        } else {
            addTails()
        }
        updatePercents()
    })

    document.querySelector('#clear').addEventListener('click', function () {
        //Reset everything
        headsTotal = 0
        tailsTotal = 0
        totalFlips = 0

        let tableSlots = document.querySelectorAll('td')
        for (let i = 0; i < tableSlots.length; i++) {
            if (tableSlots[i].getAttribute('id').includes("-percent")) {
                tableSlots[i].textContent = "0%"
            } else {
                tableSlots[i].textContent = "0"
            }
        }
    })



    function addHeads() {
        coinImg.setAttribute('src', 'assets/images/penny-heads.jpg')
        document.querySelector('#result').textContent = "You got heads!"
        headsTotal++
    }

    function addTails() {
        coinImg.setAttribute('src', 'assets/images/penny-tails.jpg')
        document.querySelector('#result').textContent = "You got tails!"
        tailsTotal++
    }

    function updatePercents() {
        calcTotalFlips()
        document.querySelector('#tails-percent').textContent = calcPerAndTruncateString(tailsTotal)
        document.querySelector('#tails').textContent = tailsTotal
        document.querySelector('#heads-percent').textContent = calcPerAndTruncateString(headsTotal)
        document.querySelector('#heads').textContent = headsTotal
    }

    function calcPerAndTruncateString(num) {
        let numFloat = (num/totalFlips) * 100
        let numString = Math.trunc(numFloat).toString() + "%"
        return numString
    }

    function calcTotalFlips() {
        totalFlips = headsTotal + tailsTotal
    }
})