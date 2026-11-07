/*
  About feed posts
  ----------------
  To add a post:
    1. Put the photo(s) in images/posts/ (a .jpg around 1200px tall is plenty).
       Remove location data first: phone photos can include GPS coordinates.
    2. Copy one of the posts below, paste it at the top of the list, and fill it in:
         date:     "YYYY-MM-DD" (the feed shows newest first)
         category: "dog", "adventures", "crafts" or "treats" (Sweet Treats)
         images:   one or more photos; two or more become a swipeable carousel
                   { src: "images/posts/your-photo.jpg", alt: "what the photo shows" }
                   (use images: [] for no photo yet)
         caption:  what you want to say about it
    3. Save, refresh the page to check it, then push.
*/
window.ABOUT_POSTS = [
  {
    date: "2026-10-31",
    category: "treats",
    images: [
      { src: "images/posts/juniper-smash-cake.jpg",
        alt: "A small layered smash cake with white frosting, ringed with blueberries and orange sprinkles, on a lace doily under a glass cake dome" }
    ],
    caption: "Juniper's First Birthday SMASH cake!"
  },
  {
    date: "2026-10-14",
    category: "crafts",
    images: [
      { src: "images/posts/crochet-01.jpg", alt: "The full set of crocheted foods from The Very Hungry Caterpillar laid out on a counter, with the striped red and green caterpillar behind them" },
      { src: "images/posts/crochet-02.jpg", alt: "Crocheted red apple with a brown stem and green leaf" },
      { src: "images/posts/crochet-03.jpg", alt: "Crocheted green pear with a brown stem" },
      { src: "images/posts/crochet-04.jpg", alt: "Crocheted purple plum with a brown stem" },
      { src: "images/posts/crochet-05.jpg", alt: "Crocheted red strawberry with green leaves" },
      { src: "images/posts/crochet-06.jpg", alt: "Crocheted slice of chocolate layer cake with a cherry on top" },
      { src: "images/posts/crochet-07.jpg", alt: "Crocheted green pickle" },
      { src: "images/posts/crochet-08.jpg", alt: "Crocheted yellow slice of Swiss cheese with holes" },
      { src: "images/posts/crochet-09.jpg", alt: "Crocheted watermelon slice with pink flesh, black seeds and a green rind" },
      { src: "images/posts/crochet-10.jpg", alt: "Crocheted orange with green leaves" },
      { src: "images/posts/crochet-11.jpg", alt: "Crocheted ice cream cone with a pink scoop" },
      { src: "images/posts/crochet-12.jpg", alt: "Crocheted salami with two round slices cut off" },
      { src: "images/posts/crochet-13.jpg", alt: "Crocheted blue and yellow swirl lollipop on a brown stick" },
      { src: "images/posts/crochet-14.jpg", alt: "Crocheted slice of cherry pie with a golden crust" },
      { src: "images/posts/crochet-15.jpg", alt: "Crocheted brown sausage" },
      { src: "images/posts/crochet-16.jpg", alt: "Crocheted cupcake with white frosting and a blue wrapper" },
      { src: "images/posts/crochet-17.jpg", alt: "Crocheted green leaf with a stem" }
    ],
    caption: "I crocheted everything The Very Hungry Caterpillar ate, plus the caterpillar himself! Baby shower gift for sweet baby Rainy!"
  },
  {
    date: "2026-10-13",
    category: "dog",
    images: [
      { src: "images/posts/bishop-6th-birthday.jpg",
        alt: "Bishop, a red and white basset hound, lying on a round fleece dog bed in front of a small evergreen tree and a stone fireplace" }
    ],
    caption: "Today is Bishop's 6th birthday! I'm getting a lot of enjoyment out of telling him he's a \"Sixy Boy\" in an Australian accent."
  },
  {
    date: "2026-10-30",
    category: "crafts",
    images: [
      { src: "images/posts/halloween-onesies-1.jpg",
        alt: "McKenzie dressed as Waluigi in a purple cap, purple top and dark overalls with yellow buttons, next to someone in a black Ninji onesie with a white face panel and red buttons" },
      { src: "images/posts/halloween-onesies-ref-waluigi.jpg",
        alt: "Official Nintendo artwork of Waluigi, for comparison: purple cap, purple shirt, dark overalls with yellow buttons" },
      { src: "images/posts/halloween-onesies-ref-ninji.jpg",
        alt: "Official Nintendo artwork of Ninji, for comparison: a round black character with pointed ears, a white face band and two red buttons" },
      { src: "images/posts/halloween-onesies-2.jpg",
        alt: "The full Ninji onesie: black fleece with pointed ears on the hood and a white face panel with two oval eyes" },
      { src: "images/posts/halloween-onesies-3.jpg",
        alt: "Two handmade, unpainted white clay buttons with two holes each, resting on a tile counter" }
    ],
    caption: "It's a Mario Party this Halloween!! I handmade both onesies, Waluigi and Ninji! Keeping it comfy this year! (Character art © Nintendo.)"
  },
  {
    date: "2026-09-23",
    category: "adventures",
    images: [
      { src: "images/posts/blue-basin-1.jpg",
        alt: "Blue Basin's blue-green badlands under a blue sky, with juniper trees and dry grass in the foreground and layered hills behind" },
      { src: "images/posts/blue-basin-2.jpg",
        alt: "Sunset over a wide valley and distant hills, seen from a grassy ridge under dramatic clouds" },
      { src: "images/posts/blue-basin-3.jpg",
        alt: "A tall metal fire lookout tower on a gravel clearing surrounded by pine trees" }
    ],
    caption: "Exploring the Blue Basin and camping out by the fire tower! Mother Nature flexing on us all!"
  }
];
