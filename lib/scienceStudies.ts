export type ScienceChapterId =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13';

export interface ScienceChapterTopic {
  id: ScienceChapterId;
  title: string;
  summary: string;
}

export const SCIENCE_CHAPTERS_CLASS_10: ScienceChapterTopic[] = [
  {
    id: '1',
    title: 'Chemical Reactions and Equations',
    summary:
      'What chemical reactions are, how to identify them, and how to write balanced equations.',
  },
  {
    id: '2',
    title: 'Acids, Bases, and Salts',
    summary:
      'Acids and bases, indicators, pH, neutralization, and common salts in daily life.',
  },
  {
    id: '3',
    title: 'Metals and Nonmetals',
    summary:
      'Physical and chemical properties of metals/non-metals, reactions, corrosion, and alloys.',
  },
  {
    id: '4',
    title: 'Carbon and Its Compounds',
    summary:
      'Carbon bonding, hydrocarbons, functional groups, soaps and detergents, and everyday uses.',
  },
  {
    id: '5',
    title: 'Life Processes',
    summary:
      'Nutrition, respiration, transportation and excretion in humans and plants.',
  },
  {
    id: '6',
    title: 'Control and Coordination',
    summary:
      'Nervous system, reflex actions, hormones, and how the body coordinates activities.',
  },
  {
    id: '7',
    title: 'How Do Organisms Reproduce?',
    summary:
      'Asexual and sexual reproduction, reproductive health basics, and reproduction in plants.',
  },
  {
    id: '8',
    title: 'Heredity and Evolution',
    summary:
      'Genes and traits, Mendel’s ideas, inheritance patterns, and basics of evolution.',
  },
  {
    id: '9',
    title: 'Light—Reflection and Refraction',
    summary:
      'Laws of reflection, mirrors, refraction, lenses, and image formation.',
  },
  {
    id: '10',
    title: 'The Human Eye and the Colourful World',
    summary:
      'Human eye, defects and correction, dispersion, scattering and atmospheric phenomena.',
  },
  {
    id: '11',
    title: 'Electricity',
    summary:
      'Current, potential difference, Ohm’s law, resistors, power, and household circuits basics.',
  },
  {
    id: '12',
    title: 'Magnetic Effects of Electric Current',
    summary:
      'Magnetism, electromagnets, magnetic field lines, motor, generator and applications.',
  },
  {
    id: '13',
    title: 'Our Environment',
    summary:
      'Ecosystem components, food chains/webs, ozone layer, waste management and the 3R principle.',
  },
];

export function getScienceChapterById(id: string): ScienceChapterTopic | undefined {
  return SCIENCE_CHAPTERS_CLASS_10.find((c) => c.id === id);
}

/**
 * Study content is extracted from `topics/scienceX.txt` concept portion.
 * We cut off at the test paper marker so the study screen stays focused on learning content.
 */
export function extractStudyContent(fullText: string): string {
  const markerIndex = fullText.search(/\n\s*(Class\s+10\s+Science|Test\s+Paper)\b/i);
  const trimmed = markerIndex >= 0 ? fullText.slice(0, markerIndex) : fullText;
  return trimmed.trim();
}

// Raw chapter strings (copied from your `topics/science*.txt` files).
// NOTE: Keep these as-is so they match your source material.
const RAW_CHAPTERS: Record<ScienceChapterId, string> = {
  '1': `Chapter 1 - Chemical Reactions and Equations

Topic 1: What is a Chemical Reaction?

A chemical reaction is a process in which one or more substances change to form new substances with different properties. The substances that take part in the reaction are called reactants, and the new substances formed are called products. During a chemical reaction, the atoms of the reactants rearrange themselves to form new products.

For example, when magnesium ribbon is burned in air, it reacts with oxygen and forms magnesium oxide. Magnesium is a shiny metal, but magnesium oxide is a white powder. This shows that a new substance with different properties has been formed. This change is called a chemical reaction.
Chemical reactions happen all around us in our daily life. When we cook food, the raw ingredients change into cooked food through chemical reactions. When iron objects are exposed to air and moisture, they form rust. Digestion of food in our body is also a series of chemical reactions that help convert food into energy.

In a chemical reaction, new substances are always formed, and the change is usually permanent. The original substances cannot be easily obtained back. This is why chemical reactions are different from physical changes.


Topic 2: How do we know that a Chemical Reaction has occurred?

There are several observable changes that help us identify whether a chemical reaction has taken place. These changes act as indicators of a chemical reaction.

One common sign is a change in colour. For example, when an iron nail is placed in copper sulphate solution, the blue colour of the solution slowly changes to green. This colour change indicates that a chemical reaction has occurred and a new substance has been formed.

Another sign is a change in temperature. Some chemical reactions release heat, and these are called exothermic reactions. For example, when fuel burns, it produces heat and light. On the other hand, some reactions absorb heat from the surroundings, and these are called endothermic reactions.
Formation of gas is also a clear sign of a chemical reaction. For example, when zinc reacts with hydrochloric acid, hydrogen gas is produced. This gas can be seen in the form of bubbles. The formation of gas indicates that a new substance has been formed.

Sometimes, a solid substance is formed when two solutions are mixed. This solid is called a precipitate. The formation of a precipitate is also an indication of a chemical reaction.
A change in physical state can also indicate a chemical reaction. For example, when electric current is passed through water, it breaks down into hydrogen gas and oxygen gas. This shows that a chemical reaction has taken place.


Topic 3: Chemical Equations

A chemical equation is a short and symbolic way of representing a chemical reaction using symbols and formulas of substances. Instead of writing the names of substances in words, we use their chemical formulas.

For example, hydrogen reacts with oxygen to form water. This can be written in words as:
Hydrogen + Oxygen → Water

This can also be written using chemical symbols as:
H₂ + O₂ → H₂O
This is called a chemical equation.

In a chemical equation, the substances on the left side of the arrow are called reactants. These are the substances that take part in the reaction. The substances on the right side of the arrow are called products. These are the new substances formed after the reaction.

The arrow in the equation means \"gives\" or \"forms\". It shows the direction of the reaction. The plus sign (+) means \"reacts with\" or \"combines with\".

Chemical equations help scientists understand reactions clearly and easily. They provide important information about the reactants, products, and the nature of the reaction. They are also useful in studying and predicting chemical reactions.


Topic 4: Writing a Chemical Equation

A chemical equation can be written in two ways: in words and in symbols. The word equation uses the names of substances, while the symbolic equation uses chemical formulas. Writing chemical equations in symbolic form makes them shorter, clearer, and easier to understand.

For example, when zinc reacts with hydrochloric acid, it forms zinc chloride and hydrogen gas.
The word equation for this reaction is:
Zinc + Hydrochloric acid → Zinc chloride + Hydrogen

The symbolic equation for the same reaction is:
Zn + HCl → ZnCl₂ + H₂

In this equation, Zn and HCl are the reactants, and ZnCl₂ and H₂ are the products. The arrow shows that reactants change into products.

Writing chemical equations helps us represent chemical reactions in a simple and scientific way. It also helps us understand which substances are involved and what new substances are formed.
However, this equation is not fully correct yet because it is not balanced. To make it correct, we need to balance it.


Topic 5: Balanced Chemical Equations

According to the law of conservation of mass, mass can neither be created nor destroyed in a chemical reaction. This means that the number of atoms of each element must be the same on both sides of a chemical equation.

A chemical equation in which the number of atoms of each element is equal on both sides is called a balanced chemical equation.

For example, consider this equation:
H₂ + O₂ → H₂O

On the left side, there are:
	• 2 hydrogen atoms
	• 2 oxygen atoms
On the right side, there are:
	• 2 hydrogen atoms
	• 1 oxygen atom

This equation is not balanced because the number of oxygen atoms is different.

To balance it, we write:
2H₂ + O₂ → 2H₂O

Now on both sides:
	• Hydrogen atoms = 4
	• Oxygen atoms = 2

This is now a balanced chemical equation.
Balanced chemical equations are important because they follow the law of conservation of mass and represent reactions correctly.


Topic 6: Law of Conservation of Mass

The law of conservation of mass states that mass can neither be created nor destroyed in a chemical reaction. This means the total mass of reactants is always equal to the total mass of products.
In simple words, atoms are not lost or gained during a chemical reaction. They only rearrange to form new substances.

For example, when hydrogen reacts with oxygen to form water, the total number of hydrogen atoms and oxygen atoms remains the same before and after the reaction.

This is why chemical equations must always be balanced. A balanced equation ensures that the number of atoms of each element is equal on both sides.

This law was given by the scientist Antoine Lavoisier. His experiments proved that matter is conserved during chemical reactions.

This law is very important in chemistry because it helps scientists write correct chemical equations and understand chemical reactions properly.


Topic 7: How to Balance a Chemical Equation (Step-by-Step Method)

Balancing a chemical equation means making sure that the number of atoms of each element is equal on both sides of the equation. This is necessary to follow the law of conservation of mass.
Let us understand the steps to balance a chemical equation with an example.

Example:
Fe + H₂O → Fe₃O₄ + H₂

Step 1: Write the unbalanced equation
First, write the correct chemical formula of all reactants and products.
Fe + H₂O → Fe₃O₄ + H₂

Step 2: List the number of atoms on both sides
Element	Reactant side	Product side
Fe	1	3
H	2	2
O	1	4

The number of atoms is not equal, so the equation is unbalanced.

Step 3: Balance one element at a time
First balance iron (Fe):
There are 3 Fe atoms on the product side, so put 3 before Fe on the reactant side:
3Fe + H₂O → Fe₃O₄ + H₂

Step 4: Balance oxygen (O):
There are 4 oxygen atoms on the product side, so put 4 before H₂O:
3Fe + 4H₂O → Fe₃O₄ + H₂

Step 5: Balance hydrogen (H):
There are 8 hydrogen atoms on the reactant side (4 × 2 = 8), so put 4 before H₂:
3Fe + 4H₂O → Fe₃O₄ + 4H₂

Step 6: Check the equation
Now count atoms on both sides:
Fe = 3 and 3
H = 8 and 8
O = 4 and 4
Now the equation is balanced.


Topic 8: Types of Chemical Reactions (Introduction)

Chemical reactions can be classified into different types based on how reactants change into products. Understanding these types helps us study reactions more easily.
The main types of chemical reactions are:
	1. Combination reaction
	2. Decomposition reaction
	3. Displacement reaction
	4. Double displacement reaction
	5. Oxidation and Reduction reaction
Each type has its own characteristics.


Topic 9: Combination Reaction

A combination reaction is a reaction in which two or more substances combine to form a single product.
In this type of reaction, multiple reactants combine to form one new substance.
General form:
A + B → AB

Example:
When magnesium burns in oxygen, it forms magnesium oxide.
2Mg + O₂ → 2MgO
In this reaction, magnesium and oxygen combine to form a single product, magnesium oxide.

Another example is the formation of water:
2H₂ + O₂ → 2H₂O
Hydrogen and oxygen combine to form water.

Combination reactions are usually exothermic reactions because they release heat.
These reactions are very common in daily life. For example, burning of fuels and formation of compounds are combination reactions.


Topic 10: Decomposition Reaction

A decomposition reaction is a type of chemical reaction in which a single substance breaks down into two or more simpler substances. In this reaction, one reactant forms multiple products.
The general form of a decomposition reaction is:
AB → A + B

In decomposition reactions, energy is usually required to break the bonds between atoms. This energy can be in the form of heat, electricity, or light.

For example, when calcium carbonate is heated, it breaks down into calcium oxide and carbon dioxide.
CaCO₃ → CaO + CO₂

In this reaction, calcium carbonate decomposes into two simpler substances. This reaction is used in the manufacture of cement.

Another example is the decomposition of water into hydrogen and oxygen when electricity is passed through it.
2H₂O → 2H₂ + O₂

This type of decomposition reaction is called electrolytic decomposition because electricity is used.
Decomposition reactions are opposite of combination reactions. In combination reactions, substances combine, while in decomposition reactions, substances break down.


Topic 11: Displacement Reaction

A displacement reaction is a reaction in which one element replaces another element from a compound.
In this reaction, a more reactive element displaces a less reactive element from its compound.
The general form of a displacement reaction is:
A + BC → AC + B

Example:
Zn + CuSO₄ → ZnSO₄ + Cu

In this reaction, zinc replaces copper from copper sulphate solution. Zinc is more reactive than copper, so it displaces copper and forms zinc sulphate.
Copper is released as a separate element.

Another example is:
Fe + CuSO₄ → FeSO₄ + Cu

Iron displaces copper from copper sulphate solution.
Displacement reactions help us understand the reactivity of different elements.


Topic 12: Double Displacement Reaction

A double displacement reaction is a reaction in which two compounds exchange their ions to form two new compounds.
In this reaction, both reactants exchange parts to form new products.
The general form is:
AB + CD → AD + CB

Example:
Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl
In this reaction, sodium sulphate reacts with barium chloride to form barium sulphate and sodium chloride.
Barium sulphate is formed as a white precipitate. This type of reaction is also called a precipitation reaction.

Another example is:
HCl + NaOH → NaCl + H₂O
In this reaction, hydrochloric acid reacts with sodium hydroxide to form sodium chloride and water. This is also called a neutralization reaction.
Double displacement reactions are very important in chemistry and are commonly used in laboratories and industries.


Topic 13: Oxidation and Reduction

Oxidation and reduction are very important types of chemical reactions. These reactions always occur together.
Oxidation is the process in which a substance gains oxygen or loses hydrogen. Reduction is the process in which a substance loses oxygen or gains hydrogen.

In simple words:
Oxidation = Gain of oxygen or Loss of hydrogen
Reduction = Loss of oxygen or Gain of hydrogen

Example:
CuO + H₂ → Cu + H₂O
In this reaction, copper oxide loses oxygen and becomes copper. This is reduction because oxygen is removed.

Hydrogen gains oxygen and becomes water. This is oxidation because oxygen is added.
This means oxidation and reduction happen at the same time. Such reactions are called redox reactions (reduction + oxidation).

Another example is rusting of iron. Iron gains oxygen to form rust. This is oxidation.
Oxidation and reduction reactions are very important in many processes such as respiration, burning, and corrosion.


Topic 14: Effects of Oxidation in Everyday Life

Oxidation can have both useful and harmful effects in our daily life.
Two common harmful effects of oxidation are corrosion and rancidity.

Corrosion
Corrosion is the slow destruction of metals due to reaction with oxygen, moisture, or other substances in the environment.
The most common example of corrosion is rusting of iron.
When iron reacts with oxygen and moisture, it forms rust, which is a reddish-brown substance.
Iron + Oxygen + Water → Rust (Iron oxide)
Rust weakens the metal and damages it.
Corrosion damages many metal objects such as bridges, cars, pipelines, and machines.
Prevention of corrosion:
Corrosion can be prevented by:
• Painting
• Oiling or greasing
• Galvanization (coating with zinc)
• Alloying
These methods protect metal from contact with air and moisture.

Rancidity
Rancidity is the process in which food containing fats and oils gets oxidized and develops a bad smell and taste.
For example, when chips or fried food are left open for a long time, they develop a bad smell. This is due to rancidity.
Rancidity makes food unsafe and unpleasant to eat.
Prevention of rancidity:
Rancidity can be prevented by:
• Storing food in airtight containers
• Keeping food in refrigerators
• Adding antioxidants
• Packing food with nitrogen gas
Nitrogen prevents oxidation because it does not react easily.

Class 10 Science Test Paper
Chapter 1: Chemical Reactions and Equations
Time: 1 Hour
Maximum Marks: 30

Section A: Multiple Choice Questions (1 mark each)
(5 × 1 = 5 marks)
Choose the correct option.
	1. A chemical reaction involves:
a) Only change in shape
b) Formation of new substances
c) Change in size only
d) No change

	2. Which of the following indicates a chemical reaction?
a) Change in colour
b) Formation of gas
c) Change in temperature
d) All of the above

	3. Which of the following is a combination reaction?
a) AB → A + B
b) A + B → AB
c) A + BC → AC + B
d) AB + CD → AD + CB

	4. Rusting of iron is an example of:
a) Reduction
b) Oxidation
c) Neutralization
d) Decomposition

	5. The substances present on the left side of a chemical equation are called:
a) Products
b) Reactants
c) Elements
d) Compounds

Section B: Very Short Answer Questions (2 marks each)
(5 × 2 = 10 marks)
	6. Define a chemical reaction.

	7. What is a balanced chemical equation?

	8. State the law of conservation of mass.

	9. What is corrosion? Give one example.

	10. What is rancidity?

Section C: Short Answer Questions (3 marks each)
(3 × 3 = 9 marks)
	11. Write any three observations that indicate a chemical reaction has occurred.

	12. Explain decomposition reaction with one example.

	13. Explain displacement reaction with one example.

Section D: Long Answer Question (6 marks)
(1 × 6 = 6 marks)
	14. Balance the following chemical equations:
a) H₂ + O₂ → H₂O
b) Fe + H₂O → Fe₃O₄ + H₂
c) Zn + HCl → ZnCl₂ + H₂`,
  '2': `Chapter 2: Acids, Bases, and Salts

Topic 1: Understanding Acids and Bases
In our daily life, we come across many substances that are acidic or basic in nature. For example, lemon juice tastes sour because it contains an acid, while soap feels slippery because it contains a base.

An acid is a substance that produces hydrogen ions (H⁺ ions) when dissolved in water. These hydrogen ions are responsible for the acidic properties of the substance.
Examples of acids include hydrochloric acid (HCl), sulphuric acid (H₂SO₄), and nitric acid (HNO₃). Natural acids are also present in foods such as citric acid in lemons and acetic acid in vinegar.

A base is a substance that produces hydroxide ions (OH⁻ ions) when dissolved in water. Bases are usually bitter in taste and feel slippery to touch.

Examples of bases include sodium hydroxide (NaOH), potassium hydroxide (KOH), and calcium hydroxide (Ca(OH)₂).

Bases that are soluble in water are called alkalis. For example, sodium hydroxide and potassium hydroxide are alkalis.
Acids and bases have opposite properties. When they react with each other, they neutralize each other's effect.

Topic 2: Properties of Acids and Bases
Acids and bases have different physical and chemical properties that help us identify them.
Acids have a sour taste. For example, lemon and vinegar taste sour because they contain acids. Acids can also conduct electricity when dissolved in water because they produce hydrogen ions. Acids turn blue litmus paper red.

Bases have a bitter taste and feel soapy or slippery when touched. Bases also conduct electricity in aqueous solution because they produce hydroxide ions. Bases turn red litmus paper blue.
Acids react with metals to produce hydrogen gas. 

For example:
Zn + 2HCl → ZnCl₂ + H₂

In this reaction, zinc reacts with hydrochloric acid and produces hydrogen gas.
Bases react with acids to form salt and water. This reaction is called neutralization.
Both acids and bases show their properties only when dissolved in water. This is because they produce ions only in aqueous solution.

Topic 3: What are Indicators?
Indicators are substances that help us identify whether a substance is acidic or basic. They show different colours in acidic and basic solutions.
Indicators are very useful in laboratories and experiments.

One common indicator is litmus. Litmus is a natural indicator obtained from lichens. In acidic solutions, blue litmus turns red. In basic solutions, red litmus turns blue.
Another natural indicator is turmeric. Turmeric remains yellow in acidic solutions but turns red in basic solutions.

China rose indicator also shows colour change. It turns dark pink in acidic solution and green in basic solution.

There are also synthetic indicators such as phenolphthalein and methyl orange. Phenolphthalein is colourless in acid and pink in base. Methyl orange is red in acid and yellow in base.
Indicators help us easily identify acids and bases by showing colour changes.


Topic 4: Strength of Acids and Bases
The strength of an acid or base depends on the number of ions it produces in water. Strong acids produce a large number of hydrogen ions (H⁺ ions), while weak acids produce fewer hydrogen ions.
For example, hydrochloric acid (HCl), sulphuric acid (H₂SO₄), and nitric acid (HNO₃) are strong acids because they completely ionize in water.

Weak acids such as acetic acid (CH₃COOH) and carbonic acid (H₂CO₃) do not completely ionize in water. They produce fewer hydrogen ions, so they are weak acids.

Similarly, strong bases such as sodium hydroxide (NaOH) and potassium hydroxide (KOH) completely ionize in water and produce many hydroxide ions (OH⁻).

Weak bases such as ammonium hydroxide (NH₄OH) produce fewer hydroxide ions.
The strength of acids and bases is not based on their concentration but on their ability to produce ions in solution.

Topic 5: Dilution of Acids and Bases
Dilution is the process of reducing the concentration of an acid or base by adding water to it.
Dilution should be done carefully because it produces heat. This is an exothermic process.

When diluting acids, acid should always be added to water slowly with constant stirring. Water should never be added to acid.

This is because adding water to concentrated acid can produce excessive heat and cause splashing, which can be dangerous.
Dilution makes acids and bases safer to use in laboratories and industries.

Topic 6: pH Scale
The strength of acids and bases can be measured using the pH scale. The pH scale ranges from 0 to 14.

If the pH value is less than 7, the substance is acidic. Lower pH means stronger acid.
If the pH value is equal to 7, the substance is neutral. For example, pure water has pH 7.
If the pH value is greater than 7, the substance is basic. Higher pH means stronger base.

For example:
• Lemon juice has pH around 2 (strong acid)
• Water has pH 7 (neutral)
• Soap solution has pH around 10 (basic)
The pH scale helps us determine how acidic or basic a substance is.

Topic 7: Importance of pH in Everyday Life
The pH value plays an important role in many processes in our daily life.

One example is the pH of our stomach. Our stomach produces hydrochloric acid to help digest food. Sometimes, excess acid causes indigestion and pain. To neutralize this acid, we take antacids such as magnesium hydroxide.

Another example is tooth decay. When the pH in the mouth falls below 5.5, tooth enamel starts to decay. Toothpaste, which is basic, helps neutralize the acid and protect teeth.

pH is also important in agriculture. Plants grow well in soil with proper pH. Farmers treat soil with quicklime or slaked lime to reduce acidity.
pH of water is also important for aquatic life. Sudden changes in pH can harm fish and other organisms.

Topic 8: Chemical Properties of Acids
Acids show specific chemical reactions.
Acids react with metals to produce salt and hydrogen gas.

Example:
Zn + 2HCl → ZnCl₂ + H₂
Acids react with metal carbonates to produce salt, water, and carbon dioxide gas.

Example:
Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂
Acids react with bases to produce salt and water. This is called neutralization.

Example:
HCl + NaOH → NaCl + H₂O
These reactions help identify acids.

Topic 9: Chemical Properties of Bases
Bases also show specific chemical reactions.
Bases react with acids to form salt and water.

Example:
NaOH + HCl → NaCl + H₂O
Bases react with acidic oxides to form salt and water.

Example:
Ca(OH)₂ + CO₂ → CaCO₃ + H₂O
Some bases react with certain metals such as zinc and aluminum to produce hydrogen gas.
Bases are important in making soaps, detergents, and cleaning agents.

Topic 10: What are Salts?
Salts are substances formed when acids react with bases in a neutralization reaction.
Salt is made up of the positive ion from the base and the negative ion from the acid.

Example:
HCl + NaOH → NaCl + H₂O

In this reaction, sodium chloride (NaCl) is the salt formed.
Salts can be neutral, acidic, or basic depending on the nature of the acid and base used.
Examples of salts include sodium chloride, copper sulphate, and ammonium chloride.
Salts are widely used in food, industry, and medicine.

Topic 11: Family of Salts
Salts having the same positive or negative ions belong to the same family.

For example, sodium chloride (NaCl), sodium sulphate (Na₂SO₄), and sodium nitrate (NaNO₃) belong to the sodium family because they contain sodium ion (Na⁺).

Similarly, chloride salts such as NaCl and KCl belong to the chloride family.
Studying salt families helps us understand their properties.

Topic 12: pH of Salts
The pH of a salt solution depends on the strength of the acid and base used to form it.
If the salt is formed from a strong acid and strong base, it is neutral.

Example: NaCl
If the salt is formed from a strong acid and weak base, it is acidic.

Example: NH₄Cl
If the salt is formed from a strong base and weak acid, it is basic.

Example: Na₂CO₃
This helps determine the nature of salt solutions.

Topic 13: Chemicals from Common Salt (Sodium Chloride)
Sodium chloride (NaCl), also called common salt, is an important raw material for making many useful chemicals.

These chemicals include:
• Sodium hydroxide (NaOH)
• Bleaching powder
• Baking soda
• Washing soda

These chemicals are widely used in industries and homes.

Topic 14: Sodium Hydroxide (NaOH)
Sodium hydroxide is produced by passing electricity through sodium chloride solution. This process is called electrolysis.
Sodium hydroxide is a strong base.

Uses of sodium hydroxide:
• Making soaps and detergents
• Making paper
• Making textiles
• Making degreasing metals
It is also called caustic soda.

Topic 15: Bleaching Powder
Bleaching powder has the chemical formula CaOCl₂.
It is produced by passing chlorine gas over dry slaked lime.

Uses of bleaching powder:
• Disinfecting drinking water
• Bleaching cotton and linen
• Making bleaching agents
• Oxidizing agent in industries

Topic 16: Baking Soda
The chemical name of baking soda is sodium hydrogen carbonate (NaHCO₃).

Uses of baking soda:
• Making baking powder
• Making cakes and bread soft and fluffy
• Antacid to relieve acidity
• Making fire extinguishers
When heated, baking soda produces carbon dioxide gas, which makes cakes fluffy.

Topic 17: Washing Soda
The chemical name of washing soda is sodium carbonate (Na₂CO₃·10H₂O).

Uses of washing soda:
• Cleaning agent
• Softening hard water
• Making glass, soap, and paper
• Making other chemicals
It is used in washing powders.


Class 10 Science Test Paper
Chapter 2: Acids, Bases, and Salts
Time: 1 Hour
Maximum Marks: 30

Section A: Multiple Choice Questions (1 mark each)
(5 × 1 = 5 marks)
Choose the correct option.
	1. Which of the following is an acid?
a) NaOH
b) HCl
c) KOH
d) Ca(OH)₂

	2. Which of the following turns red litmus paper blue?
a) Acid
b) Base
c) Salt
d) Water

	3. What is the pH value of a neutral solution?
a) 0
b) 5
c) 7
d) 14

	4. Which gas is produced when acids react with metals?
a) Oxygen
b) Hydrogen
c) Carbon dioxide
d) Nitrogen

	5. Which of the following is used to make baking powder?
a) Washing soda
b) Baking soda
c) Bleaching powder
d) Sodium chloride

Section B: Very Short Answer Questions (2 marks each)
(5 × 2 = 10 marks)
	6. Define an acid.

	7. What is an indicator? Give one example.

	8. What is pH scale?

	9. What is a salt? Give one example.

	10. Write one use of bleaching powder.

Section C: Short Answer Questions (3 marks each)
(3 × 3 = 9 marks)
	11. Write three properties of acids.

	12. Explain neutralization reaction with an example.

	13. Write three uses of washing soda.

Section D: Long Answer Question (6 marks)
(1 × 6 = 6 marks)
	14. Explain the importance of pH in everyday life with examples.`,
  '3': `Chapter 3: Metals and Nonmetals

Topic 1: What are Metals and Non-metals?
Elements are classified into metals and non-metals based on their physical and chemical properties.
Metals are elements that are generally hard, shiny, strong, and good conductors of heat and electricity. Most metals are solid at room temperature. Examples of metals include iron, copper, aluminum, gold, and silver. Metals are widely used in making tools, machines, wires, and utensils because of their strength and conductivity.

Non-metals are elements that are usually soft, dull, and poor conductors of heat and electricity. Many non-metals are gases, while some are solids. Examples of non-metals include oxygen, carbon, sulphur, nitrogen, and chlorine. Non-metals are important for life and are used in many essential processes such as respiration and combustion.

Metals and non-metals have very different properties, which help us identify and use them properly.

Topic 2: Physical Properties of Metals
Metals have several physical properties that make them useful in daily life.
One important property is that metals are lustrous, which means they have a shiny surface. For example, gold and silver shine when polished.

Metals are malleable, which means they can be beaten into thin sheets. For example, aluminum is used to make foil because it can be easily flattened.

Metals are also ductile, which means they can be drawn into thin wires. Copper is used in electrical wires because it is ductile and conducts electricity well.

Metals are good conductors of heat and electricity. This is why metals like copper and aluminum are used in electrical wiring and cooking utensils.

Metals are usually hard and strong, which makes them suitable for making tools, machines, and buildings.

Metals also have high melting and boiling points, so they do not melt easily.

Topic 3: Physical Properties of Non-metals
Non-metals have physical properties that are opposite to metals.

Non-metals are usually dull, which means they do not shine. For example, coal and sulphur are dull.

Non-metals are not malleable. They cannot be beaten into thin sheets. They are brittle, which means they break easily when hit.

Non-metals are not ductile, so they cannot be drawn into wires.

Non-metals are poor conductors of heat and electricity. This is why non-metals are not used for electrical wiring.

Many non-metals have low melting and boiling points.
However, there are some exceptions. For example, graphite is a non-metal but conducts electricity.

Topic 4: Uses of Metals and Non-metals
Metals are used in many areas because of their strength and conductivity.

Iron is used to make buildings, bridges, and machines. Copper and aluminum are used in electrical wires. Gold and silver are used to make jewelry. Aluminum is used to make cooking utensils and aircraft.

Non-metals are also very important. Oxygen is necessary for breathing. Nitrogen is used in fertilizers. Chlorine is used to purify water. Carbon is used as fuel in the form of coal.
Both metals and non-metals are essential for daily life and industry.

Topic 5: Chemical Properties of Metals
Metals react with different substances such as oxygen, water, acids, and other metal compounds. These reactions help us understand the chemical behavior of metals.

When metals react with oxygen, they form metal oxides. These metal oxides are basic in nature.
Example:
2Mg + O₂ → 2MgO
Magnesium reacts with oxygen to form magnesium oxide.

When metals react with water, they form metal hydroxide and hydrogen gas.
Example:
2Na + 2H₂O → 2NaOH + H₂
Sodium reacts with water to form sodium hydroxide and hydrogen gas.

When metals react with acids, they form salt and hydrogen gas.
Example:
Zn + 2HCl → ZnCl₂ + H₂
Zinc reacts with hydrochloric acid to form zinc chloride and hydrogen gas.
These reactions show that metals are reactive and form positive ions.

Topic 6: Chemical Properties of Non-metals
Non-metals also react with different substances, but their reactions are different from metals.

When non-metals react with oxygen, they form non-metal oxides. These oxides are usually acidic in nature.
Example:
C + O₂ → CO₂
Carbon reacts with oxygen to form carbon dioxide.
Non-metals usually do not react with water.

Non-metals also react with metals to form compounds called ionic compounds.
Example:
Na + Cl → NaCl
Sodium reacts with chlorine to form sodium chloride.
Non-metals gain electrons and form negative ions.

Topic 7: Reaction of Metals and Non-metals with Oxygen
Both metals and non-metals react with oxygen to form oxides.
Metal oxides are basic in nature.
Example:
Ca + O₂ → CaO
Calcium oxide is basic.

Non-metal oxides are acidic in nature.
Example:
S + O₂ → SO₂
Sulphur dioxide is acidic.

Some metal oxides such as aluminum oxide and zinc oxide show both acidic and basic properties. These are called amphoteric oxides.
Example: Al₂O₃ and ZnO

Topic 8: Reaction of Metals with Water
Different metals react differently with water.

Some metals such as sodium and potassium react very fast with cold water. These reactions are very violent.
Example:
2Na + 2H₂O → 2NaOH + H₂

Some metals such as magnesium react slowly with hot water.
Some metals such as iron react only with steam.
Example:
3Fe + 4H₂O → Fe₃O₄ + 4H₂
Some metals such as copper, silver, and gold do not react with water at all.

Topic 9: Reaction of Metals with Acids
Metals react with dilute acids to produce salt and hydrogen gas.
Example:
Zn + 2HCl → ZnCl₂ + H₂
This reaction is used to test metals.

However, some metals such as copper, silver, and gold do not react with dilute acids because they are less reactive.
This shows that metals have different levels of reactivity.

Topic 10: Reaction of Metals with Metal Compounds (Displacement Reaction)
A more reactive metal can displace a less reactive metal from its compound.
Example:
Zn + CuSO₄ → ZnSO₄ + Cu

Zinc displaces copper from copper sulphate.
But copper cannot displace zinc from zinc sulphate.
This helps us compare reactivity of metals.

Topic 11: Reactivity Series of Metals
The reactivity series is a list of metals arranged in order of decreasing reactivity.
Some common metals in reactivity series are:

Potassium (K)
Sodium (Na)
Calcium (Ca)
Magnesium (Mg)
Aluminum (Al)
Zinc (Zn)
Iron (Fe)
Copper (Cu)
Silver (Ag)
Gold (Au)

Metals at the top are more reactive. Metals at the bottom are less reactive.
Highly reactive metals react easily with water and acids. Less reactive metals do not react easily.
The reactivity series helps us predict displacement reactions and extraction methods.

Topic 12: Ionic Compounds
Ionic compounds are formed when metals react with non-metals by transfer of electrons.

Metals lose electrons and form positive ions. Non-metals gain electrons and form negative ions.
Example:
Na + Cl → NaCl

Sodium loses one electron and chlorine gains one electron.
Properties of ionic compounds:
• High melting and boiling points
• Hard and brittle
• Conduct electricity when dissolved in water
• Usually soluble in water
Ionic compounds are important in daily life.

Topic 13: Physical Properties of Ionic Compounds
Ionic compounds have special physical properties due to the strong force of attraction between their ions. These forces hold the ions tightly together.
Ionic compounds are usually solid and hard. For example, sodium chloride (common salt) is a hard solid.

They have high melting and boiling points. This is because a large amount of heat energy is required to break the strong bonds between the ions.
Ionic compounds are generally soluble in water but insoluble in organic solvents such as petrol and kerosene.

They do not conduct electricity in solid state because the ions cannot move freely. However, they conduct electricity when dissolved in water or in molten state because the ions are free to move.
These properties make ionic compounds useful in many applications such as salts, fertilizers, and medicines.

Topic 14: Occurrence of Metals
Metals occur in nature either in free state or in combined state.
Less reactive metals such as gold, silver, and platinum are found in free state because they do not react easily with air or water.

Most metals such as iron, aluminum, zinc, and copper are found in combined state in the form of compounds. These compounds are called ores.
An ore is a naturally occurring substance from which a metal can be extracted easily and economically.

For example:
Bauxite is the ore of aluminum.
Hematite is the ore of iron.
Ores contain impurities such as sand and clay, which must be removed before extracting the metal.

Topic 15: Extraction of Metals
Extraction of metals is the process of obtaining metals from their ores.
The extraction method depends on the reactivity of the metal.

Highly reactive metals such as sodium, potassium, and calcium are extracted using electrolysis. In this process, electricity is used to separate the metal from its compound.
Moderately reactive metals such as iron, zinc, and lead are extracted by heating with carbon. Carbon removes oxygen from the metal oxide.
Example:
Fe₂O₃ + C → Fe + CO₂

Less reactive metals such as copper and mercury are extracted by heating their ores.
Very less reactive metals such as gold and silver are found in free state and require very little processing.

Topic 16: Enrichment of Ores
Ores contain impurities such as sand, clay, and stones. These impurities are called gangue.
Before extracting the metal, the impurities must be removed. This process is called enrichment or concentration of ore.

Different methods are used for enrichment depending on the nature of the ore.
One common method is hydraulic washing, where water is used to separate heavier ore particles from lighter impurities.

Another method is froth flotation, used for sulphide ores.
Enrichment makes extraction easier and more efficient.

Topic 17: Corrosion
Corrosion is the slow destruction of metals due to reaction with air, moisture, or other substances.
The most common example is rusting of iron.

When iron reacts with oxygen and water, it forms rust (iron oxide).
Iron + Oxygen + Water → Rust

Rust is a reddish-brown substance that weakens the metal.
Corrosion damages buildings, bridges, cars, and machines.
It causes huge economic losses every year.

Topic 18: Prevention of Corrosion
Corrosion can be prevented by protecting metals from air and moisture.
One common method is painting. Paint prevents air and moisture from reaching the metal surface.
Oiling and greasing also prevent corrosion by forming a protective layer.
Galvanization is another method. In this process, iron is coated with zinc to prevent rusting.
Alloying is also used to prevent corrosion. Alloys are more resistant to corrosion.
These methods increase the life of metal objects.

Topic 19: Alloys
An alloy is a mixture of two or more metals, or a metal and a non-metal.
Alloys are made to improve the properties of metals such as strength, hardness, and resistance to corrosion.

Example:
Steel is an alloy of iron and carbon.
Brass is an alloy of copper and zinc.
Bronze is an alloy of copper and tin.
Alloys are stronger and more useful than pure metals.
They are used in making tools, machines, utensils, and buildings.

Topic 20: Properties and Uses of Alloys
Alloys have better properties than pure metals.
They are stronger and harder. They are more resistant to corrosion. They may also have lower melting points.

For example, stainless steel does not rust easily. It is used in kitchen utensils and medical instruments.
Brass is used in making musical instruments and decorative items.
Alloys are widely used in industries because of their improved properties.

Class 10 Science Test Paper
Chapter 3: Metals and Non-metals
Time: 1 Hour
Maximum Marks: 30

Section A: Multiple Choice Questions (1 mark each)
(5 × 1 = 5 marks)
Choose the correct option.
	1. Which of the following is a metal?
a) Oxygen
b) Sulphur
c) Copper
d) Carbon

	2. Which property allows metals to be drawn into wires?
a) Malleability
b) Ductility
c) Conductivity
d) Hardness

	3. Which of the following is a non-metal?
a) Iron
b) Aluminum
c) Chlorine
d) Zinc

	4. Which of the following metals does not react with dilute acids?
a) Zinc
b) Magnesium
c) Copper
d) Iron

	5. Which of the following is an alloy?
a) Iron
b) Copper
c) Steel
d) Oxygen

Section B: Very Short Answer Questions (2 marks each)
(5 × 2 = 10 marks)
	6. Define metal.

	7. What is an ore?

	8. What is corrosion?

	9. What is an alloy? Give one example.

	10. Name one metal that reacts with cold water.

Section C: Short Answer Questions (3 marks each)
(3 × 3 = 9 marks)
	11. Write three physical properties of metals.

	12. Write three physical properties of non-metals.

	13. Explain displacement reaction with one example.

Section D: Long Answer Question (6 marks)
(1 × 6 = 6 marks)
	14. Explain the reactivity series of metals. Why is it important?    `,
  '4': `Chapter 4: Carbon and Its Compounds

Topic 1: Introduction to Carbon
Carbon is a very important element found in nature. It is present in all living organisms and is the main element in organic compounds. Carbon is found in many forms such as coal, graphite, diamond, and petroleum.
Carbon has the symbol C and atomic number 6. It is a non-metal.
Carbon is unique because it can form a very large number of compounds. This is why carbon compounds are studied separately in chemistry. Most of the substances we use daily, such as fuels, plastics, medicines, and food, contain carbon.
Carbon compounds are essential for life. All living organisms are made of carbon compounds.

Topic 2: Bonding in Carbon – Covalent Bond
Carbon forms bonds with other atoms by sharing electrons. This type of bond is called a covalent bond.
Carbon has 4 electrons in its outer shell. It needs 4 more electrons to complete its outer shell and become stable. Instead of gaining or losing 4 electrons, carbon shares electrons with other atoms.
For example, in methane (CH₄), carbon shares electrons with four hydrogen atoms. This forms four covalent bonds.
Covalent bonds are strong bonds formed by sharing of electrons between atoms.
Carbon mainly forms covalent compounds because gaining or losing 4 electrons requires too much energy.

Topic 3: Versatile Nature of Carbon
Carbon is called a versatile element because it can form a large number of compounds.
This is due to two special properties of carbon:
	1. Catenation
	2. Tetravalency
Catenation is the property of carbon to form bonds with other carbon atoms. This allows carbon to form long chains, branched chains, and rings.
For example:
C–C–C–C
This property allows carbon to form millions of compounds.
Tetravalency means carbon has a valency of 4. It can form four covalent bonds with other atoms such as hydrogen, oxygen, nitrogen, and chlorine.
Because of catenation and tetravalency, carbon can form a very large number of stable compounds.

Topic 4: Saturated and Unsaturated Carbon Compounds
Carbon compounds are classified into saturated and unsaturated compounds based on the type of bonds between carbon atoms.
Saturated compounds have only single bonds between carbon atoms. These are called alkanes.
Example: Methane (CH₄), Ethane (C₂H₆)
Unsaturated compounds have double or triple bonds between carbon atoms.
Compounds with double bonds are called alkenes.
Example: Ethene (C₂H₄)
Compounds with triple bonds are called alkynes.
Example: Ethyne (C₂H₂)
Unsaturated compounds are more reactive than saturated compounds.


Topic 5: Chains, Branches, and Rings
Due to catenation, carbon atoms can join together in different ways to form various structures. These structures include straight chains, branched chains, and rings.
In straight chain compounds, carbon atoms are connected in a single line.
Example:
C–C–C–C (Butane)
In branched chain compounds, one or more carbon atoms are attached as branches.
Example:
  C
  |
C–C–C
This forms a branched structure.
In ring compounds, carbon atoms form a closed loop or ring.
Example:
Cyclohexane (C₆H₁₂)
These different structures allow carbon to form a large number of compounds with different properties.

Topic 6: Functional Groups
A functional group is an atom or group of atoms that gives specific properties to carbon compounds.
Functional groups determine the chemical properties of compounds.
Some important functional groups are:
• Alcohol group (–OH)
Example: Ethanol
• Carboxylic acid group (–COOH)
Example: Ethanoic acid
• Aldehyde group (–CHO)
Example: Methanal
• Ketone group (–CO)
Example: Propanone
• Halogen group (–Cl, –Br, –I)
Example: Chloroethane
Functional groups help classify carbon compounds into different types.

Topic 7: Homologous Series
A homologous series is a group of carbon compounds with similar chemical properties and the same functional group.
In a homologous series, each member differs from the next by a –CH₂ group.
Example: Alkane series
Methane → CH₄
Ethane → C₂H₆
Propane → C₃H₈
Butane → C₄H₁₀
All these compounds have similar properties but different molecular sizes.
Homologous series help us study carbon compounds easily.

Topic 8: Nomenclature of Carbon Compounds
Nomenclature means naming carbon compounds in a systematic way.
The name of a carbon compound depends on:
• Number of carbon atoms
• Type of bond
• Functional group present
Basic names based on number of carbon atoms:
1 carbon → Meth
2 carbons → Eth
3 carbons → Prop
4 carbons → But
Example:
CH₄ → Methane
C₂H₆ → Ethane
C₃H₈ → Propane
This system helps identify compounds easily.

Topic 9: Chemical Properties – Combustion
Carbon compounds burn in air to produce carbon dioxide, water, heat, and light.
Example:
CH₄ + O₂ → CO₂ + H₂O
This reaction is called combustion.
Combustion reactions release heat, so they are exothermic reactions.
This property makes carbon compounds useful as fuels.
Examples of fuels include petrol, diesel, LPG, and CNG.

Topic 10: Chemical Properties – Oxidation
Oxidation is the process of adding oxygen or removing hydrogen.
Carbon compounds can be oxidized to form new substances.
Example:
Ethanol + Oxygen → Ethanoic acid
Oxidizing agents such as potassium permanganate and potassium dichromate are used for oxidation.
Oxidation reactions are important in industries and chemical processes.

Topic 11: Addition Reaction
Addition reactions occur in unsaturated compounds.
In these reactions, atoms are added to double or triple bonds.
Example:
Ethene + Hydrogen → Ethane
C₂H₄ + H₂ → C₂H₆
This reaction converts unsaturated compounds into saturated compounds.
This process is used in making vegetable ghee from vegetable oil.

Topic 12: Substitution Reaction
Substitution reactions occur in saturated compounds.
In these reactions, one atom is replaced by another atom.
Example:
Methane + Chlorine → Chloromethane
CH₄ + Cl₂ → CH₃Cl + HCl
Substitution reactions are important in making many useful chemicals.


Topic 13: Ethanol
Ethanol is a very important carbon compound. Its chemical formula is C₂H₅OH. It belongs to the alcohol family and contains the functional group –OH.
Ethanol is a colourless liquid with a pleasant smell. It is soluble in water and is widely used in industries and laboratories.
Ethanol is used as a fuel. It is also used in making alcoholic beverages, medicines, perfumes, and sanitizers.
Ethanol reacts with sodium metal to produce hydrogen gas.
Example:
2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂
Ethanol can also burn in air to produce carbon dioxide and water.
Example:
C₂H₅OH + O₂ → CO₂ + H₂O
This reaction produces heat and light.

Topic 14: Ethanoic Acid
Ethanoic acid is another important carbon compound. Its chemical formula is CH₃COOH. It belongs to the carboxylic acid family and contains the functional group –COOH.
Ethanoic acid is commonly known as acetic acid. It is present in vinegar.
It is a colourless liquid with a sour taste and strong smell.
Ethanoic acid reacts with bases to form salt and water.
Example:
CH₃COOH + NaOH → CH₃COONa + H₂O
Ethanoic acid reacts with alcohol to form ester. This reaction is called esterification.
Ethanoic acid is used in food preservation, vinegar, and chemical industries.

Topic 15: Esterification Reaction
Esterification is the reaction between an alcohol and a carboxylic acid to form an ester and water.
Example:
Ethanol + Ethanoic acid → Ester + Water
C₂H₅OH + CH₃COOH → CH₃COOC₂H₅ + H₂O
Esters have a pleasant fruity smell.
This is why esters are used in perfumes, food flavouring, and cosmetics.
Esterification reactions are important in making many useful products.

Topic 16: Soaps and Detergents
Soaps and detergents are cleansing agents used for washing and cleaning.
Soaps are made from natural oils and fats by reacting them with sodium hydroxide or potassium hydroxide.
Soaps are sodium or potassium salts of fatty acids.
Detergents are synthetic cleansing agents made from chemicals.
Detergents work well in both soft and hard water, while soaps do not work well in hard water.
Soaps and detergents help remove dirt and grease from clothes and skin.

Topic 17: Cleansing Action of Soap
Soap cleans dirt by forming structures called micelles.
A soap molecule has two ends:
• Hydrophobic end (water-repelling)
• Hydrophilic end (water-attracting)
The hydrophobic end attaches to grease and dirt, while the hydrophilic end attaches to water.
When soap is mixed with water, it forms micelles that trap dirt inside.
These micelles are then washed away with water, cleaning the surface.
This is called the cleansing action of soap.

Topic 18: Soaps and Hard Water
Hard water contains salts of calcium and magnesium.
Soap does not work well in hard water because it reacts with these salts and forms insoluble substances called scum.
This reduces the effectiveness of soap.
Detergents do not form scum and work well in hard water.
This is why detergents are more effective in washing clothes.

Topic 19: Advantages of Detergents over Soaps
Detergents have several advantages over soaps.
They work well in hard water.
They do not form scum.
They clean more effectively.
They can be used in acidic and basic water.
Because of these advantages, detergents are widely used.

Topic 20: Micelles
Micelles are small structures formed by soap molecules in water.
In a micelle, the hydrophobic ends face inward and trap dirt and grease, while the hydrophilic ends face outward toward water.
Micelles help remove grease and dirt from surfaces.
Micelle formation is essential for the cleansing action of soaps and detergents.


Class 10 Science Test Paper
Chapter 4: Carbon and Its Compounds
Time: 1 Hour
Maximum Marks: 30

Section A: Multiple Choice Questions (1 mark each)
(5 × 1 = 5 marks)
Choose the correct option.
	1. Carbon has how many valence electrons?
a) 2
b) 3
c) 4
d) 5

	2. Which type of bond is formed by sharing of electrons?
a) Ionic bond
b) Covalent bond
c) Metallic bond
d) Hydrogen bond

	3. Which of the following is a saturated hydrocarbon?
a) Ethene
b) Ethyne
c) Methane
d) Propene

	4. What is the functional group of alcohol?
a) –COOH
b) –OH
c) –CHO
d) –CO

	5. Which of the following is used in soaps?
a) Sodium hydroxide
b) Sodium carbonate
c) Sodium salts of fatty acids
d) Hydrochloric acid

Section B: Very Short Answer Questions (2 marks each)
(5 × 2 = 10 marks)
	6. Why is carbon tetravalent?

	7. Define covalent bond.

	8. What is a homologous series?

	9. What is catenation?

	10. Write the general formula of alkanes.

Section C: Short Answer Questions (3 marks each)
(3 × 3 = 9 marks)
	11. Write three properties of covalent compounds.

	12. What is the difference between saturated and unsaturated hydrocarbons?

	13. Explain cleansing action of soap.

Section D: Long Answer Question (6 marks)
(1 × 6 = 6 marks)
	14. Explain the formation of methane molecule using electron sharing diagram.`,
  '5': `Chapter 5: Life Processes 

1. What are Life Processes?
Life processes are the basic activities that living organisms perform to stay alive. These processes are essential for maintaining life and keeping the body functioning properly. Without these processes, no organism can survive.
All living organisms, whether plants, animals, or microorganisms, perform certain important functions such as nutrition, respiration, transportation, and excretion. These functions help the organism obtain energy, use that energy, transport substances, and remove waste materials.
For example, humans need food to get energy, oxygen to release energy from food, blood to transport nutrients, and organs like kidneys to remove waste.
These activities together are called life processes.
Examples of life processes include:
	• Nutrition – obtaining food
	• Respiration – releasing energy from food
	• Transportation – carrying substances inside the body
	• Excretion – removing waste
These processes are necessary to maintain and repair the body and to support growth and survival.

2. Nutrition
Nutrition is the process by which organisms obtain food and use it to get energy for growth, repair, and maintenance of the body.
All living organisms need energy to perform various activities such as movement, growth, repair of damaged parts, and maintaining body functions. This energy comes from food.
Food provides:
	• Energy
	• Materials for growth
	• Materials for repair
	• Protection against diseases
For example, humans eat food like rice, fruits, and vegetables to get energy and nutrients.
Plants also need food, but they prepare their own food using sunlight, carbon dioxide, and water.
Thus, nutrition is an essential life process for all living organisms.

3. Types of Nutrition
There are two main types of nutrition:
	1. Autotrophic Nutrition
	2. Heterotrophic Nutrition

A. Autotrophic Nutrition
Autotrophic nutrition is the mode of nutrition in which organisms make their own food from simple substances like carbon dioxide and water using sunlight.
Organisms that prepare their own food are called autotrophs.
Examples:
	• Green plants
	• Algae
Plants prepare food by a process called photosynthesis.
In photosynthesis, plants use:
	• Sunlight (energy source)
	• Carbon dioxide (from air)
	• Water (from soil)
	• Chlorophyll (green pigment in leaves)
Food produced is glucose.
Equation of photosynthesis:
Carbon dioxide + Water → Glucose + Oxygen
(In presence of sunlight and chlorophyll)
This process also releases oxygen, which is important for animals and humans.

B. Heterotrophic Nutrition
Heterotrophic nutrition is the mode of nutrition in which organisms cannot make their own food and depend on other organisms for food.
Organisms that depend on others for food are called heterotrophs.
Examples:
	• Humans
	• Animals
	• Fungi
	• Some bacteria
Humans eat plants and animals to get energy.
Types of heterotrophic nutrition include:
	1. Holozoic nutrition – Humans, animals
	2. Saprophytic nutrition – Fungi feed on dead matter
	3. Parasitic nutrition – Parasites feed on living organisms
Example:
Leech feeds on blood (parasite)

4. Photosynthesis (Nutrition in Plants)
Photosynthesis is the process by which green plants prepare their own food using carbon dioxide, water, sunlight, and chlorophyll.
It is an example of autotrophic nutrition.
Plants make food mainly in their leaves. Leaves contain a green pigment called chlorophyll, which helps in absorbing sunlight.
Plants take:
	• Carbon dioxide from the air through tiny pores called stomata
	• Water from the soil through roots
	• Sunlight from the sun
	• Chlorophyll from leaves
Using these, plants produce glucose (food) and release oxygen.
Word equation:
Carbon dioxide + Water → Glucose + Oxygen
(In presence of sunlight and chlorophyll)

Steps of Photosynthesis
Photosynthesis occurs in three main steps:
Step 1: Absorption of sunlight
Chlorophyll absorbs sunlight.
Step 2: Conversion of light energy into chemical energy
Light energy is used to split water into hydrogen and oxygen.
Step 3: Formation of glucose
Hydrogen combines with carbon dioxide to form glucose.
Oxygen is released as a by-product.

Importance of Photosynthesis
Photosynthesis is important because:
	• It provides food for plants
	• It provides food for animals and humans indirectly
	• It releases oxygen needed for respiration
	• It maintains balance of oxygen and carbon dioxide in the atmosphere
Without photosynthesis, life would not exist on Earth.

5. Nutrition in Humans
Humans follow heterotrophic nutrition. Humans cannot make their own food and depend on plants and animals.
The process of nutrition in humans includes five steps:
	1. Ingestion – taking food into the body
	2. Digestion – breaking down food
	3. Absorption – nutrients enter blood
	4. Assimilation – using nutrients for energy and growth
	5. Egestion – removing undigested food
These steps occur in the digestive system.

6. Human Digestive System
The digestive system is made up of organs that help in digestion of food.
Main organs of digestive system:
	• Mouth
	• Food pipe (Oesophagus)
	• Stomach
	• Small intestine
	• Large intestine
	• Anus
Associated glands:
	• Salivary glands
	• Liver
	• Pancreas
Each organ has a specific function.

7. Process of Digestion in Humans
A. Mouth
Digestion begins in the mouth.
Functions of mouth:
	• Teeth break food into small pieces
	• Saliva mixes with food
	• Saliva contains enzyme called salivary amylase
Salivary amylase breaks starch into sugar.
Tongue helps in mixing food and swallowing.

B. Oesophagus (Food Pipe)
The oesophagus carries food from mouth to stomach.
Food moves through oesophagus by peristalsis.
Peristalsis is the wave-like movement of muscles.

C. Stomach
The stomach is a muscular organ.
Functions of stomach:
	• Stores food
	• Mixes food with digestive juices
	• Begins digestion of proteins
Stomach releases:
	• Hydrochloric acid (HCl) – kills bacteria
	• Pepsin enzyme – digests proteins

D. Small Intestine
The small intestine is the main site of digestion and absorption.
It receives juices from:
	• Liver (bile juice)
	• Pancreas (pancreatic juice)
Functions:
	• Completes digestion
	• Absorbs nutrients into blood
The inner surface has villi, which increase absorption.

E. Large Intestine
Functions:
	• Absorbs water
	• Forms solid waste (faeces)
Waste is removed through anus.

8. Respiration
Respiration is the process by which food (glucose) is broken down using oxygen to release energy.
This energy is used by the body to perform various activities such as movement, growth, repair, and maintaining body temperature.
Respiration occurs in all living organisms, including plants and animals.
The energy released is stored in the form of ATP (Adenosine Triphosphate), which is called the energy currency of the cell.
Word equation of respiration:
Glucose + Oxygen → Carbon dioxide + Water + Energy
Respiration takes place inside the cells, mainly in structures called mitochondria.

9. Types of Respiration
There are two types of respiration:
	1. Aerobic respiration
	2. Anaerobic respiration

A. Aerobic Respiration
Aerobic respiration is respiration that occurs in the presence of oxygen.
In this process:
	• Oxygen is used
	• Large amount of energy is released
	• Carbon dioxide and water are produced
Example:
Humans perform aerobic respiration.
Equation:
Glucose + Oxygen → Carbon dioxide + Water + Energy

B. Anaerobic Respiration
Anaerobic respiration occurs in the absence of oxygen.
In this process:
	• Oxygen is not used
	• Less energy is released
Example:
Yeast performs anaerobic respiration.
Equation:
Glucose → Alcohol + Carbon dioxide + Energy
In humans, during heavy exercise, muscles perform anaerobic respiration and produce lactic acid, which causes muscle cramps.

10. Human Respiratory System
The respiratory system helps in breathing and exchange of gases.
Main parts of respiratory system:
	• Nose
	• Nasal cavity
	• Trachea (windpipe)
	• Bronchi
	• Lungs
	• Alveoli

Functions of each part:
Nose:
Air enters through the nose. It filters dust and germs.
Trachea:
It is a tube that carries air to the lungs.
Bronchi:
Trachea divides into two bronchi, each going to one lung.
Lungs:
Main organs of respiration.
Alveoli:
Tiny air sacs where exchange of gases occurs.
Oxygen enters blood and carbon dioxide leaves blood.

11. Breathing vs Respiration
Breathing and respiration are different processes.
Breathing:
	• Physical process
	• Taking in oxygen and releasing carbon dioxide
	• Occurs in lungs
Respiration:
	• Chemical process
	• Breakdown of glucose to release energy
	• Occurs in cells
Breathing supplies oxygen needed for respiration.

12. Transportation in Humans
Transportation is the process of carrying food, oxygen, water, and waste materials to different parts of the body.
In humans, transportation is done by the circulatory system.
Main parts of circulatory system:
	• Heart
	• Blood
	• Blood vessels
Functions:
	• Carries oxygen
	• Carries nutrients
	• Removes waste
	• Maintains body temperature

13. Human Heart
The heart is a muscular organ that pumps blood throughout the body.
It is located in the chest, slightly towards the left.
The heart has four chambers:
	• Right atrium
	• Right ventricle
	• Left atrium
	• Left ventricle
The heart pumps blood continuously.

Functions of Heart
	• Pumps oxygenated blood to body
	• Pumps deoxygenated blood to lungs
	• Maintains circulation

Double Circulation
Humans have double circulation.
Blood passes through heart twice in one cycle:
	1. Heart → Lungs → Heart
	2. Heart → Body → Heart
This ensures efficient supply of oxygen.

14. Blood
Blood is a fluid connective tissue that transports substances throughout the body. It carries oxygen, nutrients, hormones, and waste materials.
Blood consists of four main components:
1. Red Blood Cells (RBCs):
Red blood cells carry oxygen from the lungs to all parts of the body. They contain haemoglobin, which is a red pigment that binds with oxygen.
2. White Blood Cells (WBCs):
White blood cells help in fighting infections and protect the body from diseases.
3. Platelets:
Platelets help in clotting of blood. They prevent excessive bleeding when there is an injury.
4. Plasma:
Plasma is the liquid part of blood. It transports food, hormones, carbon dioxide, and waste materials.

15. Blood Vessels
Blood vessels are tubes that carry blood throughout the body.
There are three main types of blood vessels:
1. Arteries:
Arteries carry oxygen-rich blood from the heart to the body. Their walls are thick and elastic.
Example: Aorta is the main artery.
2. Veins:
Veins carry oxygen-poor blood from the body back to the heart. They have valves to prevent backflow of blood.
3. Capillaries:
Capillaries are very thin blood vessels. They connect arteries and veins. Exchange of oxygen, nutrients, and waste occurs through capillaries.

16. Transportation in Plants
Plants also need to transport water, minerals, and food to different parts.
Plants have special tissues called vascular tissues:
	• Xylem
	• Phloem

Xylem
Xylem transports water and minerals from roots to leaves.
Water moves upward due to:
	• Root pressure
	• Transpiration pull

Phloem
Phloem transports food from leaves to other parts of the plant.
This process is called translocation.
Food moves in both upward and downward directions.

17. Excretion in Humans
Excretion is the process of removing waste materials from the body.
Waste materials include:
	• Urea
	• Carbon dioxide
	• Excess water
	• Salts
These wastes are harmful and must be removed.
Excretion helps maintain balance inside the body.

18. Human Excretory System
The excretory system removes waste from the body.
Main parts:
	• Kidneys
	• Ureters
	• Urinary bladder
	• Urethra

Functions of each part:
Kidneys:
Filter blood and remove waste in the form of urine.
Ureters:
Carry urine from kidneys to urinary bladder.
Urinary bladder:
Stores urine.
Urethra:
Removes urine from body.

Nephron
Nephron is the basic unit of kidney.
Functions of nephron:
	• Filters blood
	• Removes waste
	• Forms urine
Each kidney contains millions of nephrons.

Excretion in Plants
Plants also remove waste materials.
Plants remove waste by:
	• Releasing oxygen through stomata
	• Storing waste in leaves
	• Removing waste when leaves fall
	• Releasing waste through roots
Plants do not have a special excretory system like humans.


Class 10 Science Test Paper
Chapter 5: Life Processes
Time: 1 Hour
Maximum Marks: 30

Section A: Multiple Choice Questions (1 mark each)
(5 × 1 = 5 marks)
Choose the correct option.
	1. Which process helps organisms obtain food?
a) Respiration
b) Nutrition
c) Excretion
d) Transportation

	2. Which organ pumps blood throughout the body?
a) Lungs
b) Brain
c) Heart
d) Kidney

	3. Which gas is taken in during respiration?
a) Carbon dioxide
b) Oxygen
c) Nitrogen
d) Hydrogen

	4. What is the basic unit of kidney?
a) Neuron
b) Nephron
c) Alveoli
d) Villus

	5. Which tissue transports water in plants?
a) Phloem
b) Xylem
c) Blood
d) Neuron

Section B: Very Short Answer Questions (2 marks each)
(5 × 2 = 10 marks)
	6. Define life processes.

	7. What is respiration?

	8. Name the four chambers of the heart.

	9. What is excretion?

	10. What is the function of xylem?

Section C: Short Answer Questions (3 marks each)
(3 × 3 = 9 marks)
	11. Write three differences between aerobic and anaerobic respiration.

	12. Explain the function of the human digestive system.

	13. Write three functions of blood.

Section D: Long Answer Question (6 marks)
(1 × 6 = 6 marks)
	14. Explain the human excretory system with functions of its parts.`,
  '6': `Chapter 6: Control and Coordination

1. Introduction to Control and Coordination
Control and coordination is the process by which the body controls its activities and coordinates different functions.
Our body has many organs that work together. To function properly, these organs must work in a coordinated manner. Control and coordination ensure that the body responds properly to changes in the environment.
For example:
	• Pulling your hand away when touching a hot object
	• Walking, running, or writing
	• Responding to light, sound, or smell
This control is done by two main systems:
	• Nervous system
	• Endocrine system
The nervous system provides quick responses, while the endocrine system provides slow and long-lasting responses.

2. Nervous System
The nervous system controls and coordinates all activities of the body. It helps the body respond to stimuli.
A stimulus is any change in the environment that causes a response.
Example:
Heat, light, sound, smell, and touch are stimuli.
The nervous system performs three main functions:
1. Receiving information
Sense organs receive information from the environment.
2. Processing information
The brain and spinal cord process the information.
3. Responding to information
Muscles and glands respond accordingly.
Example:
When you touch a hot object, the nervous system quickly sends signals, and you remove your hand.

3. Structure of Neuron
A neuron is the basic unit of the nervous system. It is also called a nerve cell.
Neurons carry messages in the form of electrical impulses.
A neuron has three main parts:
1. Dendrites:
Dendrites receive signals from other neurons or sense organs.
2. Cell body (Cyton):
It contains the nucleus and controls the activities of the neuron.
3. Axon:
Axon carries impulses away from the cell body to muscles or other neurons.
The axon may be covered with a myelin sheath, which helps in faster transmission of impulses.
Neurons are specialized to transmit information quickly.

4. Types of Nervous System
The human nervous system is divided into two main parts:
	1. Central Nervous System (CNS)
	2. Peripheral Nervous System (PNS)

A. Central Nervous System (CNS)
The central nervous system consists of:
	• Brain
	• Spinal cord
Functions:
	• Controls body activities
	• Processes information
	• Makes decisions
The brain is the main control center of the body.
The spinal cord connects the brain to the rest of the body.

B. Peripheral Nervous System (PNS)
The peripheral nervous system consists of nerves that connect the brain and spinal cord to other parts of the body.
Functions:
	• Carries messages to and from CNS
	• Controls voluntary and involuntary actions
Example:
Movement of hands and legs.

5. Brain and Its Parts
The brain is the main control center of the nervous system. It controls all activities of the body such as thinking, movement, breathing, and emotions.
The brain is located inside the skull, which protects it from injury.
The brain has three main parts:
	• Forebrain
	• Midbrain
	• Hindbrain

A. Forebrain
The forebrain is the largest part of the brain. It controls thinking, intelligence, memory, emotions, and voluntary actions.
Functions of forebrain:
	• Thinking and decision making
	• Memory and learning
	• Control of voluntary movements
	• Processing sensory information
Example: Writing, reading, and solving problems.
The cerebrum is the main part of the forebrain.

B. Midbrain
The midbrain connects the forebrain and hindbrain.
Functions:
	• Controls reflex movements of eyes and head
	• Responds to visual and sound stimuli
Example: Turning your head towards sound.

C. Hindbrain
The hindbrain controls involuntary actions.
Main parts of hindbrain:
	• Cerebellum
	• Pons
	• Medulla
Functions:
Cerebellum:
	• Controls balance and posture
	• Coordinates muscle movements
Medulla:
	• Controls breathing
	• Controls heartbeat
These actions happen automatically.

6. Spinal Cord
The spinal cord is a long tube-like structure that connects the brain to the rest of the body.
Functions:
	• Carries messages between brain and body
	• Controls reflex actions
It is protected by the vertebral column (backbone).

7. Reflex Action
Reflex action is a quick, automatic response to a stimulus without conscious thinking.
Example:
	• Pulling hand away from hot object
	• Blinking eyes when dust enters
Reflex actions help protect the body from harm.
These actions are controlled by the spinal cord.
Reflex actions are very fast.

8. Reflex Arc
Reflex arc is the path followed by nerve impulses during reflex action.
Parts of reflex arc:
	1. Receptor – detects stimulus
	2. Sensory neuron – carries impulse to spinal cord
	3. Spinal cord – processes impulse
	4. Motor neuron – carries impulse to muscle
	5. Effector – muscle or gland that responds
Example:
Touching a hot object → hand moves away.

9. Voluntary and Involuntary Actions
Voluntary Actions
Voluntary actions are actions that are under our control.
Example:
	• Walking
	• Writing
	• Speaking
These actions are controlled by the brain.

Involuntary Actions
Involuntary actions are actions that occur automatically without our control.
Example:
	• Heartbeat
	• Breathing
	• Digestion
These actions are controlled by the medulla and autonomic nervous system.

10. Endocrine System
The endocrine system controls body activities using hormones.
It consists of glands called endocrine glands.
These glands release hormones directly into the blood.
Hormones are chemical messengers.
They control:
	• Growth
	• Development
	• Metabolism
	• Reproduction
Endocrine system works slower than nervous system but effects last longer.

11. Major Endocrine Glands and Their Functions
Pituitary Gland
Called the master gland.
Controls other glands and growth.

Thyroid Gland
Controls metabolism.
Uses iodine to produce hormone called thyroxine.
Deficiency causes goitre.

Pancreas
Produces insulin.
Insulin controls blood sugar level.
Deficiency causes diabetes.

Adrenal Gland
Produces adrenaline.
Controls stress and emergency responses.
Example:
Faster heartbeat during fear.

Testes (in males)
Produces testosterone.
Controls male characteristics.

Ovaries (in females)
Produces estrogen.
Controls female characteristics.

12. Coordination in Plants
Plants also show control and coordination but do not have a nervous system.
Plants respond to stimuli such as light, water, gravity, and touch.
These responses are called tropisms.

Types of Tropisms
Phototropism: Response to light
Example: Plant bends towards light
Geotropism: Response to gravity
Example: Roots grow downward
Hydrotropism: Response to water
Example: Roots grow towards water
Thigmotropism: Response to touch
Example: Climbing plants wrap around support

Plant Hormones
Plants use hormones for coordination.
Examples:
Auxin – promotes growth
Gibberellin – promotes stem growth
Cytokinin – promotes cell division
Abscisic acid – slows growth


Class 10 Science Test Paper
Chapter 6: Control and Coordination
Time: 1 Hour
Maximum Marks: 30

Section A: Multiple Choice Questions (1 mark each)
(5 × 1 = 5 marks)
Choose the correct option.
	1. What is the basic unit of the nervous system?
a) Brain
b) Neuron
c) Heart
d) Hormone

	2. Which part of the brain controls thinking and memory?
a) Cerebellum
b) Medulla
c) Cerebrum
d) Spinal cord

	3. Reflex actions are controlled by:
a) Brain
b) Heart
c) Spinal cord
d) Lungs

	4. Which hormone controls blood sugar level?
a) Thyroxine
b) Insulin
c) Adrenaline
d) Estrogen

	5. Response of plants to light is called:
a) Hydrotropism
b) Geotropism
c) Phototropism
d) Thigmotropism

Section B: Very Short Answer Questions (2 marks each)
(5 × 2 = 10 marks)
	6. Define control and coordination.

	7. What is a neuron?

	8. What is reflex action?

	9. Name the master gland of the body.

	10. What are hormones?

Section C: Short Answer Questions (3 marks each)
(3 × 3 = 9 marks)
	11. Write three functions of the brain.

	12. Explain reflex arc.

	13. Write three differences between nervous system and endocrine system.

Section D: Long Answer Question (6 marks)
(1 × 6 = 6 marks)
	14. Explain the endocrine system and name four endocrine glands with their functions.`,
  '7': `Chapter 7: How Do Organisms Reproduce?

1. Introduction to Reproduction
Reproduction is the process by which living organisms produce new individuals of their own kind.
It is one of the most important characteristics of living organisms. Reproduction ensures that species continue to exist on Earth.
Without reproduction, organisms would eventually disappear and species would become extinct.
Reproduction helps in:
	• Continuation of species
	• Transfer of genetic information from parents to offspring
	• Maintaining population
Example: Humans produce babies, plants produce seeds.
Reproduction does not help an individual organism survive, but it helps the species survive.

2. Importance of Reproduction
Reproduction is important for several reasons.
1. Continuity of species
Reproduction ensures that organisms continue to exist generation after generation.
2. Transfer of hereditary information
Parents pass their genes to offspring. This maintains characteristics of the species.
3. Variation
Reproduction creates variations. Variations help organisms adapt to environmental changes and survive better.
Example: Some plants may survive drought better due to variation.
4. Maintaining population balance
Reproduction replaces organisms that die and maintains population.

3. Types of Reproduction
There are two main types of reproduction:
	1. Asexual reproduction
	2. Sexual reproduction

A. Asexual Reproduction
Asexual reproduction is reproduction in which only one parent is involved.
In this type, offspring are genetically identical to the parent. These identical organisms are called clones.
There is no fusion of male and female gametes.
Asexual reproduction is faster and simpler.
Examples:
	• Amoeba
	• Bacteria
	• Hydra
	• Yeast

B. Sexual Reproduction
Sexual reproduction involves two parents: one male and one female.
In this type, male and female gametes fuse to form a zygote.
The zygote develops into a new organism.
Sexual reproduction produces variation.
Example:
Humans reproduce sexually.

4. Methods of Asexual Reproduction
There are several methods of asexual reproduction:
	• Binary fission
	• Multiple fission
	• Budding
	• Fragmentation
	• Regeneration
	• Spore formation
	• Vegetative propagation

A. Binary Fission
Binary fission is the process in which one organism divides into two equal parts.
Example: Amoeba
Steps:
	• Nucleus divides into two
	• Cell divides into two daughter cells
Each daughter cell becomes a new organism.

B. Multiple Fission
In multiple fission, one organism divides into many daughter cells.
Example: Plasmodium (malaria parasite)
Many new organisms are formed at the same time.

C. Budding
In budding, a small outgrowth called bud develops on the parent body.
The bud grows and separates to form a new organism.
Example: Hydra, Yeast

D. Fragmentation
In fragmentation, the parent body breaks into pieces, and each piece develops into a new organism.
Example: Spirogyra (algae)

E. Regeneration
Regeneration is the ability of an organism to regrow lost body parts.
Example: Planaria
Each part can develop into a new organism.

F. Spore Formation
Spores are small reproductive structures.
They can grow into new organisms under favorable conditions.
Example: Fungi (Rhizopus)
Spores are protected by thick walls.

G. Vegetative Propagation
Vegetative propagation is reproduction in plants using parts like stem, root, or leaf.
Examples:
	• Potato (stem)
	• Bryophyllum (leaf)
	• Sugarcane (stem)
This method produces identical plants.

5. Sexual Reproduction
Sexual reproduction is the process in which two parents (male and female) are involved in producing offspring.
In sexual reproduction, special reproductive cells called gametes are formed. The male gamete and female gamete fuse together to form a zygote. This process is called fertilization.
The zygote then grows and develops into a new organism.
Sexual reproduction creates variations in offspring. These variations help organisms adapt and survive in changing environments.
Examples:
	• Humans
	• Animals
	• Flowering plants
Sexual reproduction is slower than asexual reproduction but produces genetically different offspring.

6. Human Reproductive System
The human reproductive system helps in reproduction and production of offspring.
Humans reproduce sexually and have separate reproductive organs in males and females.
Functions of reproductive system:
	• Production of gametes (sperm and egg)
	• Fertilization
	• Development of baby
The reproductive system becomes active during puberty.
Puberty is the stage when the body becomes capable of reproduction.

7. Male Reproductive System
The male reproductive system produces male gametes called sperms.
Main parts:
	• Testes
	• Scrotum
	• Vas deferens
	• Urethra
	• Penis

Functions of each part:
Testes:
Produce sperms and male hormone testosterone.
Scrotum:
Holds testes outside the body and maintains proper temperature for sperm production.
Vas deferens:
Carries sperms from testes to urethra.
Urethra:
Carries sperms outside the body.
Penis:
Helps in transfer of sperms to female body.

8. Female Reproductive System
The female reproductive system produces female gametes called eggs (ova).
Main parts:
	• Ovaries
	• Fallopian tubes
	• Uterus
	• Vagina

Functions of each part:
Ovaries:
Produce eggs and female hormones (estrogen and progesterone).
Fallopian tubes:
Carry egg from ovary to uterus. Fertilization occurs here.
Uterus:
Baby develops here.
Vagina:
Receives sperms and serves as birth canal.

9. Gametes
Gametes are reproductive cells.
Types:
	• Male gamete – sperm
	• Female gamete – egg (ovum)
Sperm is small and motile. Egg is large and non-motile.
Each gamete contains half the genetic information.
When gametes fuse, full genetic information is restored.

10. Fertilization
Fertilization is the fusion of male gamete and female gamete to form a zygote.
In humans, fertilization occurs in the fallopian tube.
Steps:
	• Sperm reaches egg
	• Sperm fuses with egg
	• Zygote is formed
The zygote divides and develops into an embryo.
The embryo grows into a baby in the uterus.

11. Menstruation
Menstruation is the monthly process in females in which the inner lining of the uterus breaks down and is released from the body as blood and tissue.
This happens when fertilization does not occur.
Every month, the uterus prepares itself for pregnancy by forming a thick lining. If the egg is not fertilized by sperm, this lining is not needed and is removed from the body.
This process is called menstruation or menstrual cycle.
Important points:
	• It usually starts at puberty (around 10–14 years)
	• It occurs every 28–30 days
	• It lasts about 3–5 days
	• It stops during pregnancy
	• It ends at menopause (around 45–50 years)
Menstruation is a natural and healthy process.

12. Development of Embryo
After fertilization, a zygote is formed.
The zygote divides repeatedly to form an embryo.
The embryo moves to the uterus and attaches to its wall. This process is called implantation.
The embryo receives nutrition from the mother through a special structure called placenta.
Functions of placenta:
	• Provides oxygen to embryo
	• Provides nutrients
	• Removes waste
The embryo gradually develops into a fetus.
After about 9 months, the baby is born.

13. Puberty and Changes During Puberty
Puberty is the stage when the body becomes capable of reproduction.
During puberty, many physical and hormonal changes occur.
Changes in boys:
	• Growth of facial hair
	• Deepening of voice
	• Development of muscles
	• Production of sperms
Changes in girls:
	• Development of breasts
	• Start of menstruation
	• Widening of hips
	• Production of eggs
These changes occur due to hormones.

14. Reproductive Health
Reproductive health means maintaining cleanliness and proper functioning of reproductive organs.
It is important for overall health and well-being.
Ways to maintain reproductive health:
	• Maintain personal hygiene
	• Eat healthy food
	• Exercise regularly
	• Avoid infections
	• Get proper medical care
Reproductive health helps prevent diseases and ensures healthy reproduction.

15. Methods of Contraception
Contraception is the method used to prevent pregnancy.
Contraceptive methods help in family planning and population control.
Types of contraceptive methods:

A. Barrier Methods
These methods prevent sperm from reaching egg.
Examples:
	• Condoms
	• Diaphragm
These also prevent sexually transmitted diseases.

B. Chemical Methods
These methods use medicines or hormones.
Examples:
	• Oral contraceptive pills
They prevent release of eggs.

C. Surgical Methods
These are permanent methods.
Examples:
	• Vasectomy (in males)
	• Tubectomy (in females)
These block transport of gametes.

D. Intrauterine Devices (IUDs)
Devices placed inside uterus.
Example:
	• Copper-T
Prevents fertilization.

16. Sexually Transmitted Diseases (STDs)
Sexually transmitted diseases are diseases spread through sexual contact.
Examples:
	• AIDS
	• Gonorrhea
	• Syphilis
These diseases are caused by bacteria or viruses.

Prevention of STDs
	• Use condoms
	• Maintain hygiene
	• Avoid unsafe sexual contact
	• Get medical treatment
STDs can be dangerous if not treated.


Class 10 Science Test Paper
Chapter 7: How Do Organisms Reproduce?
Time: 1 Hour
Maximum Marks: 30

Section A: Multiple Choice Questions (1 mark each)
(5 × 1 = 5 marks)
Choose the correct option.
	1. Reproduction helps in:
a) Growth of individual
b) Continuation of species
c) Digestion
d) Respiration

	2. Which of the following is an example of asexual reproduction?
a) Fertilization
b) Budding
c) Fusion of gametes
d) Pollination

	3. Male reproductive cell is called:
a) Ovum
b) Egg
c) Sperm
d) Zygote

	4. Fertilization occurs in:
a) Uterus
b) Ovary
c) Fallopian tube
d) Vagina

	5. Which method prevents pregnancy?
a) Respiration
b) Digestion
c) Contraception
d) Excretion

Section B: Very Short Answer Questions (2 marks each)
(5 × 2 = 10 marks)
	6. Define reproduction.

	7. What is fertilization?

	8. What is puberty?

	9. Name one sexually transmitted disease.

	10. What is vegetative propagation?

Section C: Short Answer Questions (3 marks each)
(3 × 3 = 9 marks)
	11. Write three differences between asexual and sexual reproduction.

	12. Explain binary fission with example.

	13. Write three functions of female reproductive system.

Section D: Long Answer Question (6 marks)
(1 × 6 = 6 marks)
	14. Explain the male reproductive system with functions of its parts.`,
  '8': `Chapter 8: Heredity and Evolution

1. Introduction to Heredity
Heredity is the process by which characteristics are passed from parents to their offspring.
These characteristics are passed through genes. Genes are present on chromosomes inside the nucleus of cells.
Because of heredity, children resemble their parents in many ways.
Examples:
	• Eye color
	• Hair color
	• Height
	• Skin color
For example, a child may have the same eye color as their parents.
Heredity ensures continuity of characteristics from one generation to the next.

2. Importance of Heredity
Heredity is important for several reasons.
1. Transfer of characteristics
Heredity helps transfer physical and biological traits from parents to offspring.
Example: Hair type, height.
2. Continuity of species
Heredity ensures that species maintain their characteristics over generations.
3. Basis of evolution
Heredity allows variations to be passed on, which helps in evolution.
4. Maintains similarities and differences
Offspring resemble parents but are not exactly identical.

3. Variations
Variation means differences in characteristics among individuals of the same species.
No two individuals are exactly the same, except identical twins.
Examples of variation:
	• Different heights
	• Different eye colors
	• Different skin tones
Variations occur due to differences in genes and environmental factors.
Variation is important because it helps organisms survive in changing environments.
For example, some organisms may survive better in harsh conditions due to variation.

4. Types of Variations
There are two main types of variations:
	1. Inherited variations
	2. Acquired variations

A. Inherited Variations
Inherited variations are variations passed from parents to offspring through genes.
These variations are permanent and can be passed to future generations.
Examples:
	• Eye color
	• Blood group
	• Hair color
Inherited variations play an important role in evolution.

B. Acquired Variations
Acquired variations are variations that develop during the lifetime of an organism.
These variations are caused by environmental factors, lifestyle, and habits.
Examples:
	• Muscles developed through exercise
	• Scars
	• Tanned skin
Acquired variations are not passed to offspring.

5. Mendel and His Experiments
Gregor Mendel is known as the Father of Genetics. He studied how traits are inherited from parents to offspring.
He performed experiments on pea plants because they have clear and easily observable traits.
Examples of traits Mendel studied:
	• Tall and short plants
	• Round and wrinkled seeds
	• Yellow and green seeds
Mendel cross-bred pea plants with different traits and observed how traits appeared in the next generations.
For example, he crossed a tall plant with a short plant.
First generation (F₁ generation):
All plants were tall.
Second generation (F₂ generation):
Both tall and short plants appeared.
This showed that traits are controlled by factors (genes), and some traits are dominant while others are recessive.

6. Genes
Genes are units of heredity that carry information about traits.
Genes are present on chromosomes inside the nucleus.
Each gene controls a specific trait.
For every trait, an organism has two genes:
	• One from the mother
	• One from the father
Genes determine characteristics such as:
	• Height
	• Eye color
	• Hair color
Genes pass information from parents to offspring.

7. Dominant and Recessive Traits
Traits can be dominant or recessive.

Dominant Trait
A dominant trait is the trait that appears in the offspring even if only one gene is present.
It hides the recessive trait.
Example:
Tallness is dominant over shortness.
It is represented by capital letters (T).

Recessive Trait
A recessive trait appears only when both genes are recessive.
It is hidden if a dominant gene is present.
Example:
Shortness is recessive.
It is represented by small letters (t).

Example:
TT → Tall
Tt → Tall
tt → Short

8. Laws of Inheritance
Mendel gave laws that explain inheritance of traits.

Law of Dominance
This law states that dominant traits appear in the offspring, while recessive traits remain hidden.
Example:
Tall trait hides short trait.

Law of Segregation
This law states that genes separate during gamete formation.
Each gamete receives only one gene.
These genes combine again during fertilization.

9. Punnett Square
Punnett square is a diagram used to predict inheritance of traits.
It shows possible gene combinations in offspring.
Example:
Cross between Tt and Tt
	T	t
T	TT	Tt
t	Tt	tt
Results:
	• TT → Tall
	• Tt → Tall
	• Tt → Tall
	• tt → Short
Ratio:
3 Tall : 1 Short
This is called monohybrid cross.
Punnett square helps predict probability of traits.

10. Sex Determination in Humans
Sex determination is the process that decides whether a baby will be male or female.
In humans, sex is determined by special chromosomes called sex chromosomes.
Humans have 23 pairs of chromosomes:
	• 22 pairs are autosomes
	• 1 pair is sex chromosomes
Sex chromosomes are:
	• XX in females
	• XY in males

Role of Male and Female in Sex Determination
Female produces only one type of gamete: X
Male produces two types of gametes: X and Y
During fertilization:
	• X (female) + X (male) = XX (Female child)
	• X (female) + Y (male) = XY (Male child)
Therefore, the father determines the sex of the child.

11. Evolution
Evolution is the process of gradual change in living organisms over millions of years.
Evolution results in the formation of new species from existing species.
Evolution occurs due to variations and natural selection.
Example:
Modern humans evolved from ancestors over millions of years.
Evolution helps organisms adapt to their environment.

12. Natural Selection
Natural selection is the process by which organisms with favorable traits survive and reproduce, while others do not.
This concept was explained by Charles Darwin.
According to natural selection:
	• Organisms with useful variations survive
	• Organisms without useful variations may die
Example:
Giraffes with longer necks could reach food easily and survived better.
Natural selection leads to evolution.

13. Speciation
Speciation is the process of formation of new species.
It happens when groups of the same species become separated and develop different characteristics over time.
Causes of speciation:
	• Geographical isolation
	• Genetic changes
	• Environmental differences
Example:
Animals separated by mountains or rivers may evolve into different species.

14. Evidence of Evolution
Scientists use different types of evidence to support evolution.

A. Fossils
Fossils are preserved remains of ancient organisms.
They show how organisms looked in the past.
Fossils help understand evolutionary history.
Example:
Dinosaur fossils

B. Homologous Organs
Homologous organs have similar structure but different functions.
Example:
	• Human hand
	• Whale flipper
	• Bat wing
This shows common ancestry.

C. Analogous Organs
Analogous organs have different structure but same function.
Example:
	• Wings of birds
	• Wings of insects
This shows different evolutionary origin.

D. Vestigial Organs
Vestigial organs are organs that have no function but were useful in ancestors.
Example:
	• Appendix in humans
	• Wisdom teeth
These show evolution.


Class 10 Science Test Paper
Chapter 8: Heredity and Evolution
Time: 1 Hour
Maximum Marks: 30

Section A: Multiple Choice Questions (1 mark each)
(5 × 1 = 5 marks)
Choose the correct option.
	1. Heredity is the transfer of characteristics from:
a) Teacher to student
b) Parents to offspring
c) Plants to soil
d) Environment to organism

	2. Who is known as the Father of Genetics?
a) Charles Darwin
b) Gregor Mendel
c) Isaac Newton
d) Albert Einstein

	3. Which trait appears only when both genes are recessive?
a) Dominant trait
b) Recessive trait
c) Acquired trait
d) Genetic trait

	4. Which chromosomes determine the sex of humans?
a) Autosomes
b) Sex chromosomes
c) Genes
d) Cells

	5. Fossils provide evidence of:
a) Respiration
b) Digestion
c) Evolution
d) Excretion

Section B: Very Short Answer Questions (2 marks each)
(5 × 2 = 10 marks)
	6. Define heredity.

	7. What is a gene?

	8. What is variation?

	9. Define evolution.

	10. What is natural selection?

Section C: Short Answer Questions (3 marks each)
(3 × 3 = 9 marks)
	11. Write three differences between inherited and acquired traits.

	12. Explain dominant and recessive traits with example.

	13. Explain sex determination in humans.

Section D: Long Answer Question (6 marks)
(1 × 6 = 6 marks)
	14. Explain Mendel’s experiment and state his laws of inheritance.`,
  '9': `Chapter 9: Light—Reflection and Refraction

1. Introduction to Light
Light is a form of energy that enables us to see objects.
Without light, we cannot see anything. Light travels from a source and enters our eyes, allowing us to see objects.
Examples of sources of light:
	• Sun (natural source)
	• Bulb (artificial source)
	• Candle
	• Torch
Objects that produce light are called luminous objects.
Example: Sun, bulb
Objects that do not produce light but reflect light are called non-luminous objects.
Example: Moon, book, table
We see non-luminous objects because they reflect light into our eyes.

2. Properties of Light
Light has several important properties.
1. Light travels in a straight line
Light always travels in straight lines. This is called rectilinear propagation of light.
Example:
Shadows are formed because light travels in straight lines.

2. Light can be reflected
Reflection is the bouncing back of light when it strikes a surface.
Example:
Mirror reflects light.

3. Light can be refracted
Refraction is the bending of light when it passes from one medium to another.
Example:
A pencil appears bent in water.

4. Light travels very fast
Speed of light in vacuum is:
300,000 km/s (3 × 10⁸ m/s)

3. Reflection of Light
Reflection of light is the bouncing back of light when it strikes a surface.
When light falls on a mirror, it reflects back.
Example:
Seeing your image in a mirror.
Important terms:
Incident ray:
Ray of light that falls on the surface.
Reflected ray:
Ray of light that bounces back.
Normal:
An imaginary line drawn perpendicular to the surface.
Angle of incidence (i):
Angle between incident ray and normal.
Angle of reflection (r):
Angle between reflected ray and normal.

4. Laws of Reflection
There are two laws of reflection.

First Law of Reflection
The angle of incidence is equal to the angle of reflection.
Angle of incidence = Angle of reflection
i = r
Example:
If light strikes at 30°, it reflects at 30°.

Second Law of Reflection
The incident ray, reflected ray, and normal lie in the same plane.
This means they all lie on the same flat surface.

5. Image Formation by Plane Mirror
A plane mirror is a flat, smooth mirror.
Example: Bathroom mirror
When light rays from an object strike a plane mirror, they reflect back and form an image.
The reflected rays appear to come from behind the mirror. This creates an image that we see.
Example:
When you stand in front of a mirror, you see your image behind the mirror.
This image is formed due to reflection of light.

6. Characteristics of Image Formed by Plane Mirror
The image formed by a plane mirror has the following characteristics:
1. Virtual image
The image cannot be obtained on a screen.
2. Erect image
The image is upright, not upside down.
3. Same size as object
Image size is equal to object size.
4. Same distance behind mirror
Image forms at the same distance behind the mirror as the object is in front.
Example:
If object is 5 cm in front, image is 5 cm behind.
5. Laterally inverted
Left side appears right and right appears left.
Example:
Your right hand appears as left hand in mirror.

7. Spherical Mirrors
Spherical mirrors are mirrors whose reflecting surface is curved.
They are part of a sphere.
There are two types of spherical mirrors:
	1. Concave mirror
	2. Convex mirror
These mirrors are commonly used in daily life.

Important Terms Related to Spherical Mirrors
1. Pole (P):
Center point of mirror.
2. Center of curvature (C):
Center of the sphere from which mirror is formed.
3. Radius of curvature (R):
Distance between pole and center of curvature.
4. Principal axis:
Straight line passing through pole and center of curvature.
5. Focus (F):
Point where reflected rays meet or appear to meet.

8. Concave Mirror
A concave mirror is a mirror that curves inward.
It is also called converging mirror because it converges (brings together) light rays.
Example:
Shaving mirror, dentist mirror

Properties of Concave Mirror
	• Can form real or virtual images
	• Can form inverted or erect images
	• Can form large or small images
Image formed depends on object position.

Uses of Concave Mirror
	• Shaving mirrors
	• Dentist mirrors
	• Headlights of vehicles
	• Solar furnaces
Concave mirrors can produce magnified images.

9. Convex Mirror
A convex mirror is a mirror that curves outward.
It is called diverging mirror because it spreads light rays.

Properties of Convex Mirror
	• Always forms virtual image
	• Always forms erect image
	• Always forms smaller image
Image forms behind the mirror.

Uses of Convex Mirror
	• Rear-view mirrors in vehicles
	• Security mirrors in shops
	• Road safety mirrors
Convex mirrors provide wide field of view.

Class 10 Science
Chapter 9: Light — Reflection and Refraction
Topics 10–14: Ray Diagrams, Mirror Formula, Magnification, Refraction, and Refractive Index

10. Ray Diagrams for Spherical Mirrors
Ray diagrams help us understand how images are formed.
There are two important rays:
Ray 1: Parallel ray
A ray parallel to principal axis reflects through focus (F).
Ray 2: Ray through focus
A ray passing through focus reflects parallel to principal axis.
Where these rays meet, image is formed.

Concave Mirror Ray Diagram Cases
Case 1: Object at infinity
Image forms at focus
Image is real, inverted, very small
Case 2: Object beyond center of curvature (C)
Image forms between C and F
Image is real, inverted, small
Case 3: Object at center of curvature (C)
Image forms at C
Image is real, inverted, same size
Case 4: Object between C and F
Image forms beyond C
Image is real, inverted, enlarged
Case 5: Object at focus (F)
Image forms at infinity
Case 6: Object between focus and pole
Image forms behind mirror
Image is virtual, erect, enlarged

Convex Mirror Ray Diagram
For convex mirror, image is always:
	• Virtual
	• Erect
	• Smaller
	• Formed behind mirror

11. Mirror Formula
The mirror formula is:
1/f = 1/v + 1/u
Where:
f = focal length
v = image distance
u = object distance
This formula is used to calculate image position.

12. Magnification
Magnification tells how large or small image is.
Formula:
m = height of image / height of object
Also,
m = v/u
If magnification is:
Positive → image is erect
Negative → image is inverted
If magnification > 1 → image enlarged
If magnification < 1 → image smaller

13. Refraction of Light
Refraction is bending of light when it passes from one medium to another.
Example:
Light bends when passing from air to water.
Reason:
Speed of light changes in different media.
Example:
Straw appears bent in water.

Laws of Refraction
There are two laws:
Law 1:
Incident ray, refracted ray, and normal lie in same plane.
Law 2 (Snell’s Law):
sin i / sin r = constant
This constant is called refractive index.

14. Refractive Index
Refractive index tells how much light bends.
Formula:
Refractive index (n) = speed of light in air / speed of light in medium
Higher refractive index → more bending
Example:
Glass has higher refractive index than air.

Class 10 Science
Chapter 9: Light — Reflection and Refraction
Test Paper

Section A: Very Short Answer Questions (1 mark each)
Q1. What is reflection of light?
Q2. Define refraction of light.
Q3. What is the principal focus of a concave mirror?
Q4. Which mirror is used as rear-view mirror in vehicles?
Q5. What is refractive index?
Q6. What happens to light when it enters from air into water?
Q7. Write the mirror formula.
Q8. Define magnification.
Q9. Which mirror always forms virtual image?
Q10. What is the unit of focal length?

Section B: Short Answer Questions (2–3 marks each)
Q11. State the laws of reflection of light.
Q12. Differentiate between concave mirror and convex mirror.
Q13. Define the following terms:
a) Pole
b) Principal axis
c) Center of curvature
Q14. Why do objects appear bent in water?
Q15. Define focal length of a mirror.
Q16. What kind of image is formed by convex mirror? Write its properties.

Section C: Medium Answer Questions (3–5 marks each)
Q17. Draw ray diagram of image formed by concave mirror when object is placed beyond center of curvature.
Q18. Explain refraction with an example.
Q19. Explain magnification and write its formula.
Q20. Explain image formation by concave mirror when object is between focus and pole.

Section D: Numericals
Q21. An object is placed 20 cm from a concave mirror of focal length 10 cm. Find image distance.
Formula:
1/f = 1/v + 1/u

Q22. An object of height 4 cm forms image of height 2 cm. Find magnification.
Formula:
m = height of image / height of object

Q23. Speed of light in air = 3 × 10⁸ m/s
Speed of light in glass = 2 × 10⁸ m/s
Find refractive index.
Formula:
n = speed in air / speed in medium

Section E: Long Answer Questions (5 marks each)
Q24. Explain image formation by concave mirror for different object positions.
Q25. Explain laws of refraction.
Q26. Draw ray diagram for convex mirror and explain image formed.

Section F: Case-Based Question
A student looks into a spoon.
Outer surface shows small upright image.
Inner surface shows inverted image.
Q27. Answer the following:
a) Outer surface behaves like which mirror?
b) Inner surface behaves like which mirror?
c) Which mirror forms inverted image?
d) Which mirror forms virtual image?`,
  '10': `Chapter 10: The Human Eye and the Colourful World 

1. The Human Eye
The human eye is a sense organ that helps us see objects around us. It works like a camera. It captures light and sends signals to the brain, which helps us see images.
The eye allows us to see different colors, shapes, sizes, and distances.
The main functions of the human eye are:
	• To collect light from objects
	• To focus light on the retina
	• To convert light into electrical signals
	• To send signals to the brain
The brain then understands these signals and forms the image.

2. Structure of the Human Eye
The human eye has several important parts.
(a) Cornea
The cornea is the transparent front part of the eye. Light enters the eye through the cornea.
Functions:
	• Protects the eye
	• Helps in refraction of light

(b) Iris
The iris is the colored part of the eye. It controls the amount of light entering the eye.
It adjusts the size of the pupil.
Example:
	• Bright light → pupil becomes small
	• Dim light → pupil becomes large

(c) Pupil
The pupil is the small opening in the center of the iris.
Function:
	• Allows light to enter the eye

(d) Eye Lens
The eye lens is a transparent convex lens.
Function:
	• Focuses light on retina
	• Forms image

(e) Retina
The retina is the light-sensitive screen at the back of the eye.
Function:
	• Image is formed here
	• Converts light into signals

(f) Optic Nerve
The optic nerve carries signals from retina to brain.
The brain interprets signals and we see the image.

3. How the Human Eye Forms Image
The process of image formation:
	1. Light enters through cornea
	2. Passes through pupil
	3. Eye lens focuses light
	4. Image forms on retina
	5. Retina sends signals to brain
	6. Brain forms final image
The image formed on retina is:
	• Real
	• Inverted
	• Small
But brain makes it appear straight.

4. Power of Accommodation
Accommodation is the ability of the eye to change focal length to see objects at different distances.
The eye lens changes shape using muscles.
	• To see near objects → lens becomes thick
	• To see distant objects → lens becomes thin
This helps us see clearly at all distances.

5. Near Point and Far Point
Near Point
The minimum distance at which eye can see clearly.
For normal human eye:
Near point = 25 cm

Far Point
The maximum distance at which eye can see clearly.
For normal eye:
Far point = infinity

6. Defects of Vision
Sometimes eye cannot see clearly. These problems are called defects of vision.
Main defects:
	• Myopia (Near-sightedness)
	• Hypermetropia (Far-sightedness)
	• Presbyopia

7. Myopia (Near-sightedness)
In this defect, person can see near objects clearly but cannot see distant objects clearly.
Cause:
Image forms in front of retina.
Reason:
	• Eye lens too powerful OR
	• Eyeball too long
Correction:
Using concave lens

8. Hypermetropia (Far-sightedness)
In this defect, person can see distant objects clearly but cannot see near objects clearly.
Cause:
Image forms behind retina.
Reason:
	• Eye lens too weak OR
	• Eyeball too short
Correction:
Using convex lens

9. Presbyopia
Presbyopia is a defect of vision in old age. In this defect, a person cannot see nearby objects clearly.
Cause:
As people grow older, the eye muscles become weak and the eye lens loses its flexibility. Because of this, the lens cannot change its shape properly.
Result:
The eye cannot focus light correctly on the retina.
Correction:
It is corrected using bifocal lenses.
Bifocal lenses have two parts:
	• Upper part → concave lens (for distant vision)
	• Lower part → convex lens (for near vision)
Example:
Old people use reading glasses.

10. Refraction of Light through a Prism
A prism is a transparent triangular glass object.
When white light passes through a prism, it bends due to refraction.
The light bends twice:
	1. When entering the prism
	2. When leaving the prism
This bending causes separation of colors.

11. Dispersion of Light
Dispersion is the splitting of white light into its seven colors.
These seven colors are:
V – Violet
I – Indigo
B – Blue
G – Green
Y – Yellow
O – Orange
R – Red
This is called VIBGYOR.
Reason:
Each color bends differently because each has different wavelength.
Violet bends the most.
Red bends the least.
Example:
Rainbow formation

12. Spectrum
The band of seven colors formed after dispersion is called spectrum.
It is formed when white light passes through prism.
Order of colors:
Violet → Indigo → Blue → Green → Yellow → Orange → Red
Example:
Rainbow is a natural spectrum.

13. Recombination of Light
Recombination is the process of joining the seven colors back into white light.
This can be done using another prism.
When dispersed light passes through second prism, it combines and becomes white light again.
This proves that white light is made of seven colors.

14. Scattering of Light
Scattering is the spreading of light in different directions when it hits small particles.
Examples of particles:
	• Dust
	• Smoke
	• Air molecules
Short wavelength colors scatter more.
Blue light scatters more than red light.

15. Why is the Sky Blue?
The sky appears blue due to scattering of light.
When sunlight enters atmosphere, it hits air molecules.
Blue light has shorter wavelength, so it scatters more.
Because blue light scatters in all directions, sky appears blue.

16. Why Does the Sun Appear Red at Sunrise and Sunset?
At sunrise and sunset, sunlight travels longer distance in atmosphere.
Most of the blue light gets scattered away.
Only red light reaches our eyes.
Red light has longer wavelength and scatters less.
So sun appears red.

17. Tyndall Effect
Tyndall effect is the scattering of light by small particles in air.
It makes the path of light visible.
Examples:
	• Sunlight entering dusty room
	• Car headlights in fog
	• Torch light in smoke


Class 10 Science
Chapter 10: The Human Eye and the Colourful World
Test Paper

Section A: Very Short Answer Questions (1 mark each)
Q1. What is the function of retina?
Q2. What is accommodation?
Q3. What is the near point of a normal human eye?
Q4. What is the far point of a normal human eye?
Q5. Which lens is used to correct myopia?
Q6. Which lens is used to correct hypermetropia?
Q7. What is dispersion of light?
Q8. Name the seven colors of spectrum.
Q9. Why does sky appear blue?
Q10. What is Tyndall effect?

Section B: Short Answer Questions (2–3 marks each)
Q11. Explain the function of iris and pupil.
Q12. What is the role of eye lens?
Q13. Define myopia and its correction.
Q14. Define hypermetropia and its correction.
Q15. What is spectrum?
Q16. Explain scattering of light.

Section C: Medium Answer Questions (3–5 marks each)
Q17. Draw and explain structure of human eye.
Q18. Explain power of accommodation.
Q19. Explain dispersion of light through prism.
Q20. Explain why sun appears red at sunrise and sunset.

Section D: Long Answer Questions (5 marks each)
Q21. Explain defects of vision and their correction.
Include:
	• Myopia
	• Hypermetropia
	• Presbyopia

Q22. Explain scattering of light and Tyndall effect with examples.

Q23. Explain formation of spectrum and recombination of light.

Section E: Case-Based Questions
A student cannot see distant objects clearly but can see nearby objects clearly.
Answer the following:
Q24.
a) Name the defect
b) Where is image formed?
c) Which lens is used for correction?
d) Draw ray diagram (homework)

Sunlight passes through prism and forms seven colors.
Q25.
a) What is this process called?
b) What is the band of colors called?
c) Which color bends most?
d) Which color bends least?

Section F: Assertion and Reason Questions
Q26.
Assertion: Sky appears blue.
Reason: Blue light scatters more.
Options:
A. Both correct, reason correct explanation
B. Both correct, reason not explanation
C. Assertion correct, reason wrong
D. Assertion wrong, reason correct

Q27.
Assertion: Concave lens corrects myopia.
Reason: It diverges light rays.
Options:
A. Both correct, reason correct explanation
B. Both correct, reason not explanation
C. Assertion correct, reason wrong
D. Assertion wrong, reason correct`,
  '11': `Chapter 11: Electricity

1. Electric Current
Electric current is the flow of electric charge through a conductor.
In simple words, when electrons move through a wire, electric current is produced.
Example:
When you switch on a bulb, current flows and the bulb glows.

Definition
Electric current is defined as the amount of charge flowing through a conductor in unit time.
Formula:
I = Q / t
Where:
I = current
Q = charge
t = time

Unit of Electric Current
SI unit of current is Ampere (A).
1 Ampere means 1 Coulomb of charge flows in 1 second.

Instrument to Measure Current
Ammeter is used to measure electric current.
It is always connected in series.

2. Electric Circuit
An electric circuit is a closed path through which electric current flows.
Main components of a circuit:
	• Battery (source of energy)
	• Wire (conductor)
	• Switch (to open or close circuit)
	• Bulb (device that uses electricity)

Open Circuit
If switch is OFF, circuit is open and current does not flow.

Closed Circuit
If switch is ON, circuit is closed and current flows.

3. Electric Potential and Potential Difference
Electric potential is the amount of work done to move a unit charge from infinity to a point.
Potential difference is the difference in electric potential between two points.
It pushes current through the circuit.

Formula
V = W / Q
Where:
V = potential difference
W = work done
Q = charge

Unit
SI unit is Volt (V)

Instrument Used
Voltmeter is used to measure potential difference.
It is connected in parallel.

4. Ohm’s Law
Ohm’s Law states that:
The current flowing through a conductor is directly proportional to the potential difference across its ends, provided temperature remains constant.
Formula:
V = IR
Where:
V = voltage
I = current
R = resistance

5. Resistance
Resistance is the property of a conductor to oppose the flow of current.
Example:
Thin wire has more resistance than thick wire.

Factors Affecting Resistance
Resistance depends on:
	1. Length of wire
More length → more resistance
	2. Thickness of wire
More thickness → less resistance
	3. Material of wire
Different materials have different resistance
	4. Temperature
Higher temperature → higher resistance

Unit of Resistance
SI unit is Ohm (Ω)

6. Resistor
Resistor is a device used to control current in a circuit.
It provides resistance.
Symbol:
Zig-zag line

7. Rheostat
Rheostat is a variable resistor.
It is used to change resistance and control current.
Example:
Fan speed regulator

8. Ohm’s Law Graph
Graph between voltage (V) and current (I) is a straight line.
This shows that voltage is directly proportional to current.
Slope of graph gives resistance.

9. Combination of Resistors in Series
When resistors are connected one after another in a single path, they are said to be connected in series.
In series combination, current is same in all resistors.
Example:
Battery → Resistor 1 → Resistor 2 → Resistor 3 → Back to battery

Total Resistance in Series
Total resistance is equal to sum of individual resistances.
Formula:
R = R₁ + R₂ + R₃
This means total resistance increases in series.

Example
If
R₁ = 2 Ω
R₂ = 3 Ω
Total resistance = 2 + 3 = 5 Ω

Characteristics of Series Combination
	• Current is same everywhere
	• Total resistance increases
	• Voltage divides among resistors

10. Combination of Resistors in Parallel
When resistors are connected side by side, they are said to be connected in parallel.
In parallel combination, voltage is same across all resistors.

Formula for Parallel Combination
1/R = 1/R₁ + 1/R₂ + 1/R₃
Total resistance decreases in parallel.

Example
If
R₁ = 2 Ω
R₂ = 2 Ω
1/R = 1/2 + 1/2
1/R = 1
R = 1 Ω

Characteristics of Parallel Combination
	• Voltage is same across each resistor
	• Total resistance decreases
	• Current divides among resistors

11. Heating Effect of Electric Current
When electric current flows through a conductor, heat is produced. This is called heating effect of electric current.
Reason:
Resistance opposes flow of current, producing heat.
Example:
	• Electric heater
	• Iron
	• Electric stove

Formula for Heat Produced
H = I²Rt
Where:
H = heat
I = current
R = resistance
t = time

12. Electric Power
Electric power is the rate at which electrical energy is used.
Formula:
P = VI
Where:
P = power
V = voltage
I = current

Other formulas:
P = I²R
P = V²/R

Unit of Electric Power
SI unit is Watt (W)
1 kilowatt (kW) = 1000 W

13. Electric Energy
Electric energy is the total energy used by electrical devices.
Formula:
Energy = Power × Time
E = P × t

Unit of Electric Energy
SI unit = Joule (J)
Commercial unit = kilowatt-hour (kWh)

14. Commercial Unit of Electricity
Commercial unit of electricity is kilowatt-hour (kWh).
1 kWh = 1 unit
This is the unit used in electricity bills.

Meaning of 1 kWh
If a 1000 W device runs for 1 hour, it uses 1 kWh energy.
Example:
100 W bulb used for 10 hours
Energy = 100 × 10 = 1000 Wh = 1 kWh

15. Electric Fuse
Electric fuse is a safety device.
It protects circuit from excessive current.
Fuse melts if current is too high and stops the circuit.
Example:
Used in homes

16. Advantages of Parallel Circuits in Homes
House wiring uses parallel circuits because:
	• Each appliance gets same voltage
	• If one appliance fails, others still work
	• Devices can be controlled separately


Class 10 Science
Chapter 11: Electricity
Test Paper

Section A: Very Short Answer Questions (1 mark each)
Q1. Define electric current.
Q2. Write the formula of electric current.
Q3. What is SI unit of current?
Q4. Name the instrument used to measure current.
Q5. What is potential difference?
Q6. What is SI unit of resistance?
Q7. Write Ohm’s law.
Q8. What is electric power?
Q9. What is commercial unit of electricity?
Q10. What is the function of electric fuse?

Section B: Short Answer Questions (2–3 marks each)
Q11. Define electric circuit. Draw its diagram.
Q12. What is resistance? Write factors affecting resistance.
Q13. Define Ohm’s law with formula.
Q14. Differentiate between series and parallel combination.
Q15. What is heating effect of electric current?
Q16. Why are parallel circuits used in homes?

Section C: Medium Answer Questions (3–5 marks each)
Q17. Explain series combination of resistors with formula.
Q18. Explain parallel combination of resistors with formula.
Q19. Define electric power. Write formulas and unit.
Q20. Explain electric energy and commercial unit.

Section D: Numericals
Q21. A current of 2 A flows through a conductor for 5 seconds. Find charge.
Formula:
Q = I × t

Q22. A bulb operates at 220 V and 2 A. Find power.
Formula:
P = VI

Q23. Find resistance if voltage = 10 V and current = 2 A.
Formula:
R = V / I

Q24. Find energy used if power = 1000 W and time = 2 hours.
Formula:
Energy = Power × Time

Section E: Long Answer Questions (5 marks each)
Q25. Explain Ohm’s law with diagram and graph.
Q26. Explain heating effect of electric current with examples.
Q27. Explain advantages of parallel circuits in homes.

Section F: Case-Based Questions
An electric iron operates at 220 V and produces heat.
Q28. Answer the following:
a) What type of effect is used?
b) What is formula of power?
c) What is unit of power?
d) Why is fuse used?

Two resistors of 2 Ω and 3 Ω are connected in series.
Q29. Answer the following:
a) Find total resistance
b) Does resistance increase or decrease?
c) Is current same or different?
d) Write formula of series resistance

Section G: Assertion and Reason
Q30.
Assertion: Parallel combination has less resistance.
Reason: Current divides in parallel circuit.
Options:
A. Both correct, reason correct explanation
B. Both correct, reason not explanation
C. Assertion correct, reason wrong
D. Assertion wrong, reason correct

Q31.
Assertion: Fuse protects appliances.
Reason: Fuse melts at high current.
Options:
A. Both correct, reason correct explanation
B. Both correct, reason not explanation
C. Assertion correct, reason wrong
D. Assertion wrong, reason correct`,
  '12': `Chapter 12: Magnetic Effects of Electric Current

1. Magnet and Magnetism
A magnet is a material that attracts iron, nickel, and cobalt.
Example:
	• Bar magnet
	• Horseshoe magnet
Magnets have two poles:
	• North pole (N)
	• South pole (S)
Important properties:
	• Like poles repel each other
	• Unlike poles attract each other

2. Magnetic Field
The area around a magnet where its force can be felt is called magnetic field.
If you place a compass near a magnet, the needle moves. This shows magnetic field is present.

Magnetic Field Lines
Magnetic field is shown using magnetic field lines.
Properties:
	• Field lines go from North pole to South pole
	• They form closed curves
	• They never intersect each other
	• Closer lines mean stronger magnetic field

3. Magnetic Field Around a Current-Carrying Conductor
When electric current flows through a wire, it produces a magnetic field around it.
This was discovered by scientist Hans Christian Oersted.
Example:
If current flows in a wire, compass needle near it deflects.
This proves that electric current produces magnetic field.

4. Direction of Magnetic Field (Right-Hand Thumb Rule)
The right-hand thumb rule helps find direction of magnetic field.
Rule:
	• Hold wire in right hand
	• Thumb shows direction of current
	• Fingers show direction of magnetic field
This helps determine field direction.

5. Magnetic Field Around a Circular Loop
When current flows through a circular loop, magnetic field is produced around it.
Properties:
	• Field lines are circular near wire
	• Field becomes stronger at center
More current → stronger magnetic field
More loops → stronger magnetic field

6. Magnetic Field Around a Solenoid
A solenoid is a coil of many circular loops of wire.
It produces strong magnetic field when current flows through it.
Solenoid behaves like a bar magnet.
It has:
	• North pole
	• South pole
Inside solenoid, magnetic field is strong and uniform.

7. Electromagnet
An electromagnet is a magnet made using electric current.
It is made by passing current through a coil wrapped around iron core.
When current flows → magnet is formed
When current stops → magnet disappears

Uses of Electromagnets
	• Electric bell
	• Electric motor
	• Cranes to lift iron
	• Relays

8. Force on a Current-Carrying Conductor
When a current-carrying conductor is placed in magnetic field, it experiences a force.
This force can move the conductor.
This principle is used in electric motors.

Direction of Force (Fleming’s Left-Hand Rule)
Rule:
Stretch three fingers of left hand:
	• Thumb → direction of force
	• Forefinger → direction of magnetic field
	• Middle finger → direction of current
All three are perpendicular.

9. Electric Motor
An electric motor is a device that converts electrical energy into mechanical energy.
It works on the principle that a current-carrying conductor placed in a magnetic field experiences a force.
This force causes the conductor to move, and this movement produces mechanical energy.

Construction of Electric Motor
Main parts:
	1. Coil (armature) – current flows through it
	2. Magnet – produces magnetic field
	3. Split ring (commutator) – changes direction of current
	4. Battery – provides electric current
	5. Brushes – connect coil with battery

Working of Electric Motor
	• Current flows through coil
	• Magnetic field produces force on coil
	• Coil rotates
	• Split ring changes direction of current
	• Coil keeps rotating
This produces continuous motion.

Uses of Electric Motor
	• Electric fan
	• Mixer grinder
	• Washing machine
	• Water pump

10. Electromagnetic Induction
Electromagnetic induction is the process of producing electric current using magnetic field.
When a conductor moves in magnetic field, current is produced.
This was discovered by Michael Faraday.

Example
Moving a magnet inside a coil produces current.
This principle is used in generators.

11. Electric Generator
An electric generator converts mechanical energy into electrical energy.
It works on electromagnetic induction.

Construction of Generator
Main parts:
	• Coil
	• Magnet
	• Slip rings
	• Brushes
	• Shaft

Working of Generator
	• Coil rotates in magnetic field
	• Magnetic field produces current
	• Current flows through external circuit

Types of Generators
	1. AC Generator – produces alternating current
	2. DC Generator – produces direct current

Uses of Generator
	• Power plants
	• Electricity generation
	• Backup generators

12. Fleming’s Right-Hand Rule
This rule helps find direction of induced current.
Rule:
Stretch three fingers of right hand:
	• Thumb → direction of motion
	• Forefinger → direction of magnetic field
	• Middle finger → direction of current
All are perpendicular.

13. Domestic Electric Circuit
Domestic electric circuit supplies electricity to homes.
Electricity comes from power station to houses.
Main components:
	• Live wire
	• Neutral wire
	• Earth wire
	• Switch
	• Fuse

Live Wire
Carries current to appliance.
Color: Red or brown

Neutral Wire
Returns current to source.
Color: Black or blue

Earth Wire
Protects from electric shock.
Color: Green

14. Electric Fuse
Fuse is a safety device.
It protects appliances from excess current.
Fuse wire melts if current is too high.
This stops the circuit and prevents damage.

15. Earthing
Earthing is safety method to prevent electric shock.
Excess current goes to ground through earth wire.
This protects people and appliances.

16. Short Circuit and Overloading
Short Circuit
Occurs when live wire touches neutral wire.
This causes very high current.
It can cause fire.

Overloading
Occurs when too many devices are connected.
This increases current and can damage circuit.


Class 10 Science
Chapter 12: Magnetic Effects of Electric Current
Test Paper

Section A: Very Short Answer Questions (1 mark each)
Q1. What is a magnet?
Q2. Name the two poles of a magnet.
Q3. What is magnetic field?
Q4. Who discovered magnetic effect of electric current?
Q5. What is a solenoid?
Q6. What is an electromagnet?
Q7. What does electric motor convert?
Q8. What does electric generator convert?
Q9. What is electromagnetic induction?
Q10. What is the function of earth wire?

Section B: Short Answer Questions (2–3 marks each)
Q11. Define magnetic field lines. Write any two properties.
Q12. Explain right-hand thumb rule.
Q13. What is electromagnet? Write two uses.
Q14. Define electric motor.
Q15. What is electric generator?
Q16. What is earthing? Why is it important?

Section C: Medium Answer Questions (3–5 marks each)
Q17. Explain magnetic field around a current-carrying conductor.
Q18. Explain working of electric motor.
Q19. Explain electromagnetic induction with example.
Q20. Explain domestic electric circuit.

Section D: Long Answer Questions (5 marks each)
Q21. Explain construction and working of electric generator.
Q22. Explain Fleming’s left-hand rule with diagram.
Q23. Explain fuse and its importance.

Section E: Case-Based Questions
A current-carrying wire is placed near a compass.
The compass needle deflects.
Q24. Answer the following:
a) What does this show?
b) Who discovered this effect?
c) What is produced around the wire?
d) Name the rule to find direction

An electric fan uses an electric motor.
Q25. Answer the following:
a) What type of energy is used?
b) What type of energy is produced?
c) Name the device used
d) Write principle of motor

Section F: Assertion and Reason
Q26.
Assertion: Solenoid behaves like a magnet.
Reason: Current produces magnetic field.
Options:
A. Both correct, reason correct explanation
B. Both correct, reason not explanation
C. Assertion correct, reason wrong
D. Assertion wrong, reason correct

Q27.
Assertion: Fuse protects circuit.
Reason: Fuse melts at high current.
Options:
A. Both correct, reason correct explanation
B. Both correct, reason not explanation
C. Assertion correct, reason wrong
D. Assertion wrong, reason correct

Section G: Diagram-Based Questions
Q28. Draw and label:
a) Electric motor
b) Electric generator
c) Solenoid
d) Magnetic field around straight conductor
(Homework practice)

Answer Key (Short)
	1. Material that attracts iron
	2. North and South
	3. Region of magnetic force
	4. Hans Christian Oersted
	5. Coil of wire
	6. Magnet made using current
	7. Electrical → Mechanical energy
	8. Mechanical → Electrical energy
	9. Production of current using magnetic field
	10. Prevents electric shock
Q24.
a) Current produces magnetic field
b) Oersted
c) Magnetic field
d) Right-hand thumb rule
Q25.
a) Electrical energy
b) Mechanical energy
c) Electric motor
d) Force on current-carrying conductor`,
  '13': `Chapter 13: Our Environment 

1. Environment
Environment is everything that surrounds us.
It includes both living and non-living things.
Examples:
Living components:
	• Plants
	• Animals
	• Humans
	• Microorganisms
Non-living components:
	• Air
	• Water
	• Soil
	• Sunlight
All living organisms depend on environment for survival.

2. Ecosystem
An ecosystem is a system formed by interaction between living organisms and their environment.
It includes:
	• Living components (biotic components)
	• Non-living components (abiotic components)
Example:
Forest ecosystem
Pond ecosystem
Desert ecosystem
In ecosystem, all organisms depend on each other.

3. Components of Ecosystem
There are two main components:
(a) Biotic Components (Living Things)
These include:
	• Plants
	• Animals
	• Humans
	• Bacteria
They are living organisms.

(b) Abiotic Components (Non-living Things)
These include:
	• Air
	• Water
	• Soil
	• Sunlight
	• Temperature
They support life.

4. Types of Organisms in Ecosystem
There are three types:
	1. Producers
	2. Consumers
	3. Decomposers

(a) Producers
Producers are organisms that make their own food using sunlight.
Example:
Plants
Plants use photosynthesis to make food.
They are the main source of energy.

(b) Consumers
Consumers are organisms that depend on producers or other consumers for food.
Examples:
Humans, animals
Types of consumers:
Herbivores – eat plants
Example: cow, deer
Carnivores – eat animals
Example: lion, tiger
Omnivores – eat plants and animals
Example: humans, bear

(c) Decomposers
Decomposers break down dead plants and animals.
Examples:
Bacteria, fungi
They recycle nutrients back into soil.
They help maintain balance in ecosystem.

5. Food Chain
Food chain is a sequence of organisms where each organism eats the previous one.
Example:
Grass → Deer → Tiger
Grass is eaten by deer.
Deer is eaten by tiger.
This shows transfer of energy.

6. Trophic Levels
Each step in food chain is called trophic level.
Example:
Grass → Deer → Tiger
Trophic levels:
1st level → Producer (grass)
2nd level → Herbivore (deer)
3rd level → Carnivore (tiger)
Energy decreases at each level.

7. Food Web
Food web is a network of interconnected food chains.
Example:
Grass → Rabbit → Fox
Grass → Deer → Tiger
Food webs provide multiple food sources.
This makes ecosystem more stable.

8. Energy Flow in Ecosystem
Energy flows from sun to producers and then to consumers.
Flow:
Sun → Plants → Animals → Humans
Energy decreases at each step.
Only about 10% energy transfers to next level.
This is called 10% law.

9. 10% Law of Energy Transfer
The 10% law states that only 10% of energy is transferred from one trophic level to the next level.
The remaining 90% energy is lost as heat, movement, and life processes.
Example:
Sun → Plants → Deer → Tiger
If plants have 1000 units energy:
Deer gets only 100 units
Tiger gets only 10 units
This is why food chains are usually short.

10. Biological Magnification (Biomagnification)
Biological magnification is the increase in concentration of harmful chemicals at each trophic level.
Harmful chemicals enter food chain and accumulate in organisms.
These chemicals are not easily broken down.

Example
Pesticides enter plants → eaten by insects → eaten by birds → eaten by humans
Concentration increases at each level.
This is dangerous for top consumers.
Example chemical:
DDT (pesticide)

11. Ozone Layer
The ozone layer is a layer of ozone gas present in the upper atmosphere.
It protects Earth from harmful ultraviolet (UV) rays of the sun.
Without ozone layer, UV rays can damage living organisms.

Importance of Ozone Layer
	• Protects humans from skin cancer
	• Protects plants and animals
	• Protects environment

12. Ozone Depletion
Ozone depletion means thinning of ozone layer.
Main cause:
Chlorofluorocarbons (CFCs)
CFCs are found in:
	• Refrigerators
	• Air conditioners
	• Aerosol sprays
These destroy ozone layer.

Effects of Ozone Depletion
	• Skin cancer
	• Eye damage
	• Harm to plants
	• Environmental damage

13. Waste
Waste is unwanted material produced by humans.
Examples:
	• Plastic
	• Food waste
	• Paper
	• Chemicals
Waste must be properly managed.

14. Biodegradable and Non-Biodegradable Substances
Biodegradable Substances
These can be broken down by microorganisms.
Examples:
	• Food waste
	• Paper
	• Leaves
They do not harm environment.

Non-Biodegradable Substances
These cannot be broken down easily.
Examples:
	• Plastic
	• Glass
	• Metals
They remain in environment for long time.
They cause pollution.

15. Waste Management
Waste management means proper handling of waste.
Methods:
(a) Reduce
Use less plastic.
(b) Reuse
Use items again.
Example:
Reuse bottles
(c) Recycle
Convert waste into useful products.
Example:
Recycling paper
This is called 3R principle:
Reduce, Reuse, Recycle


Class 10 Science
Chapter 13: Our Environment
Test Paper

Section A: Very Short Answer Questions (1 mark each)
Q1. Define environment.
Q2. Name two abiotic components of an ecosystem.
Q3. Give an example of a producer.
Q4. Give an example of a decomposer.
Q5. What is trophic level?
Q6. Define food web.
Q7. What is ozone layer?
Q8. Name one effect of ozone depletion.
Q9. Define biodegradable substance.
Q10. What is 3R principle in waste management?

Section B: Short Answer Questions (2–3 marks each)
Q11. Differentiate between biotic and abiotic components.
Q12. Explain 10% law of energy transfer in food chain.
Q13. Define biological magnification with example.
Q14. List two non-biodegradable substances.
Q15. What is the importance of ozone layer?
Q16. Give any two methods of waste management.

Section C: Medium Answer Questions (3–5 marks each)
Q17. Draw a simple food chain and label trophic levels.
Q18. Explain biological magnification with diagram.
Q19. Explain ozone depletion and its causes.
Q20. Explain difference between biodegradable and non-biodegradable substances with examples.

Section D: Long Answer Questions (5–6 marks each)
Q21. Explain ecosystem and its components with examples.
Q22. Explain food web and energy flow in ecosystem.
Q23. Explain waste management methods in detail.

Section E: Case-Based Questions
A farmer sprays pesticides on crops. Birds eat insects from crops, and humans consume birds.
Q24. Answer the following:
a) What is this phenomenon called?
b) Why is it harmful to humans?
c) Which chemical is mainly responsible?
d) Suggest one way to reduce its effect.

Sunlight passes through atmosphere. CFCs released from refrigerators reduce ozone.
Q25. Answer the following:
a) What layer is being affected?
b) Why is it important?
c) Name one effect on humans.
d) Give one method to prevent ozone depletion.

Section F: Assertion and Reason
Q26.
Assertion: Non-biodegradable waste pollutes the environment.
Reason: It decomposes very slowly.
Options:
A. Both correct, reason correct explanation
B. Both correct, reason not explanation
C. Assertion correct, reason wrong
D. Assertion wrong, reason correct

Q27.
Assertion: Recycling paper helps reduce waste.
Reason: Paper is biodegradable.
Options:
A. Both correct, reason correct explanation
B. Both correct, reason not explanation
C. Assertion correct, reason wrong
D. Assertion wrong, reason correct

Section G: Diagram-Based Questions
Q28. Draw and label:
a) Food chain showing producer, herbivore, and carnivore
b) Diagram showing 10% energy transfer at each trophic level
c) Simple food web with three chains
d) Diagram showing ozone layer in atmosphere

Answer Key (Short)
	1. Everything around us
	2. Air, water
	3. Plant
	4. Fungi/bacteria
	5. Step in food chain
	6. Interconnected food chains
	7. Layer of ozone in upper atmosphere
	8. Skin cancer
	9. Substances broken down by microbes
	10. Reduce, Reuse, Recycle
Q24.
a) Biological magnification
b) Harmful chemicals accumulate
c) DDT
d) Reduce pesticide use
Q25.
a) Ozone layer
b) Protects from UV rays
c) Skin cancer
d) Avoid CFCs`,
};

export function getScienceStudyContent(id: ScienceChapterId): string {
  return extractStudyContent(RAW_CHAPTERS[id] ?? '');
}

export function getScienceRawChapterText(id: ScienceChapterId): string {
  return RAW_CHAPTERS[id] ?? '';
}

