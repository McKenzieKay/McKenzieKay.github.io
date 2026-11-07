/*
  About feed posts
  ----------------
  To add a post:
    1. Put the photo(s) in images/posts/ (a .jpg around 1200px tall is plenty).
       Remove location data first: phone photos can include GPS coordinates.
    2. Copy one of the posts below, paste it at the top of the list, and fill it in:
         date:     "YYYY-MM-DD" (the feed shows newest first)
         category: "dog", "adventures" or "crafts"
         images:   one or more photos; two or more become a swipeable carousel
                   { src: "images/posts/your-photo.jpg", alt: "what the photo shows" }
                   (use images: [] for no photo yet)
         caption:  what you want to say about it
    3. Save, refresh the page to check it, then push.

  The adventures post below is a placeholder. Replace it with a real one.
*/
window.ABOUT_POSTS = [
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
    date: "2026-10-31",
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
    date: "2026-10-18",
    category: "adventures",
    images: [],
    caption: "[Placeholder: a favorite trip or outing, where you went and what made it great.]"
  }
];
