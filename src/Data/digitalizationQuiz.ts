
export const digitalizationQuiz = {
    title: "Assistant de Digitalisation",
    description: "Ce quiz vous aidera à identifier les solutions de digitalisation les mieux adaptées à vos besoins.",
    questions: [
      {
        query: "Sélectionnez la taille de votre entreprise.",
        options: [
          { text: "Petite (1-10 employés)", value: "small" },
          { text: "Moyenne (11-50 employés)", value: "medium" },
          { text: "Grande (plus de 50 employés)", value: "large" }
        ],
        type: 'single' as 'single',  // Assertion de type pour correspondre strictement
        icon: 'mdi:account-group-outline',
        inputField: true
      },
      {
        query: "Quels sont vos principaux objectifs de digitalisation ?",
        options: [
          { text: "Augmenter la visibilité", value: "visibility" },
          { text: "Améliorer l'efficacité opérationnelle", value: "efficiency" },
          { text: "Réduire les coûts", value: "cost_reduction" },
          { text: "Accélérer le temps de mise sur le marché", value: "market_speed" }
        ],
        type: 'multiple' as 'multiple',  // Assertion de type pour correspondre strictement
        icon: 'mdi:lightbulb-on-outline',
        inputField: true
      },
      {
        query: "Quel type de solution numérique envisagez-vous ?",
        options: [
          { text: "Site web (landing pages, e-commerce)", value: "website" },
          { text: "Application mobile (iOS, Android)", value: "mobile_app" },
          { text: "Solutions ERP (planification des ressources d'entreprise)", value: "erp" },
          { text: "Intelligence Artificielle et apprentissage automatique", value: "ai_ml" }
        ],
        type: 'multiple' as 'multiple',  // Assertion de type pour correspondre strictement
        icon: 'mdi:desktop-classic',
        inputField: true 
      },
      {
        query: "À quel point êtes-vous familier avec la mise en œuvre de solutions numériques ?",
        options: [
          { text: "Débutant", value: "beginner" },
          { text: "Modérément expérimenté", value: "intermediate" },
          { text: "Très expérimenté", value: "advanced" }
        ],
        type: 'single' as 'single',  // Assertion de type pour correspondre strictement
        icon: 'mdi:school-outline',
        inputField: true
      },
      {
        query: "Quel budget avez-vous alloué pour votre projet de digitalisation ?",
        options: [
          { text: "Moins de 10,000 €", value: "budget_low" },
          { text: "10,000 € à 50,000 €", value: "budget_mid" },
          { text: "Plus de 50,000 €", value: "budget_high" }
        ],
        type: 'single' as 'single',  // Assertion de type pour correspondre strictement
        icon: 'mdi:currency-eur',
        inputField: true
      }
    ]
  };