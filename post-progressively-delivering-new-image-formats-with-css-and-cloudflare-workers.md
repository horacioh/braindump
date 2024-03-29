# Progressively deliver new image formats with CSS & Cloudflare Workers

- [[advent-of-writing]] [[2020-12-02]] #adventOfWriting

- [source](https://jross.me/progressively-delivering-new-image-formats-with-css-and-cloudflare-workers/)
- #article #web #workers #css #images

## Summary

## Highlights

- Images are arguably the biggest contributor to page weight today
- [The Web Almanac for 2019](https://almanac.httparchive.org/en/2019/page-weight#what-types-of-assets-does-the-http-archive-track-and-how-much-do-they-matter) reported that images comprise almost 75% of the total page weight of a page, with unoptimized images being the worst offender.
- Jake Archibald has a great article talking about all of the great benefits of AVIF that you can check out on [their blog](https://jakearchibald.com/2020/avif-has-landed/) if you'd like to read more.
- A great way to reduce page weight is to use the best image formats for your specific needs, as well as delivering newer image formats with better efficiency and/or higher compression to browsers that support them.
- use `picture` element to deliver different image formats to supported browsers

```html
<picture>
  <source type="image/avif" srcset="zebra.avif" />
  <source type="image/webp" srcset="zebra.zebra" />
  <img alt="Zebra" src="zebra.jpg" />
</picture>
```

- you can do the same in CSS with the `image-set` function, but [does not work today in any browser](https://caniuse.com/css-image-set)

```css
background-image: image-set(
  "zebra.avif" type("image/avif"),
  "zebra.webp" type("image/webp"),
  "zebra.png" type("image/png")
);
```

### CSS workarounds

- **content-negotiation**
  - server-side
  - AVIF only to supported browsers (fallback to PNG)
  - OK if you have full control of the server
- **Detect support using JS**
  - library: [imgsupport](https://github.com/leechy/imgsupport)
  - render-blocking JS in the `head` (bad)
- **Cloudflare workers (or similar)**
  - dynamically alter the returned HTML document, inferring information from the accept header, and then add the webp/avif etc. classes as appropriate

### Writing your worker

- I'd recommend checking out these [other posts](https://jross.me/tag/cloudflare/)
- Cloudflare Workers HTMLRewriter to accomplish the following:
  - Check the user's Accept header
  - Using HTMLRewriter, append a webp and/or avif class to the body element if the respective image format is accepted
- Now, your body element will have an avif and/or webp class as soon as it's delivered to the user, allowing you to target these in CSS without any delays or double-downloads that could occur with a client-side JS based solution.

### Real world results

- I deployed a similar solution to my company's site Nodecraft.com a couple of weeks ago, and we saw our average page weight decrease from around 2.6MB, to under 1MB. This is a huge improvement for an image-heavy homepage!


