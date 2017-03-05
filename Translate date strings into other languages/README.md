# Translate a date string with Shopify Liquid 

Shopify Liquid has allows you to change the formatting of the date string but the default output is English. If you want to change the days or months to be shown in another language you'll need to translate it. Let's explore some code to do just that.

Refers to the [freakdesign blog post](http://freakdesign.com.au/blogs/news/translate-a-liquid-date-string-in-shopify) on translating date strings.

### Usage
- Create a snippet `date-translate.liquid`
- Copy and paste the code shown here
- Include snippet where needed

*Snippet usage #1:*
```
{%- include dateTranslate, dateString:article.published_at language:'French' -%}
```

*Snippet usage #2:*
```
{%- assign newDate = 'now' | date:'%A %B %d, %Y' -%}
{%- include dateTranslate, dateString:newDate language:'French' -%}
```
