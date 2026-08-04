# Images for the design sketch

Drop files here and point the markup at `media/<file>`.

## Profile photos — testimonials
Replace the placeholder span with an img, in `index.html` (Testimonials section):

    <span class="avatar" aria-hidden="true"></span>
    →
    <img class="avatar" src="media/erin.jpg" alt="">

`alt=""` is correct — the name sits beside the photo, so alt text would
make screen readers announce each person twice.
Square, 200x200 or larger. It renders at 42px and is cropped to a circle.

## Prototype screenshots — testimonials
Add a `data-shot` attribute to the project pill button:

    <button ... data-project="Kanji Garden" data-by="Lara Azad">
    →
    <button ... data-project="Kanji Garden" data-by="Lara Azad"
            data-shot="media/kanji-garden.png">

Only pills that HAVE a `data-shot` are rendered as buttons. The other two
are plain `<p class="quote__project">` — no click affordance where there is
nothing to open. When you add a screenshot, convert that `<p>` back to the
`<button>` form (copy the Kanji Garden one) and add `data-shot`.

### Ideal screenshot size
The dialog renders the image up to **1040 CSS px** wide, which is 2080
device px on a 2x display.

- **Target 2000 x 1125** (16:9). That is exactly 1.5x the current Kanji
  Garden file and will be pixel-sharp on retina.
- **Any aspect ratio works** — the image keeps its own proportions and is
  never cropped. Keep height under ~1300px or it hits the 72vh cap and
  letterboxes.
- **PNG** for UI screenshots (crisp text). **JPEG** for photo-like or
  illustrated posters — much smaller for the same quality.
- Aim under ~400KB.

## Demo day photo
In the Demo day section:

    <div class="demo__ph">[photo — demo day at Google Kitchener]</div>
    →
    <img class="demo__photo" src="media/demo-day.jpg" alt="Students presenting their project at demo day">

Currently 4:3. Change `.demo__photo,.demo__ph { aspect-ratio }` in the CSS
if your shot is wider. This one needs real alt text — it carries meaning.

## Hero video poster
Currently YouTube's own thumbnail. To use a custom frame, save it here and
change the `src` on `.slide__poster`.
