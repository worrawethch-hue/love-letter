document.addEventListener("DOMContentLoaded", () => {
  const sliders = Array.from(document.querySelectorAll('input[type="range"]'));
  const continueButton = document.querySelector(".continue-btn");
  const valueLabels = new Map();

  sliders.forEach((slider) => {
    const labelId = slider.id;
    const valueLabel = document.getElementById(`value-${labelId}`);

    if (valueLabel) {
      valueLabels.set(slider, valueLabel);
      valueLabel.textContent = `${slider.value}%`;
    }

    slider.style.setProperty("--value", `${slider.value}%`);
  });

  let touchedCount = 0;

  const updateButtonState = () => {
    const enabled = touchedCount === sliders.length;
    continueButton.disabled = !enabled;
  };

  sliders.forEach((slider) => {
    slider.addEventListener("input", () => {
      const value = slider.value;
      slider.style.setProperty("--value", `${value}%`);

      const valueLabel = valueLabels.get(slider);
      if (valueLabel) {
        valueLabel.textContent = `${value}%`;
      }

      if (!slider.dataset.touched) {
        slider.dataset.touched = "true";
        touchedCount += 1;
      }

      updateButtonState();
    });
  });

  updateButtonState();

  continueButton.addEventListener("click", (event) => {
    if (continueButton.disabled) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
  });
});
