export default {
  common: {
    language: 'Language',
    english: 'English',
    chinese: 'Chinese',
    home: 'Home',
    storyGeneration: 'Story Generation',
    reportGeneration: 'Report Generation',
    about: 'About',
    generate: 'Generate',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    view: 'View',
    refresh: 'Refresh',
    back: 'Back',
    apiSettings: 'API Settings'
  },
  header: {
  },
  storyGeneration: {
    title: 'Creative Story Generation',
    description: 'Generate creative stories using our Heterogeneous Recursive Planning framework. Provide a prompt describing the story you want to create, and our system will recursively plan and generate a cohesive narrative.',
    promptLabel: 'Story Prompt',
    promptPlaceholder: 'Describe the story you want to generate...',
    modelLabel: 'Model',
    modelPlaceholder: 'Enter or select a model',
    modelHelperText: 'Enter any model name or select from suggestions',
    languageOutputLabel: 'Output Language',
    languageOutputHelperText: 'Select the language in which the story will be generated',
    outputEnglish: 'English Output',
    outputChinese: 'Chinese Output',
    apiKeySettings: 'API Settings',
    apiKeyInfo: 'Your API keys are stored locally in your browser and are never sent to our servers',
    openaiApiKey: 'OpenAI API Key',
    openaiHelperText: 'Required for GPT models',
    claudeApiKey: 'Anthropic API Key',
    claudeHelperText: 'Required for Claude models',
    apiKeyPrivacyNote: 'Your API keys are stored securely in your browser\'s local storage and are never sent to our servers. They are only used to make direct API calls to the respective services from your browser.',
    generateStory: 'Generate Story',
    noPromptError: 'Please provide a prompt for story generation.',
    noOpenAIKeyError: 'Please provide your OpenAI API key in the settings section.',
    noClaudeKeyError: 'Please provide your Anthropic Claude API key in the settings section.',
    connectionError: 'Cannot connect to the backend server. Please make sure it is running at http://localhost:5002.',
    initiatingGeneration: 'Initiating story generation...',
    generationSuccess: 'Story generation started successfully!',
    examplePromptsTitle: 'Example Prompts',
    examplePromptsSubtitle: 'Click on any example to use it as your prompt:',
    tipsTitle: 'Tips for Effective Story Prompts',
    beSpecificTitle: 'Be Specific',
    beSpecificDescription: 'Provide specific details about the characters, setting, and plot elements you want in your story.',
    defineParametersTitle: 'Define Parameters',
    defineParametersDescription: 'Specify the perspective (first-person, third-person), tone (humorous, serious), and length of the story you want.',
    allowCreativityTitle: 'Allow Creativity',
    allowCreativityDescription: 'While providing guidance, leave room for the system to develop creative elements that enhance your story.',
    examplePrompt1: 'Write a story about a day where the sun doesn\'t rise. Tell the story from the third person perspective. Include a story about a girl who is playing outside when the sun vanishes.',
    examplePrompt2: 'Write a science fiction story about the first human colony on Mars facing an unexpected discovery beneath the planet\'s surface.',
    examplePrompt3: 'Write a mystery story set in a small coastal town where strange phenomena occur every full moon. The protagonist is a skeptical journalist investigating the events.',
    errors: {
      emptyPrompt: 'Please provide a prompt for story generation.',
      missingOpenAIKey: 'Please provide your OpenAI API key in the settings section.',
      missingClaudeKey: 'Please provide your Anthropic Claude API key in the settings section.',
      backendConnection: 'Cannot connect to the backend server. Please make sure it is running at http://localhost:5002.',
      generationError: 'Error starting story generation: ',
      unknown: 'Unknown error',
      noTaskId: 'No task ID returned from the server'
    },
    status: {
      initiating: 'Initiating story generation...',
      started: 'Story generation started successfully!'
    }
  },
  reportGeneration: {
    title: 'Report Generation',
    description: 'Generate comprehensive reports on any topic using our Heterogeneous Recursive Planning framework with search capabilities. Our system will research, plan, and create a well-structured report based on your requirements.',
    promptLabel: 'Report Topic',
    promptPlaceholder: 'Describe the report you want to generate...',
    modelLabel: 'Model',
    modelPlaceholder: 'Enter or select a model',
    modelHelperText: 'Enter any model name or select from suggestions',
    enableSearchLabel: 'Enable Search',
    enableSearchDescription: 'Allow the system to search the web for up-to-date information',
    searchEngineLabel: 'Search Engine',
    languageOutputLabel: 'Output Language',
    languageOutputHelperText: 'Select the language in which the report will be generated',
    serpapiKeyLabel: 'SerpAPI Key',
    serpapiHelperText: 'Required for web search functionality',
    generateReport: 'Generate Report',
    examplePromptsTitle: 'Example Topics',
    examplePromptsSubtitle: 'Click on any example to use it as your prompt:',
    tipsTitle: 'Tips for Effective Report Prompts',
    defineScopeTitle: 'Define Scope',
    defineScopeDescription: 'Clearly specify the scope and focus of your report to ensure the content addresses your specific needs.',
    indicateStructureTitle: 'Indicate Structure',
    indicateStructureDescription: 'If you have specific requirements for the structure or sections of the report, mention them in your prompt.',
    specifyDepthTitle: 'Specify Depth',
    specifyDepthDescription: 'Indicate whether you need a general overview or an in-depth analysis with detailed technical information and citations.',
    examplePrompt1: 'What is the commercial value of a long-article writing AI Agent? Write a detailed analysis report.',
    examplePrompt2: 'Write a comprehensive report on the impact of artificial intelligence on healthcare, focusing on diagnosis, treatment planning, and patient outcomes.',
    examplePrompt3: 'Prepare a detailed report on sustainable energy solutions for developing countries, including their economic viability and environmental impact.',
    errors: {
      emptyPrompt: 'Please provide a prompt for report generation.',
      missingOpenAIKey: 'Please provide your OpenAI API key in the settings section.',
      missingClaudeKey: 'Please provide your Anthropic Claude API key in the settings section.',
      missingSerpapiKey: 'Please provide your SerpAPI key in the settings section to enable search functionality.',
      backendConnection: 'Cannot connect to the backend server. Please make sure it is running at http://localhost:5002.',
      generationError: 'Error starting report generation: ',
      unknown: 'Unknown error',
      noTaskId: 'No task ID returned from the server'
    },
    status: {
      initiating: 'Initiating report generation...',
      started: 'Report generation started successfully!'
    },
    searchEngines: {
      google: 'Google',
      bing: 'Bing'
    }
  },
  results: {
    title: 'Generation Results',
    promptLabel: 'Original Prompt:',
    modelUsed: 'Model Used:',
    languageUsed: 'Language Used:',
    generationTime: 'Generation Time:',
    statusLabel: 'Status:',
    statusGenerating: 'Generating...',
    statusCompleted: 'Completed',
    statusError: 'Error',
    copyToClipboard: 'Copy to Clipboard',
    copySuccess: 'Copied to clipboard!',
    taskGraphTitle: 'Task Graph',
    resultTitle: 'Result',
    downloadAsText: 'Download as Text',
    downloadAsMarkdown: 'Download as Markdown',
    returnToGenerator: 'Create Another'
  },
  history: {
    title: 'Generation History',
    empty: 'No generation history found.',
    recentGenerations: 'Recent Generations',
    loadMore: 'Load More',
    storyType: 'Story',
    reportType: 'Report',
    deleteConfirm: 'Are you sure you want to delete this generation?',
    deleted: 'Generation deleted successfully'
  }
}; 