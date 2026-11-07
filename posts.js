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
                   add natural: true to show a photo at its own shape instead of
                   the 4:5 frame (good for a single wide shot)
         fit:      optional; "whole" shows every photo in the post uncropped inside
                   the 4:5 frame (good for a mix of wide and tall photos)
         caption:  what you want to say about it
    3. Save, refresh the page to check it, then push.
*/
window.ABOUT_POSTS = [
  {
    date: "2026-11-06",
    category: "adventures",
    images: [
      { src: "images/posts/lake-shastina-2.jpg",
        alt: "Snow-capped Mount Shasta reflected in the still water of Lake Shastina under a clear blue sky, with a rocky shore in front" },
      { src: "images/posts/lake-shastina-1.jpg",
        alt: "A red caboose numbered 21 with glowing windows at dusk, among pine-covered hills with a rocky peak behind" },
      { src: "images/posts/lake-shastina-3.jpg",
        alt: "A man in a green sweatshirt standing on the wooden porch of a converted Southern Pacific railcar among tall pines" }
    ],
    caption: "Weekend getaway at Lake Shastina!"
  },
  {
    date: "2026-02-28",
    category: "adventures",
    images: [
      { src: "images/posts/ski-day-1.jpg",
        alt: "View from a snowy ski run over dark evergreen forest to a snow-covered volcanic peak under gray clouds" },
      { src: "images/posts/ski-day-2.jpg",
        alt: "Ski tips and a pole in the foreground on a chairlift, looking up the lift line through snowy pine trees toward a white mountain peak" }
    ],
    caption: "Snow was a little rough, but the views are unmatched!"
  },
  {
    date: "2026-02-22",
    category: "treats",
    images: [
      { src: "images/posts/tea-party-1.jpg",
        alt: "A hand holding a pink-bordered tea party menu listing savory bites and sweets, over a table of treats on a pink polka-dot tablecloth" },
      { src: "images/posts/tea-party-2.jpg",
        alt: "Overhead view of the tea party table: heart- and flower-shaped tea sandwiches, chocolate cake pops, caprese skewers, scones, shortbread and teacups on a pink tablecloth" }
    ],
    caption: "Spill the Tea Party! I'll bring the treats, you bring the fun stories!"
  },
  {
    date: "2026-04-24",
    category: "dog",
    images: [
      { src: "images/posts/bishop-pep.jpg",
        alt: "Bishop the basset hound standing on a gray deck, while a fluffy black dog named Pep holds the end of a long rope leash that loops back to Bishop" }
    ],
    caption: "Bishop's not listening, but no worries, Pep is on the case and going to drag him over! Everyone needs a friend that is looking out."
  },
  {
    date: "2026-05-05",
    category: "treats",
    images: [
      { src: "images/posts/lemon-cake-1.jpg",
        alt: "A sliced three-layer lemon cake on a wooden cake stand at a sunlit birthday table, with a slice on a plate that says Happy Birthday, candles and vintage floral plates" },
      { src: "images/posts/lemon-cake-2.jpg",
        alt: "Close-up of the lemon cake's top: yellow piped birthday writing surrounded by little orange and white meringue mushrooms and green moss-like dots" }
    ],
    caption: "Lemon cake for Claire's birthday, complete with little meringue mushrooms on top!"
  },
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
  },
  {
    date: "2026-03-28",
    category: "adventures",
    images: [
      { src: "images/posts/painted-hills-1.jpg",
        alt: "A new tan two-room tent at a gravel campsite at dusk, with a camp chair, fire pit, folding table and picnic table, under streaky clouds and bare trees" },
      { src: "images/posts/painted-hills-2.jpg",
        alt: "The Painted Hills under a bright blue sky with puffy clouds, red and tan banded hills beyond a creek, fence posts and a gravel road" }
    ],
    caption: "New tent, who dis? Camping out at the Painted Hills!"
  },
  {
    date: "2026-05-26",
    category: "crafts",
    images: [
      { src: "images/posts/flower-blanket.jpg",
        alt: "A large crocheted granny-square blanket laid out on a wood floor, each square a bright flower in a different color combination, with a skein of white yarn beside it" }
    ],
    caption: "Mariah and Eric said \"I do,\" so I said \"I'll crochet!\" A flower blanket for the newlyweds. Congrats!"
  },
  {
    date: "2025-12-25",
    category: "crafts",
    images: [
      { src: "images/posts/pink-christmas-1.jpg", natural: true,
        alt: "A pink Christmas mantel: pink paper mountains and bottle-brush trees, a striped fringe garland, a felt string-light garland and three patchwork stockings over a pink-tiled fireplace" },
      { src: "images/posts/pink-christmas-2.jpg", natural: true,
        alt: "Close-up of three handmade quilted patchwork stockings in pink floral fabrics hanging under a felt light-bulb garland" },
      { src: "images/posts/pink-christmas-3.jpg", natural: true,
        alt: "Two handmade fabric reindeer, one with floral antlers and one in pink and white stripes, among pink bottle-brush trees" }
    ],
    caption: "Santa's got a new favorite color! I sewed the stockings, the reindeer and the garland."
  },
  {
    date: "2025-10-10",
    category: "adventures",
    fit: "whole",
    images: [
      { src: "images/posts/ireland-05.jpg", alt: "Wedding guests walking from a ruined castle tower across a green field under a blue sky" },
      { src: "images/posts/ireland-04.jpg", alt: "Wedding guests gathered on the grass beside a ruined stone tower, the bride in a long white gown in sunlight" },
      { src: "images/posts/ireland-03.jpg", alt: "An ivy-covered stone castle with battlements and a wooden arched door, with black iron garden chairs on the lawn" },
      { src: "images/posts/ireland-02.jpg", alt: "McKenzie in a red sheep sweater walking a muddy clifftop path beside dark layered sea cliffs and gray water" },
      { src: "images/posts/ireland-01.jpg", alt: "A tall standing stone on a grassy point by the water, with hills across the bay under a partly cloudy sky" },
      { src: "images/posts/ireland-06.jpg", alt: "McKenzie and her partner smiling beside a sign reading Tetrapod trackway with a tetrapod silhouette" },
      { src: "images/posts/ireland-10.jpg", alt: "Wide flat rock shelves along the coast where the tetrapod trackway is, with the gray Atlantic beyond" },
      { src: "images/posts/ireland-09.jpg", alt: "Information board titled The Valentia Tetrapod Trackway, explaining the 385-million-year-old footprints" }
    ],
    caption: "Went to Ireland for a wedding, stayed for the tetrapod track fossils!"
  }
];
