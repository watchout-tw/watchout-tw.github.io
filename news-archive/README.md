# How to make a newsletter

## Tools

- Use [Premailer by dialect.ca](http://premailer.dialect.ca/) to convert webpage to newsletter
 - Push web page to GitHub
 - Go to website with browser & make sure the page is updated to the newest version (e.g. `https://watchout.tw/news/2`);
 - Paste page URL into Premailer
 - Check `Remove classes`, `Remove unused IDs`, `Remove comments`, `Try the alternative Nokogiri HTML parser`
 - Convert!
- Make `inline.html` in folder (e.g. `news/2`)
- Remove empty lines in `inline.html`
- `<style>...</style>` in `inline.html` is malformed. Replace with with code in `news/styles.html`
- Preview `inline.html` in browser (with `localhost`) to make sure everything is OK
- Paste code in `inline.html` into newsletter editor (using Source Code Mode)

## Tips

- Use `div.spacer` instead of margins
