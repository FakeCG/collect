import {CollectedData, TemplateData} from "./types";

export const collect = (templateData: TemplateData) => {
  const collectedData: CollectedData = {
    data: []
  };

  for (const [key, value] of Object.entries(templateData)) {
      collectedData.data.push({
        key,
        value,
        parent: null
      })
  }

  return collectedData;
}
