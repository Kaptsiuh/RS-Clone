type GenerateId = () => string;

export const generateId: GenerateId = () => {
  Math.random().toString(16).slice(2)
}