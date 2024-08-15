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
}