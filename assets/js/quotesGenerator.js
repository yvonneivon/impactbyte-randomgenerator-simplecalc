let quotes =[
    `Memories warm you up from the inside. But they also tear you apart. ― Kafka on the Shore`,
    `Pain is inevitable. Suffering is optional. ― What I Talk About When I Talk About Running`,
    `Death is not the opposite of life, but a part of it. ― Blind Willow, Sleeping Woman: 24 Stories`,
    `I can bear any pain as long as it has meaning. ― 1Q84`,
    `The most important thing we learn at school is the fact that the most important things can't be learned at school. ― What I Talk About When I Talk About Running`,
    `Two people can sleep in the same bed and still be alone when they close their eyes. ― Hard-Boiled Wonderland and the End of the World`,
    `Spend your money on the things money can buy. Spend your time on the things money can’t buy. ― The Wind-Up Bird Chronicle`,
    `It's hard to tell the difference between sea and sky, between voyager and sea. Between reality and the workings of the heart. ― Kafka on the Shore`,
    `If you think God’s there, He is. If you don’t, He isn’t. And if that’s what God’s like, I wouldn’t worry about it. ― Kafka on the Shore`,
    `Dreams come from the past, not from the future. Dreams shouldn't control you, you should control them. ― Blind Willow, Sleeping Woman: 24 Stories`,
    `It is not that the meaning cannot be explained. But there are certain meanings that are lost forever the moment they are explained in words. ― 1Q84`,
    `I was always hungry for love. Just once, I wanted to know what it was like to get my fill of it - to be fed so much love I couldn't take any more. Just once. ― Norwegian Wood`,
    `People fall in love without reason, without even wanting to. You can't predict it. That's love. ― Dance Dance Dance`,
    `People whose freedom is taken away always end up hating somebody. ― Colorless Tsukuru Tazaki and His Years of Pilgrimage`,
]

// function
function forQuotes(){
let randomNumber = Math.floor(Math.random() * (quotes.length)); // for generate random number
console.log(Math.random);
document.getElementById(`displayQuote`).innerHTML = quotes[randomNumber];
}