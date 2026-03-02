export const resolveSceneText = (scene, flags, figure) => {
  const resolved = { ...scene };

  if (scene.textVariants) {
    resolved.text = resolveVariant(scene.textVariants, flags);
  }

  if (scene.textTemplate) {
    resolved.text = interpolateTemplate(scene.textTemplate, figure);
  }

  if (scene.atmosphereVariants) {
    resolved.atmosphere = resolveVariant(scene.atmosphereVariants, flags);
  }

  if (scene.transitionText) {
    resolved.transitionText = scene.transitionText;
  }
  if (scene.transitionTextVariants) {
    resolved.transitionText = resolveVariant(scene.transitionTextVariants, flags);
  }
  if (scene.transitionTextTemplate) {
    resolved.transitionText = interpolateTemplate(scene.transitionTextTemplate, figure);
  }

  return resolved;
};

export const resolveChoiceText = (choice, figure) => {
  const resolved = { ...choice };

  if (choice.feedbackTemplate) {
    resolved.feedback = interpolateTemplate(choice.feedbackTemplate, figure);
  }

  return resolved;
};

function resolveVariant(variants, flags) {
  for (const [flagName, text] of Object.entries(variants)) {
    if (flagName === "default") continue;
    if (flags[flagName]) return text;
  }
  return variants.default || "";
}

function interpolateTemplate(template, figure) {
  if (!figure) return template;
  return template
    .replace(/\{figure\.disguise\}/g, figure.disguise)
    .replace(/\{figure\.greeting\}/g, figure.greeting)
    .replace(/\{figure\.name\}/g, figure.name)
    .replace(/\{figure\.style\}/g, figure.style)
    .replace(/\{figure\.symbol\}/g, figure.symbol)
    .replace(/\{figure\.revealLine\}/g, figure.revealLine);
}
