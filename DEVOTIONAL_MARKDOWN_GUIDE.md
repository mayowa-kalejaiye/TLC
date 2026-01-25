# Devotional Markdown Manual

This guide shows exactly how to compose devotionals with the built-in editor so every post renders cleanly on the site. Share it with anyone who helps prepare content.

## 1. Before You Write

- Work inside the admin tool at `/admin/devotionals` after signing in. The left panel is for writing; the Preview toggle shows live formatting.
- Provide a **cover image** (Upload cover button) and a **title** before publishing.
- Set the **Schedule Publication (UTC)** field to control when the devotional becomes visible. Leave it blank to publish immediately.

## 2. Recommended Structure

1. **Title** (handled by the title input, not Markdown).
2. **Opening scripture** (use a heading or bold, plus a reference line).
3. **Reflection body** (3-7 short paragraphs).
4. **Call to action or prayer** (can be italicized or a blockquote).
5. **Closing note** such as "Amen" or "Reflection Question" list.

Keep paragraphs short (3-5 sentences) for mobile readability.

## 3. Markdown Essentials

| Format | Write This | You See |
| --- | --- | --- |
| Heading level 2 | `## Faith That Moves Mountains` | Faith That Moves Mountains (section heading) |
| Bold | `**Bold statement**` | Bold statement |
| Italic | `*Gentle emphasis*` | Gentle emphasis |
| Bold + italic | `***Key phrase***` | Key phrase |
| Scripture reference | `**John 3:16**` | John 3:16 |
| Ordered list | `1. First point` | Numbered list |
| Bullet list | `- Reflect on...` | Bulleted list |
| Quote / prayer | `> Lord, help me...` | Indented quote |
| Horizontal rule | `---` on its own line | Divider line |
| Line break | End a line with two spaces or leave a blank line | New paragraph |

### Links
- The editor auto-detects URLs. You can also use `[display text](https://example.com)`.

### Em Dash & Typographic Quotes
- Standard hyphen `-` works, but `markdown-it` replaces `--` with an en dash and `---` with an em dash automatically.
- Straight quotes become curly quotes in the rendered page.

## 4. Pro Tips for Devotionals

- **Key verse callout:**
  
  ```
  > **Key Verse**  
  > "The Lord is my shepherd; I shall not want."  
  > *Psalm 23:1*
  ```

- **Reflection questions:**
  
  ```
  ### Reflection Questions
  1. Where do I need to trust God today?
  2. How can I encourage someone else with this passage?
  ```

- **Prayer section:**
  
  ```
  ### Prayer
  *Jesus, calm my anxious heart and guide my steps today. Amen.*
  ```

- **Scripture references:** Bold the reference, italicize the translation if needed, e.g., `**Romans 12:2 (NIV)**`.

- **Keep emojis out** to avoid inconsistent typography.

## 5. Using Images Inside the Content

Inline images are optional because the cover image already displays above the devotional.
- To add an inline image, upload it elsewhere (Cloudinary URL, etc.) and insert:
  
  ```
  ![Alt text for accessibility](https://example.com/path/to/image.jpg)
  ```
- Keep inline images rare and a maximum width of 800-900px so mobile users do not need to scroll sideways.

## 6. Tables & Callouts

Tables are supported but should stay simple:

```
| Day | Reading |
| --- | --- |
| Monday | Psalm 23 |
| Tuesday | John 15 |
```

For attention-grabbing callouts, use blockquotes:

```
> **Remember:** God's provision meets every need.
```

## 7. Embedding Media

HTML is allowed but sanitized for safety.
- **YouTube:** use the share "Embed" snippet and paste it directly. The sanitizer keeps `iframe` embeds from trusted sources.
- **Buttons / custom styles:** Prefer plain Markdown. Inline HTML (e.g., `<button>`) is stripped or restyled by the site.

## 8. Preview Checklist Before Publishing

- Preview mode displays the exact typography used on the live site.
- Confirm heading hierarchy (start at `##` since the title is already `h1`).
- Check scripture references and quotations for accuracy.
- Verify scheduled date/time (shown in UTC and in the confirmation dialog).
- Confirm share image and title look right in the preview card.

## 9. Troubleshooting

| Issue | Fix |
| --- | --- |
| Headings look too large | Use `###` instead of `##`, or plain bold text |
| Extra empty lines | Delete blank lines containing spaces; the renderer treats single newline as a line break |
| Link not clickable | Make sure URL starts with `https://` |
| Copy/paste from Word adds strange characters | Paste into a plain-text editor first, then into the devotional editor |
| Schedule saved to the wrong day | Double-check the UTC value in the confirmation dialog before publishing |

## 10. Sample Devotional Template

```
## Draw Near in Confidence

**Hebrews 4:16 (ESV)**

Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.

Our access to God is not based on our perfection, but on Christ's finished work. Today, release any shame and step toward Him with boldness. Remember that God's heart is open, inviting, and full of compassion.

### Reflection Questions
1. What keeps me from approaching God confidently?
2. How does grace change my response to failure?

### Prayer
*Lord Jesus, thank you for opening the way to the Father. Fill me with courage to come to You exactly as I am. Amen.*

---

**Share Today:** Encourage someone who needs to hear about Godds grace.
```

Distribute this manual to every contributor and store it in your shared knowledge base so new team members can onboard quickly.
