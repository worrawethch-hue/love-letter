document.addEventListener("DOMContentLoaded", () => {
  const sliders = Array.from(document.querySelectorAll('input[type="range"]'));
  const continueButton = document.querySelector(".continue-btn");
  const valueLabels = new Map();
  const scenes = Array.from(document.querySelectorAll(".scene"));
  const pageShell = document.querySelector(".page-shell");
  const progressFill = document.querySelector(".progress-fill");
  const progressValue = document.querySelector(".progress-value");
  const analysisMessage = document.querySelector(".analysis-message");
  const progressBar = document.querySelector(".progress-shell");
  const revealScene = document.querySelector(".reveal-screen");
  const revealLines = Array.from(document.querySelectorAll(".reveal-line"));
  const envelopeScene = document.querySelector(".envelope-scene");
  const envelope = document.querySelector(".envelope");
  const letterScene = document.querySelector(".letter-scene");
  const letterContinueButton = document.querySelector(".letter-continue");
  const personalMessageScene = document.querySelector(".personal-message-scene");
  const personalContinueButton = document.querySelector(".personal-continue");
  const endingQuestionScene = document.querySelector(".ending-question-scene");
  const endingPrimaryButton = document.querySelector(".ending-primary-btn");
  const endingSecondaryButton = document.querySelector(".ending-secondary-btn");
  const resultScene = document.querySelector(".result-scene");
  const resultAnswer = document.querySelector("#result-answer");
  const resultSaveButton = document.querySelector(".result-save-btn");
  const resultCard = document.querySelector("#result-card");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  sliders.forEach((slider) => {
    const labelId = slider.id;
    const valueLabel = document.getElementById(`value-${labelId}`);

    if (valueLabel) {
      valueLabels.set(slider, valueLabel);
      valueLabel.textContent = `${slider.value}%`;
    }

    slider.style.setProperty("--value", `${slider.value}%`);
  });

  sliders.forEach((slider) => {
    slider.addEventListener("input", () => {
      const value = slider.value;
      slider.style.setProperty("--value", `${value}%`);

      const valueLabel = valueLabels.get(slider);
      if (valueLabel) {
        valueLabel.textContent = `${value}%`;
      }
    });
  });

  if (continueButton) {
    continueButton.disabled = false;
  }

  continueButton.addEventListener("click", (event) => {
    event.preventDefault();

    scenes.forEach((scene) => scene.classList.remove("is-active"));
    const analysisScene = document.querySelector(".analysis-card");
    if (analysisScene) {
      analysisScene.classList.add("is-active");
    }

    let progress = 0;
    const messages = [
      "Analyzing emotional preferences...",
      "Comparing communication patterns...",
      "Evaluating relationship priorities...",
      "Calculating compatibility profile...",
      "Generating personalized insights..."
    ];

    let messageIndex = 0;
    let progressTimer = null;
    let messageTimer = null;

    const updateProgress = () => {
      progress = Math.min(progress + 1, 100);
      if (progressFill) {
        progressFill.style.width = `${progress}%`;
      }
      if (progressValue) {
        progressValue.textContent = `${progress}%`;
      }
      if (progressBar) {
        progressBar.setAttribute("aria-valuenow", String(progress));
      }

      if (progress >= 100) {
        clearInterval(progressTimer);
        clearInterval(messageTimer);

        window.setTimeout(() => {
          if (pageShell) {
            pageShell.classList.add("is-blank");
          }
        }, 800);

        window.setTimeout(() => {
          showReveal();
        }, 1800);
      }
    };

    const rotateMessage = () => {
      messageIndex = (messageIndex + 1) % messages.length;
      if (analysisMessage) {
        analysisMessage.textContent = messages[messageIndex];
      }
    };

    const showReveal = () => {
      if (pageShell) {
        pageShell.classList.remove("is-blank");
      }

      scenes.forEach((scene) => scene.classList.remove("is-active"));
      if (revealScene) {
        revealScene.classList.add("is-active");
      }

      const sequence = [
        { type: "text", lineIndex: 0, duration: 3000 },
        { type: "blank", duration: 1000 },
        { type: "text", lineIndex: 1, duration: 5000 },
        { type: "blank", duration: 1000 },
        { type: "text", lineIndex: 2, duration: 4000 },
        { type: "blank", duration: 1000 }
      ];

      let index = 0;

      const runSequence = () => {
        const step = sequence[index];
        if (!step) {
          scenes.forEach((scene) => scene.classList.remove("is-active"));
          if (envelopeScene) {
            envelopeScene.classList.add("is-active");
          }
          if (envelope) {
            envelope.classList.add("is-visible");
          }
          window.setTimeout(() => {
            if (envelope) {
              envelope.classList.add("is-opening");
            }
          }, 1200);
          window.setTimeout(() => {
            scenes.forEach((scene) => scene.classList.remove("is-active"));
            if (letterScene) {
              letterScene.classList.add("is-active");
            }
          }, 2800);
          return;
        }

        revealLines.forEach((line) => line.classList.remove("reveal-line--active"));

        if (step.type === "text") {
          const currentLine = revealLines[step.lineIndex];
          if (currentLine) {
            currentLine.classList.add("reveal-line--active");
          }
        }

        index += 1;
        window.setTimeout(runSequence, step.duration);
      };

      runSequence();
    };

    if (prefersReducedMotion) {
      progress = 100;
      if (progressFill) {
        progressFill.style.width = "100%";
      }
      if (progressValue) {
        progressValue.textContent = "100%";
      }
      if (progressBar) {
        progressBar.setAttribute("aria-valuenow", "100");
      }
      if (analysisMessage) {
        analysisMessage.textContent = messages[messages.length - 1];
      }
      window.setTimeout(showReveal, 800);
    } else {
      progressTimer = window.setInterval(updateProgress, 45);
      messageTimer = window.setInterval(rotateMessage, 1000);
    }
  });

  if (letterContinueButton) {
    letterContinueButton.addEventListener("click", (event) => {
      event.preventDefault();
      scenes.forEach((scene) => scene.classList.remove("is-active"));
      if (personalMessageScene) {
        personalMessageScene.classList.add("is-active");
      }
    });
  }

  if (personalContinueButton) {
    personalContinueButton.addEventListener("click", (event) => {
      event.preventDefault();
      scenes.forEach((scene) => scene.classList.remove("is-active"));
      if (endingQuestionScene) {
        endingQuestionScene.classList.add("is-active");
      }
    });
  }

  const showResultScene = (answer) => {
    if (resultAnswer) {
      resultAnswer.textContent = answer === "YES" ? "YES ❤️" : "NO";
    }

    scenes.forEach((scene) => scene.classList.remove("is-active"));
    if (resultScene) {
      resultScene.classList.add("is-active");
    }

    window.setTimeout(() => {
      if (window.html2canvas && resultCard) {
        resultSaveButton.disabled = true;
        resultSaveButton.textContent = "Saving...";

        window.html2canvas(resultCard, {
          backgroundColor: "#fffdf9",
          scale: 2,
          useCORS: true
        })
          .then((canvas) => {
            const link = document.createElement("a");
            link.download = "love-language-result.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
          })
          .finally(() => {
            if (resultSaveButton) {
              resultSaveButton.disabled = false;
              resultSaveButton.textContent = "Save Image";
            }
          });
      }
    }, 250);
  };

  if (endingPrimaryButton) {
    endingPrimaryButton.addEventListener("click", (event) => {
      event.preventDefault();
      showResultScene(endingPrimaryButton.dataset.answer || "YES");
    });
  }

  if (endingSecondaryButton) {
    endingSecondaryButton.addEventListener("click", (event) => {
      event.preventDefault();
      showResultScene(endingSecondaryButton.dataset.answer || "NO");
    });
  }

  if (resultSaveButton) {
    resultSaveButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (window.html2canvas && resultCard) {
        resultSaveButton.disabled = true;
        resultSaveButton.textContent = "Saving...";

        window.html2canvas(resultCard, {
          backgroundColor: "#fffdf9",
          scale: 2,
          useCORS: true
        })
          .then((canvas) => {
            const link = document.createElement("a");
            link.download = "love-language-result.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
          })
          .finally(() => {
            resultSaveButton.disabled = false;
            resultSaveButton.textContent = "Save Image";
          });
      }
    });
  }
});
