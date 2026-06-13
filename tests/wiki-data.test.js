const test = require("node:test");
const assert = require("node:assert/strict");

const { articles, quickFacts, filterArticles } = require("../wiki-data.js");

test("wiki includes the core sitter facts", () => {
  assert.ok(articles.length >= 7);
  assert.equal(quickFacts.recipientName, "Gary");
  assert.equal(quickFacts.dollyContactName, "Jake");
  assert.match(quickFacts.entry, /back door/i);
});

test("empty search returns every article", () => {
  assert.equal(filterArticles("   ").length, articles.length);
});

test("search matches titles, tags, and article body text", () => {
  assert.equal(filterArticles("trazodone")[0].id, "dolly");
  assert.ok(filterArticles("Jake").some((article) => article.id === "contacts"));
  assert.equal(filterArticles("Whittier")[0].id, "itinerary");
});

test("Gary-facing version removes unnecessary house-sitter sections", () => {
  const ids = articles.map((article) => article.id);
  const allText = articles.map((article) => [article.title, article.summary, article.callout, ...article.facts].join(" ")).join(" ");

  assert.ok(!ids.includes("wifi"));
  assert.ok(!ids.includes("coffee"));
  assert.ok(!ids.includes("trash"));
  assert.ok(!ids.includes("house"));
  assert.ok(!ids.includes("bathroom"));
  assert.doesNotMatch(allText, /care mode|checking in on Dolly|not staying overnight/i);
  assert.doesNotMatch(allText, /Jake is Dolly's contact now/i);
  assert.doesNotMatch(allText, /shared chat|I can access/i);
});

test("Gary-facing copy stays friendly instead of rule-heavy", () => {
  const allText = [
    quickFacts.entry,
    quickFacts.plantReminder,
    ...articles.map((article) => [article.title, article.summary, article.callout, ...article.facts].join(" ")),
  ].join(" ");

  assert.doesNotMatch(allText, /please make sure/i);
  assert.doesNotMatch(allText, /\bdo not\b/i);
  assert.doesNotMatch(allText, /best to avoid/i);
});

test("Dolly commands from the shared chat are included", () => {
  const commands = articles.find((article) => article.id === "commands");
  const text = [commands.summary, commands.callout, ...commands.facts].join(" ");

  assert.ok(commands);
  assert.match(text, /No/i);
  assert.match(text, /Spin/i);
  assert.match(text, /Bed/i);
  assert.match(text, /Stay/i);
  assert.match(text, /You're free/i);
  assert.match(text, /Come, Dolly/i);
  assert.match(text, /leashes.*coat closet/i);
  assert.doesNotMatch(text, /run off the bed fast/i);
});

test("itinerary article reflects the cruise calendar", () => {
  const itinerary = articles.find((article) => article.id === "itinerary");

  assert.ok(itinerary);
  assert.match(itinerary.summary, /June 14.+June 24/i);
  assert.ok(itinerary.facts.some((fact) => /Nieuw Amsterdam/.test(fact)));
  assert.ok(itinerary.facts.some((fact) => /Ketchikan/.test(fact)));
  assert.ok(itinerary.facts.some((fact) => /College Fjord/.test(fact)));
  assert.ok(itinerary.facts.some((fact) => /UA1153/.test(fact)));
  assert.ok(itinerary.facts.some((fact) => /Anchorage.+Denver/.test(fact)));
});

test("Dolly medication notes match Gary drop-in instructions", () => {
  const dolly = articles.find((article) => article.id === "dolly");
  const text = [dolly.summary, dolly.callout, ...dolly.facts].join(" ");

  assert.ok(dolly);
  assert.match(text, /one trazodone pill/i);
  assert.match(text, /may not need to give/i);
  assert.match(text, /food|hot dog/i);
  assert.doesNotMatch(text, /bones|treats|couch|bed|friends/i);
});

test("Dolly notes mention jumping, shorts, curiosity, and no", () => {
  const dolly = articles.find((article) => article.id === "dolly");
  const text = [dolly.summary, dolly.callout, ...dolly.facts].join(" ");

  assert.ok(dolly);
  assert.match(text, /jump/i);
  assert.match(text, /shorts/i);
  assert.match(text, /curious/i);
  assert.match(text, /\bno\b/i);
});

test("Dolly notes mention lap energy, toy, and endless play", () => {
  const dolly = articles.find((article) => article.id === "dolly");
  const text = [dolly.summary, dolly.callout, ...dolly.facts].join(" ");

  assert.ok(dolly);
  assert.match(text, /lap/i);
  assert.match(text, /crawl all over/i);
  assert.match(text, /\btoy\b/i);
  assert.match(text, /play forever/i);
});

test("outside note allows door-open check-ins without frequent checking", () => {
  const outside = articles.find((article) => article.id === "outside");
  const text = [outside.summary, outside.callout, ...outside.facts].join(" ");

  assert.ok(outside);
  assert.match(text, /leave the.*door open/i);
  assert.match(text, /come in and out/i);
  assert.match(text, /weather|barking/i);
  assert.doesNotMatch(text, /check on her pretty often/i);
  assert.doesNotMatch(text, /hover over her|management oversight/i);
});

test("plants note reflects the current watering plan", () => {
  const plants = articles.find((article) => article.id === "plants");
  const text = [plants.summary, plants.callout, ...plants.facts].join(" ");

  assert.ok(plants);
  assert.match(text, /indoor plants.*next Sunday/i);
  assert.match(text, /June 21, 2026/i);
  assert.match(text, /outdoor.*front and back.*morning/i);
  assert.match(text, /minimal/i);
});

test("TV article gives Gary the simple Apple TV setup", () => {
  const tv = articles.find((article) => article.id === "tv");
  const text = [tv.summary, tv.callout, ...tv.facts].join(" ");

  assert.ok(tv);
  assert.match(text, /remote.*coffee table/i);
  assert.match(text, /HBO/i);
  assert.match(text, /Prime/i);
  assert.match(text, /Peacock/i);
  assert.match(text, /Apple TV/i);
  assert.doesNotMatch(text, /Netflix/i);
});

test("kitchen note invites Gary to use the kitchen comfortably", () => {
  const kitchen = articles.find((article) => article.id === "kitchen");
  const text = [kitchen.summary, kitchen.callout, ...kitchen.facts].join(" ");

  assert.ok(kitchen);
  assert.match(text, /dishes|pots|pans/i);
  assert.match(text, /cook dinner/i);
  assert.match(text, /joint.*coffee maker/i);
});

test("enjoy note stays casual without assigning Dolly a job", () => {
  const enjoy = articles.find((article) => article.id === "enjoy");
  const text = [enjoy.summary, enjoy.callout, ...enjoy.facts].join(" ");

  assert.ok(enjoy);
  assert.doesNotMatch(text, /Dolly appreciates calm company/i);
});
