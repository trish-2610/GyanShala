/**
 * Class 10 Social Science study content from economics, geography, history, political-science topics.
 * Used by Studies screen and topic detail screen.
 */

export type SocialTopicId = 'economics' | 'geography' | 'history' | 'political-science';

export interface SocialTopic {
  id: SocialTopicId;
  subject: string;
  title: string;
  summary: string;
}

export const SOCIAL_TOPICS_CLASS_10: SocialTopic[] = [
  {
    id: 'economics',
    subject: 'Economics',
    title: 'Development',
    summary:
      'Indicators of development, HDI, sectors of economy, poverty, sustainable development, and the role of government, education, health and employment.',
  },
  {
    id: 'geography',
    subject: 'Geography',
    title: 'Resources and Development',
    summary:
      'Types of resources, resource planning, land and soil, water, minerals, forests, wildlife, and sustainable development.',
  },
  {
    id: 'history',
    subject: 'History',
    title: 'The Rise of Nationalism in Europe',
    summary:
      'Nationalism, French Revolution, unification of Italy and Germany, revolutions of 1848, liberal ideas, and impact on Europe.',
  },
  {
    id: 'political-science',
    subject: 'Political Science',
    title: 'Power-Sharing',
    summary:
      'Why power-sharing is necessary, horizontal and vertical power-sharing, case studies of Belgium and Sri Lanka, and power-sharing in India.',
  },
];

const HISTORY_CONTENT = `History: The Rise of Nationalism in Europe

1. Introduction
Nationalism is the feeling of pride, loyalty, and devotion towards one's nation.
In the 19th century, nationalism became a powerful force in Europe. It helped countries like Italy and Germany unify and shaped the political landscape.
Key idea: People with common language, culture, history, and territory wanted to form one nation.

2. The French Revolution and Nationalism
The French Revolution (1789–1799) played a major role in spreading nationalism in Europe.
• People demanded liberty, equality, and fraternity.
• Ideas of freedom and nationhood inspired people across Europe.
• Napoleon's conquests spread these ideas to other countries.
Key points:
• Rise of citizen armies
• National symbols and flags
• Unity against monarchy

3. Italy Before Unification
Italy was divided into several states:
• Kingdom of Sardinia
• Papal States
• Kingdom of the Two Sicilies
• Austrian-controlled territories
People spoke Italian but were politically divided. This created desire for unification.

4. Leaders of Italian Unification
Important leaders:
1. Giuseppe Mazzini – Ideological leader, formed Young Italy movement, inspired people with patriotism.
2. Count Camillo di Cavour – Prime minister of Sardinia, used diplomacy and alliances to unite Italy.
3. Giuseppe Garibaldi – Military leader, led the Red Shirts, captured Sicily and Naples.

5. Process of Italian Unification
• Cavour allied with France to defeat Austria (1859)
• Garibaldi captured southern Italy (1860)
• Sardinia merged with southern states
• 1861 – Kingdom of Italy formed with Victor Emmanuel II as king
Key points:
• Unification combined diplomacy, war, and popular support.
• Nationalism was the driving force.

6. Germany Before Unification
Germany was divided into about 39 states under the German Confederation.
• Prussia was the strongest state.
• Austria controlled many German-speaking regions.
• Shared language and culture led to desire for unification.

7. Leaders of German Unification
1. Otto von Bismarck – Prime minister of Prussia, known as the "Iron Chancellor."
   Believed in Realpolitik – practical politics rather than ideals.
   Used war and diplomacy to unify Germany.
2. King Wilhelm I – King of Prussia, later first Kaiser of Germany.

8. Process of German Unification
• 1864 – Prussia allied with Austria to defeat Denmark
• 1866 – Austro-Prussian War, Prussia defeated Austria
• 1870–71 – Franco-Prussian War, southern German states joined North German Confederation
• 1871 – German Empire proclaimed at Versailles
Key points:
• Unification achieved through diplomacy, alliances, and wars
• Nationalism played central role

9. Nationalism in Other European Countries
Nationalism was not limited to Italy and Germany. Many European countries experienced nationalist movements in the 19th century.
• Austria-Hungary: Multiple ethnic groups wanted autonomy (Hungarians, Czechs, Slovaks).
• Poland: Poles wanted independence from Russia, Prussia, and Austria.
• Spain & Portugal: Nationalism inspired liberal reforms and resistance against foreign rule.
Key point: People with shared language, culture, and history demanded political unity and self-rule.

10. The Revolutions of 1848
A wave of revolutions spread across Europe in 1848. These are called the Revolutions of 1848 or Spring of Nations.
Causes:
• Demand for constitutional governments
• National unity
• Freedom from monarchy
• Social and economic grievances

Major Events
• France: Louis-Philippe was overthrown; republic declared
• German states: People demanded national unification and democratic reforms
• Italy: Revolts in several states for freedom and unification
• Austria & Hungary: Nationalist and liberal uprisings
Result: Most revolutions were suppressed, but ideas of nationalism spread widely.

11. Spread of Liberal Ideas
Liberal ideas emphasized:
• Liberty and freedom
• Equality before law
• Rights of citizens
• Constitutional governments
These ideas inspired:
• Middle classes
• Intellectuals
• Nationalist leaders

12. Role of Newspapers and Print Culture
Newspapers, books, and pamphlets helped spread nationalist ideas.
• Reached wider public
• Promoted language, culture, and identity
• Inspired people to join nationalist movements
Example: Giuseppe Mazzini's writings in Italy motivated young patriots.

13. Nationalism and Minority Groups
Nationalism sometimes created tension:
• Multi-ethnic empires faced internal struggles
• Austria-Hungary struggled with Hungarians, Czechs, Poles
• Russia faced problems with Poles, Finns, and Ukrainians
Key point: Nationalism united some, but also caused conflicts in diverse regions.

14. Challenges to Monarchies
Nationalist and liberal movements challenged old monarchies:
• Monarchs resisted giving power to people
• Some kingdoms adopted constitutions after uprisings
• Revolutions forced rulers to negotiate with nationalist leaders

15. Impact of Nationalism
Positive impacts:
• Unification of Italy and Germany
• Rise of democratic ideas
• Promotion of culture, language, and identity
Negative impacts:
• Conflicts between ethnic groups
• Wars over territory
• Suppression of minority groups in some areas`;

const POLITICAL_SCIENCE_CONTENT = `Political Science: Power-Sharing

1. Introduction
Power-sharing means the distribution of power among different organs, levels, and groups of people in a democracy.
Purpose:
• Prevent misuse of power
• Protect democracy
• Promote equality and cooperation
Example: In India, power is shared between the Union and State governments.

2. Why Power-Sharing is Necessary
Power-sharing reduces conflict in society and ensures stability.
Reasons:
1. Diverse societies have different social, economic, and cultural groups.
2. No single group should dominate others.
3. Promotes social harmony and national unity.
Example: Belgium has multiple linguistic groups—Dutch-speaking and French-speaking. Power-sharing helps maintain peace.

3. Types of Power-Sharing
There are three main types:
1. Horizontal power-sharing
2. Vertical power-sharing
3. Power-sharing among social groups

4. Horizontal Power-Sharing
Horizontal power-sharing occurs among different organs of government.
Example:
• Legislature → makes laws
• Executive → implements laws
• Judiciary → interprets laws
Each organ has checks and balances to prevent misuse of power.

5. Vertical Power-Sharing
Vertical power-sharing occurs between different levels of government: central, state, and local.
Example:
• Union (Central) government
• State government
• Local government (Panchayati Raj and Municipalities)
Benefits:
• Brings government closer to people
• Prevents concentration of power

6. Power-Sharing Among Social Groups
In multi-ethnic or diverse societies, power-sharing among social groups is essential.
Example: Belgium
• Dutch-speaking majority in Flanders
• French-speaking majority in Wallonia
Solution:
• Communities have autonomy in cultural, educational, and language matters
• Each group participates in government

7. Case Study: Belgium
Belgium faced tension between Dutch-speaking and French-speaking communities.
Solution:
• Powers of government divided between communities and regions
• Each group had representation in legislature and government
• Promoted peaceful coexistence

8. Case Study: Sri Lanka
In Sri Lanka, the Sinhalese majority dominated Tamils, leading to conflict.
Lesson:
• Ignoring power-sharing can create political instability and conflict
• Proper power-sharing ensures democracy and peace

9. How India Shares Power
India is a diverse country with multiple languages, religions, and cultures.
To maintain democracy and unity, India shares power in three main ways:
1. Horizontally – among different organs of government
2. Vertically – between central and state governments
3. Among social groups – through representation and safeguards

10. Horizontal Power-Sharing in India
Horizontal power-sharing ensures that no single organ of government becomes too powerful.
Example:
• Legislature: Makes laws (Parliament/Council)
• Executive: Implements laws (Prime Minister, Council of Ministers)
• Judiciary: Interprets laws (Supreme Court, High Courts)
Each organ has the power to check the others. This is called checks and balances.

11. Vertical Power-Sharing in India
Vertical power-sharing divides power between different levels of government.
Levels:
1. Union (Central) Government – Handles national matters (defense, foreign affairs, currency)
2. State Governments – Handle state matters (police, agriculture, health)
3. Local Governments – Handle local matters (Panchayati Raj, municipalities, town councils)
Benefits:
• Local problems are solved locally
• Prevents concentration of power at the top

12. Power-Sharing Among Social Groups in India
India recognizes its diversity and provides power-sharing among social groups:
1. Representation in legislature – Reservation for Scheduled Castes (SCs) and Scheduled Tribes (STs) in Parliament and State Assemblies
2. Participation in executive – Members of minorities can hold positions in government
3. Independent judiciary – Ensures rights of all communities are protected
This protects minorities and promotes equality.

13. Example of Representation in India
• Scheduled Castes and Tribes – Reserved seats in Parliament and State Assemblies
• Women – Reservation in Panchayati Raj Institutions
• Minorities – Constitutional safeguards and participation in government

14. Advantages of Power-Sharing in a Democracy
1. Reduces conflict – Groups feel included and represented
2. Promotes cooperation – Encourages compromise and negotiation
3. Protects minorities – Prevents domination by majority
4. Ensures stability – Democracy remains strong
5. Brings government closer to people – Local issues are addressed effectively`;

const GEOGRAPHY_CONTENT = `Geography: Resources and Development

1. Introduction
Resources are materials found in the environment that satisfy human needs.
Resources can be:
• Natural (water, soil, minerals)
• Human-made (roads, buildings, machines)
Development is the improvement in the quality of life, economy, and living conditions of people.
Resources play a key role in development because they provide raw materials and energy.

2. Types of Resources
Resources are classified in multiple ways:
1. On the basis of origin:
   Biotic – obtained from living things (plants, animals, forests)
   Abiotic – obtained from non-living things (minerals, water, air, soil)
2. On the basis of exhaustibility:
   Renewable resources – can be replenished naturally (solar energy, forests)
   Non-renewable resources – cannot be replenished easily (coal, petroleum)
3. On the basis of ownership:
   Individual resources – owned by individuals (land, private houses)
   Community resources – used by community (roads, parks, forests)
   National resources – owned by the nation (minerals, rivers, forests)
   International resources – shared by all countries (oceans, atmosphere)

3. Resource Planning
Resource planning is the strategy of using resources efficiently for sustainable development.
• Helps meet present and future needs
• Ensures equitable distribution
• Prevents over-exploitation
Example: India has planned the use of water, minerals, and energy resources in Five-Year Plans.

4. Land Resources and Land Use
Land is an important resource for agriculture, industry, housing, and forests.
• Arable land: Used for cultivation
• Forest land: Provides timber, fuel, and biodiversity
• Barren land: Not suitable for cultivation or habitation
• Land-use pattern: Shows the distribution of different types of land for various purposes

5. Land Degradation and Conservation
Land degradation occurs due to:
• Deforestation
• Overgrazing
• Mining
• Urbanization
Effects:
• Loss of fertility
• Soil erosion
• Desertification
Conservation methods:
• Afforestation
• Crop rotation
• Contour plowing
• Controlled grazing

6. Soil as a Resource
Soil is a vital natural resource:
• Supports plant growth
• Provides food for humans and animals
Types of soil in India:
• Alluvial soil – fertile, found in Indo-Gangetic plains
• Black soil – good for cotton, found in Deccan plateau
• Red soil – found in Odisha, Chhattisgarh, Tamil Nadu
• Laterite soil – acidic, in Kerala and Karnataka
• Desert soil – sandy, in Rajasthan
Soil fertility depends on:
• Minerals
• Organic matter
• Moisture content

7. Water Resources
Water is essential for life, agriculture, industry, and power generation.
• Surface water: Rivers, lakes, reservoirs
• Groundwater: Wells, tube wells, aquifers
Challenges:
• Unequal distribution
• Overuse in irrigation and industries
• Pollution
Conservation methods:
• Rainwater harvesting
• Check dams
• Watershed management

8. Mineral and Energy Resources
Mineral Resources: Naturally occurring substances extracted from the earth.
• Metallic minerals: Iron, copper, bauxite
• Non-metallic minerals: Limestone, mica, gypsum
Energy Resources: Power our industries, homes, and transport
• Conventional: Coal, petroleum, natural gas, hydroelectricity
• Non-conventional: Solar, wind, tidal, nuclear
Sustainable use is necessary to prevent depletion.

9. Forest Resources
Forests provide timber, fuel, medicine, and habitat for wildlife.
Types of forests in India:
• Tropical Evergreen: Dense forests, heavy rainfall, e.g., Western Ghats, Andaman Islands
• Tropical Deciduous: Shedding leaves in dry season, e.g., Madhya Pradesh, Chhattisgarh
• Thorn/Scrub Forests: Dry areas, e.g., Rajasthan
• Montane Forests: Hilly areas, e.g., Himalayas
• Mangrove Forests: Coastal areas, e.g., Sundarbans
Deforestation: Loss of forest cover due to agriculture, urbanization, and logging.
Conservation methods: Afforestation, community forest management, legal protection of wildlife.

10. Wildlife Resources and Biodiversity
Wildlife includes all animals and plants in their natural habitats.
Importance:
• Ecological balance
• Source of medicine
• Tourist attraction
Threats:
• Habitat loss
• Hunting/poaching
• Pollution
Conservation efforts:
• Wildlife sanctuaries
• National parks
• Biosphere reserves
Example: Jim Corbett National Park, Sundarbans, Gir National Park

11. Water Resource Management
Water is unevenly distributed across regions. Proper management includes:
• Irrigation projects: Canals, dams (Bhakra Nangal, Hirakud)
• Rainwater harvesting: Collecting rainwater for future use
• Watershed management: Conserving soil and water together
• Flood control and groundwater recharge: Preventing overuse and contamination

12. Mineral Resource Management
Minerals are unevenly distributed. Sustainable management includes:
• Scientific mining methods
• Recycling of minerals
• Restricting mining in ecologically sensitive areas
Example: Bauxite, iron ore, and mica mining areas are carefully managed to prevent environmental damage.

13. Land Resource Management
Proper management of land includes:
• Crop rotation to maintain soil fertility
• Terrace farming and contour plowing on slopes
• Avoiding overgrazing
• Controlling urban sprawl

14. Energy Resource Management
Energy resources need sustainable use:
• Non-renewable: Coal, petroleum – should be used efficiently
• Renewable: Solar, wind, hydro – promoted for sustainable development
Example: Solar energy in Rajasthan and wind energy in Tamil Nadu.

15. Sustainable Development
Sustainable development is the use of resources in a way that meets present needs without compromising future generations.
Principles:
• Balance economic growth with environmental protection
• Reduce wastage of resources
• Encourage renewable resources
• Promote equality in access
Example: Afforestation, water harvesting, and solar energy projects.`;

const ECONOMICS_CONTENT = `Economics: Development

1. Introduction
Development is about improving the quality of life of people.
It includes:
• Economic growth
• Better health and education
• Access to basic needs like food, water, and housing
Important: Development is not just about income—it also includes social and human well-being.

2. Indicators of Development
Development is measured using several indicators:
1. Economic Indicators:
   National income, per capita income
   Industrial and agricultural output
2. Social Indicators:
   Literacy rate
   Life expectancy
   Access to healthcare
3. Human Development Index (HDI):
   Combines income, education, and life expectancy to measure overall development.

3. Levels of Development
Different regions develop at different rates:
• Developed countries: High income, good infrastructure, high HDI
  Example: USA, Germany
• Developing countries: Moderate income, improving infrastructure, medium HDI
  Example: India, Brazil
• Underdeveloped countries: Low income, poor infrastructure, low HDI
  Example: Afghanistan, Chad

4. Unequal Development in India
Development in India is uneven:
• Northern plains and coastal regions are better developed
• Central and northeastern regions lag behind
• Reasons: Natural resources, infrastructure, investment, literacy, and governance
Example: Kerala has high literacy and health indicators, whereas Bihar has low literacy and poverty issues.

5. Poverty and Development
Poverty is the inability to meet basic needs like food, clothing, and shelter.
• Poverty affects access to education, healthcare, and employment
• Reduces human development and overall growth
Indicators of poverty:
• Low income
• Malnutrition
• Lack of shelter
Solutions: Employment schemes, education programs, social security measures

6. Sectors of Development
The economy is divided into three sectors:
1. Primary sector: Agriculture, forestry, fishing, mining
2. Secondary sector: Industry, manufacturing
3. Tertiary sector: Services like transport, banking, education, healthcare
Observation: As countries develop, the share of tertiary sector increases.

7. Sustainable Development
Sustainable development means meeting present needs without harming future generations.
Principles:
• Efficient use of resources
• Conservation of environment
• Reduce inequality
• Promote renewable resources
Example: Using solar energy, afforestation, and rainwater harvesting.

8. Role of Government and NGOs
Government and NGOs play a key role in development:
• Build schools, hospitals, roads
• Implement poverty alleviation programs
• Promote sustainable agriculture and industry
• Raise awareness about social issues
Example: Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) provides employment and income to rural people.

9. Human Development Index (HDI)
Human Development Index (HDI) measures development based on:
1. Income: Per capita income of a country
2. Education: Literacy rate and enrollment in schools
3. Life Expectancy: Average life span of people
Importance:
• Shows overall quality of life, not just income
• Helps compare development between countries
Example: India's HDI has improved over the years, but it is still lower than developed countries like Norway or Germany.

10. Unequal Development Within India
Development in India varies across regions:
• Kerala: High literacy, low infant mortality, better healthcare
• Bihar: Low literacy, higher poverty, poor infrastructure
• Punjab & Haryana: Prosperous agricultural regions
• Northeast India: Lagging in infrastructure and income
Reasons for unequal development:
• Uneven distribution of resources
• Historical neglect of certain regions
• Differences in investment, infrastructure, and human capital

11. Sustainable Development Projects in India
India has implemented several projects to promote sustainable development:
• Afforestation Programs: Increase forest cover
• Rainwater Harvesting Projects: Collect and conserve water
• Solar and Wind Energy Projects: Reduce reliance on fossil fuels
• Waste Management Programs: Reduce pollution and reuse materials
Goal: Ensure economic growth without harming environment or future generations.

12. Role of Education in Development
Education improves quality of life:
• Enhances literacy and skills
• Provides employment opportunities
• Promotes awareness about health, hygiene, and social issues
• Empowers marginalized groups
Example: Midday Meal Scheme encourages school enrollment and reduces malnutrition.

13. Role of Health in Development
Good health is essential for development:
• Reduces mortality and morbidity
• Increases productivity
• Supports human development
Government programs: National Rural Health Mission (NRHM), vaccination campaigns, sanitation drives.

14. Role of Employment in Development
Employment generates income and improves standard of living:
• Reduces poverty
• Enhances social security
• Encourages skill development
Government programs: MGNREGA provides rural employment and income support.

15. Challenges in Measuring Development
Measuring development is not easy because:
• Different regions have different priorities
• Development is multidimensional (economic, social, human)
• Income alone does not indicate quality of life
• Social indicators like health, education, and gender equality also matter
Solution: Use composite indicators like HDI for better understanding.`;

const CONTENT_MAP: Record<SocialTopicId, string> = {
  history: HISTORY_CONTENT,
  'political-science': POLITICAL_SCIENCE_CONTENT,
  geography: GEOGRAPHY_CONTENT,
  economics: ECONOMICS_CONTENT,
};

export function getTopicContent(id: SocialTopicId): string {
  return CONTENT_MAP[id] ?? '';
}

export function getTopicById(id: string): SocialTopic | undefined {
  return SOCIAL_TOPICS_CLASS_10.find((t) => t.id === id);
}
