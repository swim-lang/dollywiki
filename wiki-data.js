(function (root, factory) {
  const value = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = value;
  }
  root.DOLLY_WIKI = value;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const quickFacts = {
    recipientName: "Gary",
    dollyContactName: "Jake",
    entry: "Use the back door key. Give the back gate one quick check when you head out.",
    tripDates: "Sean is away June 14-24, 2026.",
    plantReminder: "Indoor plants next Sunday, June 21. Outdoor plants in the morning.",
  };

  const articles = [
    {
      id: "dolly",
      title: "Dolly",
      kicker: "Main dog notes",
      tags: ["meds", "trazodone", "pill", "hot dog", "food", "calm", "alone"],
      summary: "Gary, thank you again. Dolly mostly needs a calm presence, access to the yard while you are there, and a little help settling down only if she seems worked up.",
      facts: [
        "Dolly's meds are near the coffee maker.",
        "One trazodone pill can be given any time you think she needs help calming down.",
        "You may not need to give her any trazodone at all.",
        "If you do give it, it can be taken with a little food if you can sneak it in, like a piece of hot dog or something similar.",
        "Hot dogs are in the fridge.",
        "Dolly's food is in the fridge too.",
        "Feed her as much and as often as you like. She will be all right. If she is 100 pounds when Sean gets back, so be it.",
        "She can be left for around 6-7 hours if needed.",
        "Mostly, just keep things calm and give her space if she seems worked up.",
        "She may jump up a little when she is excited. If you are wearing shorts, just watch your legs; she is not trying to be rude, she is simply Dolly.",
        "She is very curious and will want to inspect what you are doing. That is normal Dolly research behavior.",
        "\"No\" is a good word with her. She knows it pretty well, and it usually works better than giving her a whole TED Talk.",
        "She may want to be on your lap and move around a lot. Feel free to redirect her if she tries to crawl all over you; she is lovely, but she is not exactly a weighted blanket.",
        "She knows the word \"toy\" if you want to play with her.",
        "Fair warning: Dolly can play forever, or at least long enough to make forever seem possible.",
      ],
      callout: "If she seems overwhelmed, quiet and boring is perfect.",
    },
    {
      id: "feeding",
      title: "Food and Feeding",
      kicker: "Snacks, dinner, and floor cuisine",
      tags: ["food", "feeding", "fridge", "hot dogs", "red ball", "blue ball", "poop bags", "treat", "hungry"],
      summary: "Dolly's food is in the fridge, and feeding can be easy and loose.",
      facts: [
        "Dolly's food is in the fridge.",
        "Hot dogs are in the fridge too, if you want to use little pieces for meds or treats.",
        "She has a little red and blue ball you can fill with food. Set it down and she will do her thing.",
        "You can also just toss some food on the floor for her. It sounds silly, but it works.",
        "Before feeding her, you can say \"treat\" or \"are you hungry?\" so she knows what is happening.",
        "Poop bags are near the coffee bag by the coffee maker.",
      ],
      callout: "No need to make dinner fancy. Dolly is very open-minded about presentation.",
    },
    {
      id: "outside",
      title: "Dolly Outside Time",
      kicker: "Backyard rhythm",
      tags: ["outside", "backyard", "gate", "weather", "barking", "door"],
      summary: "While you are there, it is fine to leave the back door open so Dolly can come in and out of the house.",
      facts: [
        "No guilt about letting her hang outside for a bit. She likes having a little yard time.",
        "When you are there, you can leave the back door open so she can come in and out of the house.",
        "Use your best judgment with weather, barking, or if she seems uncomfortable.",
        "The gate is good; just give the back gate one quick check when you leave.",
        "There is also a side gate with a little hook latch. Worth one quick glance on the way out.",
      ],
      callout: "Back door open while you are there; quick gate check when you leave. Dolly does not need an unscheduled neighborhood tour.",
    },
    {
      id: "contacts",
      title: "Contact",
      kicker: "If Dolly needs someone",
      tags: ["jake", "contact", "dolly", "help"],
      summary: "If Dolly needs someone and Sean is hard to reach, Jake is the contact.",
      facts: [
        "Dolly contact: Jake.",
        "If you need anything Dolly-specific and cannot reach Sean, Jake is the person to check with.",
      ],
      callout: "Main thing: Jake is the Dolly contact.",
    },
    {
      id: "commands",
      title: "Dolly Commands",
      kicker: "A few useful words",
      tags: ["commands", "no", "spin", "bed", "stay", "wait", "come", "walks", "leashes", "red leash"],
      summary: "Dolly knows a handful of commands. A couple rounds can help get some energy out without doing too much physically.",
      facts: [
        "No: she knows \"no\" very well. This usually works better than over-explaining.",
        "Spin: she knows spin and will usually do it for a treat.",
        "Bed: this means go to her bed. She can stay there for a surprisingly long time.",
        "Stay: she knows stay and can hold it well, especially when she is on her bed.",
        "Wait: this is different from stay. It usually just slows her down or backs her up a little, especially on a walk or when she is getting excited.",
        "Release command: say \"You're free!\" enthusiastically and give her a treat.",
        "Come: if you need her to come to you, say \"Come, Dolly.\"",
        "Her red leash is in the coat closet.",
        "Dolly can be iffy with other dogs, so give other dogs a wide berth. Some are fine, some are a full plot twist.",
        "If her leg looks okay and she seems comfortable, a walk or nearby park visit is fine. Keep it easy and don't push her too hard.",
      ],
      callout: "Best simple set: no, bed, stay, wait, \"You're free!\", and \"Come, Dolly.\"",
    },
    {
      id: "ecollar",
      title: "E-Collar Videos",
      kicker: "Optional gadget corner",
      tags: ["e-collar", "ecollar", "collar", "charging", "syncing", "video", "training"],
      summary: "Totally optional, but if you feel like using the e-collar, these short videos are here.",
      facts: [
        "No pressure to use the e-collar. This is only here if it feels useful.",
        "The videos cover charging and syncing, putting the collar on, and the basics of using it.",
        "If it starts feeling like too much, skip it and keep life simple.",
      ],
      videos: [
        {
          title: "Charging and syncing",
          src: "assets/videos/e-collar-charging-syncing.mp4",
        },
        {
          title: "Putting the collar on",
          src: "assets/videos/e-collar-putting-it-on.mp4",
        },
        {
          title: "How to use it",
          src: "assets/videos/e-collar-using-it.mp4",
        },
      ],
      callout: "Optional means optional. Dolly will not be filing a technology compliance report.",
    },
    {
      id: "entry",
      title: "Entry and Gates",
      kicker: "Getting in and out",
      tags: ["key", "back door", "front lock", "gate", "entry"],
      summary: "Use the back door. The front lock has been acting weird, so the back door is simplest.",
      facts: [
        "The key is for the back door.",
        "The motorized front lock is acting weird, and there are two different locks up front.",
        "It is easiest to go in and out through the back door.",
        "Give the back gate one quick check when you leave.",
      ],
      callout: "Back door in, back door out, quick gate check. Very glamorous stuff.",
    },
    {
      id: "plants",
      title: "Plants",
      kicker: "Minimal is good",
      tags: ["plants", "water", "indoor", "outdoor", "sunday", "morning"],
      summary: "Indoor plants only need water next Sunday, June 21, 2026. Outdoor plants in the front and back are best watered in the morning.",
      facts: [
        "Indoor plants: next Sunday, June 21, 2026 is plenty.",
        "Outdoor plants: the front and back can be watered in the morning.",
        "Minimal is good. They don't need anything intense.",
        "If the soil still feels damp, it is fine to go light.",
      ],
      callout: "A little water is great. Overachieving is not required.",
    },
    {
      id: "tv",
      title: "TV and Streaming",
      kicker: "Living room remote",
      tags: ["tv", "apple tv", "remote", "hbo", "prime", "peacock"],
      summary: "If you want to put something on while you are there, the living room TV uses Apple TV.",
      facts: [
        "The Apple TV remote is on the coffee table.",
        "Streaming options available: HBO, Prime, Peacock, and Apple TV.",
        "If you cannot get into something, just text me.",
      ],
      callout: "Remote on coffee table. Apple TV in the living room. Easy enough.",
    },
    {
      id: "kitchen",
      title: "Kitchen",
      kicker: "Please make yourself comfortable",
      tags: ["kitchen", "dishes", "pots", "pans", "dinner", "coffee maker"],
      summary: "Feel free to use the kitchen while you are here.",
      facts: [
        "Use any dishes, pots, pans, or anything else you need.",
        "You can bring food over and cook dinner one night if you want.",
        "There is a little bit of a joint over by the coffee maker. You can have that.",
        "Enjoy yourself and make yourself comfortable.",
      ],
      callout: "Use what you need. Cook dinner if you want. Truly, make yourself at home.",
    },
    {
      id: "enjoy",
      title: "Enjoy Yourself",
      kicker: "House permission slip",
      tags: ["records", "music", "relax", "enjoy"],
      summary: "This does not need to feel formal. Hang with Dolly, use the space, and be comfortable.",
      facts: [
        "There is a record player in the living room.",
        "There are records in the basement if you feel like listening to something.",
        "No need to treat the house like a museum.",
      ],
      callout: "The house is yours to be comfortable in while you are there.",
    },
    {
      id: "itinerary",
      title: "Calendar and Itinerary",
      kicker: "Cruise week",
      tags: ["calendar", "itinerary", "service", "travel", "contact", "cruise", "vancouver", "whittier", "alaska", "flight", "united"],
      summary: "Sean is away from June 14 through June 24, 2026, with some cruise stretches where he may be hard to reach.",
      facts: [
        "Ship: Holland America Nieuw Amsterdam.",
        "Sunday, June 14: sail from Vancouver, B.C., Canada at 4:00 PM.",
        "Monday, June 15: scenic cruising through the Inside Passage.",
        "Tuesday, June 16: Ketchikan, Alaska, 6:30 AM to 3:00 PM.",
        "Wednesday, June 17: Juneau, Alaska, 10:00 AM to 9:00 PM.",
        "Thursday, June 18: Skagway, Alaska, 5:30 AM to 9:00 PM.",
        "Friday, June 19: Glacier Bay cruising, 6:00 AM to 3:00 PM, route/time subject to weather and ice.",
        "Saturday, June 20: College Fjord cruising, 5:00 PM to 8:00 PM.",
        "Sunday, June 21: debark ship in Whittier, Alaska; scheduled arrival is 1:00 AM.",
        "Wednesday, June 24: United UA1153 home from Anchorage (ANC) to Denver (DEN), 12:12 PM to 7:29 PM.",
        "If you reach out and cannot get ahold of Sean right away, the ship may be cruising or out of service.",
      ],
      callout: "No instant reply may just mean no service, not disaster.",
    },
  ];

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function articleHaystack(article) {
    return normalize([
      article.title,
      article.kicker,
      article.summary,
      article.callout,
      article.tags.join(" "),
      article.facts.join(" "),
      (article.videos || []).map((video) => [video.title, video.src].join(" ")).join(" "),
    ].join(" "));
  }

  function filterArticles(query) {
    const needle = normalize(query);
    if (!needle) return articles.slice();

    return articles.filter((article) => articleHaystack(article).includes(needle));
  }

  return {
    quickFacts,
    articles,
    filterArticles,
  };
});
