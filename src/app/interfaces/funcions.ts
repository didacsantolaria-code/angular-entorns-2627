export function saludar(nom: string): string {
  return `Hola, ${nom}!`;
}

export function esMajorEdat(edat: number): boolean {
  return edat >= 18;
}

export function sumarArray(nums: number[]): number {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
