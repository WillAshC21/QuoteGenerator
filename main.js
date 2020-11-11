function generateQuote() {
    var count = Math.floor((Math.random() * 10) + 0);
    document.getElementById('quote').innerHTML = color[count].quote;
    document.getElementById('author').innerHTML = "- " + color[count].person;
    document.body.style.background = color[count].display + " center fixed";
    document.body.style.backgroundSize = "cover";
}
var color = [{
	quote: "Don't cry because it's over, smile because it happened",
	person: "Dr. Seuss",
	display: "url(a.jpg)"
},
{
	quote: "Believe in something. Even if it means sacrificing everything",
	person: "Colin Kaepernick",
	display: "url(b.jpg)"
},
{
	quote: "It's very important in life to know when to shut up. You should not be afraid of silence",
	person: "Alex Trebek",
	display: "url(c.jpg)"
},
{
	quote: "Only those who dare to fail greatly can ever achieve greatly.",
	person: "Robert Kennedy",
	display: "url(d.jpg)"
},
{
	quote: "A bend in the road is not the end of the road... unless you fail to make the turn",
	person: "Helen Keller",
	display: "url(e.jpg)"
},
{
	quote: "Learn from yesterday, live for today, hope for tommorow",
	person: "Albert Einstein",
	display: "url(f.jpg)"
},
{
	quote: "How very little can be done under the spirit of fear",
	person: "Florence Nightingale",
	display: "url(g.jpg)"
},
{
	quote: "If we are true to ourselves, we cannot be false to anyone",
	person: "William Shakespeare",
	display: "url(h.jpg)"
},
{
	quote: "I am not afraid of storms, for I am learning how to sail my ship.",
	person: "Louisa May Alcott",
	display: "url(i.jpg)"
},
{
	quote: "Tell the truth, work hard, and come to dinner on time.",
	person: "Gerald R. Ford",
	display: "url(j.jpg)"
}
];

var count = Math.floor((Math.random() * 10) + 0);
document.getElementById('quote').innerHTML = color[count].quote;
document.getElementById('author').innerHTML = "- " + color[count].person;
document.body.style.background = color[count].display + " center fixed";
document.body.style.backgroundSize = "cover";

document.getElementById('generate').addEventListener("click", generateQuote);