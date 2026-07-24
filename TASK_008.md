# TASK_008

## Scene 8 - Result Card

### Goal

Implement the final result page after the user answers the Final Question.

This page should feel calm, elegant, and complete.

It is the final ending of the experience.

---

## Requirements

After the user selects either answer on Scene 7:

- YES
or
- NO

Transition smoothly into Scene 8.

Do not redirect.
Do not reload the page.

---

## Layout

Centered premium card.

Maximum width around 700px.

Large generous spacing.

Same design language as previous scenes.

Warm paper colors.

Elegant serif heading.

Minimal.

---

## Content

Display:

Final Result

Then show the user's answer.

Examples:

YES ❤️

or

NO

The answer must automatically reflect the button selected on Scene 7.

Do not hardcode the value.

---

Below the answer show:

Save this result as an image.

---

Then show one button

Save Image

---

Below the button show

Please send this image
to the creator.

Centered.

Small typography.

Subtle color.

---

## Save Image

Implement image export.

The Result Card should be exported as PNG.

Use html2canvas.

Do not export the entire browser window.

Only export the result card itself.

The download should begin automatically.

Suggested filename:

love-language-result.png

---

## Animation

Fade in.

Small upward motion.

No dramatic effects.

---

## Design

Keep the same premium visual identity.

No bright colors.

No confetti.

No emojis except the selected YES ❤️ if already used.

---

## Files Allowed

index.html

style.css

script.js

You may include html2canvas if required.

---

## Do Not

Do not redesign previous scenes.

Do not modify earlier flow.

Do not change wording of previous scenes.

Do not change the user's placeholders.

---

## Definition of Done

Scene 8 appears after Scene 7.

Correct answer is displayed.

Clicking Save Image downloads a PNG of the result card only.

The final instruction

"Please send this image to the creator."

is visible beneath the button.

The experience ends here.