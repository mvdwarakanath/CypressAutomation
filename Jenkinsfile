pipeline {
   agent any
   tools {nodejs "nodejs22"}
   stages {
       stage('Dependencies') {
           steps {
                sh 'npm i'
           }
       }
       stage('e2e Tests') {
           steps {
               sh 'npm run test:chrome'
           }
       }
       stage('e2e Tests 2') {
           steps {
               sh 'npm run test:edge'
           }
       }
   }
   post {
        always {
            //Publish the HTML report using the HTML Publisher plugin
            echo 'Publishing the Extent Report'
            publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'cypress/results/cypress-mochawesome-reporter',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Mochawesome Report',
                    reportTitles: 'Cypress Test Automation Framework',
                    useWrapperFileDirectly: true
            ])
            
            //To avoid duplicate results, we comment this, and use it within script only
            //junit 'cypress/results/junit/combined-report.xml'

            script {
                // Get the JUnit test results
                echo 'Publishing JUnit XML Results'
                def testResults = junit testResults: 'cypress/results/junit/combined-report.xml'
            }
        }
        
        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }

        unstable {
            echo 'Build unstable'
        }
    }
}