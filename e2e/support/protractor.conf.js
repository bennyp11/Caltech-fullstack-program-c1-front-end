exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    capabilities: {
      browserName: 'chrome'
    },
  
    specs: [
      '../features/*.feature'
    ],
  
    cucumberOpts: {
      require: [
        './step_definitions/**/*.ts'
      ],
      tags: [],
      strict: true,
      'no-colors': false,
      format: ['json:./reports/json/results.json']
    },

    seleniumConfig: {
        seleniumArgs: ['-Dwebdriver.gecko.driver=./node_modules/geckodriver/geckodriver'],
        jvmArgs: ['-Dwebdriver.gecko.driver=./node_modules/geckodriver/geckodriver'],
        updateConfig: {
          // specify the location of the update-config.json file here
          'standalone': {
            version: '3.141.59',
            baseURL: 'https://selenium-release.storage.googleapis.com'
          }
        }
      },
  
    onPrepare: function () {
      browser.ignoreSynchronization = true;
    }
  };