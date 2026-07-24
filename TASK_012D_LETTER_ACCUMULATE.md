# TASK_012D_LETTER_ACCUMULATE

## Objective

Improve the Letter Scene animation.

The current implementation replaces each message with the next one.

Instead, messages should accumulate from top to bottom, creating the feeling that the letter is gradually being written.

Do NOT modify any other scene.

---

## Current Behavior

Phase 1

↓

Phase 2

↓

Phase 3

↓

Continue button

---

## Required Behavior

When entering the Letter Scene

Immediately show Phase 1.

After about 2 seconds

Show Phase 2 below Phase 1.

After another 2 seconds

Show Phase 3 below Phase 2.

After another 2 seconds

Show the Continue button.

At no point should previously displayed phases disappear.

The final result should be:

ตอนเจอเธอช่วงแรก ดูเป็นคนเงียบๆ เลยไม่ค่อยกล้าคุยด้วย แต่ว่าก็อยากทำความรู้จัก

ที่เราทักไปคุยด้วยทุกวันเธอน่าจะพอรู้เหตุผลอยู่แล้ว มันก็ผ่านมาประมาณหนึ่งเดือนกว่าแล้วมั้ยนะตั้งแต่เริ่มคุยกัน คุยกับเธอแล้วรู้สึกสบายใจ ค้นพบว่าจริงๆแล้วเธอก็เป็นคนเฮฮาเหมือนกันนะเนี่ยย

ก็เลยอยากบอกเธอว่า...

[Continue]

---

## Constraints

Do NOT modify:

- index.html
- Scene order
- Navigation
- Timing
- Reveal Scene
- Envelope Scene
- Personal Message Scene
- Ending Question
- Result Scene

Only update the Letter Scene animation logic.

---

## Technical Notes

Keep using the existing `.is-visible` class.

Do NOT remove previously visible phases.

Each phase should simply gain `.is-visible` at the scheduled time.

The Continue button should appear only after the third phase has been visible for about 2 seconds.

---

## Definition of Done

Animation sequence:

0 sec

Phase 1

↓

2 sec

Phase 1
Phase 2

↓

4 sec

Phase 1
Phase 2
Phase 3

↓

6 sec

Continue button appears

No previously displayed text disappears.