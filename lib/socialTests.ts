import type { SocialTopicId } from '@/lib/socialStudies';

export type SocialTestQuestion = {
  id: string;
  text: string;
  /**
   * Optional answer text.
   * Note: For most questions, answers will be added later when an answer key is available.
   */
  answer?: string;
};

export type SocialTestSection = {
  id: string;
  title: string;
  questions: SocialTestQuestion[];
};

export type SocialTestChapter = {
  id: SocialTopicId;
  label: string;
  sections: SocialTestSection[];
};

export const SOCIAL_TESTS_CLASS_10: Record<SocialTopicId, SocialTestChapter> = {
  economics: {
    id: 'economics',
    label: 'Economics – Development',
    sections: [
      {
        id: 'eco-sec-a',
        title: 'Section A – Very Short Answer (1 mark each)',
        questions: [
          {
            id: 'eco-q1',
            text: 'Q1. Define development.',
            answer: 'Improvement in the quality of life of people (not only income).',
          },
          { id: 'eco-q2', text: 'Q2. Name two indicators used to measure development.' },
          {
            id: 'eco-q3',
            text: 'Q3. What is Human Development Index (HDI)?',
            answer:
              'A measure of development based on income, education, and life expectancy.',
          },
          { id: 'eco-q4', text: 'Q4. Give one example of a developed and a developing country.' },
          {
            id: 'eco-q5',
            text: 'Q5. Name one government program for rural employment in India.',
            answer: 'MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act).',
          },
          { id: 'eco-q6', text: 'Q6. Give one example of a renewable energy project in India.' },
          {
            id: 'eco-q7',
            text: 'Q7. Name one state in India with high literacy and development.',
            answer: 'Kerala (example).',
          },
          {
            id: 'eco-q8',
            text: 'Q8. Give one social indicator and one economic indicator of development.',
          },
          {
            id: 'eco-q9',
            text: 'Q9. What is sustainable development?',
            answer:
              'Meeting present needs without compromising the ability of future generations to meet their needs.',
          },
          { id: 'eco-q10', text: 'Q10. Name one challenge in measuring development.' },
        ],
      },
      {
        id: 'eco-sec-b',
        title: 'Section B – Short Answer (2–3 marks each)',
        questions: [
          {
            id: 'eco-q11',
            text: 'Q11. Explain the difference between economic and social indicators of development.',
          },
          { id: 'eco-q12', text: 'Q12. Give two reasons for unequal development in India.' },
          { id: 'eco-q13', text: 'Q13. Mention two roles of education in development.' },
          { id: 'eco-q14', text: 'Q14. Explain why employment is important for development.' },
          {
            id: 'eco-q15',
            text: 'Q15. Give two examples of government programs that promote sustainable development in India.',
          },
          { id: 'eco-q16', text: 'Q16. Explain the significance of HDI in measuring development.' },
        ],
      },
      {
        id: 'eco-sec-c',
        title: 'Section C – Medium Answer (3–5 marks each)',
        questions: [
          { id: 'eco-q17', text: 'Q17. Describe the sectors of the economy and their role in development.' },
          { id: 'eco-q18', text: 'Q18. Explain how health and sanitation contribute to human development.' },
          { id: 'eco-q19', text: 'Q19. Describe sustainable development practices in India with examples.' },
          { id: 'eco-q20', text: 'Q20. Explain the challenges in measuring development using only income as a parameter.' },
        ],
      },
      {
        id: 'eco-sec-d',
        title: 'Section D – Long Answer (5–6 marks each)',
        questions: [
          { id: 'eco-q21', text: 'Q21. Discuss the role of education, health, and employment in improving human development.' },
          { id: 'eco-q22', text: 'Q22. Explain unequal development in India with examples from different states.' },
          { id: 'eco-q23', text: 'Q23. Discuss the importance of sustainable development and measures taken in India to achieve it.' },
        ],
      },
      {
        id: 'eco-sec-e',
        title: 'Section E – Case-Based Questions',
        questions: [
          {
            id: 'eco-q24',
            text:
              'Q24. A village depends on agriculture, but due to irregular rainfall, people face unemployment and low income. Solar panels and rainwater harvesting systems were installed to improve life. Answer:\n' +
              'a) Name two problems faced by the village.\n' +
              'b) Which sustainable development measures were introduced?\n' +
              'c) Which sector of economy is affected most in this case?\n' +
              'd) How do these measures improve human development?',
          },
          {
            id: 'eco-q25',
            text:
              'Q25. Kerala has high literacy, good healthcare, and low poverty, whereas Bihar faces low literacy, high poverty, and poor health. Answer:\n' +
              'a) Name the problem highlighted in Bihar.\n' +
              'b) Give two social indicators showing development.\n' +
              'c) Which development index can be used to compare these states?\n' +
              'd) Suggest one measure to reduce development inequality.',
          },
        ],
      },
      {
        id: 'eco-sec-f',
        title: 'Section F – Assertion and Reason',
        questions: [
          {
            id: 'eco-q26',
            text:
              'Q26. Assertion: Development depends only on increasing income.\n' +
              'Reason: Higher income automatically improves quality of life.\n' +
              'Options: A. Both correct, reason correct explanation\n' +
              'B. Both correct, reason not explanation\n' +
              'C. Assertion correct, reason wrong\n' +
              'D. Assertion wrong, reason correct',
          },
          {
            id: 'eco-q27',
            text:
              'Q27. Assertion: Sustainable development ensures resources for future generations.\n' +
              'Reason: It balances economic growth with environmental protection.\n' +
              'Options: A. Both correct, reason correct explanation\n' +
              'B. Both correct, reason not explanation\n' +
              'C. Assertion correct, reason wrong\n' +
              'D. Assertion wrong, reason correct',
          },
        ],
      },
      {
        id: 'eco-sec-g',
        title: 'Section G – Diagram / Flowchart-Based',
        questions: [
          {
            id: 'eco-q28',
            text:
              'Q28. Draw and label:\n' +
              'a) Sectors of the economy (primary, secondary, tertiary)\n' +
              'b) Indicators of development (economic, social, HDI)\n' +
              'c) Sustainable development practices (afforestation, rainwater harvesting, renewable energy)\n' +
              'd) Comparison of developed and developing countries',
          },
        ],
      },
    ],
  },
  geography: {
    id: 'geography',
    label: 'Geography – Resources and Development',
    sections: [
      {
        id: 'geo-sec-a',
        title: 'Section A – Very Short Answer (1 mark each)',
        questions: [
          { id: 'geo-q1', text: 'Q1. Define resources.' },
          { id: 'geo-q2', text: 'Q2. Name one renewable and one non-renewable resource.' },
          { id: 'geo-q3', text: 'Q3. Give one example of a biotic and an abiotic resource.' },
          { id: 'geo-q4', text: 'Q4. What is land degradation?' },
          { id: 'geo-q5', text: 'Q5. Name one tropical evergreen forest in India.' },
          { id: 'geo-q6', text: 'Q6. What is watershed management?' },
          { id: 'geo-q7', text: 'Q7. Name one national park in India.' },
          { id: 'geo-q8', text: 'Q8. Give one example of a metallic and a non-metallic mineral.' },
          {
            id: 'geo-q9',
            text: 'Q9. What is sustainable development?',
            answer:
              'Using resources to meet present needs without compromising future generations.',
          },
          { id: 'geo-q10', text: 'Q10. Name one method of water conservation in India.' },
        ],
      },
      {
        id: 'geo-sec-b',
        title: 'Section B – Short Answer (2–3 marks each)',
        questions: [
          { id: 'geo-q11', text: 'Q11. Explain the difference between renewable and non-renewable resources.' },
          { id: 'geo-q12', text: 'Q12. Mention two causes and two effects of deforestation.' },
          { id: 'geo-q13', text: 'Q13. Explain the importance of wildlife resources.' },
          { id: 'geo-q14', text: 'Q14. Describe the types of soil found in India.' },
          { id: 'geo-q15', text: 'Q15. Give two examples each of conventional and non-conventional energy resources.' },
          { id: 'geo-q16', text: 'Q16. Explain vertical and horizontal power-sharing in terms of resource management.' },
        ],
      },
      {
        id: 'geo-sec-c',
        title: 'Section C – Medium Answer (3–5 marks each)',
        questions: [
          { id: 'geo-q17', text: 'Q17. Describe the major types of forests in India and their uses.' },
          { id: 'geo-q18', text: 'Q18. Explain land degradation and methods to prevent it.' },
          { id: 'geo-q19', text: 'Q19. Explain mineral resource management in India.' },
          { id: 'geo-q20', text: 'Q20. Describe water resource management techniques in India.' },
        ],
      },
      {
        id: 'geo-sec-d',
        title: 'Section D – Long Answer (5–6 marks each)',
        questions: [
          { id: 'geo-q21', text: 'Q21. Explain the role of resources in development and the importance of planning for their sustainable use.' },
          { id: 'geo-q22', text: 'Q22. Discuss how India manages land, water, and energy resources sustainably.' },
          { id: 'geo-q23', text: 'Q23. Explain the concept of sustainable development with examples from forestry, water, and energy management.' },
        ],
      },
      {
        id: 'geo-sec-e',
        title: 'Section E – Case-Based Questions',
        questions: [
          {
            id: 'geo-q24',
            text:
              'Q24. A village depends on rainfall for agriculture. Due to erratic rainfall, crop yield is low. Farmers use wells and tube wells for irrigation. Answer:\n' +
              'a) Name the problem faced by farmers.\n' +
              'b) Suggest two methods to conserve water.\n' +
              'c) Which type of resource is groundwater?\n' +
              'd) How does watershed management help in this situation?',
          },
          {
            id: 'geo-q25',
            text:
              'Q25. In a region, the forest was cleared for agriculture. Soil erosion increased, and water sources dried up. Answer:\n' +
              'a) Name the environmental issue shown here.\n' +
              'b) Suggest two methods to restore the land.\n' +
              'c) How do forests prevent soil erosion?\n' +
              'd) Which type of forest conservation method can be applied?',
          },
        ],
      },
      {
        id: 'geo-sec-f',
        title: 'Section F – Assertion and Reason',
        questions: [
          {
            id: 'geo-q26',
            text:
              'Q26. Assertion: Non-renewable resources should be used carefully.\n' +
              'Reason: They can be replenished naturally over time.\n' +
              'Options: A. Both correct, reason correct explanation\n' +
              'B. Both correct, reason not explanation\n' +
              'C. Assertion correct, reason wrong\n' +
              'D. Assertion wrong, reason correct',
          },
          {
            id: 'geo-q27',
            text:
              'Q27. Assertion: National parks and wildlife sanctuaries are important for biodiversity.\n' +
              'Reason: They provide habitat and protect endangered species.\n' +
              'Options: A. Both correct, reason correct explanation\n' +
              'B. Both correct, reason not explanation\n' +
              'C. Assertion correct, reason wrong\n' +
              'D. Assertion wrong, reason correct',
          },
        ],
      },
      {
        id: 'geo-sec-g',
        title: 'Section G – Diagram / Map-Based',
        questions: [
          {
            id: 'geo-q28',
            text:
              'Q28. Draw and label:\n' +
              'a) Types of soil in India\n' +
              'b) Forest types in India\n' +
              'c) Water conservation methods (rainwater harvesting/check dam)\n' +
              'd) Flowchart of sustainable development steps',
          },
        ],
      },
    ],
  },
  history: {
    id: 'history',
    label: 'History – The Rise of Nationalism in Europe',
    sections: [
      {
        id: 'his-sec-a',
        title: 'Section A – Very Short Answer (1 mark each)',
        questions: [
          {
            id: 'his-q1',
            text: 'Q1. Define nationalism.',
            answer: 'The feeling of pride, loyalty and devotion towards one’s nation.',
          },
          { id: 'his-q2', text: 'Q2. Name two Italian leaders of unification.' },
          {
            id: 'his-q3',
            text: 'Q3. Who was called the “Iron Chancellor” of Germany?',
            answer: 'Otto von Bismarck.',
          },
          { id: 'his-q4', text: 'Q4. What was the German Confederation?' },
          { id: 'his-q5', text: 'Q5. Name one cause of the revolutions of 1848.' },
          { id: 'his-q6', text: 'Q6. What is a food chain in history context? (Trick question: skip or mark NA)' },
          { id: 'his-q7', text: 'Q7. Name one multi-ethnic empire in 19th century Europe.' },
          { id: 'his-q8', text: 'Q8. Who founded Young Italy?', answer: 'Giuseppe Mazzini.' },
          {
            id: 'his-q9',
            text: 'Q9. Which war helped Prussia unify Germany in 1870–71?',
            answer: 'The Franco–Prussian War (1870–71).',
          },
          {
            id: 'his-q10',
            text: 'Q10. Name one tool that helped spread nationalist ideas.',
            answer: 'Newspapers / books / pamphlets (print culture).',
          },
        ],
      },
      {
        id: 'his-sec-b',
        title: 'Section B – Short Answer (2–3 marks each)',
        questions: [
          { id: 'his-q11', text: 'Q11. Differentiate between unification of Italy and Germany in brief.' },
          { id: 'his-q12', text: 'Q12. Explain the role of Giuseppe Garibaldi in Italian unification.' },
          { id: 'his-q13', text: 'Q13. Mention two ways in which French Revolution influenced nationalism in Europe.' },
          { id: 'his-q14', text: 'Q14. Name and describe one challenge faced by multi-ethnic empires due to nationalism.' },
          { id: 'his-q15', text: 'Q15. Explain the significance of newspapers and print culture in spreading nationalist ideas.' },
          { id: 'his-q16', text: 'Q16. Give two positive and one negative impact of nationalism in Europe.' },
        ],
      },
      {
        id: 'his-sec-c',
        title: 'Section C – Medium Answer (3–5 marks each)',
        questions: [
          { id: 'his-q17', text: 'Q17. Describe the process of Italian unification, mentioning leaders and steps.' },
          { id: 'his-q18', text: 'Q18. Describe the process of German unification with the role of Bismarck.' },
          { id: 'his-q19', text: 'Q19. Explain the revolutions of 1848 and their outcomes.' },
          { id: 'his-q20', text: 'Q20. Explain how nationalism challenged monarchies in 19th century Europe.' },
        ],
      },
      {
        id: 'his-sec-d',
        title: 'Section D – Long Answer (5–6 marks each)',
        questions: [
          { id: 'his-q21', text: 'Q21. Explain the impact of nationalism on Europe, including positive and negative effects.' },
          { id: 'his-q22', text: 'Q22. Compare and contrast the unification of Italy and Germany, mentioning leaders, methods, and challenges.' },
          { id: 'his-q23', text: 'Q23. Explain the role of liberal ideas and revolutions in spreading nationalism across Europe.' },
        ],
      },
      {
        id: 'his-sec-e',
        title: 'Section E – Case-Based Questions',
        questions: [
          {
            id: 'his-q24',
            text:
              'Q24. A group of people in Austria-Hungary demanded autonomy for their ethnic group. Answer:\n' +
              'a) Which concept explains their demand?\n' +
              'b) Name the empire they were challenging.\n' +
              'c) What was a common cause of such movements in Europe?\n' +
              'd) Give one method they used to achieve their goals.',
          },
          {
            id: 'his-q25',
            text:
              'Q25. Napoleon’s conquests spread ideas of liberty, equality, and fraternity across Europe. Answer:\n' +
              'a) Which revolutionary event inspired Napoleon?\n' +
              'b) How did these ideas influence nationalism in other countries?\n' +
              'c) Name one European country where these ideas inspired a nationalist movement.\n' +
              'd) Name one tool that helped spread these ideas.',
          },
        ],
      },
      {
        id: 'his-sec-f',
        title: 'Section F – Assertion and Reason',
        questions: [
          {
            id: 'his-q26',
            text:
              'Q26. Assertion: Giuseppe Mazzini formed Young Italy to unite Italy.\n' +
              'Reason: Mazzini believed in spreading nationalism through ideas and youth movements.\n' +
              'Options: A. Both correct, reason correct explanation\n' +
              'B. Both correct, reason not explanation\n' +
              'C. Assertion correct, reason wrong\n' +
              'D. Assertion wrong, reason correct',
          },
          {
            id: 'his-q27',
            text:
              'Q27. Assertion: Revolutions of 1848 were successful in all countries.\n' +
              'Reason: People demanded constitutional government and national unity.\n' +
              'Options: A. Both correct, reason correct explanation\n' +
              'B. Both correct, reason not explanation\n' +
              'C. Assertion correct, reason wrong\n' +
              'D. Assertion wrong, reason correct',
          },
        ],
      },
      {
        id: 'his-sec-g',
        title: 'Section G – Diagram / Flowchart-Based',
        questions: [
          {
            id: 'his-q28',
            text:
              'Q28. Draw and label:\n' +
              'a) Timeline of Italian unification\n' +
              'b) Timeline of German unification\n' +
              'c) Map showing Italy and Germany before and after unification\n' +
              'd) Flowchart of revolutions of 1848 across Europe',
          },
        ],
      },
    ],
  },
  'political-science': {
    id: 'political-science',
    label: 'Political Science – Power-Sharing',
    sections: [
      {
        id: 'pol-sec-a',
        title: 'Section A – Very Short Answer (1 mark each)',
        questions: [
          {
            id: 'pol-q1',
            text: 'Q1. Define power-sharing.',
            answer:
              'Distribution of power among different organs, levels, and groups of people in a democracy.',
          },
          {
            id: 'pol-q2',
            text: 'Q2. Name the three organs of government in horizontal power-sharing.',
            answer: 'Legislature, Executive, Judiciary.',
          },
          { id: 'pol-q3', text: 'Q3. Name the two levels of government in vertical power-sharing in India.' },
          { id: 'pol-q4', text: 'Q4. Give one example of power-sharing among social groups in India.' },
          { id: 'pol-q5', text: 'Q5. What is the main purpose of power-sharing in a democracy?' },
          { id: 'pol-q6', text: 'Q6. Which country’s linguistic division is an example of power-sharing?', answer: 'Belgium.' },
          { id: 'pol-q7', text: 'Q7. Name one minority community that benefits from power-sharing in India.' },
          { id: 'pol-q8', text: 'Q8. What is the system of local self-government in villages called?' },
          { id: 'pol-q9', text: 'Q9. Who implements laws in India’s government system?' },
          { id: 'pol-q10', text: 'Q10. Which organ of government interprets laws?' },
        ],
      },
      {
        id: 'pol-sec-b',
        title: 'Section B – Short Answer (2–3 marks each)',
        questions: [
          { id: 'pol-q11', text: 'Q11. Explain horizontal power-sharing with an example from India.' },
          { id: 'pol-q12', text: 'Q12. Explain vertical power-sharing with an example from India.' },
          { id: 'pol-q13', text: 'Q13. Mention two advantages of power-sharing in a democracy.' },
          { id: 'pol-q14', text: 'Q14. Describe how SC/ST representation ensures power-sharing in India.' },
          { id: 'pol-q15', text: 'Q15. Give an example of power-sharing in Belgium.' },
          { id: 'pol-q16', text: 'Q16. Explain the role of local governments in India.' },
        ],
      },
      {
        id: 'pol-sec-c',
        title: 'Section C – Medium Answer (3–5 marks each)',
        questions: [
          { id: 'pol-q17', text: 'Q17. Explain how horizontal and vertical power-sharing together strengthen Indian democracy.' },
          { id: 'pol-q18', text: 'Q18. Describe the power-sharing among social groups in India, giving at least two examples.' },
          { id: 'pol-q19', text: 'Q19. Explain the case of Sri Lanka to show what can happen if power-sharing is ignored.' },
          { id: 'pol-q20', text: 'Q20. Explain how power-sharing reduces conflicts in a diverse society.' },
        ],
      },
      {
        id: 'pol-sec-d',
        title: 'Section D – Long Answer (5–6 marks each)',
        questions: [
          { id: 'pol-q21', text: 'Q21. Describe different types of power-sharing with examples.' },
          { id: 'pol-q22', text: 'Q22. Explain in detail the advantages of power-sharing in a democracy.' },
          { id: 'pol-q23', text: 'Q23. Describe how power-sharing works in India at horizontal, vertical, and social levels.' },
        ],
      },
      {
        id: 'pol-sec-e',
        title: 'Section E – Case-Based Questions',
        questions: [
          {
            id: 'pol-q24',
            text:
              'Q24. A country has multiple linguistic communities. The government divides power between regions so that each language group has representation in local administration. Answer:\n' +
              'a) Which type of power-sharing is shown here?\n' +
              'b) Give one benefit of this system.\n' +
              'c) Name a European country where this example applies.\n' +
              'd) How does this system prevent conflict?',
          },
          {
            id: 'pol-q25',
            text:
              'Q25. In India, local Panchayats reserve one-third of seats for women. SC/ST communities have reserved seats in legislatures. Answer:\n' +
              'a) Which type of power-sharing is being practiced?\n' +
              'b) How does it promote equality?\n' +
              'c) Which organ ensures laws are implemented fairly?\n' +
              'd) How does it strengthen democracy?',
          },
        ],
      },
      {
        id: 'pol-sec-f',
        title: 'Section F – Assertion and Reason',
        questions: [
          {
            id: 'pol-q26',
            text:
              'Q26. Assertion: Vertical power-sharing brings government closer to people.\n' +
              'Reason: It divides power between Union, State, and Local governments.\n' +
              'Options: A. Both correct, reason correct explanation\n' +
              'B. Both correct, reason not explanation\n' +
              'C. Assertion correct, reason wrong\n' +
              'D. Assertion wrong, reason correct',
          },
          {
            id: 'pol-q27',
            text:
              'Q27. Assertion: Power-sharing is unnecessary in homogeneous societies.\n' +
              'Reason: Only diverse societies need mechanisms to prevent conflict.\n' +
              'Options: A. Both correct, reason correct explanation\n' +
              'B. Both correct, reason not explanation\n' +
              'C. Assertion correct, reason wrong\n' +
              'D. Assertion wrong, reason correct',
          },
        ],
      },
      {
        id: 'pol-sec-g',
        title: 'Section G – Diagram / Flowchart-Based',
        questions: [
          {
            id: 'pol-q28',
            text:
              'Q28. Draw and label:\n' +
              'a) Horizontal power-sharing (Legislature, Executive, Judiciary)\n' +
              'b) Vertical power-sharing (Union, State, Local)\n' +
              'c) Power-sharing among social groups (SC/ST/women representation)\n' +
              'd) Flowchart showing advantages of power-sharing',
          },
        ],
      },
    ],
  },
};

export const SOCIAL_TEST_CHAPTER_ORDER: SocialTopicId[] = [
  'economics',
  'geography',
  'history',
  'political-science',
];

