# TASK_009A

## Fix Save Image Behavior

The result page currently downloads the image automatically.

This is not the intended behavior.

---

## Requirements

Do NOT automatically download the image.

When Scene 8 appears:

- Display the Result Card.
- Display the Save Image button.
- Do nothing else.

The image should ONLY be generated and downloaded after the user clicks:

Save Image

---

## Keep

Keep the existing Save Image implementation.

Keep html2canvas.

Keep the PNG filename.

Keep the Result Card unchanged.

Keep every other scene unchanged.

---

## Files Allowed

script.js

Only modify the logic responsible for automatic downloading.

---

## Definition of Done

- Scene 8 opens normally.
- No automatic download occurs.
- Clicking Save Image downloads the PNG exactly once.